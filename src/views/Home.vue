<template>
    <div class="map-container">
        <GoogleMap :api-key="gMapApiKey" :map-config="gMapConfig" />
        <b-card id="plan-container" header-bg-variant="dark" header-text-variant="white" header="Let's Plan Your Haul..." header-tag="h1">
            <div class="container-fluid">
                <div class="form-row">
                    <input type="text" class="form-control" placeholder="Where is your load?" />
                </div>
            </div>
        </b-card>
    </div>
</template>

<script>
import GoogleMap from '@/components/google-maps/GoogleMap'

const mapsApiKey = process.env.VUE_APP_MAPS_API_KEY;

export default {
    name: "Home",
    components: {
        GoogleMap
    },
    data() {
        return {
            gMapApiKey: mapsApiKey,
            gMapConfig: {
                center: { lat: 39.7392, lng: -104.9903 }, // Denver, CO centers the map vertically and right aligns it in the screen
                zoom: 5,
                disableDefaultUI: true,
                zoomControl: true
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    .map-container {
        position: relative;
        flex: 1 1;
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
