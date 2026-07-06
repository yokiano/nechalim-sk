<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Plus } from '@lucide/svelte';

	const faqs = [
		{
			q: 'כמה עולה ביטוח סטודנטים בחו״ל?',
			a: 'החל מ־365$ לשנה ועד 1,190$ במצבים מורכבים, עם פריסה של 12 עד 24 תשלומים בלי ריבית. המחיר משתנה לפי מדינת הלימודים ומשך הביטוח — יש מסלולים מסמסטר ועד שש שנים ברצף.'
		},
		{
			q: 'מה ההבדל בין ביטוח סטודנטים לביטוח נסיעות רגיל?',
			a: 'ביטוח נסיעות נועד לחופשות קצרות ומוגבל בזמן. ביטוח הסטודנטים של נחלים נבנה ללימודים ארוכי טווח: מכסה עד הסמסטר האחרון, לא מתבטל בביקורים בישראל, וכולל תקרות מוגדלות והטבות ייעודיות — מכיסוי מוזל לציוד אלקטרוני ועד חופשות בין סמסטרים וסבבים קליניים בארה״ב.'
		},
		{
			q: 'האם אצטרך לשלם לרופא מכיסי?',
			a: 'לא. דרך האפליקציה של הראל או מרפאות ההסדר של נחלים באירופה, ביקור הרופא מתואם ומשולם ישירות. פניתם לרופא אחר? מגישים טופס מקוצר ומקבלים החזר לארנק הדיגיטלי תוך 7 שעות.'
		},
		{
			q: 'האם אפשר לרכוש ביטוח אחרי שכבר טסתי?',
			a: 'עקרונית רוכשים לפני היציאה מישראל, אבל במקרים מסוימים אפשר להצטרף גם כשאתם כבר בחו״ל, בהתאם למדינה ולמצב הרפואי. פנו לצוות נחלים לבדיקה פרטנית.'
		},
		{
			q: 'האם הביטוח נשאר בתוקף בזמן ביקור בישראל?',
			a: 'כן. הביטוח לא מתבטל בכניסה וביציאה מישראל, בשונה מביטוחים אחרים שבהם ביקור בבית יכול לסבך את הכיסוי או לדרוש חיתום מחדש.'
		},
		{
			q: 'מה זה ברות ביטוח ולמה זה חשוב?',
			a: 'מסלול ייחודי לנחלים באמצעות הראל שמתחייב לכסות אתכם עד סוף הלימודים, גם אם המצב הבריאותי השתנה בדרך. בלי הצהרת בריאות מחדש כל שנה ובלי שינוי תנאים. מתאים ללומדים ברצף ארבע עד שש שנים.'
		},
		{
			q: 'האם אצטרך לחדש את הביטוח ולעבור הצהרת בריאות בכל שנה?',
			a: 'בנחלים, לא. עד שלוש שנות לימוד רוכשים את כל התקופה מראש. לומדים 4–6 שנים? מסלול ברות ביטוח מבטיח כיסוי רצוף עד סוף התואר בלי אף הצהרת בריאות נוספת.'
		},
		{
			q: 'מה קורה אם יש לי מצב רפואי קיים?',
			a: 'נחלים מציעה את התנאים המיטיבים בישראל לסטודנטים עם רקע רפואי, כולל תוספת החמרה במחיר הנמוך ביותר. במקרים רבים גם מצבים כרוניים מקבלים תנאי קבלה מקלים, ולעיתים אפשר לעבור למסלול ברות ביטוח אחרי שנה ראשונה תקינה.'
		},
		{
			q: 'כמה זמן לוקח לקבל החזר על תביעה?',
			a: 'מהיר מתמיד: מעלים קבלה וסיכום רפואי ומקבלים החזר לארנק הדיגיטלי תוך 7 שעות (שירות חדש מיוני 2026). אפשר גם להגיש טופס תביעה מקוצר מקוון ולקבל החזר בדרך המסורתית.'
		},
		{
			q: 'האם אקבל אישור ביטוח לטובת קבלת הוויזה?',
			a: 'כן. נחלים מנפיקה אישור ביטוח רשמי שמקובל על שגרירויות וקונסוליות, באנגלית או בעשרות שפות. ויזת TRP לליטא, פרמסו דה סוג׳ורנו באיטליה או אישור לשגרירות הונגריה — אתם מכוסים.'
		}
	];

	const schema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a }
		}))
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${schema}</script>`}
</svelte:head>

<section class="faq" id="faq">
	<div class="container">
		<div class="head" use:reveal>
			<span class="kicker">שאלות ששומעים כל יום</span>
			<h2 class="section-title">
				שאלות ותשובות על <span class="hl">ביטוח סטודנטים בחו״ל</span>
			</h2>
			<p class="lede">מסטודנטים ומהורים. אספנו את החשובות, עם תשובות ישירות.</p>
		</div>

		<div class="list" use:reveal={120}>
			{#each faqs as f (f.q)}
				<details>
					<summary>
						{f.q}
						<span class="chev"><Plus size={17} strokeWidth={2.4} /></span>
					</summary>
					<div class="answer">{f.a}</div>
				</details>
			{/each}
		</div>
	</div>
</section>

<style>
	.faq {
		padding-block: var(--space-10);
		background: var(--color-brand-sky-100);
	}

	.head {
		text-align: center;
		max-width: 44rem;
		margin-inline: auto;
	}

	.lede {
		margin-top: var(--space-3);
		font-size: 17px;
		color: var(--color-text-secondary);
	}

	.list {
		max-width: 760px;
		margin: var(--space-7) auto 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	details {
		background: var(--color-bg-default);
		border: 1px solid var(--color-border-light);
		border-radius: var(--radius-md);
		overflow: hidden;
		transition: box-shadow var(--transition);
	}

	details[open] {
		box-shadow: var(--shadow-md);
		border-color: var(--color-brand-blue-500);
	}

	summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		list-style: none;
		cursor: pointer;
		padding: var(--space-4) var(--space-5);
		font-size: 16px;
		font-weight: 700;
		color: var(--color-text-heading);
		transition: color var(--transition);
	}

	summary::-webkit-details-marker {
		display: none;
	}

	summary:hover {
		color: var(--color-brand-blue-600);
	}

	.chev {
		flex-shrink: 0;
		width: 30px;
		height: 30px;
		display: grid;
		place-items: center;
		border-radius: var(--radius-full);
		background: var(--color-brand-sky-100);
		color: var(--color-brand-blue-600);
		transition: all var(--transition);
	}

	details[open] .chev {
		transform: rotate(45deg);
		background: var(--color-brand-blue-500);
		color: var(--color-text-inverse);
	}

	.answer {
		padding: 0 var(--space-5) var(--space-5);
		font-size: 15px;
		line-height: 1.7;
		color: var(--color-text-secondary);
		max-width: 60ch;
	}

	@media (max-width: 640px) {
		.faq {
			padding-block: var(--space-8);
		}

		summary {
			font-size: 15px;
			padding: var(--space-4);
		}

		.answer {
			padding: 0 var(--space-4) var(--space-4);
		}
	}
</style>
