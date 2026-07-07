<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Questions from '$lib/components/Questions.svelte';
	import Benefits from '$lib/components/Benefits.svelte';
	import Tracks from '$lib/components/Tracks.svelte';
	import Join from '$lib/components/Join.svelte';
	import Countries from '$lib/components/Countries.svelte';
	import Insurability from '$lib/components/Insurability.svelte';
	import Compare from '$lib/components/Compare.svelte';
	import Gear from '$lib/components/Gear.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import VideoRow, { type Video } from '$lib/components/VideoRow.svelte';
	import Faq from '$lib/components/Faq.svelte';

	const testimonials: Video[] = [
		{
			id: 'NkZlBHGjsxo',
			title: 'תאונת סקי בסלובקיה, הטסה של $50,000',
			desc: 'יוסף אסאדי, סטודנט לרפואה בהונגריה, על תאונה בטיול השנתי שהסתיימה בהטסה רפואית לישראל.'
		},
		{
			id: 'ab40ZXFrLMo',
			title: 'משפחת אליאס: הצד של הבנות והצד של אמא',
			desc: 'סטודנטיות לרפואה ברומניה על חוויית הלימודים בחו״ל, מהצד שלהן ומהצד של האמא.'
		},
		{
			id: '0XVc5ph4Jy4',
			title: 'רגעי החילוץ שניהל ניר בעצמו',
			desc: 'דפנה ציון, אמא של סטודנטית לרפואה בסלובקיה, על רגעי החילוץ שניהל מנכ״ל נחלים.'
		},
		{
			id: 'uNgqiKZLQKQ',
			title: 'ההמלצה של הבית היהודי בקובנה',
			desc: 'הרב משה שיינפלד ממליץ מניסיון של שנים בליווי סטודנטים ישראלים בליטא.'
		},
		{
			id: 'HPEHAfwQomE',
			title: 'יו״ר אגודת הסטודנטים בבודפשט ממליצה',
			desc: 'נטע תמיר, מניסיון אישי של לימודי רפואה בהונגריה.'
		},
		{
			id: 'mAbI7MiyShw',
			title: 'האבא שהפך מספקן למשוכנע',
			desc: 'סטודנטית לרפואה בלטביה שעברה הטסה רפואית בעלות של מאות אלפי שקלים.'
		},
		{
			id: '5YFYEnFGWDs',
			title: 'אירוע מטלטל, טיפול מסור',
			desc: 'אמא של סטודנטית לרפואה בסלובקיה על הליווי הצמוד של ניר סטילוגלו.'
		},
		{
			id: 'amKV8RHqfxw',
			title: 'סטודנטים מוחאים כפיים לביטוח. באמת.',
			desc: 'רגע ספונטני שצילמו סטודנטים בחו״ל ושלחו למנכ״ל.'
		},
		{
			id: 'IuHc9tuMoBI',
			title: 'ליווי אישי לאורך כל שנות התואר',
			desc: 'ד״ר דניאל לביא, בוגרת וטרינריה בסלובקיה, על השירות שקיבלה עד הסוף.'
		}
	];

	const knowledge: Video[] = [
		{
			id: '2dS3DFze3fw',
			title: 'המקרה בגאורגיה שהוליד את ברות ביטוח',
			desc: 'סטודנט לרפואה שנאלץ להפסיק את לימודיו אחרי אירוע רפואי — והמסלול שנולד בעקבותיו.'
		},
		{
			id: '2CrLR8Iqh8w',
			title: 'התקרות והכיסויים שחייבים להכיר',
			desc: 'דוגמאות אמיתיות של תביעות: מתרופות בעשרות יורו ועד אשפוז בעשרות אלפי דולרים.'
		},
		{
			id: '8ICmhI1MNEE',
			title: 'מבטלים ביטוח באמצע תקופת מבחנים?',
			desc: 'דוגמה אמיתית שממחישה איך ביטול בזמן הלא נכון מסכן את המשך הלימודים.'
		},
		{
			id: 'NywjjfRiBuA',
			title: 'מה קורה כשחולים בסופ״ש?',
			desc: 'שתי סטודנטיות לרפואה בהונגריה, שני אירועים רפואיים, ושקט נפשי אחד.'
		},
		{
			id: '6WQhvRcQKi4',
			title: 'לא מרגישים טוב בחו״ל? המדריך',
			desc: 'הצעדים הנכונים, שלב אחרי שלב, כשזקוקים לטיפול רפואי בחו״ל.'
		},
		{
			id: 'MQep75Sbvfc',
			title: 'מהו מסלול ברות ביטוח לסטודנט?',
			desc: 'הביטוח הייחודי של נחלים שמבטיח כיסוי רציף לכל שנות הלימודים.'
		}
	];
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
<Join />
<Countries />
<Insurability />
<Compare />
<Gear />
<HowItWorks />

<VideoRow kicker="בלי פילטרים" sectionId="testimonials" videos={testimonials}>
	<h2 class="section-title">
		סטודנטים (והורים) <span class="hl">מספרים</span>
	</h2>
</VideoRow>

<Faq />

<VideoRow kicker="שווה לדעת" sectionId="knowledge" videos={knowledge} dark>
	<h2 class="section-title">מידע נוסף שכל סטודנט בחו״ל חייב לדעת</h2>
</VideoRow>
