
// Load css
//import "../sass/main.scss";

//animation scroll 
$(document).ready(function(){
	$(".anim-scroll").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});		

//toggle btn
var toggle = document.getElementsByClassName("toggle");
var toggleMenu = document.getElementsByClassName("toggle-menu");
var navWrap = document.getElementById("nav-wrap");
toggle[0].onclick = function(){
	toggleMenu[0].classList.toggle("show");
	navWrap.classList.toggle("bg");
    console.log("xer");
};


const tv = [
  {
    name : "ტელევიზორი ერთი",
    text1 : "აღწერა",
    text2 : "აღწერა",
    text3 : "აღწერა",
    text4 : "აღწერა",
    text5 : "აღწერა",
    text6 : "აღწერა",
    title : "NEOS TV 43/49K 500",
    img1  : "assets/tv.png",
    img2  : "assets/Group 458.png",
  },
   {
    name : "ტელევიზორი ორი",
    text1 : "აღწერა",
    text2 : "აღწერა",
    text3 : "აღწერა",
    text4 : "აღწერა",
    text5 : "აღწერა",
    text6 : "აღწერა",
    title : "NEOS TV 43/49K 500",
    img1  : "assets/tv.png",
    img2  : "assets/Group 458.png",
  }
]
const mixer = [
  {
    name : "მიქსერი ერთი",
    text1 : "აღწერა",
    text2 : "აღწერა",
    text3 : "აღწერა",
    text4 : "აღწერა",
    text5 : "აღწერა",
    text6 : "აღწერა",
    title : "NEOS TV 43/49K 500",
    img1  : "assets/tv.png",
    img2  : "assets/Group 458.png",
  },
   {
    name : "მიქსერი ორი",
    text1 : "აღწერა",
    text2 : "აღწერა",
    text3 : "აღწერა",
    text4 : "აღწერა",
    text5 : "აღწერა",
    text6 : "აღწერა",
    title : "NEOS TV 43/49K 500",
    img1  : "#",
    img2  : "#",
  }
]
const blender = [
  {
    name : "ბლენდერი ერთი",
    text1 : "აღწერა",
    text2 : "აღწერა",
    text3 : "აღწერა",
    text4 : "აღწერა",
    text5 : "აღწერა",
    text6 : "აღწერა",
    title : "NEOS TV 43/49K 500",
    img1  : "#",
    img2  : "#",
  },
   {
    name : "ბლენდერი ორი",
    text1 : "აღწერა",
    text2 : "აღწერა",
    text3 : "აღწერა",
    text4 : "აღწერა",
    text5 : "აღწერა",
    text6 : "აღწერა",
    title : "NEOS TV 43/49K 500",
    img1  : "#",
    img2  : "#",
  }
]
const handMixer = [
  {
    name : "ხელის მიქსერი ერთი",
    text1 : "აღწერა",
    text2 : "აღწერა",
    text3 : "აღწერა",
    text4 : "აღწერა",
    text5 : "აღწერა",
    text6 : "აღწერა",
    title : "NEOS TV 43/49K 500",
    img1  : "#",
    img2  : "#",
  },
   {
    name : "ხელის მიქსერი ორი",
    text1 : "აღწერა",
    text2 : "აღწერა",
    text3 : "აღწერა",
    text4 : "აღწერა",
    text5 : "აღწერა",
    text6 : "აღწერა",
    title : "NEOS TV 43/49K 500",
    img1  : "#",
    img2  : "#",
  },
  {
    name : "ხელის მიქსერი სამი",
    text1 : "აღწერა",
    text2 : "აღწერა",
    text3 : "აღწერა",
    text4 : "აღწერა",
    text5 : "აღწერა",
    text6 : "აღწერა",
    title : "NEOS TV 43/49K 500",
    img1  : "#",
    img2  : "#",
  }
]
const juicer = [
  {
    name : "წვენსაწური ერთი",
    text1 : "აღწერა",
    text2 : "აღწერა",
    text3 : "აღწერა",
    text4 : "აღწერა",
    text5 : "აღწერა",
    text6 : "აღწერა",
    title : "NEOS TV 43/49K 500",
    img1  : "#",
    img2  : "#",
  },
   {
    name : "წვენსაწური ორი",
    text1 : "აღწერა",
    text2 : "აღწერა",
    text3 : "აღწერა",
    text4 : "აღწერა",
    text5 : "აღწერა",
    text6 : "აღწერა",
    title : "NEOS TV 43/49K 500",
    img1  : "#",
    img2  : "#",
  }
]
const kettle = [
  {
    name : "ჩაიდანი ერთი",
    text1 : "აღწერა",
    text2 : "აღწერა",
    text3 : "აღწერა",
    text4 : "აღწერა",
    text5 : "აღწერა",
    text6 : "აღწერა",
    title : "NEOS TV 43/49K 500",
    img1  : "#",
    img2  : "#",
  },
   {
    name : "ჩაიდანი ორი",
    text1 : "აღწერა",
    text2 : "აღწერა",
    text3 : "აღწერა",
    text4 : "აღწერა",
    text5 : "აღწერა",
    text6 : "აღწერა",
    title : "NEOS TV 43/49K 500",
    img1  : "#",
    img2  : "#",
  }
]



