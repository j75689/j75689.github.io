<script lang="ts">
	import type { Experience } from '$lib/data/types';

	let { experience }: { experience: Experience[] } = $props();

	let expanded = $state<number[]>([]);

	function isExpanded(index: number) {
		return expanded.includes(index);
	}

	function toggle(index: number) {
		expanded = isExpanded(index)
			? expanded.filter((value) => value !== index)
			: [...expanded, index];
	}
</script>

<section class="space-y-4">
	<div class="space-y-2">
		<p class="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">EXPERIENCE</p>
		<p class="text-sm text-[var(--color-dim)]">
			Protocol, systems, and backend roles across blockchain and distributed platforms.
		</p>
	</div>

	<div class="glass px-6 py-7 sm:px-8">
		<div class="ml-2 space-y-10 border-l-2 border-slate-800 pl-6">
			{#each experience as item, index}
				<article class="relative space-y-4">
					<div
						class="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]"
					></div>

					<div class="space-y-2">
						<div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
							<div class="space-y-1">
								<h2 class="text-xl font-semibold text-[var(--color-text)]">{item.title}</h2>
								<p class="text-base text-[var(--color-muted)]">
									{#if item.companyUrl}
										<a
											class="transition hover:text-[var(--color-accent)] hover:underline"
											href={item.companyUrl}
											target="_blank"
											rel="noreferrer"
										>
											{item.company}
										</a>
									{:else}
										{item.company}
									{/if}
								</p>
							</div>

							<div class="space-y-1 text-sm text-[var(--color-dim)] md:text-right">
								<p>{item.dates}</p>
								<p>{item.location}</p>
							</div>
						</div>

						<ul class="space-y-2 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
							{#each isExpanded(index) ? item.details : item.highlights as bullet}
								<li class="flex gap-3">
									<span class="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"></span>
									<span>{bullet}</span>
								</li>
							{/each}
						</ul>
					</div>

					{#if item.details.length > 0}
						<button
							type="button"
							class="text-sm text-[var(--color-dim)] underline decoration-white/20 underline-offset-4 transition hover:text-[var(--color-accent)]"
							onclick={() => toggle(index)}
						>
							{isExpanded(index) ? 'Show less' : 'Show more'}
						</button>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>
