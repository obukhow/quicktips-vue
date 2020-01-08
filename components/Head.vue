<template>
    <div id="head">
        <div class="hamburger" v-bind:class="menuState" v-on:click="clickOnMenu()">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
            <span class="bar bar4"></span>
        </div>
        <div id="logo">
            <span class="tag">obukhow's</span>
            <span class="name">quicktips</span>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        computed: mapState([
            "menuState"
        ]),
        methods: {
            clickOnMenu: function () {
                if (typeof (this.$store.state.menuState) == "undefined" || this.$store.state.menuState == false) {
                    this.$store.commit('setMenuState', 'menu');
                    return;
                }
                if (this.$store.state.menuState == 'menu') {
                    this.$store.commit('setMenuState', false);
                    return;
                }
                if (this.$store.state.menuState == 'post') {
                    this.$store.commit('setMenuState', false);
                    this.$store.commit('setCurrentPost', false);
                    return;
                }
                console.log(this.$store.state.menuState);
            }
        }
    }
</script>

<style lang="less">

    #head {
        width: 100%;
        height: 60px;
        padding: 10px 20px;
        position: fixed;
        z-index: 12;
        width: 240px;
    }

    .hamburger {
        margin: 0 10px 0 0;
        width: 30px;
        height: 30px;
        position: relative;
        float: left;
        cursor: pointer;
        display: none;

        .bar {
            padding: 0;
            width: 30px;
            height: 3px;
            background-color: #2c7be5;
            display: block;
            border-radius: 3px;
            transition: all 0.4s ease-in-out;
            position: absolute;
        }

        .bar1 {
            top: 6px;
        }

        .bar2,
        .bar3 {
            top: 15px;
        }

        .bar3 {
            right: 0;
        }

        .bar4 {
            bottom: 3px;
        }
    }

    /* HAMBURGER 1 */
    .hamburger.menu {
        .bar1{
            transform: rotate(45deg);
            transform-origin: 5%;
            width: 41px;
            top: 1px;
        }
         .bar2 {
            transform: translateX(-40px);
            background-color: transparent;
        }
         .bar3 {
            transform: translateX(40px);
            background-color: transparent;
        }
         .bar4 {
            transform-origin: 5%;
            transform: rotate(-45deg);
            width: 41px;
             bottom: 0px;
        }
    }


    /* HAMBURGER as back button */
    .hamburger.post {

        .bar1 {
            transform: rotate(-40deg);
            transform-origin: 5%;
            top: 16px;
            left: 0px;
            width: 30px
        }

        .bar2, .bar3 {
            transform: translateX(-40px);
            background-color: transparent;
        }
        .bar4 {
            transform-origin: 5%;
            transform: rotate(40deg);
            width: 30px;
            bottom: 21px;
            left: 0px;
        }
    }

    #logo {
        color: #2c7be5;
        font-weight: bold;
        position: relative;
        line-height: 1em;
        float: left;

        .tag {
            position: absolute;
            left: 3px;
            top: -2px;
            font-size: 12px;
        }

        .name {
            position: absolute;
            left: 0;
            top: 0;
            font-size: 34px;
            line-height: 34px;
        }
    }

    @media screen and (max-width: 1024px) {
        #head {
            background-color: #061325;
        }

        .hamburger {
            display: block;
        }
    }
</style>
