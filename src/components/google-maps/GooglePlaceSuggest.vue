<template>
    <div class="textbox-icon search-wrapper">
        <vue-bootstrap-typeahead
            ref="typeahead"
            v-model="query"
            :data="places"
            :serializer=" p => p.formatted_address"
            :placeholder="placeholder"
            class="typeahead"
            @hit="selected" />
        <i class="material-icons">location_on</i>
    </div>
</template>

<script>
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import componentHelper from '@/components/component-helper'

export default {
    name: 'google-place-suggest',
    props: {
        placeholder: {
            type: String,
            default: 'Location...'
        }
    },
    components: {
        VueBootstrapTypeahead
    },
    data() {
        return {
            query: null,
            places: [],
            placesSvc: null
        }
    },
    async mounted() {
        let parent;
        let map;

        try {
            parent = componentHelper.findParentByName(this, 'google-map-container');
            map = await parent.registerPlaceSuggest(this);
        } catch(e) {
            console.log(e);
            return;
        }

        this.placesSvc = new google.maps.places.PlacesService(map);
    },
    methods: {
        focus() {
            this.$refs.typeahead.$refs.input.focus();
        },
        selected(value) {
            this.$emit('selected', value);
        }
    },
    watch: {
        query: _.debounce(function(newVal){ this.placesSvc.textSearch({ query: newVal }, (results, status, pagination) => {
            if(status == google.maps.places.PlacesServiceStatus.OK) {
                this.places = results;
            }
        }) }, 250)
    }
}
</script>

<style lang="scss" scoped>
    .typeahead, .search-wrapper {
        width: 100%;
    }
</style>