# Dylan Huang
**Senior Backend & Distributed Systems Engineer | Ex-BNB Chain Core Developer**

- GitHub: https://github.com/j75689
- LinkedIn: https://www.linkedin.com/in/02470b111
- Email: j75689@gmail.com

Global Remote / Taipei, Taiwan
**Availability:** Open for full-time remote roles, part-time contracts, and senior architect work; relocation to Japan is open for discussion.

---

## Profile Summary
Over 8 years of software engineering experience specializing in blockchain core protocols and high-performance distributed systems. Core contributor to BNB Chain with hardfork delivery, multi-client Go and Rust development, and high-throughput backend architecture experience.

---

## Technical Stack

| Category | Skills |
| :--- | :--- |
| **Core Languages** | Golang (Expert), Rust, JavaScript, SQL, Shell |
| **Blockchain & Protocol** | BNB Smart Chain (BSC), EVM, opBNB, Cosmos-SDK, CometBFT, Reth, Geth |
| **Backend & Systems** | Microservices, go-kit, gRPC, API, Saga Pattern, Kafka, MySQL, Redis |
| **Infrastructure & Observability** | AWS (ECS, Aurora, CloudHSM), Kubernetes (GKE), Terraform, Docker, CI/CD, ArgoCD, GitHub Action, Prometheus, Grafana, EFK Stack |

---

## Featured Projects
### Self Project
- **[Tmaster](https://github.com/j75689/Tmaster)** (Core Developer): Saga Pattern Orchestrator inspired by AWS Step Functions, designed for complex serverless applications and distributed architectures.
- **[GopherScraper](https://github.com/j75689/goscraper)** (Author): High-performance Go CLI crawler with YAML configuration-as-code. Extracts structured data from HTML, JSON, XML, and YAML via concurrent workers, rate limiting, and pluggable resolvers.

### Open Source Contribute
- **[BNB Smart Chain (BSC Core)](https://github.com/bnb-chain/bsc)** (Core Contributor): Hardfork work (BEP-131, BC Fusion), HA RPC via async diffLayer→Redis streaming, and fast-node verification (BSC#926) with state-root consistency under high load.
- **[reth-bsc](https://github.com/bnb-chain/reth-bsc-trail)** (Core Contributor): Rust BSC execution client for BSC and opBNB; performance tuning for stable, high-throughput block propagation under sub-second block times.
- **[zkBNB-SMT](https://github.com/bnb-chain/zkbnb-smt)** (Core Developer): Core Sparse Merkle Tree state structure and optimized storage layer for zkBNB cryptographic state-root verification.
- **[Greenfield](https://github.com/bnb-chain/greenfield)** (Core Protocol Developer): Decentralized storage chain protocol on Cosmos-SDK and CometBFT; contributed through testnet and mainnet launch.
- **[opBNB (op-geth)](https://github.com/bnb-chain/op-geth)** (Performance / Client Tuning): Optimized opBNB execution and consensus clients for sub-second block times with memory and CPU profiling under high throughput.
- **[BNB Beacon Chain (node)](https://github.com/bnb-chain/node)** (Core Contributor): Beacon Chain client built on Tendermint/Cosmos-style app logic—native assets, staking/governance, and cross-chain features that underpinned BC Fusion with BSC.
- **[node-deploy](https://github.com/bnb-chain/node-deploy)** (Core Contributor): BSC local/cluster deployment tooling for validator and full-node setups, genesis configuration, and sync/stress test environments used in protocol validation.
- **[node-dump](https://github.com/bnb-chain/node-dump)** (Core Contributor): Beacon Chain state dump and Merkle proof tooling for BC Fusion—preserving account/asset access after Beacon Chain decommission via verifiable proofs.

---

## Work Experience

### Independent | Senior Systems Engineer (Dataflow & Automation)
*June 2025 – Present | Global Remote*

- Engineered an end-to-end dataflow that crawls, filters, and ingests live web news into cloud NoSQL document stores for structured intelligence.
- Designed a self-healing, cost-optimized serverless pipeline with automated scheduling, exponential backoff retries, and asynchronous payload processing.
- Integrated frontier LLM APIs for multi-source document distillation and used AI coding agents to accelerate feature iteration.

### [BNB Chain](https://github.com/bnb-chain) | Senior Blockchain Developer
*June 2021 – May 2025 | Global Remote*

- Implemented BEP-131 candidate validator mechanisms in Go (Geth), broadening the validator pool and strengthening decentralization without breaking backward compatibility.
- Engineered BC Fusion token migration for BEP-299 and BEP-333 (Beacon Chain & BSC merger), including secure asset bridging and zero-downtime data migration.
- Maintained bsc (Geth) and developed reth-bsc (Rust) for BSC and opBNB layers.
- Optimized opBNB (op-geth) execution and consensus clients for stable high-throughput block propagation under sub-second block times via memory and CPU profiling.
- Engineered zkbnb-smt—the Sparse Merkle Tree state structure and optimized storage layer for zkBNB cryptographic state-root verification.
- Core developer for Greenfield on Cosmos-SDK and CometBFT; supported Testnet to Mainnet launch.
- Refactored bsc to asynchronously stream diffLayer memory state changes into Redis, decoupling heavy RPC reads from execution nodes and enabling horizontal RPC scale-out.
- Co-developed the fast-node verification framework (BSC#926) and fixed State Root Mismatch bugs from concurrent diffLayer transitions during optimistic verification.
- Led end-to-end release engineering for bsc, reth-bsc, and Greenfield: shadow syncing, multi-node regression, and full-scale migration dry-runs for zero-downtime upgrades.
- Ran peak-load stress tests and production monitoring with Prometheus/Grafana, including alerting thresholds for early bottleneck detection.
- Owned feature guarding and integration test environments with cross-functional teams to prevent regressions before mainnet upgrades.

### Silkrode Technologies | Golang Engineer
*April 2020 – May 2021 | Taipei, Taiwan*

- Engineered a high-availability financial payment API using go-kit microservices, Redis, and message queues with transactional atomicity across distributed flows.
- Developed user log and content services using gRPC and Kafka for high-throughput workloads.
- Optimized K-line data analysis and conducted end-to-end stress tests with Vegeta.

### Noodoe Inc. | DevOps Engineer
*August 2019 – March 2020 | Taipei, Taiwan*

- Managed AWS infrastructure and Kafka clusters through infrastructure as code with Terraform.
- Developed a Slack-based ChatOps tool in Go and React for secure database management.
- Set up Prometheus, Grafana, and EFK logging for Kubernetes clusters.

### Hyweb | Software Engineer
*August 2017 – July 2019 | Taipei, Taiwan*

- Transitioned a legacy Java monolith into a microservices architecture using Go, React, and GraphQL.
- Built a Go-based web crawler with TF-IDF text analysis algorithms.
- Improved indexing performance by 5x with RabbitMQ-backed processing.

---

## Education
- **B.S. in Information Management**
  National Yunlin University of Science and Technology (NYUST) | Sep 2013 – Jun 2017

---

## Let's Connect
Discussing execution clients, distributed storage, or protocols.

- Email: j75689@gmail.com
- LinkedIn: https://www.linkedin.com/in/02470b111
- GitHub: https://github.com/j75689

---

<!-- Generated from src/lib/data/resume.ts - do not edit by hand -->
