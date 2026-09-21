<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Dylan Huang — Backend & Distributed Systems</title>
	<meta
		name="description"
		content="Senior Backend & Distributed Systems Engineer | Ex-BNB Chain Core Developer"
	/>
</svelte:head>

{@render children()}
