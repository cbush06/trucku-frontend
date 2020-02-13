<template>
    <div class="map" :id="'map-' + _uid"></div>
</template>

<script>
import { Loader } from '@googlemaps/loader'

export default {
    props: {
        mapConfig: {
            type: Object,
            default: {}
        },
        apiKey: String //AIzaSyD5cw8n3PtAiERjS2D6U2E4VqeGsm865Js
    },
    data() {
        return {
            googleMapApi: null,
            map: null
        };
    },
    async mounted() {
        this.googleMapApi = await (new Loader({
            apiKey: this.apiKey
        }));
        this.googleMapApi
            .load()
            .then(() => {
                new google.maps.Map(document.getElementById('map-' + this._uid), this.mapConfig);
            })
            .catch(e => {
                console.log(e);
            });
    }
}
</script>

<style lang="scss">
    .map {
        width: 100%;
        height: 100%;
    }
</style>