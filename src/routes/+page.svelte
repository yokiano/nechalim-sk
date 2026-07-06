<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Questions from '$lib/components/Questions.svelte';
	import Benefits from '$lib/components/Benefits.svelte';
	import Tracks from '$lib/components/Tracks.svelte';
</script>

<svelte:head>
	<title>ביטוח סטודנטים בחו״ל | נחלים — הוותיק והמשתלם בישראל</title>
	<meta
		name="description"
		content="ביטוח סטודנטים בחו״ל של נחלים: כיסוי עד 5 מיליון דולר, ביקור רופא בלי כסף מהכיס, ומסלולים מסמסטר ועד שש שנים. החל מ-365$ לשנה."
	/>
</svelte:head>

<Hero />
<Questions />
<Benefits />
<Tracks />
