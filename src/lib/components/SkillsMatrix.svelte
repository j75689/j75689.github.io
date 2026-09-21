<script lang="ts">
	import type { SkillCategory } from '$lib/data/types';

	let { skills }: { skills: SkillCategory[] } = $props();
</script>

<section class="space-y-4">
	<p class="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">SKILLS</p>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		{#each skills as category}
			<section class="glass p-5">
				<div class="space-y-4">
					<h2 class="text-lg font-semibold text-[var(--color-text)]">{category.name}</h2>

					<div class="flex flex-wrap gap-2">
						{#each category.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</div>
			</section>
		{/each}
	</div>
</section>
