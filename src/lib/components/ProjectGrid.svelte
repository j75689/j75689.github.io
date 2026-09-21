<script lang="ts">
	import type { Project, ProjectCategory } from '$lib/data/types';

	import ProjectCard from './ProjectCard.svelte';

	let { projects }: { projects: Project[] } = $props();

	const PREVIEW_COUNT = 3;

	const groups: { id: ProjectCategory; label: string }[] = [
		{ id: 'self', label: 'Self Project' },
		{ id: 'opensource', label: 'Open Source Contribute' }
	];

	let expandedGroups = $state<Record<ProjectCategory, boolean>>({
		opensource: false,
		self: false
	});

	function toggleExpanded(id: ProjectCategory) {
		expandedGroups = { ...expandedGroups, [id]: !expandedGroups[id] };
	}

	function projectsIn(id: ProjectCategory) {
		return projects.filter((project) => project.category === id);
	}

	function visibleProjects(id: ProjectCategory, items: Project[]) {
		return expandedGroups[id] ? items : items.slice(0, PREVIEW_COUNT);
	}
</script>

<section class="space-y-5">
	<div class="space-y-2">
		<p class="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
			FEATURED PROJECTS & PROTOCOL ARTIFACTS
		</p>
		<p class="text-sm text-[var(--color-dim)]">Open source contributions and personal builds.</p>
	</div>

	<div class="space-y-8">
		{#each groups as group}
			{@const items = projectsIn(group.id)}
			{@const visible = visibleProjects(group.id, items)}
			{@const hiddenCount = Math.max(items.length - PREVIEW_COUNT, 0)}
			{#if items.length > 0}
				<div class="space-y-3">
					<div class="space-y-1">
						<p class="text-sm font-semibold tracking-wide text-[var(--color-text)]">
							{group.label}
						</p>
						<p class="text-xs text-[var(--color-dim)]">{items.length} projects</p>
					</div>

					<div class="relative">
						<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
							{#each visible as project}
								<ProjectCard {project} />
							{/each}
						</div>

						{#if hiddenCount > 0 && !expandedGroups[group.id]}
							<div
								class="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--color-bg)] via-[color-mix(in_srgb,var(--color-bg)_75%,transparent)] to-transparent"
							></div>
							<div class="relative z-10 -mt-10 flex justify-center pt-2">
								<button
									type="button"
									class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-[var(--color-muted)] backdrop-blur-md transition hover:border-[rgba(243,186,47,0.35)] hover:text-[var(--color-accent)]"
									onclick={() => toggleExpanded(group.id)}
								>
									Show {hiddenCount} more
								</button>
							</div>
						{:else if hiddenCount > 0 && expandedGroups[group.id]}
							<div class="mt-4 flex justify-center">
								<button
									type="button"
									class="rounded-full border border-white/10 bg-transparent px-4 py-2 text-xs font-medium tracking-wide text-[var(--color-dim)] transition hover:border-white/20 hover:text-[var(--color-muted)]"
									onclick={() => toggleExpanded(group.id)}
								>
									Show less
								</button>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>
