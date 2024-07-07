<script lang="ts">
	import { HTML } from '@threlte/extras';
	import { fly } from 'svelte/transition';
	import cross from '$lib/assets/cross.svg?raw';

	export let content: string;

	let visible = false;

	function open() {
		visible = true;
	}

	function close() {
		visible = false;
	}
</script>

<slot {open} />

<HTML center>
	{#if visible}
		<div class="info" transition:fly={{ duration: 400, y: 16 }}>
			<p>{content}</p>
			<button on:click={close}>
				{@html cross}
			</button>
		</div>
	{/if}
</HTML>

<style lang="scss">
	.info {
		background: white;
		border-radius: 8px;
		padding: 8px 12px;
		display: flex;
		gap: 8px;
		align-items: center;

		button {
			border: none;
			background: lightgray;
			width: 16px;
			height: 16px;
			border-radius: 8px;
			display: flex;
			align-items: center;
			justify-content: center;
			transition:
				background-color 0.4s,
				color 0.4s;

			@include hover {
				background: black;
				color: white;
			}
		}
	}
</style>
