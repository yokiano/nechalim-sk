<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { FileCheck2, ShieldAlert, HeartPulse, ArrowLeft, BadgeCheck, Play } from '@lucide/svelte';

	const readMore = 'https://nechalim-ins.com/%D7%9C%D7%99%D7%9E%D7%95%D7%93%D7%99%D7%9D-%D7%91%D7%97%D7%95%D7%9C/%D7%91%D7%A8%D7%95%D7%AA-%D7%91%D7%99%D7%98%D7%95%D7%97/';
	const videoUrl = 'https://www.youtube.com/watch?v=MQep75Sbvfc';

	const blocks = [
		{
			icon: FileCheck2,
			title: 'מה זה אומר?',
			text: 'הראל מתחייבת מראש לכסות אתכם עד סוף הלימודים — גם אם המצב הבריאותי משתנה בדרך. בלי חיתום מחדש בכל שנה, בלי שאלות ובלי הפתעות. מסלול ללומדים 4 עד 6 שנים, שמתאפשר רק בזכות השותפות הייחודית של נחלים והראל.'
		},
		{
			icon: ShieldAlert,
			title: 'למה זה קריטי למי שלומד יותר משנה?',
			text: 'בביטוח רגיל, שינוי רפואי באמצע התואר יכול להוביל לסירוב חידוש, החרגות, ייקור או הורדת סכום הביטוח — בדיוק כשהכי צריכים אותו. בברות ביטוח ההתחייבות ניתנת מראש ותקפה עד סיום הלימודים.'
		},
		{
			icon: HeartPulse,
			title: 'יש לך רקע רפואי? יש פתרון גם בשבילך',
			text: 'תוספת החמרה במחיר הנמוך בישראל — 550$ לשנה — בלי תוספת רפואית נוספת בהמשך, בלי הורדת סכום הביטוח, ועם אותם תנאי קבלה עד סוף התואר.'
		}
	];

	const years = ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳'];
</script>

