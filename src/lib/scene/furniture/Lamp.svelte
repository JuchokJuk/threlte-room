<script lang="ts">
	import { T } from '@threlte/core';
	import type { ColorRepresentation } from 'three';

	export let color: ColorRepresentation;
	export let openInfo: () => void;
</script>

<T.Mesh castShadow on:contextmenu={openInfo}>
	<T.BoxGeometry args={[0.25, 1, 0.25]} />
	<T.MeshPhysicalMaterial {color} />
</T.Mesh>

<T.Mesh position.y={0.8} on:contextmenu={openInfo}>
	<T.SphereGeometry args={[0.5, 8, 8]} />
	<T.MeshPhysicalMaterial emissive={color} transparent opacity={0.5} {color} />
</T.Mesh>

<T.PointLight {color} position={[0, 2, 0]} intensity={10} />
