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
		name: "name-for-radio",
		default: "kfkfkf",
		all: {
			title: "test",
		},
		values: {
			true: "kfkfkf",
			false: "Неправда...",
		},
		items: [
			{
				field: "value1",
				title: "Что-то очень длинное",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value2",
				title: "Пункт 2",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value3",
				title: "value3",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value4",
				title: "value3",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value5",
				title: "value3",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value6",
				title: "value3",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value7",
				title: "value3",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value8",
				title: "value3",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value9",
				title: "value3",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value10",
				title: "value3",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value11",
				title: "value3",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value12",
				title: "value3",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value13",
				title: "value3",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value14",
				title: "value3",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
			{
				field: "value15",
				title: "value3",
				style: "fill: red",
				image: "",
				scripe: "test.scrite.svg",
			},
		],
	};
	export default {
		name: "App",
		data: function () {
			return {
				data: data,
				filter: {
					value1: '',
					value2: '',
					value3: '',
					value4: '',
					value5: '',
					value6: '',
					value7: '',
					value8: '',
					value9: '',
					value10: '',
					value11: '',
					value12: '',
					value13: '',
					value14: '',
					value15: '',
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
