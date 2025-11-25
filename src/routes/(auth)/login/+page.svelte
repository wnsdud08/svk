<script lang="ts">
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>
<form method="POST">
	{#if form?.error}<p class="error">{form.error}</p>{/if}
	<label>
		Email
		<input name="email" type="email" value={form?.email ?? ''}>
	</label>
	<label>
		Password
		<input name="password" type="password">
	</label>
	<button>Log in</button>
</form>