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
			<div class="aspect-[16/9] overflow-hidden bg-white/5">
				<img
					src={project.image}
					alt={`${project.title} preview`}
					class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
				/>
			</div>
		{:else if hostname}
			<div class="flex aspect-[16/9] flex-col justify-between bg-gradient-to-br from-white/6 via-white/[0.04] to-transparent p-5">
				<div class="flex items-start justify-between gap-3">
					<div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
						{#if showFavicon && faviconUrl}
							<img
								src={faviconUrl}
								alt=""
								class="h-4 w-4 rounded-sm"
								onerror={handleFaviconError}
							/>
						{/if}
						<span>{hostname}</span>
					</div>

					<span
						aria-hidden="true"
						class="text-[var(--color-accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					>
						<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" stroke-width="1.8">
							<path d="M7 17L17 7" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M9 7H17V15" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
				</div>

				<div class="space-y-2">
					<p class="text-xs uppercase tracking-[0.24em] text-[var(--color-dim)]">External Link</p>
					<p class="text-sm leading-7 text-[var(--color-muted)]">
						Open the repository or project page in a new tab.
					</p>
				</div>
			</div>
		{:else}
			<div class="flex aspect-[16/9] items-end bg-gradient-to-br from-white/6 via-white/[0.04] to-transparent p-5">
				<div class="space-y-2">
					<p class="text-xs uppercase tracking-[0.24em] text-[var(--color-dim)]">Project Snapshot</p>
					<p class="text-lg font-semibold text-[var(--color-text)]">{project.title}</p>
				</div>
			</div>
		{/if}
	</div>

	<div class="flex flex-1 flex-col gap-4 p-5">
		<div class="space-y-3">
			<div class="flex items-start justify-between gap-3">
				<div class="space-y-1">
					<h3 class="text-lg font-semibold leading-tight text-[var(--color-text)]">
						{project.title}
					</h3>
					{#if project.role}
						<p class="text-sm text-[var(--color-muted)]">{project.role}</p>
					{/if}
				</div>

				{#if project.url}
					<span
						aria-hidden="true"
						class="mt-0.5 text-[var(--color-accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					>
						<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" stroke-width="1.8">
							<path d="M7 17L17 7" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M9 7H17V15" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
				{/if}
			</div>

			<p class="text-sm leading-7 text-[var(--color-muted)]">{project.description}</p>
		</div>

		<div class="mt-auto flex flex-wrap gap-2">
			{#each project.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</div>
</svelte:element>
