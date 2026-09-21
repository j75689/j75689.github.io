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
		{#if segment.href}
			<a
				href={segment.href}
				target="_blank"
				rel="noopener noreferrer"
				class={tone === 'print'
					? 'font-semibold text-slate-950 underline underline-offset-2'
					: 'font-semibold text-[var(--color-accent)] underline decoration-[rgba(243,186,47,0.35)] underline-offset-2 transition hover:decoration-[var(--color-accent)]'}
			>
				{segment.text}
			</a>
		{:else if segment.highlight}
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
