<script lang="ts">
	let { error, status }: { error: Error; status: number } = $props();
</script>

<svelte:head>
	<title>Page Error</title>
</svelte:head>

<main class="page">
	<div class="glass mx-auto max-w-xl space-y-4 p-8 text-center">
		<p class="text-sm uppercase tracking-[0.3em] text-[var(--color-dim)]">Error</p>
		<h1 class="text-3xl font-semibold">{status}</h1>
		<p class="text-[var(--color-muted)]">{error?.message ?? 'Something went wrong.'}</p>
		<p>
			<a class="underline transition hover:text-[var(--color-muted)]" href="/">Back to home</a>
		</p>
	</div>
</main>
