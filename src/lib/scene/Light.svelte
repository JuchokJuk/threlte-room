<script lang="ts">
	import { T } from '@threlte/core';
</script>

<T.AmbientLight />
<T.DirectionalLight position={[5, 10, 15]} castShadow shadow.camera.left={-10} shadow.camera.right={10} />
