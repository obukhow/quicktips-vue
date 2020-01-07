<template>
    <ul v-if="filteredPosts.length > 0">
        <li v-for="post in filteredPosts" :key="post.id">
            <n-link v-bind:to="'/all/' + post.url ">
                <span class="title">{{post.title}}</span>
                <span class="date">{{post.published_at}}</span>
                <span class="tag icon-book" v-html="tag(post)" v-if="tag(post)"></span>
            </n-link>
        </li>
    </ul>
    <div v-else>
        <h2>Cannot find matching posts.</h2>
    </div>
</template>

<script>
    import {mapState} from "vuex"


    function tag(post) {
        const tags = post.tags.find(tag => tag.featured == 1);
        if (typeof(tags) !== "undefined") {
            return tags.name;
        }
        return false;
    }

    export default {
        computed: mapState([
            "filteredPosts"
        ]),
        methods: {
            tag: function (post) {
                return tag(post);
            }
        }
    }
</script>

<style scoped lang="less">
    ul {
        list-style-type: none;
        padding: 0;
        background: #0e1c2f;
        border-radius: 6px;
        width: calc(100% - 10px);

        li {
            border-bottom: 1px solid #061325;

            a {
                display: block;
                padding: 15px;
                color: #d8e2ef;

                .title {
                    display: block;
                    font-weight: bold;
                }

                .date, .tag {
                    color: #748194;
                    font-size: 70%;
                }
            }

            a:hover {
                text-decoration: none;

                .title {
                    text-decoration: underline;
                }
            }
        }
    }

</style>
