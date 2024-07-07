<script lang="ts">
	import { T } from '@threlte/core';
	import { Plane, Vector3 } from 'three';

	const width = 10;
	const depth = 12;
	const height = 4;

	const range = {
		xRangeMin: -width / 2,
		xRangeMax: width / 2,
		zRangeMin: -depth / 2,
		zRangeMax: depth / 2
	};

	const floorPlane = new Plane(new Vector3(0, 1, 0), 0);
</script>

<!-- floor -->
<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
	<T.PlaneGeometry args={[width, depth, 1, 1]} />
	<T.MeshPhysicalMaterial color="white" />
</T.Mesh>

<!-- roof -->
<T.Mesh rotation.x={Math.PI / 2} position.y={height}>
	<T.PlaneGeometry args={[width, depth, 1, 1]} />
	<T.MeshPhysicalMaterial color="white" />
</T.Mesh>

<!-- wals -->
<T.Mesh receiveShadow position.y={height / 2} position.z={-depth / 2}>
	<T.PlaneGeometry args={[width, height, 1, 1]} />
	<T.MeshPhysicalMaterial color="white" />
</T.Mesh>

<T.Mesh rotation.y={Math.PI / 2} receiveShadow position.y={height / 2} position.x={-width / 2}>
	<T.PlaneGeometry args={[depth, height, 1, 1]} />
	<T.MeshPhysicalMaterial color="white" />
</T.Mesh>

<T.Mesh rotation.y={-Math.PI / 2} receiveShadow position.y={height / 2} position.x={width / 2}>
	<T.PlaneGeometry args={[depth, height, 1, 1]} />
	<T.MeshPhysicalMaterial color="white" />
</T.Mesh>

<T.Mesh rotation.y={-Math.PI} receiveShadow position.y={height / 2} position.z={depth / 2}>
	<T.PlaneGeometry args={[width, height, 1, 1]} />
	<T.MeshPhysicalMaterial color="white" />
</T.Mesh>

<slot {floorPlane} {range} />
