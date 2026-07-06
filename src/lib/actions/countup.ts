/** Counts the element's text from 0 to `target` when it scrolls into view. */
export function countup(
	node: HTMLElement,
	{ target, suffix = '', duration = 1400 }: { target: number; suffix?: string; duration?: number }
) {
	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	node.textContent = reduced ? `${target}${suffix}` : `0${suffix}`;

	const observer = new IntersectionObserver(
		(entries) => {
			if (!entries.some((e) => e.isIntersecting) || reduced) return;
			observer.disconnect();
			const start = performance.now();
			const tick = (now: number) => {
				const t = Math.min((now - start) / duration, 1);
				const eased = 1 - Math.pow(1 - t, 3);
				node.textContent = `${Math.round(target * eased)}${suffix}`;
				if (t < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		},
		{ threshold: 0.5 }
	);

	observer.observe(node);
	return {
		destroy() {
			observer.disconnect();
		}
	};
}
