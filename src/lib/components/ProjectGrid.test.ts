import { render } from 'svelte/server';
import { describe, expect, it } from 'vitest';

import type { Project } from '$lib/data/types';
import ProjectGrid from './ProjectGrid.svelte';

const projects: Project[] = [
	{
		title: 'Image Project',
		role: 'Builder',
		description: 'Uses an explicit preview image.',
		image: '/images/example.png',
		url: 'https://example.com/work',
		tags: ['Svelte', 'Image']
	},
	{
		title: 'Link Card Project',
		description: 'Falls back to hostname metadata when no image is provided.',
		url: 'https://github.com/example/repo',
		tags: ['Fallback']
	},
	{
		title: 'Offline Project',
		description: 'Shows a static placeholder when there is no link to follow.',
		tags: ['Placeholder']
	}
];

describe('ProjectGrid', () => {
	it('renders image, hostname fallback, and static placeholder cards', () => {
		const { body } = render(ProjectGrid, {
			props: { projects }
		});

		expect(body).toContain('FEATURED PROJECTS &amp; PROTOCOL ARTIFACTS');
		expect(body).toContain('Image Project');
		expect(body).toContain('/images/example.png');
		expect(body).toContain('github.com');
		expect(body).toContain('Offline Project');
	});
});
