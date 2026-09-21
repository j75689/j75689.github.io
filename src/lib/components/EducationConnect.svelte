<script lang="ts">
	import type { Cta, Education, ProfileLinks } from '$lib/data/types';

	let {
		education,
		cta,
		links
	}: {
		education: Education;
		cta: Cta;
		links: ProfileLinks;
	} = $props();
</script>

<section class="space-y-4">
	<p class="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
		EDUCATION & CONNECT
	</p>

	<div class="glass grid grid-cols-1 gap-6 px-6 py-7 sm:px-8 lg:grid-cols-2">
		<div class="space-y-3">
			<p class="text-sm uppercase tracking-[0.22em] text-[var(--color-dim)]">Education</p>
			<div class="space-y-1">
				<h2 class="text-xl font-semibold text-[var(--color-text)]">{education.degree}</h2>
				<p class="text-base text-[var(--color-muted)]">{education.school}</p>
				<p class="text-sm text-[var(--color-dim)]">{education.years}</p>
			</div>
		</div>

		<div class="space-y-4">
			<div class="space-y-2">
				<p class="text-sm uppercase tracking-[0.22em] text-[var(--color-dim)]">Connect</p>
				<h2 class="text-xl font-semibold text-[var(--color-text)]">{cta.heading}</h2>
				<p class="max-w-xl text-base leading-7 text-[var(--color-muted)]">{cta.body}</p>
			</div>

			<div class="flex flex-wrap gap-3">
				<a
					class="inline-flex items-center rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-slate-950 transition hover:brightness-110"
					href={`mailto:${links.email}`}
				>
					{cta.primaryLabel}
				</a>
				<a
					class="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-[var(--color-text)] transition hover:border-[rgba(243,186,47,0.35)] hover:text-[var(--color-accent)]"
					href={links.github}
					target="_blank"
					rel="noreferrer"
				>
					{cta.secondaryLabel}
				</a>
			</div>
		</div>
	</div>
</section>
