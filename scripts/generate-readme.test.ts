import { describe, expect, it } from 'vitest';
import { renderReadme } from './generate-readme';
import { resume } from '../src/lib/data/resume';

describe('renderReadme', () => {
	it('includes the core resume sections and contact details', () => {
		const md = renderReadme(resume);

		expect(md).toContain(resume.profile.name);
		expect(md).toContain(resume.profile.links.email);
		expect(md).toContain(resume.projects[0].title);
		expect(md).toContain('## Work Experience');
		expect(md).toContain(resume.education.school);
		expect(md).toContain('Generated from src/lib/data/resume.ts');
	});
});
