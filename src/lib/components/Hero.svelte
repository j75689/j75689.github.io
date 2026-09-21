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

	let avatarUrl = $derived.by(() => {
		try {
			const username = new URL(profile.links.github).pathname
				.replace(/^\/+|\/+$/g, '')
				.split('/')[0];
			return username ? `https://github.com/${username}.png?size=320` : null;
		} catch {
			return null;
		}
	});
</script>

<section class="glass px-6 py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:px-8 sm:py-10">
	<div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-8 md:gap-10">
		{#if avatarUrl}
			<a
				href={profile.links.github}
				target="_blank"
				rel="noreferrer"
				class="shrink-0 self-start"
				aria-label="{profile.name} on GitHub"
			>
				<img
					src={avatarUrl}
					alt=""
					width="160"
					height="160"
					class="h-28 w-28 rounded-2xl border border-white/10 object-cover shadow-[0_0_0_1px_rgba(243,186,47,0.12)] transition hover:border-[rgba(243,186,47,0.35)] sm:h-36 sm:w-36 md:h-40 md:w-40"
				/>
			</a>
		{/if}

		<div class="min-w-0 flex-1 space-y-6">
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
					class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[var(--color-text)] transition hover:border-[rgba(243,186,47,0.35)] hover:text-[var(--color-accent)]"
					href={profile.links.github}
					target="_blank"
					rel="noreferrer"
				>
					<svg class="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"
						/>
					</svg>
					GitHub
				</a>
				<a
					class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[var(--color-text)] transition hover:border-[rgba(243,186,47,0.35)] hover:text-[var(--color-accent)]"
					href={profile.links.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<svg class="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"
						/>
					</svg>
					LinkedIn
				</a>
				<CopyEmailButton email={profile.links.email} />
			</div>

			<AvailabilityChip text={profile.availability} />
		</div>
	</div>
</section>
