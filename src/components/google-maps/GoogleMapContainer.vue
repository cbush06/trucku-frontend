<template>
    <div>
        <div :id="mapContainerId" :class="mapClass"></div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'google-map-container',
    props: {
        mapClass: String
    },
    data() {
        return {
            map: null,
            mapContainerId: null,
            placeSuggest: null
        }
    },
    created() {
        this.mapContainerId = `map-container-${this._uid}`;
    },
    methods: {
        registerMap(map) {
            if(this.map) {
                throw 'Map has already been registered';
            }
            this.map = map;
            return this.mapContainerId;
        },
        registerPlaceSuggest(placeSuggest) {
            return new Promise(
                async (resolve, reject) => {
                    if(this.placeSuggest) {
                        reject('MapSuggest component already registered');
                    }
                    
                    let tries = 0;
                    while(!this.map && ++tries < 5) {
                        await new Promise(r => setTimeout(r, 500));
                    }

                    if(!this.map) {
                        reject('Faild to register PlaceSuggest component due to timeout waiting for GoogleMap component');
                    }

                    this.placeSuggest = placeSuggest;
                    resolve(this.map.map);
                }
            );
        }
    }
};
</script>

<style>

</style>