/** Longest-first so "BEP-299" wins over "BEP" if both existed. */
const DEFAULT_TERMS = [
	'State Root Mismatch',
	'Sparse Merkle Tree',
	'Beacon Chain & BSC merger',
	'orchestration Saga pattern',
	'Saga pattern',
	'zero-downtime',
	'Testnet to Mainnet',
	'BC Fusion',
	'BEP-131',
	'BEP-299',
	'BEP-333',
	'BSC#926',
	'diffLayer',
	'op-geth',
	'opBNB',
	'zkbnb-smt',
	'reth-bsc',
	'Cosmos-SDK',
	'CometBFT',
	'Greenfield',
	'Prometheus',
	'Grafana',
	'Terraform',
	'RabbitMQ',
	'Vegeta',
	'GraphQL',
	'Microservices',
	'go-kit',
	'gRPC',
	'Kafka',
	'Redis',
	'NoSQL',
	'LLM',
	'Geth',
	'Rust',
	'Go',
	'5x'
];

/** Evidence links for protocol artifacts — display stays short (term text only). */
export const TERM_LINKS: Record<string, string> = {
	'BEP-131': 'https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP131.md',
	'BEP-299': 'https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP-299.md',
	'BEP-333': 'https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP333.md',
	'BSC#926': 'https://github.com/bnb-chain/bsc/pull/926'
};

export type TextSegment = {
	text: string;
	highlight: boolean;
	href?: string;
};

export function highlightSegments(
	input: string,
	terms: string[] = DEFAULT_TERMS,
	links: Record<string, string> = TERM_LINKS
): TextSegment[] {
	if (!input) return [];

	const pattern = terms
		.slice()
		.sort((a, b) => b.length - a.length)
		.map((term) => `\\b${escapeRegExp(term)}\\b`)
		.join('|');

	if (!pattern) return [{ text: input, highlight: false }];

	const regex = new RegExp(`(${pattern})`, 'g');
	const parts = input.split(regex);

	return parts
		.filter((part) => part.length > 0)
		.map((part) => {
			const highlight = terms.some((term) => term === part);
			const href = links[part];
			return href
				? { text: part, highlight: true, href }
				: { text: part, highlight };
		});
}

function escapeRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
