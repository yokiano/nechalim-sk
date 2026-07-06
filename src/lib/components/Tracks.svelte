<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import {
		Plane,
		BookOpen,
		CalendarRange,
		Trophy,
		Stethoscope,
		Check,
		Star,
		ArrowLeft
	} from '@lucide/svelte';

	type Track = {
		id: string;
		tab: string;
		icon: typeof Plane;
		title: string;
		price: string;
		priceNote: string;
		perks: string[];
		badge?: string;
	};

	const tracks: Track[] = [
		{
			id: 'exchange',
			tab: 'סמסטר',
			icon: Plane,
			title: 'חילופי סטודנטים (עד חצי שנה)',
			price: '$197',
			priceNote: 'ל־120 ימים במחשבון היומי, או 306$ לחצי שנה',
			perks: [
				'ביטוח על בסיס יומי, מדויק לתאריכים שלכם',
				'אותו כיסוי מלא כמו במסלולים הארוכים',
				'מושלם לאקדמיית קיץ או סמסטר חילופים'
			]
		},
		{
			id: 'year',
			tab: 'שנה',
			icon: BookOpen,
			title: 'לומדים שנה',
			price: '$365',
			priceNote: 'עד 399$ באירופה · 599$ במזרח הרחוק',
			perks: [
				'תקרות מוגדלות והטבות כלולות בלי עלות',
				'איתור, חילוץ, צד ג׳ וגם ספורט אתגרי',
				'מסלול ייעודי גם לארה״ב עם הטבות חינם'
			]
		},
		{
			id: 'two',
			tab: 'שנתיים',
			icon: CalendarRange,
			title: 'לומדים שנתיים',
			price: 'פעולה אחת',
			priceNote: 'שקט לכל התקופה, מראש',
			perks: [
				'בלי לחדש כלום באמצע התואר',
				'איתור, חילוץ, צד ג׳ וספורט אתגרי כלולים',
				'בונוס: ביטוח כבודה חינם לכל תקופת הלימודים'
			]
		},
		{
			id: 'three',
			tab: '3 שנים',
			icon: Trophy,
			title: 'לומדים שלוש שנים',
			price: '999 ימים',
			priceNote: '+ עד 30 ימים חינם עד סוף הסמסטר האחרון',
			badge: 'היחידי בישראל',
			perks: [
				'הביטוח היחיד בישראל ל־3 שנות לימוד מראש',
				'שקט מובטח עד סיום הלימודים',
				'כל ההטבות + כבודה חינם לכל התקופה'
			]
		},
		{
			id: 'long',
			tab: '4–6 שנים',
			icon: Stethoscope,
			title: 'לומדים ארבע עד שש שנים',
			price: 'ברות ביטוח',
			priceNote: 'התחייבות מראש עד סוף התואר',
			badge: 'רק בנחלים',
			perks: [
				'כיסוי מובטח גם אם המצב הרפואי משתנה בדרך',
				'בלי הצהרת בריאות מחדש כל שנה',
				'בונוס: כבודה חינם לכל תקופת הביטוח'
			]
		}
	];

	let active = $state(tracks[1]);
</script>

