<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Plane, Star, MessageCircle } from '@lucide/svelte';
	import mapData from '$lib/data/mappins.json';

	type Country = {
		id: string;
		name: string;
		flag: string;
		url: string;
		featured?: boolean;
	};

	const base = 'https://nechalim-ins.com/student-insurance';
	const countries: Country[] = [
		{ id: 'hungary', name: 'הונגריה', flag: 'hu', url: `${base}/hungary/`, featured: true },
		{ id: 'italy', name: 'איטליה', flag: 'it', url: `${base}/italy/`, featured: true },
		{ id: 'usa', name: 'ארה״ב', flag: 'us', url: `${base}/usa/`, featured: true },
		{ id: 'lithuania', name: 'ליטא', flag: 'lt', url: `${base}/lithuania/`, featured: true },
		{ id: 'romania', name: 'רומניה', flag: 'ro', url: `${base}/romania/`, featured: true },
		{ id: 'georgia', name: 'גאורגיה', flag: 'ge', url: `${base}/georgia/`, featured: true },
		{ id: 'czechia', name: 'צ׳כיה', flag: 'cz', url: `${base}/czechia/`, featured: true },
		{ id: 'austria', name: 'אוסטריה', flag: 'at', url: `${base}/austria/` },
		{ id: 'england', name: 'אנגליה', flag: 'gb-eng', url: `${base}/england/` },
		{ id: 'germany', name: 'גרמניה', flag: 'de', url: `${base}/germany/` },
		{ id: 'netherlands', name: 'הולנד', flag: 'nl', url: `${base}/netherlands/` },
		{ id: 'japan', name: 'יפן', flag: 'jp', url: `${base}/asia/` },
		{ id: 'jordan', name: 'ירדן', flag: 'jo', url: `${base}/jordan/` },
		{ id: 'latvia', name: 'לטביה', flag: 'lv', url: `${base}/latvia/` },
		{ id: 'moldova', name: 'מולדובה', flag: 'md', url: `${base}/moldova/` },
		{ id: 'china', name: 'סין', flag: 'cn', url: `${base}/asia/` },
		{ id: 'slovakia', name: 'סלובקיה', flag: 'sk', url: `${base}/slovakia/` },
		{ id: 'spain', name: 'ספרד', flag: 'es', url: `${base}/spain/` },
		{ id: 'poland', name: 'פולין', flag: 'pl', url: `${base}/poland/` },
		{ id: 'france', name: 'צרפת', flag: 'fr', url: `${base}/france/` },
		{ id: 'korea', name: 'קוריאה הדרומית', flag: 'kr', url: `${base}/asia/` },
		{ id: 'croatia', name: 'קרואטיה', flag: 'hr', url: `${base}/croatia/` },
		{ id: 'switzerland', name: 'שוויץ', flag: 'ch', url: `${base}/switzerland/` }
	];

	const waOther =
		'https://wa.me/972525605336?text=' +
		encodeURIComponent('שלום, אשמח לקבל פרטים לגבי ביטוח הסטודנטים של נחלים. הגעתי דרך האתר.');

	const pins: Record<string, { x: number; y: number }> = mapData.pins;
	const VB_W = 186;
	const VB_H = 56;
	const israel = pins.israel;

	let active = $state<Country>(countries[0]);
	let userTouched = $state(false);

	// Slow auto-tour over the featured destinations until the user interacts.
	$effect(() => {
		if (userTouched) return;
		const featured = countries.filter((c) => c.featured);
		let i = 0;
		const t = setInterval(() => {
			i = (i + 1) % featured.length;
			active = featured[i];
		}, 2800);
		return () => clearInterval(t);
	});

	function select(c: Country) {
		userTouched = true;
		active = c;
	}

	// Flight path: quadratic curve from Israel to the active pin, arcing upward.
	const flight = $derived.by(() => {
		const to = pins[active.id];
		const x1 = (israel.x / 100) * VB_W;
		const y1 = (israel.y / 100) * VB_H;
		const x2 = (to.x / 100) * VB_W;
		const y2 = (to.y / 100) * VB_H;
		const dist = Math.hypot(x2 - x1, y2 - y1);
		const cx = (x1 + x2) / 2;
		const cy = Math.min(y1, y2) - Math.max(4, dist * 0.25);
		return { d: `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`, x2, y2 };
	});
</script>

