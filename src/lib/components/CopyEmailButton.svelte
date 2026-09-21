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
	Email (Copy)
</button>
