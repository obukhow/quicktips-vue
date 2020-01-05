<template>
    <div class="post" v-if="currentPost">
        <h1>{{currentPost.title}}</h1>
        <div class="text" v-html="currentPost.text"></div>
    </div>
</template>

<script>
    import hljs from 'highlight.js/lib/highlight';
    import php from 'highlight.js/lib/languages/php';
    import sql from 'highlight.js/lib/languages/sql';
    import perl from 'highlight.js/lib/languages/perl';
    import shell from 'highlight.js/lib/languages/shell';
    import bash from 'highlight.js/lib/languages/bash';
    import {mapState} from "vuex"

    hljs.registerLanguage('php', php);
    hljs.registerLanguage('sql', sql);
    hljs.registerLanguage('perl', perl);
    hljs.registerLanguage('shell', shell);
    hljs.registerLanguage('bash', bash);
    export default {
        computed: mapState([
            "currentPost"
        ]),
        beforeMount: function () {
            this.$nextTick(function () {
                if (this.$el.nodeName != '#comment') {
                    this.$el.querySelectorAll('pre code').forEach((block) => {
                        hljs.highlightBlock(block);
                    });
                }
            })
        }
    }
</script>

<style lang="less">
    .post {
        padding: 20px 20px 20px 40px;

        .text, code {
            margin-top: 30px;
            word-break: break-word;
            word-wrap: break-word;
        }
    }

    code {
        word-break: break-word;
        word-wrap: break-word;
        white-space: pre-wrap;
        display: block;
        overflow-x: auto;
        padding: 1em;
        background-color: #0e1c2f;
        font-size: 90%;
        border-radius: 6px;
    }
    code.hljs {
        background-color: #0e1c2f!important;
        padding: 1em!important;
    }
</style>
