// Delete after implementing
var jRes = {};

var COUNTDOWN_TRANSLATIONS = {
	'horze.de': {'day': 'Tag,Tage', 'hour': 'Stunde,Stunden', 'minute': 'Minute,Minuten', 'second': 'Sekunde,Sekunden', 'teaser': 'Bald erhältlich', 'showall': 'Alle Produkte anzeigen', 'collectionName': 'Winter Kollektion 2015', 'searchLink': '/on/demandware.store/Sites-hrzde-Site/default/Search-Show?cgid='},
	'horze.dk': {'day': 'Dag,Dage', 'hour': 'Time,Timer', 'minute': 'Minut,Minutter', 'second': 'Sekund,Sekunder', 'teaser': 'Kommer snart', 'showall': 'Se alle produkter', 'collectionName': 'Vinterkollektion 2015', 'searchLink': '/on/demandware.store/Sites-hrzdk-Site/default/Search-Show?cgid='},
	'horze.fi': {'day': 'päivä,päivää', 'hour': 'tuntia,tuntia', 'minute': 'minuutti,minuuttia', 'second': 'sekunti,sekuntia', 'teaser': 'Tulossa pian', 'showall': 'Katso kaikki tuotteet', 'collectionName': 'Vinterkollektion 2015',  'searchLink': '/on/demandware.store/Sites-hrzfi-Site/default/Search-Show?cgid='},
	'horze.fr': {'day': 'Jour,Jours', 'hour': 'Heure,Heures', 'minute': 'Minute,Minutes', 'second': 'Seconde,Secondes', 'teaser': 'A venir bientôt', 'showall': 'Consultez tous nos produits', 'collectionName': 'La collection Automne 2015', 'searchLink': '/on/demandware.store/Sites-hrzfr-Site/default/Search-Show?cgid='},
	'horze.nl': {'day': 'Dag,Dagen', 'hour': 'Uur,Uren', 'minute': 'Minuut,Minuten', 'second': 'Seconde,Seconden', 'teaser': 'Komt binnenkort', 'showall': 'Bekijk alle artikelen', 'collectionName': 'Wintercollectie 2015', 'searchLink': '/on/demandware.store/Sites-hrznl-Site/default/Search-Show?cgid='},
	'horze.no': {'day': 'Dag,Dager', 'hour': 'Time,Timer', 'minute': 'Minutt,Minutter', 'second': 'Sekund,Sekunder', 'teaser': 'Kommer snart', 'showall': 'Se alle produkter', 'collectionName': 'Vinterkolleksjon 2015', 'searchLink': '/on/demandware.store/Sites-hrzno-Site/default/Search-Show?cgid='},
	'horze.ru': {'day': 'День,Дней', 'hour': 'Час,Часов', 'minute': 'Минута,Минут', 'second': 'Секунда,Секунд', 'teaser': 'Скоро в продаже', 'showall': 'Все товары', 'collectionName': 'Зимняя коллекция 2015', 'searchLink': '/on/demandware.store/Sites-hrzru-Site/default/Search-Show?cgid='},
	'horze.se': {'day': 'Dag,Dager', 'hour': 'Timme,Timmar', 'minute': 'Minut,Minuter', 'second': 'Sekund,Sekunder', 'teaser': 'Kommer snart', 'showall': 'Kolla in alla produkter!', 'collectionName': 'Vinterkollektion 2015', 'searchLink': '/on/demandware.store/Sites-hrzse-Site/default/Search-Show?cgid='},
	'horze.co.uk': {'day': 'day,days', 'hour': 'hour,hours', 'minute': 'minute,minutes', 'second': 'second,seconds', 'teaser': 'Coming soon', 'showall': 'Check all products', 'collectionName': 'Winter collection 2015', 'searchLink': '/on/demandware.store/Sites-hrzuk-Site/default/Search-Show?cgid='},
	'horze.com': {'day': 'day,days', 'hour': 'hour,hours', 'minute': 'minute,minutes', 'second': 'second,seconds', 'teaser': 'Coming soon', 'showall': 'Check all products', 'collectionName': 'Winter collection 2015', 'searchLink': '/on/demandware.store/Sites-hrzus-Site/default/Search-Show?cgid='},
	'default': {'day': 'day,days', 'hour': 'hour,hours', 'minute': 'minute,minutes', 'second': 'second,seconds', 'teaser': 'Coming soon', 'showall': 'Check all products', 'collectionName': 'Winter collection 2015', 'searchLink': '/on/demandware.store/Sites-hrzeu-Site/default/Search-Show?cgid='},
};