function openPopup(){
	var popup = document.getElementById('myPopup');
	popup.classList.toggle('show');
}


    const links = document.querySelectorAll("a.product-link");
    var slide =  document.getElementById('myPopup');

        // ხურავს ფოფაფს
    links.forEach(function(link) {
    	link.onclick = function(event){
            // ვმალავთ ტოგგლ ღილაკს
            var toggle = document.getElementById("togle");
            toggle.style.zIndex = "-1";
    		//მომხმარებელმა სლაიდის გახსნისას ზევიდან სხვა პროდუქტის სლაიდი რომ არ გახსნას დახურვამდე
    		var linkremove = document.getElementsByClassName("product-link");
    		for(var i = 0; i<linkremove.length; i++){
    			linkremove[i].style.zIndex = "-1";
    		}
        	var product;
        	// ვიგებთ რომელ პროდუქტს დააჟირა მომხმარებელმა და ცვლადს ვანიჭებთ შესაბამის მასივს
        	var attribute = link.getAttribute('data-product');
			if(attribute === "0"){
				product = tv;
			}else if(attribute === "1"){
				product = mixer;
			}else if(attribute === "2"){
				product = blender;
			}else if(attribute === "3"){
				product = handMixer;
			}else if(attribute === "4"){
				product = juicer;
			}else if(attribute === "5"){
				product = kettle;
			}
			// ვამატებთ ჰტმლ-ლს შესაბამისი პროდუქტის არჩევის მიხედვით
			for(var i = 0; i< product.length; i++){
				const div = document.createElement('div');
                

				div.innerHTML = 
					`
						<div class="popup-slide">
						  	<div class="popup-left">
						  		<span class="popup-title">${product[i].title}</span>
						  		<div class="popup-img"><img src="${product[i].img1}" ></div>
						  		<div class="popup-icons">
						  			<img src="${product[i].img2}">
						  		</div>
						  	</div>
						  	<div class="popup-right">
						  		<a class="popup-close"><i class="fas fa-times"></i></a>
						  		<span class="popup-description">${product[i].name}</span>
                                <div class="popup-p">
    						  		<p>${product[i].text1}</p>
    						  		<p>${product[i].text2}</p>
    						  		<p>${product[i].text3}</p>
    						  		<p>${product[i].text4}</p>
    						  		<p>${product[i].text5}</p>
    						  		<p>${product[i].text6}</p>
                                </div>    
						  	</div>
						</div>
					`;

				slide.appendChild(div);   
			}
			openPopup();
			$('.popup').slick()

			// ხურავს ფოფაფს არ მუშაობს
			const closers = document.querySelectorAll("a.popup-close");
    		closers.forEach(function(closer) {
    			closer.onclick = function(event){
	        		openPopup();
	        		//ვშლით ყველა ახლად შექმნილ დივს და სლიქ სლაიდერის მიერ მინიჭებულ კლასებს, იმისთვის რომ ხელმეორედ დაჭერის შემთხვევაში ძველები აღარ გაიხსნას
                    // ასევე უკან ვხსნით ტოგლ ღილაკს
	        		var myNode = document.getElementById("myPopup");
                    var toggle = document.getElementById("togle");
                    toggle.style.zIndex = "1";
					while (myNode.firstChild) {
	    				myNode.removeChild(myNode.firstChild);
					}
					myNode.classList.remove("slick-initialized");
					myNode.classList.remove("slick-slider");
					//ვაბრუნებთ ლინკს ზედა ფენაზე რომ ისევ იმუშაოს
					var linkremove = document.getElementsByClassName("product-link");
    					for(var i = 0; i<linkremove.length; i++){
    						linkremove[i].style.zIndex = "99";
    					}
        		}
 			 });
        }
    });



