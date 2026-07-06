<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import WhatsAppIcon from './WhatsAppIcon.svelte';
	import {
		HeartPulse,
		BadgePercent,
		Handshake,
		Laptop,
		Smartphone,
		TrendingUp,
		Award,
		Plane
	} from '@lucide/svelte';

	type Card = {
		icon: typeof HeartPulse;
		title: string;
		body: string;
		size?: 'wide' | 'tall';
		theme?: 'navy' | 'yellow' | 'sky';
	};

	const cards: Card[] = [
		{
			icon: HeartPulse,
			title: 'כיסוי רפואי פרטי עד 5 מיליון דולר',
			body: 'ביקור רופא בלי לשלוף כרטיס אשראי, כולל הטסה רפואית, ניתוחים ואשפוזי חירום.',
			size: 'wide',
			theme: 'navy'
		},
		{
			icon: BadgePercent,
			title: 'המחיר המשתלם בישראל',
			body: 'החל מ־365$ לשנה, עם פריסת תשלומים בלי ריבית.',
			theme: 'yellow'
		},
		{
			icon: Handshake,
			title: 'הגב של נחלים הוא הראל',
			body: 'חברת ביטוחי הבריאות הגדולה בישראל. מוצר ייעודי לסטודנטים שמוכיח את עצמו כבר 27 שנה.'
		},
		{
			icon: Laptop,
			title: 'מחשב, סלולרי וכבודה',
			body: '29$–49$ לשנה, מחיר שאין בשום מקום אחר. כבודה בחינם במסלולים של שנתיים ומעלה.'
		},
		{
			icon: Smartphone,
			title: 'המעטפת של נחלים',
			body: 'אפליקציה שמתאמת ומשלמת ישירות לרופא, מרפאות הסדר באירופה, מוקד חירום 24/7 בעברית — וקו ישיר לניר, המנכ״ל.',
			size: 'tall',
			theme: 'sky'
		},
		{
			icon: TrendingUp,
			title: 'התקרות הגבוהות בישראל',
			body: 'חירום שיניים עד 2,000$, המשך טיפול בישראל עד 10,000$ כולל אסותא, ופיזיותרפיה בחו״ל מתאונה עד 3,000$.'
		},
		{
			icon: Award,
			title: '27 שנות ניסיון',
			body: 'ניר והצוות טיפלו באירועים של עשרות אלפי סטודנטים. ניסיון שאין לאף גוף אחר בישראל.'
		},
		{
			icon: Plane,
			title: 'כיסוי לארה״ב, כולל סבבים קליניים וחופשות',
			body: 'כולל איתור, חילוץ, צד ג׳ וספורט אתגרי — בלי עלות נוספת.',
			size: 'wide'
		}
	];
</script>

<section class="benefits">
	<div class="container">
		<div class="head" use:reveal>
			<span class="kicker">הנתון שאומר הכל</span>
			<h2 class="section-title">
				לא סתם <span class="hl">95% מהסטודנטים</span><br />
				הישראלים בחו״ל בוחרים בנחלים
			</h2>
		</div>

		<div class="bento">
			{#each cards as card, i (card.title)}
				{@const Icon = card.icon}
				<article
					class="card {card.theme ?? ''}"
					class:wide={card.size === 'wide'}
					class:tall={card.size === 'tall'}
					use:reveal={(i % 4) * 70}
				>
					<span class="icon-circle"><Icon size={26} strokeWidth={1.7} /></span>
					<h3>{card.title}</h3>
					<p>{card.body}</p>
				</article>
			{/each}
		</div>

		<div class="cta-row" use:reveal>
			<a href="#join" class="btn btn-primary">רוצים גם? להצטרפות</a>
			<a href="#whatsapp" class="btn btn-whatsapp">
				<WhatsAppIcon />
				שאלה קטנה בוואטסאפ למנכ״ל
			</a>
		</div>
	</div>
</section>

<style>
	.benefits {
		padding-block: var(--space-10);
		background: var(--color-bg-light);
	}

	.head {
		text-align: center;
		max-width: 44rem;
		margin-inline: auto;
	}

	.bento {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-5);
		margin-top: var(--space-8);
	}

	.card {
		background: var(--color-bg-default);
		border: 1px solid var(--color-border-light);
		border-radius: var(--radius-md);
		padding: var(--space-5);
		box-shadow: var(--shadow-sm);
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		transition: all var(--transition);
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-md);
	}

	.card:hover .icon-circle {
		border-style: solid;
		background: var(--color-brand-sky-100);
	}

	.card.wide {
		grid-column: span 2;
	}

	.card.tall {
		grid-row: span 2;
	}

	.card.navy {
		background: var(--color-brand-navy-900);
		color: var(--color-text-inverse);
		border: none;
	}

	.card.navy p {
		color: var(--color-text-inverse-muted);
	}

	.card.navy .icon-circle {
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.3);
		color: var(--color-brand-yellow-500);
	}

	.card.yellow {
		background: var(--color-brand-yellow-500);
		border: none;
	}

	.card.yellow p {
		color: var(--color-text-heading);
	}

	.card.yellow .icon-circle {
		background: rgba(255, 255, 255, 0.4);
		border-color: rgba(15, 23, 32, 0.3);
		color: var(--color-text-heading);
	}

	.card.sky {
		background: var(--color-brand-sky-100);
		border: none;
	}

	h3 {
		font-size: 20px;
		font-weight: 700;
		line-height: 1.3;
	}

	.card p {
		color: var(--color-text-secondary);
		font-size: 14px;
		line-height: 1.55;
	}

	.cta-row {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: var(--space-4);
		margin-top: var(--space-8);
	}

	@media (max-width: 980px) {
		.bento {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 560px) {
		.benefits {
			padding-block: var(--space-8);
		}

		.bento {
			grid-template-columns: 1fr;
		}

		.card.wide {
			grid-column: auto;
		}

		.card.tall {
			grid-row: auto;
		}
	}
</style>
