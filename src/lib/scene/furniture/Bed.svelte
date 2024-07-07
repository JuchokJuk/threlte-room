<script lang="ts">
	import { T } from '@threlte/core';
	import type { ColorRepresentation } from 'three';

	export let color: ColorRepresentation;
	export let openInfo: () => void;
</script>

<T.Mesh castShadow on:contextmenu={openInfo}>
	<T.BoxGeometry args={[2, 0.5, 2.5]} />
	<T.MeshPhysicalMaterial {color} />
</T.Mesh>
