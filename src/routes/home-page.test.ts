import { render } from 'svelte/server';
import { describe, expect, it } from 'vitest';

import Page from './+page.svelte';

describe('home page', () => {
	it('renders the hero, summary, skills, and projects sections', () => {
		const { body } = render(Page);

		expect(body).toContain('Dylan Huang');
		expect(body).toContain('PROFILE SUMMARY');
		expect(body).toContain('Core Languages');
		expect(body).toContain('FEATURED PROJECTS &amp; PROTOCOL ARTIFACTS');
		expect(body).toContain('BNB Smart Chain (BSC Core)');
		expect(body).toContain('Email (Copy)');
	});
});
