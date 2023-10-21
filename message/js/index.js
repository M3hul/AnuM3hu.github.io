this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Hey Babe 💝 Today it's your 18th Birthday, I'm very Happy for day Anu, I know you have been gone through very bad time and things happened to you and there are many pending apologies from my side, Dont worry, I'm Always with you Now and Ever 💑 . It's been so long i havent seen your face , I Miss your smile, Missing you everyday and 🍑 too, but yea it's Gonna worth it, ‎      🌠 One day, We must say that WE MADE IT !!                    ‎       Once Again Happy Birthday 🎂 Enjoy your day to the fullest. ‎  ‎  ‎  ‎    I Love You Anu 💓";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
