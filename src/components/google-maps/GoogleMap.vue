<template>
    <div class="map"></div>
</template>

<script>
import componentHelper from '@/components/component-helper'

export default {
    name: 'google-map',
    props: {
        mapConfig: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            map: null
        };
    },
    mounted() {
        try {
            const parent = componentHelper.findParentByName(this, 'google-map-container');
            const containerId = parent.registerMap(this);
            this.map = new google.maps.Map(document.getElementById(containerId), this.mapConfig);
        } catch(e) {
            console.log(e);
            return;
        }
    }
}
</script>

<style lang="scss">
    .map {
        width: 100%;
        height: 100%;
    }
</style>