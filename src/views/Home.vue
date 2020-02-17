<template>
    <google-map-container class="map-container" map-class="map">
        <google-map :map-config="gMapConfig" />
        <b-card id="plan-container" header-bg-variant="dark" header-text-variant="white" header="Let's Plan Your Haul..." header-tag="h1">
            <div class="container-fluid">
                <div class="form-row mb-2">
                    <google-place-suggest placeholder="Where is your load?" @selected="originSelected" />
                </div>
                <div class="form-row">
                    <google-place-suggest placeholder="Where do you want it?" />
                </div>
            </div>
        </b-card>
    </google-map-container>
</template>

<script>
import GoogleMapContainer from '@/components/google-maps/GoogleMapContainer'
import GoogleMap from '@/components/google-maps/GoogleMap'
import GooglePlaceSuggest from '@/components/google-maps/GooglePlaceSuggest'

export default {
    name: "Home",
    components: {
        'google-map-container': GoogleMapContainer,
        'google-map': GoogleMap,
        'google-place-suggest': GooglePlaceSuggest
    },
    data() {
        return {
            gMapConfig: {
                center: { lat: 39.7392, lng: -104.9903 }, // Denver, CO centers the map vertically and right aligns it in the screen
                zoom: 5,
                disableDefaultUI: true,
                zoomControl: true
            }
        }
    },
    methods: {
        originSelected(value) {
            console.log(value);
        }
    }
};
</script>

<style lang="scss">
    .map-container {
        position: relative;
        flex: 1 1;
    }

    .map {
        height: 100%;
    }
    
    #plan-container {
        position: absolute;
        border: 0px;
        top: 5%;
        left: 10%;
        width: 20%;
        height: 90%;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    }
</style>