var	formBF = $('.bf-form > *'),
	beforeBFlayout = $('.beforeBFlayout'),
	startedBFlayout = $('.startedBFlayout'),
	endedBFlayout = $('.endedBFlayout'),
	homeLink = location.hostname,
	winnerBF = 'Sebastian Koller',
	winnerCountry = 'Norway';


//TweemMax Animations
function showBG (){
	var $bgLeft = $('.background-left'),
		$bgRight = $('.background-right')

	if ( $(window).width() > 768 ){
		
		var	tweenBGleft = TweenMax.to($bgLeft, 3.5, {
			right:"50%", 
			autoAlpha:"0.4",
			ease: Power4.easeOut
			}),
			tweenBGright = TweenMax.to($bgRight, 3.5, {
				left:"50%", 
				autoAlpha:"0.4",
				ease: Power4.easeOut
			});
	}
	else{
		var	tweenBGright = TweenMax.fromTo($bgRight, 3.5, {
				left:"-5%", 
				autoAlpha:"0",

			},

			{
				left:"0%", 
				autoAlpha:"0.2",
				ease: Power4.easeOut
			});
	}

	
}


function showLayout (layout){
	$elements = layout.find('.layout-content > *');
	tweenForm = TweenMax.staggerFromTo($elements, 1, {y:"+=30", autoAlpha: 0},{y:"0", autoAlpha: 1}, 0.3);
	showCountdown();
}

function hideForm (){
	tweenForm = TweenMax.to(formBF.parent(), 1, {force3D: "auto", scale:0.6, autoAlpha: 0});
}

function showCountdown (){
	bfCountdown = $('.bf-countdown');
	tweenCountdown = TweenMax.fromTo(bfCountdown, 2, {y:"-=30", autoAlpha: 0},{y:"0", autoAlpha: 1});
}

//Validate and send a form
function sendForm(){


	hideForm ();

	var bfConfirm = $('.bf-confirm');
	tweenConfirm = TweenMax.fromTo(bfConfirm, 1, {delay: 3, y:"-50%",scale:0.6, autoAlpha: 0, display: "none"}, {scale:1, autoAlpha: 1, display: "block"} );
}		

//Countdown logic
function setCountdown(timeString, layout, onFinish) {
	var date = new Date(timeString);

	if( date > new Date() ){
		layout.css({display: 'block'});
		showLayout(layout);
	}

	var $countdown = layout.find('.countdown'),
		format = "<div class='cd-days'><div class='cd-num'>%-D</div><div class='cd-value'>%!D:{days};</div></div><div class='cd-hours'><div class='cd-num'>%H</div><div class='cd-value'>%!H:{hours};</div></div><div class='cd-minutes'><div class='cd-num'>%M</div><div class='cd-value'>%!M:{minutes};</div></div><div class='cd-seconds'><div class='cd-num'>%S</div><div class='cd-value'>%!S:{seconds};</div></div>";
	var hostname = window.location.host.replace('www.', '');
	var translations = COUNTDOWN_TRANSLATIONS[hostname] || COUNTDOWN_TRANSLATIONS['default'];

	format = format
		.replace('{days}', translations.day)
		.replace('{hours}', translations.hour)
		.replace('{minutes}', translations.minute)
		.replace('{seconds}', translations.second);

	$countdown.countdown(date)
		.on('update.countdown', function(event) {

			if (event.offset.totalDays === 0)
			{
				format = format.replace(/%-D(.*?);/, '');
			}
			if (event.offset.hours === 0)
			{
				format = format.replace(/%-H(.*?);/, '');
			}

			$(this).html(event.strftime(format));
		})
		.on('finish.countdown', function() {
			layout.css({display: 'none'});
			var callback = onFinish || new Function();
			callback();
		});
}

function endedBF(){
	setCountdown(1480032000000, endedBFlayout, endedBF);
}

function afterBF(){
	setCountdown(1448841600000, startedBFlayout, endedBF);
}

function startedBF(){
	$('.winner-bf').html(winnerBF);
	$('.winner-country').html(winnerCountry);
	setCountdown(1448668800000, startedBFlayout, afterBF);
}


$( document ).ready(function() {
	$('.horze-logo a').attr('href', homeLink);

	showBG ();
	setCountdown(1448582400000, beforeBFlayout, startedBF); 

	//Send a form
	$('[type="submit"]').on('click', sendForm);
	$("input").keypress(function(event) {
	    if (event.which == 13) {
	        event.preventDefault();
	        $('[type="submit"]').click();
	    }
	});

});

$( document ).resize(showBG);