<script lang="ts">
	let { text }: { text: string } = $props();
</script>

<div
	class="inline-flex max-w-full items-start gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs leading-5 text-[var(--color-dim)] sm:items-center"
>
	<span class="relative mt-0.5 flex h-2 w-2 shrink-0 sm:mt-0">
		<span
			class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-status)] opacity-75"
		></span>
		<span class="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-status)]"></span>
	</span>
	<span class="min-w-0">{text}</span>
</div>
