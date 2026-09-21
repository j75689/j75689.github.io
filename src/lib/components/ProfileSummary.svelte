<script lang="ts">
	let { summary }: { summary: string } = $props();
</script>

<section class="space-y-4">
	<p class="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
		PROFILE SUMMARY
	</p>

	<div class="glass p-6 sm:p-7">
		<p class="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
			{summary}
		</p>
	</div>
</section>
