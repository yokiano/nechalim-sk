<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Laptop, Smartphone, Luggage, Tag, Compass, CreditCard, ArrowLeft } from '@lucide/svelte';

	const items = [
		{ icon: Laptop, name: 'מחשב נייד', price: '$49', note: 'לשנה' },
		{ icon: Smartphone, name: 'סלולרי', price: '$39', note: 'לשנה' },
		{ icon: Luggage, name: 'כבודה', price: '$29', note: 'לשנה' }
	];
</script>

<section class="gear" id="gear">
	<div class="container">
		<div class="head" use:reveal>
			<span class="kicker light">ההנחה הכי גדולה בעמוד</span>
			<h2 class="section-title">
				בטחו את הציוד החשוב שלכם <span class="hl-navy">ב־92% הנחה</span>
			</h2>
			<p class="lede">ביטוח לציוד אישי מעולם לא היה נגיש יותר.</p>
		</div>

		<div class="cards">
			{#each items as item, i (item.name)}
				{@const Icon = item.icon}
				<article class="card" use:reveal={i * 100}>
					<span class="tag-icon"><Tag size={15} strokeWidth={2.4} /></span>
					<span class="gear-icon"><Icon size={34} strokeWidth={1.6} /></span>
					<h3>{item.name}</h3>
					<p class="price">עד <strong>{item.price}</strong> <span>{item.note}</span></p>
				</article>
			{/each}
		</div>

		<div class="total" use:reveal={200}>
			<span class="total-new">$117</span>
			<span class="total-old">במקום <s>$1,456</s> לכל השנה</span>
			<p class="total-note">
				ברכישת ביטוח לשנתיים ומעלה — <b>כבודה וברות ביטוח כלולים בלי עלות נוספת.</b>
			</p>
		</div>

		<div class="extras" use:reveal={260}>
			<span class="extras-title">מוצרים משלימים לסטודנטים</span>
			<a class="extra" href="#contact">
				<Compass size={18} strokeWidth={1.9} />
				פתרונות איתור, פיצוי וביטוח כבודה
				<ArrowLeft size={14} strokeWidth={2.2} />
			</a>
			<a class="extra" href="#contact">
				<CreditCard size={18} strokeWidth={1.9} />
				פתרונות אשראי שכדאי להכיר
				<ArrowLeft size={14} strokeWidth={2.2} />
			</a>
		</div>
	</div>
</section>

<style>
	.gear {
		padding-block: var(--space-10);
		background: var(--color-brand-yellow-500);
	}

	.head {
		text-align: center;
		max-width: 44rem;
		margin-inline: auto;
	}

	.kicker.light {
		background: rgba(255, 255, 255, 0.55);
	}

	.hl-navy {
		background: var(--color-brand-navy-900);
		color: var(--color-brand-yellow-500);
		padding: 0 0.3em;
		border-radius: var(--radius-sm);
		display: inline-block;
		transform: rotate(-1deg);
	}

	.lede {
		margin-top: var(--space-3);
		font-size: 17px;
		color: var(--color-brand-navy-900);
		font-weight: 500;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-5);
		max-width: 760px;
		margin: var(--space-7) auto 0;
	}

	.card {
		position: relative;
		background: var(--color-bg-default);
		border-radius: var(--radius-lg);
		padding: var(--space-5);
		text-align: center;
		box-shadow: var(--shadow-md);
		transition: all var(--transition);
	}

	.card:hover {
		transform: translateY(-4px) rotate(-1deg);
		box-shadow: var(--shadow-lg);
	}

	.tag-icon {
		position: absolute;
		top: 12px;
		inset-inline-start: 12px;
		width: 28px;
		height: 28px;
		display: grid;
		place-items: center;
		background: var(--color-brand-sky-100);
		color: var(--color-brand-blue-600);
		border-radius: var(--radius-full);
	}

	.gear-icon {
		display: inline-grid;
		place-items: center;
		width: 64px;
		height: 64px;
		border-radius: var(--radius-full);
		border: 1px dashed var(--color-border-icon);
		color: var(--color-brand-blue-500);
	}

	.card h3 {
		margin-top: var(--space-3);
		font-size: 18px;
		font-weight: 700;
		color: var(--color-text-heading);
	}

	.price {
		margin-top: var(--space-1);
		color: var(--color-text-secondary);
		font-size: 14px;
	}

	.price strong {
		font-size: 26px;
		font-weight: 800;
		color: var(--color-brand-blue-600);
	}

	.total {
		margin-top: var(--space-7);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-1);
	}

	.total-new {
		font-size: clamp(40px, 6vw, 56px);
		font-weight: 800;
		line-height: 1.1;
		color: var(--color-brand-navy-900);
	}

	.total-old {
		font-size: 17px;
		font-weight: 600;
		color: var(--color-brand-navy-900);
	}

	.total-old s {
		opacity: 0.65;
	}

	.total-note {
		margin-top: var(--space-3);
		font-size: 15px;
		color: var(--color-brand-navy-900);
		max-width: 34rem;
	}

	.extras {
		margin-top: var(--space-7);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-3);
		flex-wrap: wrap;
	}

	.extras-title {
		font-size: 14px;
		font-weight: 700;
		color: var(--color-brand-navy-900);
	}

	.extra {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		background: rgba(255, 255, 255, 0.6);
		border: 1px solid rgba(26, 42, 55, 0.15);
		color: var(--color-brand-navy-900);
		font-size: 14px;
		font-weight: 600;
		padding: 9px 16px;
		border-radius: var(--radius-full);
		text-decoration: none;
		transition: all var(--transition);
	}

	.extra:hover {
		background: var(--color-bg-default);
		transform: translateY(-2px);
		box-shadow: var(--shadow-sm);
	}

	@media (max-width: 700px) {
		.gear {
			padding-block: var(--space-8);
		}

		.cards {
			grid-template-columns: repeat(3, 1fr);
			gap: var(--space-2);
		}

		.card {
			padding: var(--space-4) var(--space-2);
		}

		.gear-icon {
			width: 52px;
			height: 52px;
		}

		.card h3 {
			font-size: 15px;
		}

		.price strong {
			font-size: 21px;
		}

		.tag-icon {
			display: none;
		}
	}
</style>
