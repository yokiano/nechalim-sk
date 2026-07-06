<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Check, X, ShieldCheck, ArrowLeft } from '@lucide/svelte';

	type Row = {
		topic: string;
		nechalim: true;
		other: boolean | string;
	};

	const rows: Row[] = [
		{ topic: '27 שנות התמחות בביטוח סטודנטים — הוותיקים בישראל', nechalim: true, other: false },
		{
			topic: 'ברות ביטוח: כיסוי עד סוף התואר בלי הצהרת בריאות בכל שנה (ללומדים 4–6 שנים)',
			nechalim: true,
			other: false
		},
		{ topic: 'כיסוי מובטח מראש — מסמסטר ועד 3 שנים', nechalim: true, other: false },
		{ topic: 'מסלול ייעודי ללימודים באסיה (סין, יפן, קוריאה)', nechalim: true, other: false },
		{
			topic: 'כיסוי עד 5 מיליון דולר, הטסה רפואית ומוקד חירום 24/7 בעברית',
			nechalim: true,
			other: true
		},
		{ topic: 'עשרות אלפי תביעות סטודנטים שכבר טופלו בפועל', nechalim: true, other: false },
		{ topic: '92% הנחה על ביטוח מחשב, טלפון וכבודה', nechalim: true, other: false },
		{ topic: 'פיזיותרפיה בחו״ל מתאונה', nechalim: true, other: false },
		{
			topic: 'התקרות הגבוהות בישראל: חירום בשיניים והמשך טיפול בישראל',
			nechalim: true,
			other: false
		},
		{ topic: 'סבבים קליניים וחופשות בארה״ב — בלי עלות', nechalim: true, other: false },
		{ topic: 'איתור, חילוץ, צד ג׳ וספורט אתגרי — בלי עלות', nechalim: true, other: 'תלוי בחברה' },
		{ topic: 'קשר ישיר לניר סטילוגלו, מנכ״ל נחלים', nechalim: true, other: false },
		{ topic: '12–24 תשלומים בלי ריבית ובלי הצמדה', nechalim: true, other: 'לרוב לא' }
	];

	const otherScore = rows.filter((r) => r.other === true).length;
	const fullListUrl =
		'https://nechalim-ins.com/%d7%9c%d7%99%d7%9e%d7%95%d7%93%d7%99%d7%9d-%d7%91%d7%97%d7%95%d7%9c/%d7%9e%d7%94-%d7%a4%d7%95%d7%9c%d7%99%d7%a1%d7%aa-%d7%a1%d7%98%d7%95%d7%93%d7%a0%d7%98%d7%99%d7%9d-%d7%9e%d7%9b%d7%a1%d7%94/';
</script>

