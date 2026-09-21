import { render } from 'svelte/server';
import { describe, expect, it } from 'vitest';

describe('resume page', () => {
	it('renders a printable resume with full experience details and no interactive chrome', async () => {
		const pageModule = await import('./resume/+page.svelte').catch(() => null);

		expect(pageModule).not.toBeNull();
		if (!pageModule) return;

		const { body } = render(pageModule.default);

		expect(body).toContain('Back to site');
		expect(body).toContain('no-print');
		expect(body).toContain('Dylan Huang');
		expect(body).toContain('Open for full-time remote roles');
		expect(body).toContain('BNB Smart Chain (BSC Core)');
		expect(body).toContain('github.com/bnb-chain/bsc');
		expect(body).toContain('Led end-to-end release engineering for bsc, reth-bsc, and Greenfield');
		expect(body).toContain('BSC#926');
		expect(body).not.toContain('Email (Copy)');
		expect(body).not.toContain('Expand');
	});
});
