import { render } from 'svelte/server';
import { describe, expect, it } from 'vitest';

import type { Experience } from '$lib/data/types';
import ExperienceTimeline from './ExperienceTimeline.svelte';

const experience: Experience[] = [
	{
		company: 'BNB Chain',
		title: 'Senior Blockchain Developer',
		dates: 'June 2021 - May 2025',
		location: 'Global Remote',
		highlights: ['Delivered protocol upgrades', 'Maintained execution clients'],
		details: ['Implemented validator changes', 'Led release engineering']
	},
	{
		company: 'Early Role',
		title: 'Software Engineer',
		dates: 'August 2017 - July 2019',
		location: 'Taipei, Taiwan',
		highlights: ['Improved indexing performance'],
		details: []
	}
];

describe('ExperienceTimeline', () => {
	it('renders a single details toggle only for entries that provide details', () => {
		const { body } = render(ExperienceTimeline, {
			props: { experience }
		});

		expect(body).toContain('EXPERIENCE');
		expect(body).toContain('Delivered protocol upgrades');
		expect(body).toContain('Show more');
		expect(body).not.toContain('Show less');
		expect(body).not.toContain('Implemented validator changes');
		expect(body).toContain('Early Role');
		expect(body.match(/Show more/g)).toHaveLength(1);
	});
});
