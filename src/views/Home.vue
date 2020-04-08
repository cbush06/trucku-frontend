<template>
    <google-map-container class="map-container" map-class="map">
        <google-map ref="gMap" :map-config="gMapConfig" />

        <b-card id="plan-container" :class="{ minimized: origin != null && destination != null }" header-bg-variant="dark" header-text-variant="white" header="Let's Plan Your Haul..." header-tag="h1">
            <div class="d-flex flex-column h-100">
                <div class="place-container">
                    <template v-if="origin == null">
                        <google-place-suggest ref="originTypeahead" placeholder="Where is your load?" @selected="originSelected" />
                    </template>
                    <template v-else>
                        <strong>Start</strong><br/>
                        <button class="btn btn-link place" @click="clearOrigin">
                            {{ origin.formatted_address }}
                        </button>
                    </template>
                </div>
                <div class="flex-grow-1 dotted-border" v-if="origin != null || destination != null"></div>
                <div class="place-container" v-if="origin != null || destination != null">
                    <template v-if="destination == null">
                        <google-place-suggest ref="destinationTypeahead" placeholder="Where do you want it?" @selected="destinationSelected" />
                    </template>
                    <template v-else>
                        <strong>Finish</strong><br/>
                        <button class="btn btn-link place" @click="clearDestination">
                            {{ destination.formatted_address }}
                        </button>
                    </template>
                </div>
            </div>

            <template v-slot:footer>
                <button class="btn btn-primary btn-block" @click="$router.push({ name: 'describe-shipment' })">
                    <big>Let's go!</big>
                </button>
            </template>
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
            },
            origin: null,
            originMarker: null,
            destination: null,
            destinationMarker: null
        }
    },
    methods: {
        originSelected(value) {
            this.origin = value;
            this.$refs.gMap.clearRoute();
            this.originMarker = this.$refs.gMap.setMarkerAtPlace(value);

            if(this.destination != null) {
                this.$refs.gMap.addRouteBetween(this.origin, this.destination);
            } else {
                this.$refs.gMap.zoomToPlace(value, 10);
            }
        },
        destinationSelected(value) {
            this.destination = value;
            this.$refs.gMap.clearRoute();
            this.destinationMarker = this.$refs.gMap.setMarkerAtPlace(value);

            if(this.origin != null) {
                this.$refs.gMap.addRouteBetween(this.origin, this.destination);
            } else {
                this.$refs.gMap.zoomToPlace(value, 10);
            }
        },
        clearOrigin() {
            this.origin = null;
            this.$refs.gMap.clearRoute();
            this.$refs.gMap.removeMarker(this.originMarker);
            this.$nextTick(() => this.$refs.originTypeahead.focus());
        },
        clearDestination() {
            this.destination = null;
            this.$refs.gMap.clearRoute();
            this.$refs.gMap.removeMarker(this.destinationMarker);
            this.$nextTick(() => this.$refs.destinationTypeahead.focus());
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
        top: 10%;
        left: 10%;
        width: 20%;
        height: 80%;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);

        .card-footer {
            padding: 0;
            display: none;
        }

        &.minimized {
            height: auto;

            .card-header {
                display: none;
            }

            .card-footer {
                display: block;
            }
        }

        .place-container {
            &:first-of-type {
                margin-bottom: 8px;
            }
            &:last-of-type {
                margin-top: 8px;
            }
            .btn.place {
                color: unset;
                font-size: 18px;
                padding: 8px 0px 0px 0px;

                &:hover, &:focus {
                    font-weight: 800;
                    text-decoration: none;
                }
            }
        }

        .dotted-border {
            border-left: 4px dotted black;
        }
    }
</style>
