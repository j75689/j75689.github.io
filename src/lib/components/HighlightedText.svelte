<script lang="ts">
	import { highlightSegments } from '$lib/utils/highlightText';

	let {
		text,
		tone = 'dark'
	}: {
		text: string;
		tone?: 'dark' | 'print';
	} = $props();

	let segments = $derived(highlightSegments(text));
</script>

<span>
	{#each segments as segment}
		{#if segment.highlight}
			{#if tone === 'print'}
				<strong class="font-semibold text-slate-950">{segment.text}</strong>
			{:else}
				<strong class="font-semibold text-[var(--color-text)]">{segment.text}</strong>
			{/if}
		{:else}
			{segment.text}
		{/if}
	{/each}
</span>
