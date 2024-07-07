<script lang="ts">
	import { T } from '@threlte/core';
	import type { ColorRepresentation } from 'three';

	export let color: ColorRepresentation;
	export let openInfo: () => void;
</script>

<T.Mesh castShadow on:contextmenu={openInfo}>
	<T.CylinderGeometry args={[0.5, 0.5, 0.6, 16]} />
	<T.MeshPhysicalMaterial {color} />
</T.Mesh>
