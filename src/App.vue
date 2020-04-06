<template>
    <div id="app">
        <b-navbar id="navbar-main" toggleable="sm" sticky variant="dark" type="dark" class="bg-primary">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-navbar-brand href="#">TruckU</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Home</b-nav-item>
                    <b-nav-item href="#">Ship</b-nav-item>
                    <b-nav-item href="#">Haul</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view />
    </div>
</template>

<style lang="scss" scoped>
    #app {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    #navbar-main {
        flex-grow: 0;
        flex-shrink: 0;
    }
</style>