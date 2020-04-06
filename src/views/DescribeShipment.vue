<template>
    <div class="container-fluid m-3">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <header class="h1">Tell Us About Your Shipment...</header>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <b-tabs v-model="activeTabIdx">
                    <b-tab active>
                        <template v-slot:title>
                            <span style="font-size: 1.5rem">Item Type</span>
                        </template>
                        <div class="container-fluid item-types">
                            <div class="row mt-2">
                                <button @click="selectItemType($event, 'furniture')" class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Furniture</figcaption>
                                        <img src="images/furniture.png" />
                                    </figure>
                                </button>
                                <button @click="selectItemType($event, 'appliances')" class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Appliances</figcaption>
                                        <img src="images/washing_machine.png" />
                                    </figure>
                                </button>
                                <button @click="selectItemType($event, 'electronics')" class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Electronics</figcaption>
                                        <img src="images/home_theater.png" />
                                    </figure>
                                </button>
                                <button @click="selectItemType($event, 'lawn_atvs')" class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Lawn Equipment &amp; ATVs</figcaption>
                                        <img src="images/lawn_tractor.png" />
                                    </figure>
                                </button>
                            </div>
                            <div class="row mt-2">
                                <button @click="selectItemType($event, 'exercise')" class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Exercise Equipment</figcaption>
                                        <img src="images/elliptical.png" />
                                    </figure>
                                </button>
                                <button @click="selectItemType($event, 'fragiles_decoratives')" class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Fragiles &amp; Decoratives</figcaption>
                                        <img src="images/frame.png" />
                                    </figure>
                                </button>
                                <button @click="selectItemType($event, 'safes')" class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Safes</figcaption>
                                        <img src="images/safe.png" style="max-height: 250px;" />
                                    </figure>
                                </button>
                                <button @click="selectItemType($event, 'other')" class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Other</figcaption>
                                        <img src="images/building_materials.png" />
                                    </figure>
                                </button>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab :disabled="!itemType">
                        <template v-slot:title>
                            <span style="font-size: 1.5rem">Dimensions</span>
                        </template>
                    </b-tab>
                    <b-tab :disabled="!dimensions">
                        <template v-slot:title>
                            <span style="font-size: 1.5rem">Services</span>
                        </template>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    data() {
        return {
            activeTabIdx: 0,
            itemType: null,
            dimensions: null,
            services: null
        }
    },
    methods: {
        selectItemType(event, type) {
            document.querySelectorAll('.item-types button').forEach(n => n.classList.remove('selected'));
            event.target.closest('button').classList.add('selected');
            console.log(event);
            this.itemType = type;
            Vue.nextTick(() => this.activeTabIdx = 1);
        }
    }
}
</script>

<style lang="scss" scoped>
.item-types {
    padding-top: 24px;
    padding-left: 24px;
    padding-right: 24px;

    .btn {
        position: relative;
        z-index: 1;

        &.selected {
            border: 1px solid green;

            &::before {
                position: absolute;
                display: block;
                top: -24px;
                left: -24px;
                border-radius: 50%;
                color: green;
                background-color: white;
                font-size: 48px;
                z-index: 10000;
                content: 'check_circle';

                /*
                * copied from material-icons.css
                */
                font-family: 'Material Icons';
                font-weight: normal;
                font-style: normal;
                display: inline-block;
                line-height: 1;
                text-transform: none;
                letter-spacing: normal;
                word-wrap: normal;
                white-space: nowrap;
                direction: ltr;

                /* Support for all WebKit browsers. */
                -webkit-font-smoothing: antialiased;
                /* Support for Safari and Chrome. */
                text-rendering: optimizeLegibility;

                /* Support for Firefox. */
                -moz-osx-font-smoothing: grayscale;

                /* Support for IE. */
                font-feature-settings: 'liga';
            }
        }

        img {
            align-self: center;
            object-fit: contain;
            width: 100%;
            max-height: 200px;
        }
    }
}
</style>