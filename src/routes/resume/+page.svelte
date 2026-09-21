<script lang="ts">
	import { resume } from '$lib/data/resume';

	const formatLinkLabel = (key: string) => key.charAt(0).toUpperCase() + key.slice(1);
	const getDetails = (details: string[], highlights: string[]) => (details.length > 0 ? details : highlights);
</script>

<svelte:head>
	<title>Dylan Huang Resume</title>
	<meta
		name="description"
		content="Printable resume for Dylan Huang, Senior Backend and Distributed Systems Engineer."
	/>
</svelte:head>

<main class="resume-print min-h-screen bg-white px-4 py-10 text-slate-900 sm:px-6">
	<div class="mx-auto max-w-4xl space-y-8">
		<p class="no-print text-sm">
			<a class="underline underline-offset-2" href="/">← Back to site</a>
		</p>

		<header class="space-y-3 border-b border-slate-200 pb-6">
			<div class="space-y-1">
				<h1 class="text-3xl font-semibold tracking-tight">{resume.profile.name}</h1>
				<p class="text-lg text-slate-700">{resume.profile.title}</p>
			</div>

			<div class="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
				<p>{resume.profile.location}</p>
				<p>{resume.profile.availability}</p>
			</div>

			<ul class="grid gap-2 text-sm sm:grid-cols-3">
				{#each Object.entries(resume.profile.links) as [key, value]}
					<li>
						<span class="font-medium">{formatLinkLabel(key)}:</span>
						<a class="break-all underline underline-offset-2" href={key === 'email' ? `mailto:${value}` : value}>
							{value}
						</a>
					</li>
				{/each}
			</ul>
		</header>

		<section class="space-y-2">
			<h2 class="text-xs font-semibold tracking-[0.3em] text-slate-500">PROFILE</h2>
			<p class="leading-7 text-slate-800">{resume.profile.summary}</p>
		</section>

		<section class="space-y-4">
			<h2 class="text-xs font-semibold tracking-[0.3em] text-slate-500">SKILLS</h2>
			<div class="space-y-3">
				{#each resume.skills as category}
					<div class="space-y-1">
						<h3 class="text-base font-semibold text-slate-900">{category.name}</h3>
						<p class="leading-7 text-slate-800">{category.tags.join(' | ')}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="space-y-4">
			<h2 class="text-xs font-semibold tracking-[0.3em] text-slate-500">PROJECTS</h2>
			<div class="space-y-4">
				{#each resume.projects as project}
					<article class="space-y-2">
						<div class="space-y-1">
							<h3 class="text-base font-semibold text-slate-900">{project.title}</h3>
							{#if project.role}
								<p class="text-sm text-slate-700">{project.role}</p>
							{/if}
							{#if project.url}
								<p class="text-sm">
									<a class="break-all underline underline-offset-2" href={project.url}>{project.url}</a>
								</p>
							{/if}
						</div>

						<p class="leading-7 text-slate-800">{project.description}</p>
						<p class="text-sm text-slate-700">{project.tags.join(' | ')}</p>
					</article>
				{/each}
			</div>
		</section>

		<section class="space-y-4">
			<h2 class="text-xs font-semibold tracking-[0.3em] text-slate-500">EXPERIENCE</h2>
			<div class="space-y-6">
				{#each resume.experience as role}
					<article class="space-y-2">
						<div class="space-y-1">
							<h3 class="text-base font-semibold text-slate-900">{role.title}</h3>
							<p class="text-sm text-slate-700">
								{#if role.companyUrl}
									<a class="underline underline-offset-2" href={role.companyUrl}>{role.company}</a>
								{:else}
									{role.company}
								{/if}
								<span> | {role.location}</span>
							</p>
							<p class="text-sm text-slate-600">{role.dates}</p>
						</div>

						<ul class="list-disc space-y-1 pl-5 text-slate-800">
							{#each getDetails(role.details, role.highlights) as item}
								<li>{item}</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>
		</section>

		<section class="space-y-3">
			<h2 class="text-xs font-semibold tracking-[0.3em] text-slate-500">EDUCATION</h2>
			<div>
				<h3 class="text-base font-semibold text-slate-900">{resume.education.degree}</h3>
				<p class="text-slate-800">{resume.education.school}</p>
				<p class="text-sm text-slate-600">{resume.education.years}</p>
			</div>
		</section>

		<section class="space-y-3 border-t border-slate-200 pt-6">
			<h2 class="text-xs font-semibold tracking-[0.3em] text-slate-500">LINKS</h2>
			<ul class="space-y-2 text-sm">
				{#each Object.entries(resume.profile.links) as [key, value]}
					<li>
						<span class="font-medium">{formatLinkLabel(key)}:</span>
						<a class="break-all underline underline-offset-2" href={key === 'email' ? `mailto:${value}` : value}>
							{value}
						</a>
					</li>
				{/each}
			</ul>
		</section>
	</div>
</main>