<section class="compare" id="compare">
	<div class="container">
		<div class="head" use:reveal>
			<span class="kicker">בלי אותיות קטנות</span>
			<h2 class="section-title">
				מה יש לנחלים <span class="hl">שאין לאף אחד אחר?</span>
			</h2>
			<p class="lede">השוואה ישירה מול ביטוחי סטודנטים אחרים. שפטו בעצמכם.</p>
		</div>

		<div class="table-card" use:reveal={120}>
			<table>
				<thead>
					<tr>
						<th class="topic-col">
							<span class="visually-hidden">נושא</span>
						</th>
						<th class="nechalim-col" scope="col">
							<span class="col-brand">
								<ShieldCheck size={19} strokeWidth={2.2} />
								נחלים × הראל
							</span>
						</th>
						<th class="other-col" scope="col">ביטוח אחר</th>
					</tr>
				</thead>
				<tbody>
					{#each rows as row, i (row.topic)}
						<tr use:reveal={Math.min(i * 40, 300)}>
							<td class="topic-col">{row.topic}</td>
							<td class="nechalim-col">
								<span class="mark yes"><Check size={15} strokeWidth={3.2} /></span>
							</td>
							<td class="other-col">
								{#if row.other === true}
									<span class="mark yes dim"><Check size={15} strokeWidth={3.2} /></span>
								{:else if row.other === false}
									<span class="mark no"><X size={14} strokeWidth={3} /></span>
								{:else}
									<span class="maybe">{row.other}</span>
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
				<tfoot>
					<tr>
						<td class="topic-col score-label">הציון הסופי</td>
						<td class="nechalim-col"><span class="score win">{rows.length}/{rows.length}</span></td>
						<td class="other-col"><span class="score">{otherScore}/{rows.length}</span></td>
					</tr>
				</tfoot>
			</table>
		</div>

		<div class="foot" use:reveal={160}>
			<a class="btn btn-primary" href={fullListUrl} target="_blank" rel="noopener">
				לרשימת הכיסויים המלאה
				<ArrowLeft size={16} strokeWidth={2.2} />
			</a>
			<p class="note">
				* המידע בטבלה מתייחס לפוליסת ביטוח סטודנטים לאירופה ולירדן. ללומדים במזרח הרחוק או בארה״ב
				קיימים מסלולים עם הטבות ותנאים שונים.
			</p>
		</div>
	</div>
</section>

<style>
	.compare {
		padding-block: var(--space-10);
		background: var(--color-bg-default);
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

	.table-card {
		margin-top: var(--space-7);
		border: 1px solid var(--color-border-light);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
		overflow: hidden;
		max-width: 880px;
		margin-inline: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 15px;
	}

	th,
	td {
		padding: var(--space-3) var(--space-4);
		border-bottom: 1px solid var(--color-border-light);
		text-align: center;
		vertical-align: middle;
	}

	tbody tr:last-child td {
		border-bottom: none;
	}

	td.topic-col {
		text-align: start;
		color: var(--color-text-primary);
		font-weight: 500;
		line-height: 1.45;
	}

	thead th {
		background: var(--color-bg-light);
		border-bottom: 1px solid var(--color-border-light);
		font-size: 13.5px;
		font-weight: 700;
		color: var(--color-text-secondary);
		padding-block: var(--space-3);
	}

	/* Highlighted Nechalim column */
	.nechalim-col {
		background: var(--color-brand-sky-100);
		width: 128px;
	}

	thead th.nechalim-col {
		background: var(--color-brand-navy-900);
		color: var(--color-text-inverse);
	}

	.col-brand {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: var(--color-brand-yellow-500);
		font-size: 14px;
	}

	.col-brand :global(svg) {
		flex-shrink: 0;
	}

	.other-col {
		width: 108px;
		color: var(--color-text-muted);
	}

	tbody tr {
		transition: background var(--transition);
	}

	tbody tr:hover {
		background: var(--color-bg-light);
	}

	tbody tr:hover .nechalim-col {
		background: var(--color-brand-sky-200);
	}

	.mark {
		display: inline-grid;
		place-items: center;
		width: 24px;
		height: 24px;
		border-radius: var(--radius-full);
	}

	.mark.yes {
		background: var(--color-success);
		color: var(--color-text-inverse);
	}

	.mark.yes.dim {
		background: #b9c3c9;
	}

	.mark.no {
		background: #eceef0;
		color: var(--color-text-muted);
	}

	.maybe {
		font-size: 12px;
		font-weight: 600;
		color: var(--color-text-muted);
		white-space: nowrap;
	}

	tfoot td {
		border-top: 2px solid var(--color-brand-navy-900);
		background: var(--color-bg-light);
		padding-block: var(--space-4);
	}

	tfoot .nechalim-col {
		background: var(--color-brand-sky-100);
	}

	.score-label {
		font-weight: 800;
		color: var(--color-text-heading);
	}

	.score {
		font-weight: 800;
		font-size: 16px;
		color: var(--color-text-muted);
	}

	.score.win {
		display: inline-block;
		background: var(--color-brand-navy-900);
		color: var(--color-brand-yellow-500);
		border-radius: var(--radius-full);
		padding: 4px 14px;
		font-size: 17px;
	}

	.foot {
		margin-top: var(--space-6);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-4);
		text-align: center;
	}

	.note {
		font-size: 12.5px;
		color: var(--color-text-muted);
		max-width: 36rem;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
	}

	@media (max-width: 640px) {
		.compare {
			padding-block: var(--space-8);
		}

		table {
			font-size: 13.5px;
		}

		th,
		td {
			padding: 10px var(--space-2);
		}

		td.topic-col {
			padding-inline-start: var(--space-3);
		}

		.nechalim-col {
			width: 86px;
		}

		.other-col {
			width: 64px;
		}

		.col-brand {
			font-size: 12px;
			flex-direction: column;
			gap: 2px;
		}

		.maybe {
			white-space: normal;
		}
	}
</style>
