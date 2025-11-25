<script lang="ts">
    import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>{data.email}</h1>
<p>{data.username}</p>