const section = document.querySelector("section");
for(var i=0; i<=50; i++){
 const div = document.createElement("div");
 div.classList.add("blok");
 section.appendChild(div);
}
function animacija (){
 anime({
  targets: ".blok",
  translateX: function(){
   return anime.random(-700, 700);
  },
  translateY: function(){
   return anime.random(-300, 300);
  },
  scale: function(){
   return anime.random(1,5);
  },
  rotate: -45,
  easing: "easeInOutBack",
  duration: 3000,
  delay: anime.stagger(10),
  complete: animacija
 })
}
animacija()
