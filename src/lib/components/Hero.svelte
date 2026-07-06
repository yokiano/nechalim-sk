<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { countup } from '$lib/actions/countup';
	import WhatsAppIcon from './WhatsAppIcon.svelte';
	import {
		ShieldCheck,
		Plane,
		HeartPulse,
		Clock3,
		Wallet,
		CreditCard,
		Luggage
	} from '@lucide/svelte';

	const tickerItems = [
		{ icon: Wallet, text: 'ביקור רופא בלי כסף מהכיס' },
		{ icon: Plane, text: 'הטסה רפואית מלאה' },
		{ icon: Clock3, text: 'מוקד 24/7 בעברית' },
		{ icon: HeartPulse, text: 'החזר לארנק תוך 7 שעות' },
		{ icon: CreditCard, text: 'תשלומים בלי ריבית' },
		{ icon: Luggage, text: 'כבודה חינם משנתיים' }
	];
</script>

<header class="hero">
	<div class="hero-bg" aria-hidden="true"></div>

	<nav class="container nav">
		<div class="logo">
			נחלים<span class="logo-dot">.</span>
			<span class="logo-sub">ביטוח סטודנטים</span>
		</div>
		<a href="#join" class="btn btn-yellow nav-cta">להצטרפות</a>
	</nav>

	<div class="container hero-grid">
		<div class="hero-copy">
			<span class="hero-badge" use:reveal>
				<ShieldCheck size={16} strokeWidth={2} />
				מגובה ע״י הראל, חברת ביטוחי הבריאות הגדולה בישראל
			</span>
			<h1 use:reveal={80}>
				טסים ללמוד בחו״ל?<br />
				<span class="hl">הביטוח</span> זה הדבר האחרון<br />
				שצריך להלחיץ אתכם
			</h1>
			<p class="hero-sub" use:reveal={160}>
				ביטוח הסטודנטים הוותיק והמשתלם בישראל. כיסוי עד 5 מיליון דולר, אפליקציה שמשלמת לרופא
				במקומכם, ושקט נפשי לכל התואר.
			</p>
			<div class="hero-ctas" use:reveal={240}>
				<a href="#join" class="btn btn-yellow">מתחילים כאן, לוקח 2 דק׳</a>
				<a href="#whatsapp" class="btn btn-whatsapp">
					<WhatsAppIcon />
					וואטסאפ ישיר עם המנכ״ל
				</a>
			</div>
			<div class="hero-trust" use:reveal={320}>
				<div class="trust-item">
					<strong><span use:countup={{ target: 95, suffix: '%' }}>95%</span></strong>
					<span>מהסטודנטים הישראלים בחו״ל</span>
				</div>
				<div class="trust-item">
					<strong><span use:countup={{ target: 27 }}>27</span></strong>
					<span>שנות התמחות בסטודנטים</span>
				</div>
				<div class="trust-item">
					<strong><span use:countup={{ target: 45, suffix: 'K+' }}>45K+</span></strong>
					<span>בוגרים שכבר סיימו איתנו</span>
				</div>
			</div>
		</div>

		<div class="hero-visual" use:reveal={200}>
			<div class="phone-card">
				<div class="chat-header">
					<img src="/img/ceo-portrait.jpg" alt="" width="38" height="38" />
					<div>
						<strong>ניר · מנכ״ל נחלים</strong>
						<span>מחובר עכשיו</span>
					</div>
				</div>
				<div class="chat-row them msg-1">
					<p>היי ניר, לא מרגישה טוב ואני לבד בבודפשט…</p>
				</div>
				<div class="chat-row us msg-2">
					<p>קבענו לך רופא דרך האפליקציה, מחר 9:00. הביקור עלינו — בלי כסף מהכיס</p>
				</div>
				<div class="chat-row them msg-3">
					<p>וואי תודה!! איזה שירות</p>
				</div>
				<div class="chat-meta msg-4">מוקד 24/7 בעברית · מענה אנושי אמיתי</div>
			</div>
			<div class="float-chip price">החל מ־<strong>$365</strong> לשנה</div>
			<div class="float-chip cover">
				<HeartPulse size={18} strokeWidth={2} />
				כיסוי עד <strong>$5M</strong>
			</div>
		</div>
	</div>

	<div class="marquee" aria-hidden="true">
		<div class="marquee-track">
			{#each [0, 1] as half (half)}
				<div class="marquee-half">
					{#each tickerItems as item (item.text)}
						{@const Icon = item.icon}
						<span class="tick">
							<Icon size={16} strokeWidth={2.2} />
							{item.text}
						</span>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</header>

<style>
	.hero {
		position: relative;
		color: var(--color-text-inverse);
		overflow: hidden;
		isolation: isolate;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		z-index: -1;
		background: url('/img/hero-plane.jpg') center 30% / cover no-repeat;
		animation: bg-zoom 18s ease-out forwards;
	}

	.hero-bg::after {
		content: '';
		position: absolute;
		inset: 0;
		background:
			linear-gradient(15deg, rgba(26, 42, 55, 0.92) 30%, rgba(10, 18, 24, 0.35)),
			var(--color-bg-overlay-dark);
	}

	@keyframes bg-zoom {
		from {
			transform: scale(1.08);
		}
		to {
			transform: scale(1);
		}
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: var(--space-4);
	}

	.logo {
		font-size: 26px;
		font-weight: 900;
		display: flex;
		align-items: baseline;
		gap: var(--space-3);
	}

	.logo-dot {
		color: var(--color-brand-yellow-500);
		margin-inline-start: -12px;
	}

	.logo-sub {
		font-size: 13px;
		font-weight: 500;
		color: var(--color-brand-sky-200);
	}

	.nav-cta {
		height: 40px;
		font-size: 14px;
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: var(--space-8);
		align-items: center;
		padding-block: var(--space-9) var(--space-10);
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		background: rgba(255, 255, 255, 0.09);
		border: 1px solid rgba(255, 255, 255, 0.18);
		border-radius: var(--radius-full);
		padding: 6px 14px;
		font-size: 13px;
		font-weight: 600;
		color: var(--color-brand-cream-200);
		backdrop-filter: blur(6px);
	}

	h1 {
		font-size: clamp(32px, 5vw, 48px);
		font-weight: 800;
		line-height: 1.15;
		margin-top: var(--space-5);
	}

	.hero-sub {
		margin-top: var(--space-4);
		font-size: 18px;
		color: var(--color-text-inverse-muted);
		max-width: 34rem;
	}

	.hero-ctas {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-6);
	}

	.hero-trust {
		display: flex;
		gap: var(--space-7);
		margin-top: var(--space-7);
		flex-wrap: wrap;
	}

	.trust-item {
		display: flex;
		flex-direction: column;
	}

	.trust-item strong {
		font-size: 30px;
		font-weight: 800;
		color: var(--color-brand-yellow-500);
		line-height: 1.15;
	}

	.trust-item > span {
		font-size: 13px;
		color: var(--color-brand-sky-200);
		max-width: 10rem;
	}

	/* ── Chat card ────────────────────────────── */
	.hero-visual {
		position: relative;
		justify-self: center;
	}

	.phone-card {
		background: var(--color-bg-default);
		color: var(--color-text-primary);
		border-radius: var(--radius-lg);
		padding: var(--space-4) var(--space-4) var(--space-3);
		width: min(350px, 100%);
		box-shadow: var(--shadow-lg);
		transform: rotate(-2deg);
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.chat-header {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding-bottom: var(--space-3);
		border-bottom: 1px solid var(--color-border-light);
	}

	.chat-header img {
		width: 38px;
		height: 38px;
		border-radius: var(--radius-full);
		object-fit: cover;
	}

	.chat-header strong {
		display: block;
		font-size: 14px;
	}

	.chat-header span {
		font-size: 12px;
		color: var(--color-success);
	}

	.chat-row p {
		display: inline-block;
		padding: 8px 14px;
		border-radius: var(--radius-lg);
		font-size: 14px;
		max-width: 92%;
	}

	.chat-row.them {
		text-align: start;
	}

	.chat-row.them p {
		background: var(--color-brand-sky-100);
		border-end-start-radius: var(--radius-xs);
	}

	.chat-row.us {
		text-align: end;
	}

	.chat-row.us p {
		background: var(--color-brand-navy-900);
		color: var(--color-text-inverse);
		border-end-end-radius: var(--radius-xs);
	}

	.chat-meta {
		text-align: center;
		font-size: 11px;
		color: var(--color-text-muted);
	}

	/* Sequential chat entrance */
	.msg-1,
	.msg-2,
	.msg-3,
	.msg-4 {
		opacity: 0;
		transform: translateY(10px) scale(0.97);
		animation: msg-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}

	.msg-1 {
		animation-delay: 0.9s;
	}

	.msg-2 {
		animation-delay: 1.7s;
	}

	.msg-3 {
		animation-delay: 2.5s;
	}

	.msg-4 {
		animation-delay: 3.1s;
	}

	@keyframes msg-in {
		to {
			opacity: 1;
			transform: none;
		}
	}

	.float-chip {
		position: absolute;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: var(--color-bg-default);
		color: var(--color-brand-navy-900);
		border-radius: var(--radius-full);
		padding: 8px 16px;
		font-weight: 700;
		font-size: 14px;
		box-shadow: var(--shadow-lg);
		animation: float 4s ease-in-out infinite;
	}

	.float-chip strong {
		font-size: 17px;
		font-weight: 800;
	}

	.float-chip.price {
		top: -18px;
		inset-inline-end: -14px;
		background: var(--color-brand-yellow-500);
	}

	.float-chip.cover {
		bottom: -14px;
		inset-inline-start: -20px;
		animation-delay: -2s;
	}

	.float-chip.cover :global(svg) {
		color: var(--color-brand-blue-500);
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-8px);
		}
	}

	/* ── Ticker ───────────────────────────────── */
	.marquee {
		background: var(--color-brand-yellow-500);
		color: var(--color-text-heading);
		font-weight: 700;
		font-size: 14px;
		padding-block: 10px;
		overflow: hidden;
		white-space: nowrap;
	}

	.marquee-track {
		display: inline-flex;
		animation: scroll 26s linear infinite;
	}

	.marquee-half {
		display: inline-flex;
	}

	.tick {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding-inline: var(--space-5);
		border-inline-start: 1px solid rgba(15, 23, 32, 0.18);
	}

	@keyframes scroll {
		to {
			transform: translateX(50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-track,
		.float-chip,
		.hero-bg {
			animation: none;
		}

		.msg-1,
		.msg-2,
		.msg-3,
		.msg-4 {
			animation: none;
			opacity: 1;
			transform: none;
		}
	}

	@media (max-width: 860px) {
		.hero-grid {
			grid-template-columns: 1fr;
			padding-block: var(--space-7) var(--space-8);
		}

		.hero-visual {
			margin-top: var(--space-4);
		}

		.float-chip.price {
			inset-inline-end: 4px;
		}

		.float-chip.cover {
			inset-inline-start: 4px;
		}
	}
</style>
