<template>
    <div class="panel" v-bind:class="show ? 'open' : 'close'">
        <div class="label" v-bind:area-expanded="show" v-on:click="show = !show">{{title}}</div>
        <ul>
            <li v-for="item in items" :key="item.id" v-bind:class="(currentTag && currentTag.url == item.url) ? 'active' : ''">
                <n-link v-bind:to="'/tags/' + item.url " >
                    <span v-bind:class="'icon-' + className"></span>
                    {{item.name}}
                </n-link>
                <span class="badge">{{item.count}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from "vuex"

    function isOpened(items, currentTag) {
        if (!currentTag) {
            return false;
        }
        console.log(currentTag);
        items = items.find(item => item.id == currentTag.id);
        return items.length > 0;
    }
    export default {
        props: ['items', 'title', 'className', 'forceShow'],
        computed: mapState([
            "currentTag"
        ]),
        data() {
            return {
                show: this.forceShow || isOpened(this.items, this.currentTaggs)
            }
        }
    }
</script>

<style lang="less">
    .panel {

        padding: 10px 0 10px;
        .label {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 0.8em;
            margin: 10px 0 15px 0;
            color: #1657af;
            position:relative;
            cursor:pointer;
        }
        .label:hover {
            color: #fff;
        }
        .label:after {
            content:'';
            display:block;
            position:absolute;
            right:25px;
            height:.4rem;
            width:.4rem;
            border-right:1px solid #9da9bb;
            border-bottom:1px solid #9da9bb;
            top:50%;
            -webkit-transform:translateY(-50%) rotate(45deg);
            -ms-transform:translateY(-50%) rotate(45deg);
            transform:translateY(-50%) rotate(45deg);
            -webkit-transition:all .2s ease-in-out;
            -o-transition:all .2s ease-in-out;
            transition:all .2s ease-in-out;
            -webkit-transform-origin:center;
            -ms-transform-origin:center;
            transform-origin:center
        }
        .label[area-expanded=true]:after {
            -webkit-transform:translateY(-50%) rotate(225deg);
            -ms-transform:translateY(-50%) rotate(225deg);
            transform:translateY(-50%) rotate(225deg)
        }

        ul {
            list-style-type: none;
            padding: 0 0 0 10px;
            li {
                a, a:visited {
                    color: #9da9bb;
                }
                a:hover {
                    color: #edf2f9;
                }
            }
            li.active {
                a, a:visited {
                    color: #2c7be5;
                }
            }
        }

        .badge {
            color: #78abee;
            background-color: #142f53;
            display: block;
            float: right;
            margin: 5px 20px 0 0;
            padding: .35556em .71111em;
            font-size: 60%;
            font-weight: bold;
            line-height: 1;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: 10rem;
        }
    }
    .panel.close {
        ul {
            display: none;
        }
    }

</style>
