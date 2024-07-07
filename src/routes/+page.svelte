<script>
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/scene/Scene.svelte';
</script>

<div class="container">
	<Canvas>
		<Scene />
	</Canvas>
</div>

<style lang="scss">
	.container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
