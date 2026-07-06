<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { SlidersHorizontal, Wallet, Ambulance, ArrowLeft } from '@lucide/svelte';

	const steps = [
		{
			icon: SlidersHorizontal,
			title: 'בוחרים מה מתאים לכם',
			text: 'אפליקציה שמתאמת ביקור רופא (לפעמים אפילו עד הבית), מרפאת הסדר של נחלים ביעדים נבחרים, או כל רופא אחר שתבחרו.'
		},
		{
			icon: Wallet,
			title: 'טיפול בלי הוצאה מהכיס',
			text: 'האפליקציה משלמת ישירות לרופא ההסדר. פניתם לרופא אחר? מעלים קבלה וסיכום רפואי — וההחזר בארנק הדיגיטלי תוך 7 שעות.'
		},
		{
			icon: Ambulance,
			title: 'כשצריך יותר מזה',
			text: 'ניתוח או אשפוז חירום? מוקד הראל זמין 24/7 ומסדיר הכל ישירות מול בית החולים, בלי השתתפות עצמית. וכמו תמיד — אפשר לפנות ישירות לניר.'
		}
	];

	const howToSchema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'HowTo',
		name: 'לא מרגישים טוב? כך זה עובד, בשלושה צעדים פשוטים',
		step: steps.map((s, i) => ({
			'@type': 'HowToStep',
			position: i + 1,
			name: s.title,
			text: s.text
		}))
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${howToSchema}</script>`}
</svelte:head>

<section class="how" id="how">
	<div class="container">
		<div class="head" use:reveal>
			<span class="kicker">בלי טפסים מסובכים</span>
			<h2 class="section-title">
				לא מרגישים טוב?<br />
				כך זה עובד, <span class="hl">בשלושה צעדים פשוטים</span>
			</h2>
		</div>

		<ol class="steps">
			{#each steps as step, i (step.title)}
				{@const Icon = step.icon}
				<li class="step" use:reveal={i * 120}>
					<span class="num">{i + 1}</span>
					<span class="icon-circle"><Icon size={24} strokeWidth={1.7} /></span>
					<h3>{step.title}</h3>
					<p>{step.text}</p>
					{#if i < steps.length - 1}
						<span class="connector" aria-hidden="true"></span>
					{/if}
				</li>
			{/each}
		</ol>

		<div class="ctas" use:reveal={300}>
			<a class="btn btn-primary" href="#contact">להצטרפות</a>
			<a
				class="btn btn-whatsapp"
				href="https://wa.me/972525605336"
				target="_blank"
				rel="noopener"
			>
				לשיחת וואטסאפ עם ניר
			</a>
			<a
				class="more-link"
				href="https://www.youtube.com/watch?v=6WQhvRcQKi4"
				target="_blank"
				rel="noopener"
			>
				לקריאה נוספת
				<ArrowLeft size={15} strokeWidth={2.2} />
			</a>
		</div>
	</div>
</section>

<style>
	.how {
		padding-block: var(--space-10);
		background: var(--color-bg-light);
	}

	.head {
		text-align: center;
		max-width: 44rem;
		margin-inline: auto;
	}

	.steps {
		list-style: none;
		padding: 0;
		margin: var(--space-8) auto 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-6);
		max-width: 980px;
	}

	.step {
		position: relative;
		background: var(--color-bg-default);
		border: 1px solid var(--color-border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-6) var(--space-5) var(--space-5);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: all var(--transition);
	}

	.step:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-md);
	}

	.num {
		position: absolute;
		top: -18px;
		width: 38px;
		height: 38px;
		display: grid;
		place-items: center;
		background: var(--color-brand-blue-500);
		color: var(--color-text-inverse);
		font-weight: 800;
		font-size: 17px;
		border-radius: var(--radius-full);
		box-shadow: 0 0 0 5px var(--color-bg-light);
	}

	.step h3 {
		margin-top: var(--space-3);
		font-size: 18px;
		font-weight: 700;
		color: var(--color-text-heading);
	}

	.step p {
		margin-top: var(--space-2);
		font-size: 14.5px;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.connector {
		position: absolute;
		top: 50%;
		inset-inline-start: 100%;
		width: var(--space-6);
		border-top: 2px dashed var(--color-border-icon);
	}

	.ctas {
		margin-top: var(--space-7);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-4);
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
	}

	.more-link:hover {
		text-decoration: underline;
	}

	@media (max-width: 820px) {
		.how {
			padding-block: var(--space-8);
		}

		.steps {
			grid-template-columns: 1fr;
			gap: var(--space-7);
			max-width: 30rem;
		}

		.connector {
			display: none;
		}
	}
</style>
