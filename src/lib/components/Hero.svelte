<script lang="ts">
	import type { Profile } from '$lib/data/types';

	import AvailabilityChip from './AvailabilityChip.svelte';
	import CopyEmailButton from './CopyEmailButton.svelte';

	let { profile }: { profile: Profile } = $props();

	let accent = $derived(profile.titleAccent?.trim() ?? '');
	let accentIndex = $derived(accent ? profile.title.indexOf(accent) : -1);
	let hasAccent = $derived(accentIndex >= 0);
	let titleBefore = $derived(hasAccent ? profile.title.slice(0, accentIndex) : profile.title);
	let titleAccent = $derived(
		hasAccent ? profile.title.slice(accentIndex, accentIndex + accent.length) : ''
	);
	let titleAfter = $derived(hasAccent ? profile.title.slice(accentIndex + accent.length) : '');
</script>

<section class="glass px-6 py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:px-8 sm:py-10">
	<div class="space-y-6">
		<AvailabilityChip text={profile.availability} />

		<div class="space-y-3">
			<h1 class="text-4xl font-extrabold tracking-tight text-[var(--color-text)] md:text-5xl">
				{profile.name}
			</h1>

			<p class="max-w-3xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
				{#if hasAccent}
					{titleBefore}<span class="text-[var(--color-accent)]">{titleAccent}</span>{titleAfter}
				{:else}
					{profile.title}
				{/if}
			</p>

			<p class="text-sm uppercase tracking-[0.22em] text-[var(--color-dim)]">
				{profile.location}
			</p>
		</div>

		<div class="flex flex-wrap items-center gap-3">
			<a
				class="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[var(--color-text)] transition hover:border-[rgba(243,186,47,0.35)] hover:text-[var(--color-accent)]"
				href={profile.links.github}
				target="_blank"
				rel="noreferrer"
			>
				GitHub
			</a>
			<a
				class="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[var(--color-text)] transition hover:border-[rgba(243,186,47,0.35)] hover:text-[var(--color-accent)]"
				href={profile.links.linkedin}
				target="_blank"
				rel="noreferrer"
			>
				LinkedIn
			</a>
			<CopyEmailButton email={profile.links.email} />
		</div>
	</div>
</section>
