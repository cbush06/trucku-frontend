<template>
    <div class="container-fluid mt-3">
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
                                <label class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Furniture</figcaption>
                                        <img src="images/furniture.png" />
                                    </figure>
                                    <input type="radio" name="item-type" value="furniture" v-model="itemType" @change="selectItemType" />
                                </label>
                                <label class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Appliances</figcaption>
                                        <img src="images/washing_machine.png" />
                                    </figure>
                                    <input type="radio" name="item-type" value="appliances" v-model="itemType" @change="selectItemType" />
                                </label>
                                <label class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Electronics</figcaption>
                                        <img src="images/home_theater.png" />
                                    </figure>
                                    <input type="radio" name="item-type" value="electronics" v-model="itemType" @change="selectItemType" />
                                </label>
                                <label class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Lawn Equipment &amp; ATVs</figcaption>
                                        <img src="images/lawn_tractor.png" />
                                    </figure>
                                    <input type="radio" name="item-type" value="lawn_atvs" v-model="itemType" @change="selectItemType" />
                                </label>
                            </div>
                            <div class="row mt-2">
                                <label class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Exercise Equipment</figcaption>
                                        <img src="images/elliptical.png" />
                                    </figure>
                                    <input type="radio" name="item-type" value="exercise" v-model="itemType" @change="selectItemType" />
                                </label>
                                <label class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Fragiles &amp; Decoratives</figcaption>
                                        <img src="images/frame.png" />
                                    </figure>
                                    <input type="radio" name="item-type" value="fragiles_decoratives" v-model="itemType" @change="selectItemType" />
                                </label>
                                <label class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Safes</figcaption>
                                        <img src="images/safe.png" style="max-height: 250px;" />
                                    </figure>
                                    <input type="radio" name="item-type" value="safes" v-model="itemType" @change="selectItemType" />
                                </label>
                                <label class="col-md-3 btn btn-light">
                                    <figure class="d-flex flex-column">
                                        <figcaption class="align-self-center">Other</figcaption>
                                        <img src="images/building_materials.png" />
                                    </figure>
                                    <input type="radio" name="item-type" value="other" v-model="itemType" @change="selectItemType" />
                                </label>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab :disabled="!itemType">
                        <template v-slot:title>
                            <span style="font-size: 1.5rem">Dimensions</span>
                        </template>
                        <div class="container-fluid dimensions">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="container-fluid">
                                        <div class="row overlay-host" v-for="(itemDim, i) in dimensions" :key="itemDim.id">
                                            <div class="overlay confirm-delete d-flex flex-row align-items-center">
                                                <div class="flex-grow-1 text-center">
                                                    <h3>Delete this item?</h3>
                                                    <button class="btn btn-danger" @click="removeItem(itemDim)">Yes</button>
                                                    <button class="btn btn-link" @click="toggleDeleteOverlay">No</button>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="row mt-2">
                                                    <div class="col">
                                                        <h3>Item #{{i+1}}</h3>
                                                    </div>
                                                    <div class="col text-right" v-if="!isFirst(itemDim) || dimensions.length > 1">
                                                        <button @click="toggleDeleteOverlay" class="btn btn-sm btn-outline-danger"><i class="material-icons" style="font-size: 1.5em; vertical-align: middle;">close</i> Delete</button>
                                                    </div>
                                                </div>
                                                <div class="form-group mt-2">
                                                    <label :for="`description${itemDim.id}`">Description</label>
                                                    <input :id="`description${itemDim.id}`" v-model="itemDim.description" type="text" class="form-control" />
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label :for="`width${itemDim.id}`">Width</label>
                                                            <input :id="`width${itemDim.id}`" v-model="itemDim.width" type="number" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label :for="`height${itemDim.id}`">Height</label>
                                                            <input :id="`height${itemDim.id}`" v-model="itemDim.height" type="number" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label :for="`depth${itemDim.id}`">Depth</label>
                                                            <input :id="`depth${itemDim.id}`" v-model="itemDim.depth" type="number" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label :for="`unitOfMeasure${itemDim.id}`">Unit of Measure</label>
                                                            <select :id="`unitOfMeasure${itemDim.id}`" v-model="itemDim.unitOfMeasure" class="form-control">
                                                                <option>in</option>
                                                                <option>ft</option>
                                                                <option>cm</option>
                                                                <option>m</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label :for="`weight${itemDim.id}`">Weight</label>
                                                            <input :id="`weight${itemDim.id}`" v-model="itemDim.weight" type="number" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">   
                                                        <div class="form-group">
                                                            <label :for="`unitOfWeight${itemDim.id}`">Unit of Weight</label>
                                                            <select :id="`unitOfWeight${itemDim.id}`" v-model="itemDim.unitOfWeight" class="form-control">
                                                                <option>lb</option>
                                                                <option>kg</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label :for="`quantity${itemDim.id}`">Quantity</label>
                                                            <input :id="`quantity${itemDim.id}`" v-model="itemDim.quantity" type="number" class="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row horizontal-rule border-primary" v-if="!isLast(itemDim)"></div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col horizontal-rule border-primary"></div>
                                            <div class="col flex-grow-0">
                                                <button @click="addItem" class="btn circle material-icons btn-outline-primary">add</button>
                                            </div>
                                            <div class="col horizontal-rule border-primary"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <figure class="d-flex flex-column align-items-center">
                                        <img src="images/dimensions.png" style="max-width: 250px;" />
                                        <figcaption class="align-self-center">Measuring Your Item</figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
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
            itemsId: 0,
            dimensions: [
                {
                    id: 0,
                    description: '',
                    width: null,
                    height: null,
                    depth: null,
                    unitOfMeasure: null,
                    weight: null,
                    unitOfWeight: null,
                    quantity: null
                }
            ],
            services: null
        }
    },
    methods: {
        selectItemType(event) {
            document.querySelectorAll('.item-types label').forEach(n => n.classList.remove('selected'));
            event.target.closest('label').classList.add('selected');
            Vue.nextTick(() => this.activeTabIdx = 1);
        },
        addItem(event) {
            this.dimensions.push({
                id: ++this.itemsId,
                description: '',
                width: null,
                height: null,
                depth: null,
                unitOfMeasure: null,
                weight: null,
                unitOfWeight: null,
                quantity: null
            })
        },
        removeItem(item) {
            const idx = this.dimensions.indexOf(item);
            this.dimensions.splice(idx, 1);
        },
        isFirst(item) {
            return this.dimensions.indexOf(item) == 0;
        },
        isLast(item) {
            return this.dimensions.indexOf(item) == (this.dimensions.length - 1);
        },
        toggleDeleteOverlay(event) {
            event.target.closest('.overlay-host').classList.toggle('delete');
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";
.item-types {
    padding-top: 24px;
    padding-left: 24px;
    padding-right: 24px;

    label {
        position: relative;
        z-index: 1;

        figure {
            cursor: pointer;
            img {
                align-self: center;
                object-fit: contain;
                width: 100%;
                max-height: 200px;
            }
        }

        input[type=radio] {
            width: 0px;
            height: 0px;
            opacity: 0;
            position: absolute;
        }

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
    }
}

.dimensions {
    .input-group {
        div {
            display: inline-block;
            overflow: visible;
        }
    }
}

.overlay-host {
    .overlay {
        display: none !important;
        &.confirm-delete {
            background-color: rgba($red, 0.7);
        }
    }
    &.delete .overlay {
        display: flex !important;
    }
}
</style>