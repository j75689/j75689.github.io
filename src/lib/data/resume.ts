import type { Resume } from './types';

export const resume: Resume = {
	profile: {
		name: 'Dylan Huang',
		title: 'Senior Backend & Distributed Systems Engineer | Ex-BNB Chain Core Developer',
		titleAccent: 'BNB Chain',
		location: 'Taipei, Taiwan',
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
			tags: ['BNB Smart Chain (BSC)', 'EVM', 'Cosmos-SDK', 'CometBFT', 'Reth', 'Geth']
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
			role: 'Core Contributor',
			description:
				'Implemented BEP-131 validator pool changes, supported BC Fusion migration work, and helped scale RPC architecture through asynchronous diffLayer streaming to Redis.',
			url: 'https://github.com/bnb-chain/bsc',
			tags: ['Golang', 'EVM', 'Geth', 'Protocol', ]
		},
		{
			title: 'reth-bsc',
			role: 'Core Contributor',
			description:
				'Developed and tuned the Rust-based BSC execution client for BSC and opBNB workloads, focusing on stable high-throughput propagation under sub-second block times.',
			url: 'https://github.com/bnb-chain/reth-bsc-trail',
			tags: ['Rust', 'Reth', 'Performance']
		},
		{
			title: 'zkBNB-SMT',
			role: 'Core Developer',
			description:
				'Engineered the Sparse Merkle Tree state structure and optimized storage layer used for zkBNB state-root verification workloads.',
			url: 'https://github.com/bnb-chain/zkbnb-smt',
			tags: ['Golang', 'Sparse Merkle Tree', 'Storage']
		},
		{
			title: 'Greenfield',
			role: 'Core Protocol Developer',
			description:
				'Built core blockchain protocol functionality on Cosmos-SDK and CometBFT and supported the launch from testnet to mainnet.',
			url: 'https://github.com/bnb-chain/greenfield',
			tags: ['Cosmos-SDK', 'CometBFT', 'Golang', 'Distributed Storage']
		},
		{
			title: 'Tmaster',
			role: 'Core Developer',
			url: 'https://github.com/j75689/Tmaster',
			description:
				'Saga Pattern Orchestrator inspired by AWS Step Functions, designed specifically for complex serverless applications and distributed architectures.',
			tags: ['Golang', 'go-kit', 'Docker', 'K8s', 'Redis', 'SQL', 'Payments', 'Microservices', 'Event Driven', 'Message Queue(Nats, Google Pub/Sub)']
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
				'Delivered protocol upgrades including BEP-131 and BC Fusion migration work.',
				'Maintained Go and Rust execution clients across BSC, opBNB, and related systems.',
				'Led release, testing, and observability work for mainnet reliability.'
			],
			details: [
				'Implemented BEP-131 candidate validator mechanisms in Go to broaden the validator pool while preserving backward compatibility.',
				'Engineered the token migration path for BC Fusion through BEP-299 and BEP-333 to support secure asset movement and zero-downtime data migration.',
				'Maintained the bsc Geth client in Go and developed reth-bsc in Rust for BSC and opBNB layers.',
				'Optimized opBNB execution and consensus clients for stable high-throughput block propagation under sub-second block times using memory and CPU profiling.',
				'Engineered zkbnb-smt and its optimized storage layer for high-performance Sparse Merkle Tree state-root verification.',
				'Worked as a core developer for Greenfield on Cosmos-SDK and CometBFT and supported the launch from testnet to mainnet.',
				'Refactored the bsc client to asynchronously stream diffLayer memory state changes into Redis so heavy RPC reads were decoupled from core execution nodes.',
				'Co-developed the fast-node verification framework and resolved state root mismatch bugs caused by concurrent diffLayer transitions during optimistic verification.',
				'Led release engineering for bsc, reth-bsc, and Greenfield with shadow syncing, regression tests, migration dry-runs, stress testing, and production monitoring design.'
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
		years: '2013 - 2017'
	},
	cta: {
		heading: "Let's Connect",
		body: 'Discussing execution clients, distributed storage, or protocols.',
		primaryLabel: 'Say Hello',
		secondaryLabel: 'View GitHub'
	}
};
