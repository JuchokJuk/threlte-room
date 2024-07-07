<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	import { Vector3, Plane, Raycaster, Vector2, Group, Box3 } from 'three';
	import type { Event } from './Event';
	import { clamp } from 'three/src/math/MathUtils.js';
	import { onMount } from 'svelte';

	export let position: [number, number, number];
	export let floorPlane: Plane;
	export let xRangeMin: number;
	export let xRangeMax: number;
	export let zRangeMin: number;
	export let zRangeMax: number;
	export let dragging = false;
	export let rotation = 0;

	let group: Group;
	let groupBoundingBox: Box3;
	let groupSize: Vector3;

	onMount(() => {
		groupBoundingBox = new Box3().setFromObject(group);
		groupSize = groupBoundingBox.getSize(new Vector3());
	});

	const { camera } = useThrelte();

	const planeIntersectPoint = new Vector3();
	const pointer = new Vector2();
	const raycaster = new Raycaster();

	const offset = new Vector2();
	let startRotation = 0;
	let rotationOffset = 0;

	function grab(event: Event) {
		if (event.nativeEvent.button === 2) return;

		if (event.object.parent?.uuid !== group.uuid) return;

		dragging = true;

		event.ray.intersectPlane(floorPlane, planeIntersectPoint);

		offset.x = planeIntersectPoint.x - position[0];
		offset.y = planeIntersectPoint.z - position[2];

		startRotation = rotation;
		rotationOffset = Math.atan2(
			position[0] - planeIntersectPoint.x,
			position[2] - planeIntersectPoint.z
		);

		event.stopPropagation();
	}

	function move(event: PointerEvent) {
		if (dragging) {
			if (event.ctrlKey) {
				setRotation(event);
			} else {
				setPosition(event);
			}
		}
	}

	function setPosition(event: PointerEvent) {
		pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
		pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

		raycaster.setFromCamera(pointer, $camera);

		raycaster.ray.intersectPlane(floorPlane, planeIntersectPoint);

		position[0] = clamp(
			planeIntersectPoint.x - offset.x,
			xRangeMin + groupSize.x / 2,
			xRangeMax - groupSize.x / 2
		);

		position[2] = clamp(
			planeIntersectPoint.z - offset.y,
			zRangeMin + groupSize.z / 2,
			zRangeMax - groupSize.z / 2
		);
	}

	function setRotation(event: PointerEvent) {
		pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
		pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

		raycaster.setFromCamera(pointer, $camera);

		raycaster.ray.intersectPlane(floorPlane, planeIntersectPoint);

		offset.x = planeIntersectPoint.x - position[0];
		offset.y = planeIntersectPoint.z - position[2];

		rotation =
			Math.atan2(position[0] - planeIntersectPoint.x, position[2] - planeIntersectPoint.z) +
			startRotation -
			rotationOffset;
	}

	function release() {
		dragging = false;
	}
</script>

<svelte:window on:pointermove={move} on:pointerup={release} />

<T.Group {position} on:pointerdown={grab} bind:ref={group} rotation.y={rotation}>
	<slot />
</T.Group>
