<script lang="ts">
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
</main>