<section class="tracks">
	<div class="container">
		<div class="head" use:reveal>
			<span class="kicker">סמסטר? תואר ברפואה? יש מסלול</span>
			<h2 class="section-title">
				רק לנחלים יש ביטוח לכל תקופת לימודים,<br />
				<span class="hl">מסמסטר ועד שש שנים</span>
			</h2>
		</div>

		<div class="tabs" role="tablist" aria-label="בחירת תקופת לימודים" use:reveal={100}>
			{#each tracks as track (track.id)}
				{@const Icon = track.icon}
				<button
					role="tab"
					aria-selected={active.id === track.id}
					class:active={active.id === track.id}
					onclick={() => (active = track)}
				>
					<Icon size={17} strokeWidth={2} />
					{track.tab}
				</button>
			{/each}
		</div>

		{#key active.id}
			<div class="panel" role="tabpanel">
				<div class="panel-main">
					{#if active.badge}
						<span class="badge">
							<Star size={13} strokeWidth={2.4} fill="currentColor" />
							{active.badge}
						</span>
					{/if}
					<h3>{active.title}</h3>
					<ul>
						{#each active.perks as perk (perk)}
							<li>
								<span class="check"><Check size={12} strokeWidth={3.5} /></span>
								{perk}
							</li>
						{/each}
					</ul>
					<div class="panel-ctas">
						<a href="#join" class="btn btn-primary">להצטרפות למסלול</a>
						<a href="#more" class="more-link">
							לקריאה נוספת
							<ArrowLeft size={16} strokeWidth={2.2} />
						</a>
					</div>
				</div>
				<div class="panel-price">
					<span class="from">החל מ־</span>
					<strong>{active.price}</strong>
					<span class="note">{active.priceNote}</span>
				</div>
			</div>
		{/key}
	</div>
</section>

<style>
	.tracks {
		padding-block: var(--space-10);
		background: var(--color-bg-default);
	}

	.head {
		text-align: center;
		max-width: 46rem;
		margin-inline: auto;
	}

	.tabs {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-top: var(--space-7);
	}

	.tabs button {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		border: 1px solid var(--color-border-default);
		background: var(--color-bg-default);
		border-radius: var(--radius-full);
		padding: 10px 20px;
		font-size: 15px;
		font-weight: 700;
		color: var(--color-text-secondary);
		transition: all var(--transition);
	}

	.tabs button:hover {
		border-color: var(--color-brand-blue-500);
		color: var(--color-brand-blue-600);
	}

	.tabs button.active {
		background: var(--color-brand-navy-900);
		border-color: var(--color-brand-navy-900);
		color: var(--color-text-inverse);
		box-shadow: var(--shadow-sm);
	}

	.panel {
		display: grid;
		grid-template-columns: 1.4fr 0.6fr;
		margin-top: var(--space-6);
		border-radius: var(--radius-lg);
		overflow: hidden;
		border: 1px solid var(--color-border-light);
		box-shadow: var(--shadow-md);
		animation: pop 0.35s cubic-bezier(0.22, 1, 0.36, 1);
	}

	@keyframes pop {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
	}

	.panel-main {
		padding: var(--space-7) var(--space-7);
		background: var(--color-bg-light);
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		background: var(--color-brand-cream-200);
		color: var(--color-brand-navy-900);
		font-weight: 700;
		font-size: 13px;
		padding: 5px 13px;
		border-radius: var(--radius-full);
		margin-bottom: var(--space-3);
	}

	.panel-main h3 {
		font-size: 24px;
		font-weight: 700;
		color: var(--color-text-heading);
	}

	.panel-main ul {
		list-style: none;
		padding: 0;
		margin: var(--space-4) 0 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.panel-main li {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		font-size: 16px;
		color: var(--color-text-secondary);
	}

	.check {
		width: 20px;
		height: 20px;
		display: grid;
		place-items: center;
		background: var(--color-success);
		color: var(--color-text-inverse);
		border-radius: var(--radius-full);
		flex-shrink: 0;
		margin-top: 4px;
	}

	.panel-ctas {
		display: flex;
		align-items: center;
		gap: var(--space-5);
		margin-top: var(--space-6);
		flex-wrap: wrap;
	}

	.more-link {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		font-weight: 700;
		font-size: 15px;
		color: var(--color-brand-blue-600);
		text-decoration: none;
		transition: gap var(--transition);
	}

	.more-link:hover {
		gap: 9px;
		text-decoration: underline;
	}

	.panel-price {
		position: relative;
		background: var(--color-brand-navy-900);
		color: var(--color-text-inverse);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: var(--space-6) var(--space-5);
		gap: var(--space-1);
		overflow: hidden;
	}

	.panel-price::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(240px 180px at 70% 15%, rgba(75, 140, 192, 0.35), transparent);
	}

	.panel-price .from {
		color: var(--color-brand-sky-200);
		font-size: 14px;
	}

	.panel-price strong {
		font-size: clamp(30px, 4vw, 42px);
		font-weight: 800;
		color: var(--color-brand-yellow-500);
		line-height: 1.15;
	}

	.panel-price .note {
		color: var(--color-brand-sky-200);
		font-size: 13px;
		max-width: 14rem;
	}

	@media (max-width: 760px) {
		.tracks {
			padding-block: var(--space-8);
		}

		.panel {
			grid-template-columns: 1fr;
		}

		.panel-main {
			padding: var(--space-5) var(--space-4);
			order: 2;
		}

		.panel-price {
			order: 1;
			padding: var(--space-5);
		}
	}
</style>
