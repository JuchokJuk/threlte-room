<script>
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';

	export let enabled;
</script>

<T.PerspectiveCamera makeDefault position.y={5} position.z={10}>
	<OrbitControls
		{enabled}
		enableDamping
		zoomToCursor
		minPolarAngle={0}
		maxPolarAngle={(Math.PI * 7) / 16}
	/>
</T.PerspectiveCamera>
