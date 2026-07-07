<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import nirPortrait from '$lib/assets/people/nir-stilogalo-profile-pic.jpg';
	import { Wallet, Stethoscope, HandCoins, RefreshCw, MoonStar, Play } from '@lucide/svelte';

	const videoId = 'Ba1i6kGB2wI';

	const questions = [
		{ icon: Wallet, text: 'כמה עולה ביטוח סטודנטים, באמת?' },
		{ icon: Stethoscope, text: 'מה קורה אם המצב הרפואי שלי משתנה במהלך הלימודים?' },
		{ icon: HandCoins, text: 'האם אשלם מהכיס על ביקור רופא?' },
		{ icon: RefreshCw, text: 'האם אצטרך לחדש את הביטוח כל שנה מחדש?' },
		{ icon: MoonStar, text: 'מה קורה אם אזדקק לרופא בלילה או בסופ״ש?' }
	];

	let playing = $state(false);
</script>

<section class="questions">
	<div class="container grid">
		<div class="copy" use:reveal>
			<span class="kicker">רגע לפני שסוגרים</span>
			<h2 class="section-title">
				5 שאלות שחייבים לשאול<br />
				<span class="hl">לפני</span> שבוחרים ביטוח
			</h2>
			<p class="lede">
				רוב הסטודנטים מגלים את התשובות רק כשכבר מאוחר מדי. ניר סטילוגלו, מנכ״ל נחלים עם 27 שנות
				ניסיון, מסביר בדקה וחצי מה באמת חשוב לבדוק.
			</p>
			<ul class="q-list">
				{#each questions as q, i (q.text)}
					{@const Icon = q.icon}
					<li use:reveal={i * 80}>
						<span class="icon-circle small"><Icon size={20} strokeWidth={1.8} /></span>
						{q.text}
					</li>
				{/each}
			</ul>
		</div>

		<div class="video-wrap" use:reveal={150}>
			{#if playing}
				<div class="video-embed">
					<iframe
						src="https://www.youtube.com/embed/{videoId}?autoplay=1"
						title="ניר סטילוגלו — 5 שאלות שחייבים לשאול לפני שבוחרים ביטוח"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			{:else}
				<button class="video-card" onclick={() => (playing = true)} aria-label="נגן את הסרטון של ניר סטילוגלו">
					<img class="video-img" src={nirPortrait} alt="ניר סטילוגלו" loading="lazy" />
					<div class="video-overlay"></div>
					<span class="play">
						<Play size={26} strokeWidth={2.4} fill="currentColor" />
					</span>
					<div class="video-caption">
						<strong>ניר סטילוגלו</strong>
						<span>מנכ״ל נחלים · 27 שנים בביטוח · עונה בעצמו בוואטסאפ</span>
					</div>
				</button>
			{/if}
			<div class="sticker">בלי חפירות,<br />90 שניות</div>
		</div>
	</div>
</section>

<style>
	.questions {
		padding-block: var(--space-10);
		background: var(--color-bg-default);
	}

	.grid {
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: var(--space-9);
		align-items: center;
	}

	.lede {
		margin-top: var(--space-4);
		font-size: 17px;
		color: var(--color-text-secondary);
		max-width: 32rem;
	}

	.q-list {
		list-style: none;
		padding: 0;
		margin: var(--space-6) 0 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.q-list li {
		display: flex;
		align-items: center;
		gap: var(--space-4);
		background: var(--color-bg-light);
		border: 1px solid var(--color-border-light);
		border-radius: var(--radius-md);
		padding: var(--space-3) var(--space-4);
		font-weight: 600;
		font-size: 15px;
		transition: all var(--transition);
	}

	.q-list li:hover {
		transform: translateX(-4px);
		box-shadow: var(--shadow-sm);
		border-color: var(--color-border-icon);
	}

	.icon-circle.small {
		width: 44px;
		height: 44px;
	}

	/* ── Video card ───────────────────────────── */
	.video-wrap {
		position: relative;
	}

	.video-embed,
	.video-card {
		width: 100%;
		aspect-ratio: 4 / 5;
		border-radius: var(--radius-lg);
		overflow: hidden;
		box-shadow: var(--shadow-lg);
	}

	.video-embed {
		background: #000;
	}

	.video-embed iframe {
		width: 100%;
		height: 100%;
		border: none;
	}

	.video-card {
		position: relative;
		display: block;
		border: none;
		padding: 0;
		color: var(--color-text-inverse);
		text-align: start;
		cursor: pointer;
	}

	.video-img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
	}

	.video-card:hover .video-img {
		transform: scale(1.04);
	}

	.video-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(10deg, rgba(10, 18, 24, 0.75) 12%, rgba(10, 18, 24, 0.1) 55%);
	}

	.play {
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -60%;
		width: 84px;
		height: 84px;
		display: grid;
		place-items: center;
		background: var(--color-brand-yellow-500);
		color: var(--color-text-heading);
		border-radius: var(--radius-full);
		padding-inline-start: 5px;
		box-shadow: 0 0 0 0 rgba(249, 192, 78, 0.5);
		animation: pulse 2.4s ease-out infinite;
		transition: scale var(--transition);
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(249, 192, 78, 0.5);
		}
		70% {
			box-shadow: 0 0 0 22px rgba(249, 192, 78, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(249, 192, 78, 0);
		}
	}

	.video-card:hover .play {
		scale: 1.08;
	}

	.video-caption {
		position: absolute;
		inset-inline: var(--space-4);
		bottom: var(--space-4);
		background: rgba(15, 23, 32, 0.55);
		backdrop-filter: blur(8px);
		border-radius: var(--radius-md);
		padding: var(--space-3) var(--space-4);
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.video-caption strong {
		font-size: 16px;
	}

	.video-caption span {
		font-size: 13px;
		color: var(--color-text-inverse-muted);
	}

	.sticker {
		position: absolute;
		top: -22px;
		inset-inline-start: -16px;
		background: var(--color-brand-cream-200);
		color: var(--color-brand-navy-900);
		font-weight: 700;
		font-size: 14px;
		padding: var(--space-3) var(--space-4);
		border-radius: var(--radius-md);
		transform: rotate(4deg);
		box-shadow: var(--shadow-sm);
		text-align: center;
		pointer-events: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.play {
			animation: none;
		}
	}

	@media (max-width: 860px) {
		.questions {
			padding-block: var(--space-8);
		}

		.grid {
			grid-template-columns: 1fr;
			gap: var(--space-8);
		}

		.video-embed,
		.video-card {
			aspect-ratio: 4 / 4.2;
		}
	}
</style>
