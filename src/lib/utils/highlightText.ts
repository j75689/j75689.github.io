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

export type TextSegment = {
	text: string;
	highlight: boolean;
};

export function highlightSegments(
	input: string,
	terms: string[] = DEFAULT_TERMS
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
		.map((part) => ({
			text: part,
			highlight: terms.some((term) => term === part)
		}));
}

function escapeRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
