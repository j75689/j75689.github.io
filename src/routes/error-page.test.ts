import { render } from 'svelte/server';
import { describe, expect, it } from 'vitest';

describe('error page', () => {
	it('renders a simple fallback message with a home link', async () => {
		const pageModule = await import('./+error.svelte').catch(() => null);

		expect(pageModule).not.toBeNull();
		if (!pageModule) return;

		const { body } = render(pageModule.default, {
			props: {
				error: new Error('Missing page'),
				status: 404
			}
		});

		expect(body).toContain('404');
		expect(body).toContain('Missing page');
		expect(body).toContain('Back to home');
		expect(body).toContain('href="/"');
	});
});
