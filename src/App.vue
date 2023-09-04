<template>
    <div id="app">
        <div style="margin-bottom: 10%">{{ filter }}</div>
        <center>
            <FilterMenu v-model="filter" :build="data" :visible="visible" />
        </center>
    </div>
</template>

<script>
import FilterMenu from "./components/sliding-filter-menu/sliding-filter-menu.vue";
const data = {
    type: "checkbox",
    default: "lalalalalal",
    debug: true,
    sprite: require("@/assets/sprite.svg"),
    all: {
        title: "All",
    },
    values: {
        true: "lalalalalal",
        false: false,
    },
    items: [
        {
            field: "value1.test",
            sprite: "icon-power-button",
            style: "fill: #5bca8d;"
        },
        {
            field: "value2",
            sprite: "icon-power-button",
            style: "fill: #98A2BE;"
        },
        {
            field: "value3",
            sprite: "icon-snow",
            style: "fill: #007fff;"
        },
        {
            field: "value4",
            sprite: "icon-water",
            style: "fill: #fcca5f;"
        },
        {
            field: "value5",
            sprite: "icon-disconnect",
            style: "fill: #fcca5f;",
        },
        {
            field: "value6",
            sprite: "icon-opened-door",
            style: "fill: #FB6C6C;"
        },
        {
            field: "value7",
            sprite: "icon-triangle-with-exclaim",
            style: "fill: #FB6C6C;"
        },
        {
            title: "?",
            field: "value8",
            style: "fill: #98A2BE;"
        },
    ],
};
export default {
    name: "App",
    data: function () {
        return {
            data: data,
            filter: {
                value1: { test: "" },
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                value8: ''
            },
            visible: true,
        };
    },
    components: {
        FilterMenu,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

/*-------- Clear all basic CSS --------*/

* {
    padding: 0;
    margin: 0;
    border: 0;
}

*,
*:before,
*:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

:focus,
:active {
    outline: none;
}

a:focus,
a:active {
    outline: none;
}

nav,
footer,
header,
aside {
    display: block;
}

html,
body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
    font-family: inherit;
}

input:-ms-clear {
    display: none;
}

button {
    cursor: pointer;
}

button:-moz-focus-inner {
    padding: 0;
    border: 0;
}

a,
a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

ul li {
    list-style: none;
}

img {
    vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: 400;
}

/*--------------------*/
</style>
