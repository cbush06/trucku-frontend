<template>
    <div class="map-container">
        <GoogleMap :api-key="gMapApiKey" :map-config="gMapConfig" />
        <b-card id="plan-container" bg-variant="dark" text-variant="white" title="Let's Plan Your Trip...">
        </b-card>
    </div>
</template>

<script>
import GoogleMap from '@/components/google-maps/GoogleMap'
export default {
    name: "Home",
    components: {
        GoogleMap
    },
    data() {
        return {
            gMapApiKey: 'AIzaSyD5cw8n3PtAiERjS2D6U2E4VqeGsm865Js',
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
        top: 5%;
        left: 10%;
        min-width: 20%;
        height: 90%;
    }
</style>
