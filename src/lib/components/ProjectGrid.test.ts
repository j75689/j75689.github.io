import { render } from 'svelte/server';
import { describe, expect, it } from 'vitest';

import type { Project } from '$lib/data/types';
import ProjectGrid from './ProjectGrid.svelte';

const projects: Project[] = [
	{
		title: 'Self One',
		category: 'self',
		description: 'First self project.',
		tags: ['A']
	},
	{
		title: 'Self Two',
		category: 'self',
		description: 'Second self project.',
		tags: ['B']
	},
	{
		title: 'Self Three',
		category: 'self',
		description: 'Third self project.',
		tags: ['C']
	},
	{
		title: 'Self Four',
		category: 'self',
		description: 'Fourth self project should be hidden by default.',
		tags: ['D']
	},
	{
		title: 'Image Project',
		category: 'opensource',
		role: 'Builder',
		description: 'Uses an explicit preview image.',
		image: '/images/example.png',
		url: 'https://example.com/work',
		tags: ['Svelte', 'Image']
	},
	{
		title: 'Link Card Project',
		category: 'opensource',
		description: 'Falls back to hostname metadata when no image is provided.',
		url: 'https://github.com/example/repo',
		tags: ['Fallback']
	},
	{
		title: 'Offline Project',
		category: 'opensource',
		description: 'Shows a static placeholder when there is no link to follow.',
		tags: ['Placeholder']
	},
	{
		title: 'Extra Open Source',
		category: 'opensource',
		description: 'Fourth opensource project should be hidden by default.',
		tags: ['Extra']
	}
];

describe('ProjectGrid', () => {
	it('shows Self Project first and previews only three cards per group', () => {
		const { body } = render(ProjectGrid, {
			props: { projects }
		});

		const selfIndex = body.indexOf('Self Project');
		const openIndex = body.indexOf('Open Source Contribute');
		expect(selfIndex).toBeGreaterThan(-1);
		expect(openIndex).toBeGreaterThan(-1);
		expect(selfIndex).toBeLessThan(openIndex);

		expect(body).toContain('Self One');
		expect(body).toContain('Self Three');
		expect(body).not.toContain('Self Four');
		expect(body).toContain('Show 1 more');
		expect(body).toContain('Image Project');
		expect(body).not.toContain('Extra Open Source');
	});
});
