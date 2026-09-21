<script lang="ts">
	import EducationConnect from '$lib/components/EducationConnect.svelte';
	import ExperienceTimeline from '$lib/components/ExperienceTimeline.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import ProfileSummary from '$lib/components/ProfileSummary.svelte';
	import SkillsMatrix from '$lib/components/SkillsMatrix.svelte';
	import { resume } from '$lib/data/resume';
</script>

<main class="page space-y-14">
	<Hero profile={resume.profile} />
	<ProfileSummary summary={resume.profile.summary} />
	<SkillsMatrix skills={resume.skills} />
	<ProjectGrid projects={resume.projects} />
	<ExperienceTimeline experience={resume.experience} />
	<EducationConnect education={resume.education} cta={resume.cta} links={resume.profile.links} />

	<p class="pt-8 text-center text-sm text-[var(--color-dim)]">
		<a class="underline transition hover:text-[var(--color-muted)]" href="/resume">Printable resume</a>
	</p>
</main>
