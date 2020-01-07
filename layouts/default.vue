<template>
    <section>
        <div id="head">
            <span class="menu-toggle"></span>
            <div id="logo">
                <span class="tag">obukhow's</span>
                <span class="name">quicktips</span>
            </div>
        </div>
        <nuxt/>
    </section>
</template>

<style lang="less">
    html {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    body {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #9da9bb;
        text-align: left;
        background-color: #061325;
    }

    a, a:visited {
        color: #2c7be5;
        text-decoration: none;
        background-color: transparent;
    }

    a:hover {
        color: #1657af;
        text-decoration: underline;
    }

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
    }
    .menu-toggle {
        display:block;
        width:1.5em;
        height:1.5em;
        vertical-align:middle;
        content:"";
        margin: 2px 10px 0 0;
        background:no-repeat center center;
        background-size:100% 100%;
        float: left;
        background-image:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.55)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M0 6h30M0 14h30M0 22h30'/%3E%3C/svg%3E");
        display: none;
    }

    #head {
        width: 100%;
        height: 60px;
        padding: 10px 20px;
        position: fixed;
        z-index: 2;
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
        .menu-toggle {
            display: block;
        }
    }

</style>

