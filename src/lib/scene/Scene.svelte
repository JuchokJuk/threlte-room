<script lang="ts">
	import Camera from './Camera.svelte';
	import Room from './Room.svelte';
	import Light from './Light.svelte';
	import { interactivity } from '@threlte/extras';
	import Bed from './furniture/Bed.svelte';
	import Chair from './furniture/Chair.svelte';
	import Lamp from './furniture/Lamp.svelte';
	import Draggable from './Draggable/Draggable.svelte';
	import Info from './Info.svelte';

	interactivity();

	type Furniture = {
		component: any;
		position: [number, number, number];
		rotation: number;
		dragging: boolean;
		color: string;
		name: string;
	};

	const furniture: Furniture[] = [
		{
			component: Bed,
			position: [0, 0.25, -3],
			rotation: 0,
			dragging: false,
			color: 'yellow',
			name: 'Кровать'
		},
		{
			component: Chair,
			position: [4, 0.3, 0],
			rotation: 0,
			dragging: false,
			color: 'green',
			name: 'Кресло'
		},
		{
			component: Lamp,
			position: [4, 0.5, -4],
			rotation: 0,
			dragging: false,
			color: 'red',
			name: 'Лампа'
		},
		{
			component: Lamp,
			position: [-4, 0.5, -4],
			rotation: 0,
			dragging: false,
			color: 'blue',
			name: 'Лампа'
		}
	];
</script>

<Room let:floorPlane let:range>
	{#each furniture as item}
		<Draggable
			{...range}
			{floorPlane}
			bind:position={item.position}
			bind:rotation={item.rotation}
			bind:dragging={item.dragging}
		>
			<Info content={item.name} let:open>
				<svelte:component this={item.component} color={item.color} openInfo={open} />
			</Info>
		</Draggable>
	{/each}
</Room>

<Camera enabled={furniture.reduce((a, b) => a && !b.dragging, true)} />
<Light />
