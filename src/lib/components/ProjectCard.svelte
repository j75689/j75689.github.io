<script lang="ts">
	import type { Project } from '$lib/data/types';
	import { hostnameFromUrl } from '$lib/utils/hostname';

	let { project }: { project: Project } = $props();

	let hostname = $derived(project.url ? hostnameFromUrl(project.url) : null);
	let faviconUrl = $derived(project.url ? new URL('/favicon.ico', project.url).href : null);
	let showFavicon = $state(false);

	$effect(() => {
		project.url;
		showFavicon = Boolean(project.url);
	});

	function handleFaviconError() {
		showFavicon = false;
	}
</script>

<svelte:element
	this={project.url ? 'a' : 'article'}
	class="glass group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:border-[rgba(243,186,47,0.4)] hover:shadow-[0_10px_30px_-10px_rgba(243,186,47,0.15)]"
	href={project.url}
	target={project.url ? '_blank' : undefined}
	rel={project.url ? 'noopener noreferrer' : undefined}
>
	<div class="border-b border-white/8">
		{#if project.image}
			<div class="aspect-[16/10] overflow-hidden bg-white/5">
				<img
					src={project.image}
					alt={`${project.title} preview`}
					class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
				/>
			</div>
		{:else if hostname}
			<div
				class="flex aspect-[16/10] flex-col justify-between bg-gradient-to-br from-white/6 via-white/[0.04] to-transparent p-3.5"
			>
				<div class="flex items-start justify-between gap-2">
					<div
						class="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-muted)]"
					>
						{#if showFavicon && faviconUrl}
							<img
								src={faviconUrl}
								alt=""
								class="h-3.5 w-3.5 rounded-sm"
								onerror={handleFaviconError}
							/>
						{/if}
						<span class="truncate">{hostname}</span>
					</div>

					<span
						aria-hidden="true"
						class="shrink-0 text-[var(--color-accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					>
						<svg viewBox="0 0 24 24" class="h-4 w-4 fill-none stroke-current" stroke-width="1.8">
							<path d="M7 17L17 7" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M9 7H17V15" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
				</div>

				<p class="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-dim)]">External Link</p>
			</div>
		{:else}
			<div
				class="flex aspect-[16/10] items-end bg-gradient-to-br from-white/6 via-white/[0.04] to-transparent p-3.5"
			>
				<div class="space-y-1">
					<p class="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-dim)]">
						Project Snapshot
					</p>
					<p class="text-base font-semibold text-[var(--color-text)]">{project.title}</p>
				</div>
			</div>
		{/if}
	</div>

	<div class="flex flex-1 flex-col gap-3 p-4">
		<div class="space-y-2">
			<div class="flex items-start justify-between gap-2">
				<div class="min-w-0 space-y-1">
					<h3 class="text-base font-semibold leading-snug text-[var(--color-text)]">
						{project.title}
					</h3>
					{#if project.role}
						<p class="text-xs text-[var(--color-muted)]">{project.role}</p>
					{/if}
				</div>

				{#if project.url}
					<span
						aria-hidden="true"
						class="mt-0.5 shrink-0 text-[var(--color-accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					>
						<svg viewBox="0 0 24 24" class="h-4 w-4 fill-none stroke-current" stroke-width="1.8">
							<path d="M7 17L17 7" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M9 7H17V15" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
				{/if}
			</div>

			<p class="text-xs leading-6 text-[var(--color-muted)] sm:text-sm sm:leading-6">
				{project.description}
			</p>
		</div>

		<div class="mt-auto flex flex-wrap gap-1.5">
			{#each project.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</div>
</svelte:element>
