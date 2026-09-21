<script lang="ts">
	import { resume } from '$lib/data/resume';

	const getDetails = (details: string[], highlights: string[]) =>
		details.length > 0 ? details : highlights;

	function compactUrl(value: string): string {
		try {
			const url = new URL(value);
			return `${url.hostname}${url.pathname.replace(/\/$/, '')}`;
		} catch {
			return value;
		}
	}

	const contacts = [
		{
			label: 'GitHub',
			href: resume.profile.links.github,
			text: compactUrl(resume.profile.links.github)
		},
		{
			label: 'LinkedIn',
			href: resume.profile.links.linkedin,
			text: compactUrl(resume.profile.links.linkedin)
		},
		{
			label: 'Email',
			href: `mailto:${resume.profile.links.email}`,
			text: resume.profile.links.email
		}
	];
</script>

<svelte:head>
	<title>Dylan Huang Resume</title>
	<meta
		name="description"
		content="Printable resume for Dylan Huang, Senior Backend and Distributed Systems Engineer."
	/>
</svelte:head>

<main class="resume-print min-h-screen bg-white px-4 py-8 text-slate-900 sm:px-6 sm:py-10">
	<div class="mx-auto max-w-3xl space-y-7">
		<p class="no-print text-sm text-slate-500">
			<a class="underline underline-offset-2 hover:text-slate-800" href="/">← Back to site</a>
		</p>

		<header class="space-y-4 border-b border-slate-200 pb-5">
			<div class="space-y-1.5">
				<h1 class="text-3xl font-semibold tracking-tight text-slate-950">
					{resume.profile.name}
				</h1>
				<p class="text-base leading-7 text-slate-700">{resume.profile.title}</p>
			</div>

			<div class="space-y-1 text-sm leading-6 text-slate-600">
				<p>{resume.profile.location}</p>
				<p class="text-xs leading-5 text-slate-500">{resume.profile.availability}</p>
			</div>

			<ul
				class="flex flex-col gap-1.5 text-sm text-slate-700 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-1"
			>
				{#each contacts as contact}
					<li class="flex min-w-0 items-baseline gap-1.5">
						<span class="shrink-0 font-medium text-slate-900">{contact.label}</span>
						<a class="truncate text-slate-700 underline-offset-2 hover:underline" href={contact.href}>
							{contact.text}
						</a>
					</li>
				{/each}
			</ul>
		</header>

		<section class="space-y-2">
			<h2 class="text-[0.7rem] font-semibold tracking-[0.28em] text-slate-500">PROFILE</h2>
			<p class="text-sm leading-7 text-slate-800">{resume.profile.summary}</p>
		</section>

		<section class="space-y-3">
			<h2 class="text-[0.7rem] font-semibold tracking-[0.28em] text-slate-500">SKILLS</h2>
			<div class="grid gap-x-8 gap-y-2 sm:grid-cols-2">
				{#each resume.skills as category}
					<div class="space-y-0.5">
						<h3 class="text-sm font-semibold text-slate-900">{category.name}</h3>
						<p class="text-sm leading-6 text-slate-700">{category.tags.join(' · ')}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="space-y-3">
			<h2 class="text-[0.7rem] font-semibold tracking-[0.28em] text-slate-500">PROJECTS</h2>
			<div class="space-y-3">
				{#each resume.projects as project}
					<article class="space-y-1">
						<div class="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
							<h3 class="text-sm font-semibold text-slate-900">{project.title}</h3>
							{#if project.role}
								<span class="text-sm text-slate-500">· {project.role}</span>
							{/if}
							{#if project.url}
								<a
									class="text-xs text-slate-500 underline-offset-2 hover:underline"
									href={project.url}
								>
									{compactUrl(project.url)}
								</a>
							{/if}
						</div>
						<p class="text-sm leading-6 text-slate-700">{project.description}</p>
						<p class="text-xs text-slate-500">{project.tags.join(' · ')}</p>
					</article>
				{/each}
			</div>
		</section>

		<section class="space-y-4">
			<h2 class="text-[0.7rem] font-semibold tracking-[0.28em] text-slate-500">EXPERIENCE</h2>
			<div class="space-y-5">
				{#each resume.experience as role}
					<article class="space-y-1.5">
						<div class="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
							<div>
								<h3 class="text-sm font-semibold text-slate-900">{role.title}</h3>
								<p class="text-sm text-slate-700">
									{#if role.companyUrl}
										<a class="underline-offset-2 hover:underline" href={role.companyUrl}>{role.company}</a>
									{:else}
										{role.company}
									{/if}
									<span class="text-slate-500"> · {role.location}</span>
								</p>
							</div>
							<p class="shrink-0 text-xs text-slate-500 sm:text-sm">{role.dates}</p>
						</div>

						<ul class="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-800">
							{#each getDetails(role.details, role.highlights) as item}
								<li>{item}</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>
		</section>

		<section class="space-y-1.5">
			<h2 class="text-[0.7rem] font-semibold tracking-[0.28em] text-slate-500">EDUCATION</h2>
			<div>
				<h3 class="text-sm font-semibold text-slate-900">{resume.education.degree}</h3>
				<p class="text-sm text-slate-700">
					{resume.education.school}
					<span class="text-slate-500"> · {resume.education.years}</span>
				</p>
			</div>
		</section>
	</div>
</main>
