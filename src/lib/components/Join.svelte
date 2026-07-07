<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import WhatsAppIcon from './WhatsAppIcon.svelte';
	import nirPortrait from '$lib/assets/people/nir-stilogalo-profile-pic.jpg';
	import { Check } from '@lucide/svelte';

	const countries = [
		'הונגריה',
		'איטליה',
		'ליטא',
		'רומניה',
		'גאורגיה',
		'צ׳כיה',
		'סלובקיה',
		'לטביה',
		'גרמניה',
		'פולין',
		'ארה״ב',
		'אוסטריה',
		'ספרד',
		'צרפת',
		'אחר'
	];

	const durations = [
		{ value: 'exchange', label: 'חילופי סטודנטים (עד חצי שנה)' },
		{ value: 'year', label: 'שנה אחת' },
		{ value: 'two', label: 'שנתיים' },
		{ value: 'three', label: '3 שנים' },
		{ value: 'long', label: '4–6 שנים (ברות ביטוח)' },
		{ value: 'unsure', label: 'עדיין לא בטוח/ה' }
	];

	const chips = [
		'מחיר מותאם למדינה ולמשך הלימודים שלכם',
		'12–24 תשלומים בלי ריבית ובלי הצמדה',
		'אישור ביטוח לוויזה — מוכן תוך 24 שעות'
	];

	let name = $state('');
	let phone = $state('');
	let country = $state('');
	let duration = $state('');
	let submitted = $state(false);

	const waBase = 'https://wa.me/972525605336?text=';
	const waDefault =
		waBase +
		encodeURIComponent('שלום ניר, אשמח לקבל מחיר לביטוח סטודנטים של נחלים. הגעתי דרך האתר.');

	function buildWaLink() {
		const durationLabel = durations.find((d) => d.value === duration)?.label ?? duration;
		const text = [
			'שלום, אשמח לקבל מחיר לביטוח סטודנטים של נחלים.',
			name && `שם: ${name}`,
			phone && `טלפון: ${phone}`,
			country && `מדינת לימודים: ${country}`,
			durationLabel && `משך לימודים: ${durationLabel}`
		]
			.filter(Boolean)
			.join('\n');
		return waBase + encodeURIComponent(text);
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		submitted = true;
	}
</script>

