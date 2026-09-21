<script lang="ts">
	import type { Project } from '$lib/data/types';

	import ProjectCard from './ProjectCard.svelte';

	let { projects }: { projects: Project[] } = $props();
</script>

<section class="space-y-4">
	<div class="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
		<div class="space-y-2">
			<p class="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
				FEATURED PROJECTS & PROTOCOL ARTIFACTS
			</p>
			<p class="text-sm text-[var(--color-dim)]">Open source, architecture, and systems work.</p>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
