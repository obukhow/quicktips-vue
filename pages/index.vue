<template>
    <section class="content">
        <div class="sidebar" v-bind:class="menuState">
            <FilterList title="Books" v-bind:items="books" class-name="book" v-bind:force-show="true"/>
            <FilterList title="Tags" v-bind:items="tags" class-name="tag" v-bind:force-show="false"/>
        </div>
        <div id="main" v-bind:class="menuState">
            <div id="post-list">
                <PostList/>
                <div class="footer">
                    © Denis Obukhov, 2015—2020
                </div>
            </div>

        </div>
        <div id="post" v-bind:class="menuState">
            <Post/>
        </div>
    </section>
</template>

<script>
    import {mapState} from "vuex"
    import FilterList from "../components/FilterList";
    import PostList from "../components/PostList";
    import Post from "../components/Post";

    export default {
        components: {Post, FilterList, PostList},
        computed: mapState([
            "tags",
            "books",
            "currentTag",
            "currentPost",
            "menuState"
        ]),
        async fetch({store, params}) {
            if (params.hasOwnProperty('tagId')) {
                store.commit('setCurrentTag', params.tagId);
            }
            if (params.hasOwnProperty('postId')) {
                store.commit('setCurrentPost', params.postId);
            }
        },
        head () {
            let title = 'obukhow`s quick tips';
            if (this.currentTag) {
                title = title + ' tag: ' + this.currentTag.name;
            }
            if (this.currentPost) {
                title = this.currentPost.title + ' ' + title;
            }
            return {
                title: title
            }
        }
    }


</script>

<style>
    .content {
        min-height: 100vh;
        width: 100%;
        overflow: hidden;
    }

    .sidebar {
        height: 100%; /* 100% Full-height */
        width: 240px; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 10; /* Stay on top */
        top: 0;
        left: 0;
        overflow-x: hidden;
        padding: 40px 0 0 20px; /* Place content 60px from the top */
        transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
    }

    #main {
        transition: margin-left .5s; /* If you want a transition effect */
        padding: 20px;
        margin-left: 240px;
        position: relative;
    }

    #post-list {
        width: 320px;
        position: absolute;
        left: 0px;
        top: 10px;
    }
    #post {
        height: 100%;
        position: fixed;
        z-index: 5;
        top: 0px;
        right: 0px;
        overflow-y: scroll;
        width: calc(100% - 320px - 240px);
        background-color: #061325;
    }
    .footer {
        margin-top: 10px;
        font-size: 70%;
    }

    @media screen and (max-width: 1024px) {
        .sidebar {
            padding-top: 15px;
            width: 0px;
            display: none;
        }

        #main {
            padding-top: 60px ;
            margin-left: 10px;
        }

        #post {
            width: calc(100% - 320px);
        }
    }
    @media screen and (max-width: 600px) {
        .sidebar.menu {
            padding-top: 60px;
            display: block;
            width: 240px;
        }
        #main {
            width: 100%;
        }
        #post {
            width: 100%;
            display: none;
        }
        #post.post {
            display: block;
            padding-top: 60px;
        }
        #main.menu {
            padding-top: 60px ;
            margin-left: 240px;
        }
        #post-list {
            width: calc(100% - 20px);
        }
        .post {
            padding: 20px;
        }

    }
</style>

