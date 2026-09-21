<script lang="ts">
	let { text }: { text: string } = $props();
</script>

<div
	class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[var(--color-muted)]"
>
	<span class="relative flex h-2.5 w-2.5">
		<span
			class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-status)] opacity-75"
		></span>
		<span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-status)]"></span>
	</span>
	{text}
</div>
