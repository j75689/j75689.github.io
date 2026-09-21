<script lang="ts">
	let { email }: { email: string } = $props();

	async function copy() {
		try {
			await navigator.clipboard.writeText(email);
		} catch {
			window.location.href = `mailto:${email}`;
		}
	}
</script>

<button
	type="button"
	class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[var(--color-text)] transition hover:border-[rgba(243,186,47,0.35)] hover:text-[var(--color-accent)]"
	onclick={copy}
>
	<svg class="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="1.8" aria-hidden="true">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M3.75 6.75h16.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z"
		/>
		<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 7.5 7.5 6 7.5-6" />
	</svg>
	Email (Copy)
</button>