<section class="countries" id="countries">
	<div class="container">
		<div class="head" use:reveal>
			<span class="kicker dark">25 יעדים · מחיר לפי מדינה</span>
			<h2 class="section-title">
				אז כמה זה יעלה בפועל?<br />
				<span class="hl">בחרו את המדינה שלכם</span>
			</h2>
			<p class="lede">לכל מדינה עמוד משלה עם מחירים מדויקים, מסלולים והטבות. טיסה קצרה משם.</p>
		</div>

		<div class="map-wrap" use:reveal={120}>
			<div class="map-inner">
				<img class="map-dots" src="/img/worldmap-dots.svg" alt="" loading="lazy" draggable="false" />

				<svg
					class="flight"
					viewBox="0 0 {VB_W} {VB_H}"
					preserveAspectRatio="none"
					aria-hidden="true"
				>
					{#key active.id}
						<path class="flight-path" d={flight.d} pathLength="1" />
					{/key}
				</svg>

				<div class="pin home" style="left: {israel.x}%; top: {israel.y}%">
					<span class="home-dot"></span>
					<span class="home-label">אתם כאן ✈️</span>
				</div>

				{#each countries as c (c.id)}
					<div
						class="pin dest"
						class:active={active.id === c.id}
						style="left: {pins[c.id].x}%; top: {pins[c.id].y}%"
					>
					<span class="dest-dot"></span>
					{#if active.id === c.id}
						<span class="dest-label">
							<img class="flag-img" src="https://flagcdn.com/w40/{c.flag}.png" alt="" />
							{c.name}
						</span>
					{/if}
					</div>
				{/each}
			</div>
		</div>

		<div class="chips" use:reveal={180}>
			{#each countries as c (c.id)}
				<a
					class="chip"
					class:featured={c.featured}
					class:active={active.id === c.id}
					href={c.url}
					target="_blank"
					rel="noopener"
					onmouseenter={() => select(c)}
					onfocus={() => select(c)}
					onclick={() => select(c)}
				>
					<img
						class="flag-img"
						src="https://flagcdn.com/w40/{c.flag}.png"
						alt=""
						loading="lazy"
					/>
					{c.name}
					{#if c.featured}
						<Star class="star" size={12} strokeWidth={2.4} fill="currentColor" />
					{/if}
				</a>
			{/each}
		</div>

		<div class="other" use:reveal={220}>
			<p>לומדים במדינה אחרת? יש פתרון גם לזה.</p>
			<a class="btn btn-yellow" href={waOther} target="_blank" rel="noopener">
				<MessageCircle size={17} strokeWidth={2.2} />
				דברו איתנו
			</a>
		</div>
	</div>
	<div class="glow" aria-hidden="true"></div>
	<Plane class="deco-plane" aria-hidden="true" />
</section>

<style>
	.countries {
		position: relative;
		padding-block: var(--space-10);
		background: var(--color-brand-navy-900);
		color: var(--color-text-inverse);
		overflow: hidden;
	}

	.glow {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background:
			radial-gradient(560px 320px at 18% 0%, rgba(75, 140, 192, 0.28), transparent 70%),
			radial-gradient(460px 300px at 85% 100%, rgba(75, 140, 192, 0.18), transparent 70%);
	}

	.container {
		position: relative;
		z-index: 1;
	}

	.head {
		text-align: center;
		max-width: 44rem;
		margin-inline: auto;
	}

	.kicker.dark {
		background: rgba(75, 140, 192, 0.22);
		color: var(--color-brand-sky-100);
	}

	.countries .section-title {
		color: var(--color-text-inverse);
	}

	.lede {
		margin-top: var(--space-4);
		color: var(--color-brand-sky-200);
		font-size: 17px;
	}

	/* ── Map ──────────────────────────────────────────────── */
	.map-wrap {
		margin-top: var(--space-7);
		user-select: none;
	}

	.map-inner {
		position: relative;
	}

	.map-dots {
		width: 100%;
		height: auto;
		display: block;
		opacity: 0.55;
		-webkit-mask-image: radial-gradient(115% 100% at 50% 45%, #000 62%, transparent 98%);
		mask-image: radial-gradient(115% 100% at 50% 45%, #000 62%, transparent 98%);
	}

	.flight {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		overflow: visible;
		pointer-events: none;
	}

	.flight-path {
		fill: none;
		stroke: var(--color-brand-yellow-500);
		stroke-width: 0.5;
		stroke-linecap: round;
		stroke-dasharray: 0.028 0.014;
		stroke-dashoffset: 1;
		opacity: 0.9;
		animation: fly 1.1s cubic-bezier(0.45, 0, 0.25, 1) forwards;
	}

	@keyframes fly {
		from {
			stroke-dashoffset: 1;
		}
		to {
			stroke-dashoffset: 0;
		}
	}

	/* ── Pins ─────────────────────────────────────────────── */
	.pin {
		position: absolute;
		translate: -50% -50%;
		pointer-events: none;
		display: grid;
		place-items: center;
	}

	.home-dot {
		width: 9px;
		height: 9px;
		background: var(--color-brand-yellow-500);
		border-radius: var(--radius-full);
		box-shadow: 0 0 0 0 rgba(249, 192, 78, 0.55);
		animation: home-pulse 2.2s ease-out infinite;
	}

	@keyframes home-pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(249, 192, 78, 0.55);
		}
		70% {
			box-shadow: 0 0 0 12px rgba(249, 192, 78, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(249, 192, 78, 0);
		}
	}

	.home-label {
		position: absolute;
		top: 100%;
		margin-top: 6px;
		font-size: 12px;
		font-weight: 700;
		color: var(--color-brand-yellow-500);
		white-space: nowrap;
	}

	.dest-dot {
		width: 6px;
		height: 6px;
		background: var(--color-brand-sky-200);
		border-radius: var(--radius-full);
		opacity: 0.75;
		transition: all var(--transition);
	}

	.pin.dest.active .dest-dot {
		width: 12px;
		height: 12px;
		background: var(--color-brand-yellow-500);
		opacity: 1;
		box-shadow: 0 0 0 5px rgba(249, 192, 78, 0.25);
	}

	.dest-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		position: absolute;
		bottom: 100%;
		margin-bottom: 8px;
		background: var(--color-bg-default);
		color: var(--color-text-heading);
		font-size: 13px;
		font-weight: 700;
		padding: 4px 12px;
		border-radius: var(--radius-full);
		white-space: nowrap;
		box-shadow: var(--shadow-md);
		animation: label-pop 0.3s cubic-bezier(0.22, 1, 0.36, 1);
	}

	@keyframes label-pop {
		from {
			opacity: 0;
			translate: 0 6px;
		}
	}

	/* ── Chips ────────────────────────────────────────────── */
	.chips {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-2);
		margin-top: var(--space-7);
	}

	.chip {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 8px 15px;
		border-radius: var(--radius-full);
		border: 1px solid rgba(232, 242, 244, 0.22);
		background: rgba(232, 242, 244, 0.06);
		color: var(--color-brand-sky-100);
		font-size: 14px;
		font-weight: 600;
		text-decoration: none;
		transition: all var(--transition);
	}

	.flag-img {
		width: 21px;
		height: auto;
		border-radius: 3px;
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18);
	}

	.chip:hover,
	.chip.active {
		background: rgba(75, 140, 192, 0.35);
		border-color: var(--color-brand-blue-500);
		transform: translateY(-2px);
	}

	.chip.featured {
		border-color: rgba(249, 192, 78, 0.45);
		background: rgba(249, 192, 78, 0.09);
		color: #fff;
	}

	.chip.featured:hover,
	.chip.featured.active {
		background: var(--color-brand-yellow-500);
		border-color: var(--color-brand-yellow-500);
		color: var(--color-brand-navy-900);
	}

	.chip :global(.star) {
		color: var(--color-brand-yellow-500);
	}

	.chip.featured:hover :global(.star),
	.chip.featured.active :global(.star) {
		color: var(--color-brand-navy-900);
	}

	/* ── Other-country CTA ────────────────────────────────── */
	.other {
		margin-top: var(--space-7);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-5);
		flex-wrap: wrap;
	}

	.other p {
		font-size: 16px;
		font-weight: 600;
		color: var(--color-brand-sky-200);
	}

	.countries :global(.deco-plane) {
		position: absolute;
		top: 40px;
		inset-inline-end: 6%;
		width: 54px;
		height: 54px;
		color: rgba(232, 242, 244, 0.14);
		transform: rotate(-18deg);
	}

	@media (prefers-reduced-motion: reduce) {
		.flight-path,
		.home-dot,
		.dest-label {
			animation: none;
		}
	}

	@media (max-width: 760px) {
		.countries {
			padding-block: var(--space-8);
		}

		/* Zoom the very wide map into the Europe/Israel cluster on phones.
		   Pins and flight path are % of .map-inner, so they track the zoom. */
		.map-wrap {
			overflow: hidden;
		}

		.map-inner {
			/* In RTL the inline-start (right) margin positions the over-wide box:
			   centers the Israel↔Europe cluster (x ≈ 45–59% of the map). */
			width: 235%;
			margin-inline-start: -63%;
		}

		.map-dots {
			-webkit-mask-image: none;
			mask-image: none;
		}

		.home-label,
		.dest-label {
			font-size: 11px;
		}

		.chips {
			gap: 7px;
			margin-top: var(--space-6);
		}

		.chip {
			font-size: 13px;
			padding: 7px 12px;
		}
	}
</style>
