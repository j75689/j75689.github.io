<script lang="ts">
	let { email }: { email: string } = $props();

	let toast = $state<string | null>(null);
	let resetToast: ReturnType<typeof setTimeout> | null = null;

	async function copy() {
		try {
			await navigator.clipboard.writeText(email);
			toast = 'Email copied';
		} catch {
			toast = email;
		}

		if (resetToast) {
			clearTimeout(resetToast);
		}

		resetToast = setTimeout(() => {
			toast = null;
			resetToast = null;
		}, 2500);
	}
</script>

<div class="space-y-2">
	<button
		type="button"
		class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[var(--color-text)] transition hover:border-[rgba(243,186,47,0.35)] hover:text-[var(--color-accent)]"
		onclick={copy}
	>
		Email (Copy)
	</button>

	{#if toast}
		<p class="text-sm text-[var(--color-muted)]" role="status">
			{toast}
			{#if toast === email}
				<span> - </span>
				<a class="text-[var(--color-accent)] underline" href={`mailto:${email}`}>mailto</a>
			{/if}
		</p>
	{/if}
</div>
