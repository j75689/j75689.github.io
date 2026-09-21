import { render } from 'svelte/server';
import { describe, expect, it } from 'vitest';

import Page from './+page.svelte';

describe('home page', () => {
	it('renders the hero, summary, skills, projects, experience, and connect sections', () => {
		const { body } = render(Page);

		expect(body).toContain('Dylan Huang');
		expect(body).toContain('PROFILE SUMMARY');
		expect(body).toContain('Core Languages');
		expect(body).toContain('FEATURED PROJECTS &amp; PROTOCOL ARTIFACTS');
		expect(body).toContain('BNB Smart Chain (BSC Core)');
		expect(body).toContain('EXPERIENCE');
		expect(body).toContain("Let's Connect");
		expect(body).toContain('National Yunlin University of Science and Technology');
		expect(body).toContain('Printable resume');
		expect(body).toContain('href="/resume"');
		expect(body).toContain('Email (Copy)');
	});
});
