import type { Resume } from './types';

export const resume: Resume = {
	profile: {
		name: 'Dylan Huang',
		title: 'Senior Backend & Distributed Systems Engineer | Ex-BNB Chain Core Developer',
		titleAccent: 'BNB Chain',
		location: 'Global Remote / Taipei, Taiwan',
		availability:
			'Open for full-time remote roles, part-time contracts, and senior architect work; relocation to Japan is open for discussion.',
		summary:
			'Over 8 years of software engineering experience specializing in blockchain core protocols and high-performance distributed systems. Core contributor to BNB Chain with hardfork delivery, multi-client Go and Rust development, and high-throughput backend architecture experience.',
		links: {
			github: 'https://github.com/j75689',
			linkedin: 'https://www.linkedin.com/in/02470b111',
			email: 'j75689@gmail.com'
		}
	},
	skills: [
		{
			name: 'Core Languages',
			tags: ['Golang (Expert)', 'Rust', 'JavaScript', 'SQL', 'Shell']
		},
		{
			name: 'Blockchain & Protocol',
			tags: ['BNB Smart Chain (BSC)', 'EVM', 'opBNB', 'Cosmos-SDK', 'CometBFT', 'Reth', 'Geth']
		},
		{
			name: 'Backend & Systems',
			tags: ['Microservices', 'go-kit', 'gRPC', 'API', 'Saga Pattern', 'Kafka', 'MySQL', 'Redis']
		},
		{
			name: 'Infrastructure & Observability',
			tags: [
				'AWS (ECS, Aurora, CloudHSM)',
				'Kubernetes (GKE)',
				'Terraform',
				'Docker',
				'CI/CD',
				'ArgoCD',
				'GitHub Action',
				'Prometheus',
				'Grafana',
				'EFK Stack'
			]
		}
	],
	projects: [
		{
			title: 'BNB Smart Chain (BSC Core)',
			category: 'opensource',
			role: 'Core Contributor',
			description:
				'Hardfork work (BEP-131, BC Fusion), HA RPC via async diffLayer→Redis streaming, and fast-node verification (BSC#926) with state-root consistency under high load.',
			url: 'https://github.com/bnb-chain/bsc',
			tags: ['Golang', 'EVM', 'Geth', 'Redis', 'Protocol']
		},
		{
			title: 'reth-bsc',
			category: 'opensource',
			role: 'Core Contributor',
			description:
				'Rust BSC execution client for BSC and opBNB; performance tuning for stable, high-throughput block propagation under sub-second block times.',
			url: 'https://github.com/bnb-chain/reth-bsc-trail',
			tags: ['Rust', 'Reth', 'opBNB', 'Performance']
		},
		{
			title: 'zkBNB-SMT',
			category: 'opensource',
			role: 'Core Developer',
			description:
				'Core Sparse Merkle Tree state structure and optimized storage layer for zkBNB cryptographic state-root verification.',
			url: 'https://github.com/bnb-chain/zkbnb-smt',
			tags: ['Golang', 'Sparse Merkle Tree', 'Storage']
		},
		{
			title: 'Greenfield',
			category: 'opensource',
			role: 'Core Protocol Developer',
			description:
				'Decentralized storage chain protocol on Cosmos-SDK and CometBFT; contributed through testnet and mainnet launch.',
			url: 'https://github.com/bnb-chain/greenfield',
			tags: ['Cosmos-SDK', 'CometBFT', 'Golang', 'Distributed Storage']
		},
		{
			title: 'opBNB (op-geth)',
			category: 'opensource',
			role: 'Performance / Client Tuning',
			description:
				'Optimized opBNB execution and consensus clients for sub-second block times with memory and CPU profiling under high throughput.',
			url: 'https://github.com/bnb-chain/op-geth',
			tags: ['Golang', 'opBNB', 'op-geth', 'Performance']
		},
		{
			title: 'BNB Beacon Chain (node)',
			category: 'opensource',
			role: 'Core Contributor',
			description:
				'Beacon Chain client built on Tendermint/Cosmos-style app logic—native assets, staking/governance, and cross-chain features that underpinned BC Fusion with BSC.',
			url: 'https://github.com/bnb-chain/node',
			tags: ['Golang', 'Tendermint', 'Beacon Chain', 'BEP-2', 'Protocol']
		},
		{
			title: 'node-deploy',
			category: 'opensource',
			role: 'Core Contributor',
			description:
				'BSC local/cluster deployment tooling for validator and full-node setups, genesis configuration, and sync/stress test environments used in protocol validation.',
			url: 'https://github.com/bnb-chain/node-deploy',
			tags: ['BSC', 'DevOps', 'Cluster', 'Genesis', 'Testing']
		},
		{
			title: 'node-dump',
			category: 'opensource',
			role: 'Core Contributor',
			description:
				'Beacon Chain state dump and Merkle proof tooling for BC Fusion—preserving account/asset access after Beacon Chain decommission via verifiable proofs.',
			url: 'https://github.com/bnb-chain/node-dump',
			tags: ['Golang', 'BC Fusion', 'Merkle Proof', 'Beacon Chain', 'Migration']
		},
		{
			title: 'Tmaster',
			category: 'self',
			role: 'Core Developer',
			url: 'https://github.com/j75689/Tmaster',
			description:
				'Saga Pattern Orchestrator inspired by AWS Step Functions, designed for complex serverless applications and distributed architectures.',
			tags: ['Golang', 'Saga', 'Microservices', 'Redis', 'Event Driven']
		},
		{
			title: 'GopherScraper',
			category: 'self',
			role: 'Author',
			url: 'https://github.com/j75689/goscraper',
			description:
				'High-performance Go CLI crawler with YAML configuration-as-code. Extracts structured data from HTML, JSON, XML, and YAML via concurrent workers, rate limiting, and pluggable resolvers.',
			tags: ['Golang', 'CLI', 'YAML', 'Crawler', 'HTML', 'JSON']
		}
	],
	experience: [
		{
			company: 'Independent',
			title: 'Senior Systems Engineer (Dataflow & Automation)',
			dates: 'June 2025 – Present',
			location: 'Global Remote',
			highlights: [
				'Built an autonomous intelligence pipeline for live web news ingestion.',
				'Designed a zero-ops serverless architecture with retries and async processing.',
				'Integrated LLM-driven document synthesis and developer automation workflows.'
			],
			details: [
				'Engineered an end-to-end dataflow that crawls, filters, and ingests live web news into cloud NoSQL document stores for structured intelligence.',
				'Designed a self-healing, cost-optimized serverless pipeline with automated scheduling, exponential backoff retries, and asynchronous payload processing.',
				'Integrated frontier LLM APIs for multi-source document distillation and used AI coding agents to accelerate feature iteration.'
			]
		},
		{
			company: 'BNB Chain',
			companyUrl: 'https://github.com/bnb-chain',
			title: 'Senior Blockchain Developer',
			dates: 'June 2021 – May 2025',
			location: 'Global Remote',
			highlights: [
				'Core protocol contributor on one of the world’s most active chains—hardforks, multi-client clients, and mainnet reliability.',
				'Shipped BEP-131 candidate validators and BC Fusion token migration (BEP-299 / BEP-333) with zero-downtime constraints.',
				'Built HA RPC (diffLayer→Redis), fast-node verification (BSC#926), and led release/stress/observability for bsc, reth-bsc, and Greenfield.'
			],
			details: [
				'Implemented BEP-131 candidate validator mechanisms in Go (Geth), broadening the validator pool and strengthening decentralization without breaking backward compatibility.',
				'Engineered BC Fusion token migration for BEP-299 and BEP-333 (Beacon Chain & BSC merger), including secure asset bridging and zero-downtime data migration.',
				'Maintained bsc (Geth) and developed reth-bsc (Rust) for BSC and opBNB layers.',
				'Optimized opBNB (op-geth) execution and consensus clients for stable high-throughput block propagation under sub-second block times via memory and CPU profiling.',
				'Engineered zkbnb-smt—the Sparse Merkle Tree state structure and optimized storage layer for zkBNB cryptographic state-root verification.',
				'Core developer for Greenfield on Cosmos-SDK and CometBFT; supported Testnet to Mainnet launch.',
				'Refactored bsc to asynchronously stream diffLayer memory state changes into Redis, decoupling heavy RPC reads from execution nodes and enabling horizontal RPC scale-out.',
				'Co-developed the fast-node verification framework (BSC#926) and fixed State Root Mismatch bugs from concurrent diffLayer transitions during optimistic verification.',
				'Led end-to-end release engineering for bsc, reth-bsc, and Greenfield: shadow syncing, multi-node regression, and full-scale migration dry-runs for zero-downtime upgrades.',
				'Ran peak-load stress tests and production monitoring with Prometheus/Grafana, including alerting thresholds for early bottleneck detection.',
				'Owned feature guarding and integration test environments with cross-functional teams to prevent regressions before mainnet upgrades.'
			]
		},
		{
			company: 'Silkrode Technologies',
			title: 'Golang Engineer',
			dates: 'April 2020 – May 2021',
			location: 'Taipei, Taiwan',
			highlights: [
				'Built a distributed payment gateway with the orchestration Saga pattern.',
				'Developed high-throughput services with gRPC and Kafka.',
				'Improved performance with K-line analysis optimization and stress testing.'
			],
			details: [
				'Engineered a high-availability financial payment API using go-kit microservices, Redis, and message queues with transactional atomicity across distributed flows.',
				'Developed user log and content services using gRPC and Kafka for high-throughput workloads.',
				'Optimized K-line data analysis and conducted end-to-end stress tests with Vegeta.'
			]
		},
		{
			company: 'Noodoe Inc.',
			title: 'DevOps Engineer',
			dates: 'August 2019 – March 2020',
			location: 'Taipei, Taiwan',
			highlights: [
				'Managed AWS infrastructure and Kafka clusters with Terraform.',
				'Built a Slack-based operations tool in Go and React.',
				'Set up Prometheus, Grafana, and EFK observability for Kubernetes clusters.'
			],
			details: [
				'Managed AWS infrastructure and Kafka clusters through infrastructure as code with Terraform.',
				'Developed a Slack-based ChatOps tool in Go and React for secure database management.',
				'Set up Prometheus, Grafana, and EFK logging for Kubernetes clusters.'
			]
		},
		{
			company: 'Hyweb',
			title: 'Software Engineer',
			dates: 'August 2017 – July 2019',
			location: 'Taipei, Taiwan',
			highlights: [
				'Helped transition a legacy Java monolith into microservices.',
				'Built a Go-based crawler with TF-IDF text analysis.',
				'Improved indexing performance by 5x using RabbitMQ.'
			],
			details: [
				'Transitioned a legacy Java monolith into a microservices architecture using Go, React, and GraphQL.',
				'Built a Go-based web crawler with TF-IDF text analysis algorithms.',
				'Improved indexing performance by 5x with RabbitMQ-backed processing.'
			]
		}
	],
	education: {
		degree: 'B.S. in Information Management',
		school: 'National Yunlin University of Science and Technology (NYUST)',
		years: 'Sep 2013 – Jun 2017'
	},
	cta: {
		heading: "Let's Connect",
		body: 'Discussing execution clients, distributed storage, or protocols.',
		primaryLabel: 'Say Hello',
		secondaryLabel: 'View GitHub'
	}
};
