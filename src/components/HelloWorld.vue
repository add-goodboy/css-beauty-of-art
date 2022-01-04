<template>
	<div class="hello">
		<div id="div_box" class="test add"></div>
		<div class="add">inline-block</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
		created() {
			// let a = document.getElementById('div_box').classList
		},
		mounted() {
			// console.log(document.getElementById('div_box').classList)

			let a = document.getElementById('div_box').classList
			console.log(a)
			this.getClassList()
		},
		methods: {
			getClassList() {
				console.log(document.getElementById('div_box'))
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	.test {
		width: 250px;
		height: 250px;
		background: #42b983;
		border: 1px solid #42b990;
		transform: translate3d(0, 0, 0);
		visibility: hidden;
	}
	.add {
		display: inline-block;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
