<template>
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
            map: null,
            directionsSvc: null,
            directionsRenderer: null
        };
    },
    mounted() {
        try {
            const parent = componentHelper.findParentByName(this, 'google-map-container');
            const containerId = parent.registerMap(this);
            this.map = new google.maps.Map(document.getElementById(containerId), this.mapConfig);
            this.directionsSvc = new google.maps.DirectionsService();
            this.directionsRenderer = new google.maps.DirectionsRenderer({ map: this.map });
        } catch(e) {
            console.log(e);
            return;
        }
    },
    methods: {
        setMarkerAtPlace(place) {
            return new google.maps.Marker({
                position: place.geometry.location,
                map: this.map
            });
        },
        removeMarker(marker) {
            marker.setMap(null);
        },
        zoomToPlace(place, zoom) {
            this.map.panTo(place.geometry.location);
            this.map.setZoom(zoom);
        },
        addRouteBetween(place1, place2) {
            this.directionsSvc.route({
                origin: place1.formatted_address,
                destination: place2.formatted_address,
                travelMode: 'DRIVING'
            }, (result, status) => {
                if(status != 'OK') {
                    console.log(`Error encountered while calculating route: ${status}`);
                    return;
                }
                this.directionsRenderer.setDirections(result);
            });
        },
        clearRoute() {
            this.directionsRenderer.setDirections({ routes: [] });
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