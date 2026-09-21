import { describe, expect, it } from 'vitest';
import { highlightSegments, TERM_LINKS } from './highlightText';

describe('highlightSegments', () => {
	it('highlights protocol terms without dropping surrounding text', () => {
		const segments = highlightSegments(
			'Shipped BEP-131 candidate validators and BC Fusion token migration.'
		);

		expect(segments).toEqual([
			{ text: 'Shipped ', highlight: false },
			{
				text: 'BEP-131',
				highlight: true,
				href: TERM_LINKS['BEP-131']
			},
			{ text: ' candidate validators and ', highlight: false },
			{ text: 'BC Fusion', highlight: true },
			{ text: ' token migration.', highlight: false }
		]);
	});

	it('attaches evidence links for BEP and PR identifiers', () => {
		const segments = highlightSegments(
			'BC Fusion via BEP-299 / BEP-333; fast-node BSC#926.'
		);

		expect(segments.find((s) => s.text === 'BEP-299')).toMatchObject({
			href: TERM_LINKS['BEP-299']
		});
		expect(segments.find((s) => s.text === 'BEP-333')).toMatchObject({
			href: TERM_LINKS['BEP-333']
		});
		expect(segments.find((s) => s.text === 'BSC#926')).toMatchObject({
			href: TERM_LINKS['BSC#926']
		});
	});

	it('prefers longer matches', () => {
		const segments = highlightSegments('opBNB (op-geth) tuning', ['opBNB', 'op-geth', 'op']);
		expect(segments.some((s) => s.text === 'opBNB' && s.highlight)).toBe(true);
		expect(segments.some((s) => s.text === 'op-geth' && s.highlight)).toBe(true);
	});
});
