import { describe, expect, it } from 'vitest';
import { highlightSegments } from './highlightText';

describe('highlightSegments', () => {
	it('highlights protocol terms without dropping surrounding text', () => {
		const segments = highlightSegments(
			'Shipped BEP-131 candidate validators and BC Fusion token migration.'
		);

		expect(segments).toEqual([
			{ text: 'Shipped ', highlight: false },
			{ text: 'BEP-131', highlight: true },
			{ text: ' candidate validators and ', highlight: false },
			{ text: 'BC Fusion', highlight: true },
			{ text: ' token migration.', highlight: false }
		]);
	});

	it('prefers longer matches', () => {
		const segments = highlightSegments('opBNB (op-geth) tuning', ['opBNB', 'op-geth', 'op']);
		expect(segments.some((s) => s.text === 'opBNB' && s.highlight)).toBe(true);
		expect(segments.some((s) => s.text === 'op-geth' && s.highlight)).toBe(true);
	});
});
