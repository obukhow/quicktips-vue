import axios from "../plugins/axios";

export const state = () => ({
    tags: []
})
export const mutations = {
    setTags(state, tags) {
        state.tags = tags;
    },
    setAllTags(state, tags) {
        state.allTags = tags;
    },
    setPosts(state, posts) {
        state.posts = posts;
    },
    setBooks(state, books) {
        state.books = books;
    },
    setFilteredPosts(state, posts) {
        state.filteredPosts = posts;
    },
    setCurrentTag(state, tag) {
        state.currentTag = state.allTags.find(tagL => tagL.url == tag);
        state.filteredPosts = state.posts.filter(function (post) {
            let result = false;
            post.tags.forEach(function (postTag) {
                if (postTag.url == tag) {
                    result = true;
                }
            });
            return result;
        });
        state.menuState = 'tag';
    },
    setCurrentPost(state, post) {
        if (post == false) {
            state.currentPost = false;
            return;
        }
        state.currentPost = state.posts.find(postL => postL.url == post);
        state.menuState = 'post';
    },
    setMenuState(state, menuState) {
        state.menuState = menuState;
    }

}
export const actions = {
    async nuxtServerInit({commit}) {
        const response = await axios.get("?t=all")
        const posts = response.data.posts
        const tags = response.data.tags
        commit("setTags", tags.filter(tag => tag.featured == 0))
        commit("setBooks", tags.filter(tag => tag.featured == 1))
        commit("setAllTags", tags)
        commit("setPosts", posts)
        commit("setFilteredPosts", posts)
    }
}
