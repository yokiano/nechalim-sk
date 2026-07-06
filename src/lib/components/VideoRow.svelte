<script module lang="ts">
	export type Video = { id: string; title: string; desc: string };
</script>

<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Play, ChevronRight, ChevronLeft } from '@lucide/svelte';

	let {
		kicker,
		videos,
		dark = false,
		sectionId,
		children
	}: {
		kicker: string;
		videos: Video[];
		dark?: boolean;
		sectionId: string;
		children: import('svelte').Snippet;
	} = $props();

	let playing = $state<string | null>(null);
	let scroller = $state<HTMLElement | null>(null);

	function scrollBy(dir: number) {
		// RTL: scrolling "forward" (next cards) is negative scrollLeft.
		scroller?.scrollBy({ left: dir * -340, behavior: 'smooth' });
	}

	const schema = $derived(JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': videos.map((v) => ({
			'@type': 'VideoObject',
			name: v.title,
			description: v.desc,
			thumbnailUrl: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
			embedUrl: `https://www.youtube.com/embed/${v.id}`,
			uploadDate: '2025-05-01'
		}))
	}));
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${schema}</script>`}
</svelte:head>

<section class="videos" class:dark id={sectionId}>
	<div class="container">
		<div class="head" use:reveal>
			<span class="kicker" class:kicker-dark={dark}>{kicker}</span>
			{@render children()}
		</div>

		<div class="row-wrap" use:reveal={120}>
			<div class="row" bind:this={scroller}>
				{#each videos as v (v.id)}
					<article class="v-card">
						{#if playing === v.id}
							<div class="v-frame">
								<iframe
									src="https://www.youtube.com/embed/{v.id}?autoplay=1"
									title={v.title}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</div>
						{:else}
							<button class="v-thumb" onclick={() => (playing = v.id)} aria-label="נגן: {v.title}">
								<img
									src="https://img.youtube.com/vi/{v.id}/hqdefault.jpg"
									alt=""
									loading="lazy"
								/>
								<span class="v-play">
									<Play size={18} strokeWidth={2.4} fill="currentColor" />
								</span>
							</button>
						{/if}
						<div class="v-meta">
							<h3>{v.title}</h3>
							<p>{v.desc}</p>
						</div>
					</article>
				{/each}
			</div>

			<div class="nav">
				<button class="nav-btn" onclick={() => scrollBy(-1)} aria-label="הקודם">
					<ChevronRight size={20} strokeWidth={2.2} />
				</button>
				<button class="nav-btn" onclick={() => scrollBy(1)} aria-label="הבא">
					<ChevronLeft size={20} strokeWidth={2.2} />
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	.videos {
		padding-block: var(--space-10);
		background: var(--color-bg-default);
	}

	.videos.dark {
		background: var(--color-brand-navy-900);
		color: var(--color-text-inverse);
	}

	.videos.dark :global(.section-title) {
		color: var(--color-text-inverse);
	}

	.head {
		text-align: center;
		max-width: 46rem;
		margin-inline: auto;
	}

	.kicker-dark {
		background: rgba(75, 140, 192, 0.22);
		color: var(--color-brand-sky-100);
	}

	.row-wrap {
		position: relative;
		margin-top: var(--space-7);
	}

	.row {
		display: flex;
		gap: var(--space-4);
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		padding-bottom: var(--space-3);
		scrollbar-width: thin;
		scrollbar-color: var(--color-brand-blue-500) transparent;
	}

	.v-card {
		flex: 0 0 300px;
		scroll-snap-align: start;
		border-radius: var(--radius-lg);
		overflow: hidden;
		background: var(--color-bg-default);
		border: 1px solid var(--color-border-light);
		box-shadow: var(--shadow-sm);
		transition: all var(--transition);
	}

	.videos.dark .v-card {
		background: rgba(232, 242, 244, 0.06);
		border-color: rgba(232, 242, 244, 0.16);
	}

	.v-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-md);
	}

	.v-thumb {
		position: relative;
		display: block;
		width: 100%;
		aspect-ratio: 16 / 9;
		border: none;
		padding: 0;
		overflow: hidden;
		background: #000;
	}

	.v-thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.4s ease;
	}

	.v-thumb:hover img {
		transform: scale(1.05);
	}

	.v-play {
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		width: 48px;
		height: 48px;
		display: grid;
		place-items: center;
		background: var(--color-brand-yellow-500);
		color: var(--color-text-heading);
		border-radius: var(--radius-full);
		padding-inline-start: 3px;
		transition: scale var(--transition);
	}

	.v-thumb:hover .v-play {
		scale: 1.12;
	}

	.v-frame {
		aspect-ratio: 16 / 9;
		background: #000;
	}

	.v-frame iframe {
		width: 100%;
		height: 100%;
		border: none;
	}

	.v-meta {
		padding: var(--space-3) var(--space-4) var(--space-4);
	}

	.v-meta h3 {
		font-size: 15px;
		font-weight: 700;
		line-height: 1.35;
	}

	.v-meta p {
		margin-top: var(--space-1);
		font-size: 13px;
		line-height: 1.5;
		color: var(--color-text-muted);
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.videos.dark .v-meta p {
		color: var(--color-brand-sky-200);
	}

	.nav {
		display: flex;
		justify-content: center;
		gap: var(--space-3);
		margin-top: var(--space-4);
	}

	.nav-btn {
		width: 42px;
		height: 42px;
		display: grid;
		place-items: center;
		border-radius: var(--radius-full);
		border: 1px solid var(--color-border-default);
		background: var(--color-bg-default);
		color: var(--color-brand-blue-600);
		transition: all var(--transition);
	}

	.videos.dark .nav-btn {
		background: rgba(232, 242, 244, 0.08);
		border-color: rgba(232, 242, 244, 0.25);
		color: var(--color-brand-sky-100);
	}

	.nav-btn:hover {
		background: var(--color-brand-blue-500);
		border-color: var(--color-brand-blue-500);
		color: var(--color-text-inverse);
	}

	@media (max-width: 640px) {
		.videos {
			padding-block: var(--space-8);
		}

		.v-card {
			flex-basis: 260px;
		}
	}
</style>
