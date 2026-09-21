import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { resume } from '../src/lib/data/resume';
import type { Experience, Project, Resume } from '../src/lib/data/types';

function renderProject(project: Project): string {
	const title = project.url ? `[${project.title}](${project.url})` : project.title;
	const role = project.role ? ` (${project.role})` : '';

	return `- **${title}**${role}: ${project.description}`;
}

function renderExperience(experience: Experience): string {
	const company = experience.companyUrl
		? `[${experience.company}](${experience.companyUrl})`
		: experience.company;
	const bullets = (experience.details.length > 0 ? experience.details : experience.highlights)
		.map((detail) => `- ${detail}`)
		.join('\n');

	return `### ${company} | ${experience.title}
*${experience.dates} | ${experience.location}*

${bullets}`;
}

export function renderReadme(data: Resume): string {
	const { profile, skills, projects, experience, education, cta } = data;
	const skillLines = skills
		.map((skill) => `| **${skill.name}** | ${skill.tags.join(', ')} |`)
		.join('\n');
	const projectLines = projects.map(renderProject).join('\n');
	const experienceBlocks = experience.map(renderExperience).join('\n\n');

	return `# ${profile.name}
**${profile.title}**

- GitHub: ${profile.links.github}
- LinkedIn: ${profile.links.linkedin}
- Email: ${profile.links.email}

${profile.location}
**Availability:** ${profile.availability}

---

## Profile Summary
${profile.summary}

---

## Technical Stack

| Category | Skills |
| :--- | :--- |
${skillLines}

---

## Featured Projects
${projectLines}

---

## Work Experience

${experienceBlocks}

---

## Education
- **${education.degree}**
  ${education.school} | ${education.years}

---

## ${cta.heading}
${cta.body}

- Email: ${profile.links.email}
- LinkedIn: ${profile.links.linkedin}
- GitHub: ${profile.links.github}

---

<!-- Generated from src/lib/data/resume.ts - do not edit by hand -->
`;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	const outputPath = resolve(process.cwd(), 'README.md');
	writeFileSync(outputPath, renderReadme(resume), 'utf8');
	console.log(`Wrote ${outputPath}`);
}