<section class="join" id="join">
	<div class="container">
		<div class="head" use:reveal>
			<span class="kicker">לוקח 2 דק׳ · בלי התחייבות</span>
			<h2 class="section-title">
				כמה זה עולה <span class="hl">לכם</span>?
			</h2>
			<p class="lede">
				המחיר משתנה לפי מדינה ומשך לימודים. ממלאים פרטים, מקבלים הצעה מותאמת — לפני שטסים.
			</p>
		</div>

		<div class="panel" use:reveal={100}>
			<div class="panel-main">
				{#if submitted}
					<div class="success">
						<span class="success-icon"><Check size={22} strokeWidth={3} /></span>
						<div>
							<strong>קיבלנו. נחזור אליכם תוך שעה.</strong>
							<p>
								רוצים מענה מיידי? שלחו את הפרטים בוואטסאפ לניר — הוא עונה בעצמו, גם בלילה.
							</p>
						</div>
						<div class="success-actions">
							<a class="btn btn-whatsapp" href={buildWaLink()} target="_blank" rel="noopener">
								<WhatsAppIcon />
								שליחה בוואטסאפ עם הפרטים
							</a>
							<button type="button" class="reset" onclick={() => (submitted = false)}>
								עדכון פרטים
							</button>
						</div>
					</div>
				{:else}
					<form class="strip" onsubmit={handleSubmit}>
						<label class="field">
							<span>שם מלא</span>
							<input type="text" name="name" bind:value={name} required autocomplete="name" />
						</label>
						<label class="field">
							<span>טלפון (אתם או הורה)</span>
							<input
								type="tel"
								name="phone"
								bind:value={phone}
								required
								autocomplete="tel"
								placeholder="050-0000000"
							/>
						</label>
						<label class="field">
							<span>מדינת לימודים</span>
							<select name="country" bind:value={country} required>
								<option value="" disabled>בחרו מדינה</option>
								{#each countries as c (c)}
									<option value={c}>{c}</option>
								{/each}
							</select>
						</label>
						<label class="field">
							<span>כמה זמן לומדים?</span>
							<select name="duration" bind:value={duration} required>
								<option value="" disabled>בחרו משך</option>
								{#each durations as d (d.value)}
									<option value={d.value}>{d.label}</option>
								{/each}
							</select>
						</label>
						<button type="submit" class="btn btn-primary send">לקבלת מחיר מיידי</button>
					</form>

					<div class="chips">
						{#each chips as chip (chip)}
							<span class="chip">
								<Check size={12} strokeWidth={3.2} />
								{chip}
							</span>
						{/each}
					</div>
					<p class="fine">בלי ספאם. רק הצעה מותאמת + אפשרות להצטרפות אונליין.</p>
				{/if}
			</div>

			<aside class="panel-side" id="whatsapp">
				<span class="from">החל מ־</span>
				<strong class="price">$365</strong>
				<span class="note">לשנה · מותאם ליעד שלכם</span>

				<div class="side-divider" aria-hidden="true"></div>

				<div class="wa-row">
					<img src={nirPortrait} alt="ניר סטילוגלו" width="40" height="40" />
					<div>
						<strong>ניר סטילוגלו</strong>
						<span>מנכ״ל נחלים · מענה אישי</span>
					</div>
				</div>
				<p class="wa-blurb">
					לא רוצים למלא טופס? שאלה על מצב רפואי, ויזה, או השוואה מול חברה אחרת — כתבו ישירות.
				</p>
				<a class="btn btn-whatsapp side-wa" href={waDefault} target="_blank" rel="noopener">
					<WhatsAppIcon />
					וואטסאפ ישיר עם המנכ״ל
				</a>
			</aside>
		</div>
	</div>
</section>

<style>
	.join {
		padding-block: var(--space-10);
		background: var(--color-bg-default);
		scroll-margin-top: var(--space-4);
	}

	.head {
		text-align: center;
		max-width: 40rem;
		margin-inline: auto;
	}

	.lede {
		margin-top: var(--space-3);
		color: var(--color-text-secondary);
		font-size: 17px;
	}

	.panel {
		display: grid;
		grid-template-columns: 1.45fr 0.55fr;
		margin-top: var(--space-7);
		border-radius: var(--radius-lg);
		overflow: hidden;
		border: 1px solid var(--color-border-light);
		box-shadow: var(--shadow-md);
	}

	.panel-main {
		padding: var(--space-6) var(--space-6) var(--space-5);
		background: var(--color-bg-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--space-4);
		min-height: 168px;
	}

	.strip {
		display: grid;
		grid-template-columns: 1.1fr 1fr 0.95fr 1fr auto;
		gap: var(--space-2);
		align-items: end;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 4px;
		min-width: 0;
	}

	.field span {
		font-size: 11px;
		font-weight: 700;
		color: var(--color-text-muted);
		letter-spacing: 0.02em;
	}

	input,
	select {
		height: 40px;
		border: 1px solid var(--color-border-default);
		border-radius: var(--radius-xs);
		background: var(--color-bg-default);
		color: var(--color-text-primary);
		padding: 0 10px;
		font-size: 14px;
		font-family: inherit;
		transition: border-color var(--transition), box-shadow var(--transition);
	}

	input::placeholder {
		color: var(--color-text-muted);
		opacity: 0.7;
	}

	input:focus,
	select:focus {
		outline: none;
		border-color: var(--color-brand-blue-500);
		box-shadow: 0 0 0 2px rgba(75, 140, 192, 0.16);
	}

	.send {
		height: 40px;
		padding-inline: var(--space-4);
		font-size: 14px;
		white-space: nowrap;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.chip {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		background: var(--color-bg-default);
		border: 1px solid var(--color-border-light);
		color: var(--color-text-secondary);
		font-size: 12px;
		font-weight: 600;
		padding: 5px 11px;
		border-radius: var(--radius-full);
	}

	.chip :global(svg) {
		color: var(--color-success);
		flex-shrink: 0;
	}

	.fine {
		font-size: 12px;
		color: var(--color-text-muted);
		text-align: center;
	}

	.success {
		display: flex;
		align-items: center;
		gap: var(--space-4);
		flex-wrap: wrap;
	}

	.success-icon {
		width: 44px;
		height: 44px;
		display: grid;
		place-items: center;
		background: var(--color-success);
		color: var(--color-text-inverse);
		border-radius: var(--radius-full);
		flex-shrink: 0;
	}

	.success strong {
		display: block;
		font-size: 18px;
		color: var(--color-text-heading);
	}

	.success p {
		margin-top: 2px;
		font-size: 14px;
		color: var(--color-text-secondary);
	}

	.success-actions {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		margin-inline-start: auto;
	}

	.reset {
		border: none;
		background: none;
		color: var(--color-brand-blue-600);
		font-size: 13px;
		font-weight: 600;
		text-decoration: underline;
		padding: 0;
	}

	.panel-side {
		position: relative;
		background: var(--color-brand-navy-900);
		color: var(--color-text-inverse);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: var(--space-5) var(--space-4);
		gap: var(--space-1);
		overflow: hidden;
		scroll-margin-top: var(--space-4);
	}

	.panel-side::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(200px 160px at 70% 12%, rgba(75, 140, 192, 0.35), transparent);
		pointer-events: none;
	}

	.panel-side > * {
		position: relative;
	}

	.from {
		color: var(--color-brand-sky-200);
		font-size: 13px;
	}

	.price {
		font-size: clamp(28px, 3.5vw, 38px);
		font-weight: 800;
		color: var(--color-brand-yellow-500);
		line-height: 1.1;
	}

	.note {
		color: var(--color-brand-sky-200);
		font-size: 12px;
		max-width: 11rem;
	}

	.side-divider {
		width: 72%;
		height: 1px;
		background: rgba(255, 255, 255, 0.14);
		margin-block: var(--space-3) var(--space-2);
	}

	.wa-row {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		text-align: start;
		width: 100%;
		max-width: 15rem;
	}

	.wa-row img {
		width: 40px;
		height: 40px;
		border-radius: var(--radius-full);
		object-fit: cover;
		border: 2px solid rgba(255, 255, 255, 0.2);
		flex-shrink: 0;
	}

	.wa-row strong {
		display: block;
		font-size: 14px;
	}

	.wa-row span {
		font-size: 11px;
		color: var(--color-brand-sky-200);
	}

	.wa-blurb {
		margin-top: var(--space-3);
		font-size: 12px;
		line-height: 1.5;
		color: var(--color-brand-sky-200);
		max-width: 15rem;
		text-align: start;
	}

	.side-wa {
		margin-top: var(--space-3);
		width: 100%;
		max-width: 15rem;
		height: 40px;
		font-size: 14px;
	}

	@media (max-width: 980px) {
		.strip {
			grid-template-columns: 1fr 1fr;
		}

		.send {
			grid-column: 1 / -1;
			width: 100%;
		}
	}

	@media (max-width: 760px) {
		.join {
			padding-block: var(--space-8);
		}

		.panel {
			grid-template-columns: 1fr;
		}

		.panel-main {
			order: 2;
			padding: var(--space-5) var(--space-4);
		}

		.panel-side {
			order: 1;
			padding: var(--space-5);
		}

		.strip {
			grid-template-columns: 1fr;
		}

		.success {
			flex-direction: column;
			align-items: flex-start;
		}

		.success-actions {
			margin-inline-start: 0;
			width: 100%;
			flex-direction: column;
		}

		.success-actions .btn {
			width: 100%;
		}
	}
</style>
