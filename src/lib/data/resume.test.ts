import { describe, expect, it } from 'vitest';
import { resume } from './resume';
import { hostnameFromUrl } from '../utils/hostname';

describe('resume data', () => {
	it('has required profile fields', () => {
		expect(resume.profile.name).toBe('Dylan Huang');
		expect(resume.profile.links.email).toContain('@');
		expect(resume.profile.links.github).toMatch(/^https:\/\//);
	});

	it('has four skill categories', () => {
		expect(resume.skills).toHaveLength(4);
		expect(resume.skills.map((s) => s.name)).toEqual([
			'Core Languages',
			'Blockchain & Protocol',
			'Backend & Systems',
			'Infrastructure & Observability'
		]);
	});

	it('has six featured projects with descriptions and tags', () => {
		expect(resume.projects.length).toBeGreaterThanOrEqual(6);
		for (const p of resume.projects) {
			expect(p.title.length).toBeGreaterThan(0);
			expect(p.description.length).toBeGreaterThan(0);
			expect(p.tags.length).toBeGreaterThan(0);
		}
	});

	it('experience entries have highlights; BNB has details for expand', () => {
		expect(resume.experience.length).toBeGreaterThanOrEqual(5);
		const bnb = resume.experience.find((e) => e.company.includes('BNB'));
		expect(bnb).toBeDefined();
		expect(bnb!.highlights.length).toBeGreaterThan(0);
		expect(bnb!.details.length).toBeGreaterThan(bnb!.highlights.length);
	});
});

describe('hostnameFromUrl', () => {
	it('parses github host', () => {
		expect(hostnameFromUrl('https://github.com/bnb-chain/bsc')).toBe('github.com');
	});

	it('returns null for empty', () => {
		expect(hostnameFromUrl('')).toBeNull();
	});
});
