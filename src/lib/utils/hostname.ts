export function hostnameFromUrl(url: string): string | null {
	if (!url) return null;

	try {
		return new URL(url).hostname;
	} catch {
		return null;
	}
}