<section class="insurability" id="insurability">
	<div class="container grid">
		<div class="copy" use:reveal>
			<span class="kicker">רק בנחלים · באמצעות הראל</span>
			<h2 class="section-title">
				ברות ביטוח: הכיסוי<br />
				<span class="hl">שאין לאף אחד אחר</span> בישראל
			</h2>

			<div class="blocks">
				{#each blocks as b, i (b.title)}
					{@const Icon = b.icon}
					<article class="block" use:reveal={i * 90}>
						<span class="icon-circle small"><Icon size={22} strokeWidth={1.8} /></span>
						<div>
							<h3>{b.title}</h3>
							<p>{b.text}</p>
						</div>
					</article>
				{/each}
			</div>

			<div class="ctas" use:reveal={280}>
				<a class="btn btn-primary" href={readMore} target="_blank" rel="noopener">
					לקריאה נוספת על ברות ביטוח
					<ArrowLeft size={16} strokeWidth={2.2} />
				</a>
				<a class="video-link" href={videoUrl} target="_blank" rel="noopener">
					<span class="mini-play"><Play size={13} strokeWidth={2.6} fill="currentColor" /></span>
					צפו: מהו מסלול ברות ביטוח? (וידאו קצר)
				</a>
			</div>
		</div>

		<div class="cert-wrap" use:reveal={160}>
			<div class="cert">
				<div class="cert-head">
					<BadgeCheck size={30} strokeWidth={1.8} />
					<div>
						<strong>כתב התחייבות מראש</strong>
						<span>נחלים × הראל חברה לביטוח</span>
					</div>
				</div>

				<div class="cert-line">
					כיסוי ביטוחי מובטח עד סוף התואר,
					<b>גם אם המצב הרפואי משתנה</b>
				</div>

				<div class="timeline" role="img" aria-label="כיסוי רציף לשש שנות לימוד">
					{#each years as y, i (y)}
						<div class="year" style="--d: {i * 0.18}s">
							<span class="node"></span>
							<span class="y-label">שנה {y}</span>
						</div>
					{/each}
					<div class="rail"><div class="rail-fill"></div></div>
				</div>

				<ul class="cert-points">
					<li>0 הצהרות בריאות מחדש</li>
					<li>0 שינויים בתנאי הקבלה</li>
					<li>בונוס: כבודה חינם לכל התקופה</li>
				</ul>

				<div class="stamp">בתוקף עד<br />סוף התואר</div>
			</div>
		</div>
	</div>
</section>

<style>
	.insurability {
		padding-block: var(--space-10);
		background: var(--color-brand-sky-100);
	}

	.grid {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: var(--space-9);
		align-items: center;
	}

	.blocks {
		margin-top: var(--space-6);
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	.block {
		display: flex;
		gap: var(--space-4);
		align-items: flex-start;
	}

	.icon-circle.small {
		width: 48px;
		height: 48px;
		border-style: solid;
	}

	.block h3 {
		font-size: 18px;
		font-weight: 700;
		color: var(--color-text-heading);
	}

	.block p {
		margin-top: var(--space-1);
		font-size: 15px;
		line-height: 1.65;
		color: var(--color-text-secondary);
	}

	.ctas {
		margin-top: var(--space-6);
		display: flex;
		align-items: center;
		gap: var(--space-5);
		flex-wrap: wrap;
	}

	.video-link {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		font-size: 14px;
		font-weight: 700;
		color: var(--color-brand-blue-600);
		text-decoration: none;
	}

	.video-link:hover {
		text-decoration: underline;
	}

	.mini-play {
		width: 28px;
		height: 28px;
		display: grid;
		place-items: center;
		background: var(--color-brand-blue-500);
		color: var(--color-text-inverse);
		border-radius: var(--radius-full);
		padding-inline-start: 2px;
	}

	/* ── Certificate card ─────────────────────────────────── */
	.cert-wrap {
		position: relative;
	}

	.cert {
		position: relative;
		background: var(--color-brand-navy-900);
		color: var(--color-text-inverse);
		border-radius: var(--radius-lg);
		padding: var(--space-6);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
		transform: rotate(-1.2deg);
	}

	.cert::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(280px 200px at 85% 0%, rgba(75, 140, 192, 0.4), transparent 70%);
		pointer-events: none;
	}

	.cert-head {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		color: var(--color-brand-yellow-500);
	}

	.cert-head div {
		display: flex;
		flex-direction: column;
	}

	.cert-head strong {
		font-size: 19px;
		color: var(--color-text-inverse);
	}

	.cert-head span {
		font-size: 13px;
		color: var(--color-brand-sky-200);
	}

	.cert-line {
		margin-top: var(--space-4);
		font-size: 15px;
		color: var(--color-brand-sky-100);
		line-height: 1.55;
	}

	.cert-line b {
		color: var(--color-brand-yellow-500);
	}

	/* Timeline */
	.timeline {
		position: relative;
		display: flex;
		justify-content: space-between;
		margin-top: var(--space-6);
		padding-bottom: 26px;
	}

	.rail {
		position: absolute;
		inset-inline: 8px;
		top: 5px;
		height: 3px;
		background: rgba(232, 242, 244, 0.18);
		border-radius: var(--radius-full);
		z-index: 0;
	}

	.rail-fill {
		height: 100%;
		background: var(--color-brand-yellow-500);
		border-radius: var(--radius-full);
		width: 0;
		animation: rail-grow 1.6s 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}

	@keyframes rail-grow {
		to {
			width: 100%;
		}
	}

	.year {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.node {
		width: 13px;
		height: 13px;
		border-radius: var(--radius-full);
		background: var(--color-brand-yellow-500);
		border: 3px solid var(--color-brand-navy-900);
		box-shadow: 0 0 0 2px var(--color-brand-yellow-500);
		opacity: 0;
		animation: node-in 0.3s calc(0.3s + var(--d)) ease forwards;
	}

	@keyframes node-in {
		to {
			opacity: 1;
		}
	}

	.y-label {
		font-size: 11.5px;
		color: var(--color-brand-sky-200);
		white-space: nowrap;
	}

	.cert-points {
		list-style: none;
		margin: var(--space-4) 0 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.cert-points li {
		font-size: 14px;
		font-weight: 600;
		color: var(--color-brand-sky-100);
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	.cert-points li::before {
		content: '✓';
		color: var(--color-success);
		font-weight: 800;
	}

	.stamp {
		position: absolute;
		bottom: 18px;
		inset-inline-end: 24px;
		border: 2.5px solid var(--color-brand-yellow-500);
		color: var(--color-brand-yellow-500);
		font-weight: 800;
		font-size: 13px;
		line-height: 1.25;
		text-align: center;
		padding: 8px 12px;
		border-radius: var(--radius-md);
		transform: rotate(8deg);
		opacity: 0.9;
		mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.6'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.94'/%3E%3C/svg%3E");
	}

	@media (prefers-reduced-motion: reduce) {
		.rail-fill,
		.node {
			animation: none;
			width: 100%;
			opacity: 1;
		}
	}

	@media (max-width: 900px) {
		.insurability {
			padding-block: var(--space-8);
		}

		.grid {
			grid-template-columns: 1fr;
			gap: var(--space-7);
		}

		.cert {
			transform: none;
		}

		.cert-points {
			padding-inline-end: 92px;
		}
	}
</style>
