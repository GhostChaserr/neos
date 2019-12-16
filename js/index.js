
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
};


const tv = [
  {
    name : "მახასიათებლები",
    text1 : "მოდელი: NEOS 40N6000",
    text2 : "ეკრანის დიაგონალი: 40 (101 სმ)",
    text3 : "გაფართოება: 1920x1080 (Full HD)",
    text4 : "Smart TV: კი",
    text5 : "",
    text6 : "",
    title : "NEOS TV 43/49K 500",
    img1  : "https://i.ibb.co/QmcPFVj/NEOS-LED-40-N6000-40.jpg",
    img2  : "assets/Group 458.png",
  },
   {
    name : "მახასიათებლები",
    text1 : "მოდელი: 43N500043",
    text2 : "ეკრანის დიაგონალი: 32 (81 სმ)",
    text3 : "გაფართოება: 1366x768",
    text4 : "Smart TV: კი",
    text5 : "",
    text6 : "",
    title : "NEOS TV 43/49K 500",
    img1  : "https://i.ibb.co/VqwpB2G/tel2.jpg",
    img2  : "assets/Group 458.png",
  },
  {
    name : "მახასიათებლები",
    text1 : "მოდელი: 32N6000",
    text2 : "ეკრანის დიაგონალი: 32''(81სმ)",
    text3 : "გაფართოება: 1366x768",
    text4 : "Smart TV: კი",
    text5 : "",
    text6 : "",
    title : "NEOS TV 43/49K 500",
    img1  : "https://i.ibb.co/7t44QDt/tel3.jpg",
    img2  : "assets/Group 458.png",
  },
  {
    name : "მახასიათებლები",
    text1 : "მოდელი: 32N5000",
    text2 : "ეკრანის დიაგონალი: 32''(81სმ)",
    text3 : "გაფართოება: 1366x768",
    text4 : "Smart TV: კი",
    text5 : "",
    text6 : "",
    title : "NEOS TV 43/49K 500",
    img1  : "https://i.ibb.co/nQNpz70/tel4.jpg",
    img2  : "assets/Group 458.png",
  }
]

// https://i.ibb.co/7t44QDt/tel3.jpg

// https://i.ibb.co/nQNpz70/tel4.jpg
const mixer = [
  {
    name : "მახასიათებლები",
    text1 : "მოდელი: Neos HM150",
    text2 : "სიმძლავრე: 150 W",
    text3 : "სიჩქარების რაოდენობა: 5",
    text4 : "ფერი: თეთრი",
    text5 : "",
    text6 : "",
    title : "NEOS TV 43/49K 500",
    img1  : "https://i.ibb.co/SRnk376/miqseri.jpg",
    img2  : "",
  },
  {
    name : "მახასიათებლები",
    text1 : "მოდელი: Neos HM150",
    text2 : "სიმძლავრე: 150 W",
    text3 : "სიჩქარების რაოდენობა: 5",
    text4 : "ფერი: თეთრი",
    text5 : "",
    text6 : "",
    title : "NEOS TV 43/49K 500",
    img1  : "https://i.ibb.co/SRnk376/miqseri.jpg",
    img2  : "",
  },
  {
    name : "მახასიათებლები",
    text1 : "მოდელი: Neos HM150",
    text2 : "სიმძლავრე: 150 W",
    text3 : "სიჩქარების რაოდენობა: 5",
    text4 : "ფერი: თეთრი",
    text5 : "",
    text6 : "",
    title : "NEOS TV 43/49K 500",
    img1  : "https://i.ibb.co/SRnk376/miqseri.jpg",
    img2  : "",
  },
]
const blender = [
  {
    name : "მახასიათებლები",
    text1 : "მოდელი:  HB550",
    text2 : "სიმძლავრე: 750 W",
    text3 : "ჯამის მოცულობა: 1500 მლ",
    text4 : "სიჩქარეთა რაოდენობა: 10",
    text5 : "კორპუსის მასალა: პლასტმასი",
    text6 : "",
    title : "NEOS HB550 ჩასატვირთი ბლენდერი 10 სიჩქარიანი თეთრი 1500 მლ (ნეოსი)",
    img1  : "https://i.ibb.co/V3nPwVm/blender.jpg",
    img2  : "#",
  },
   {
    name : "მახასიათებლები",
    text1 : "მოდელი:  JB450",
    text2 : "სიმძლავრე: 450 W",
    text3 : "ჯამის მოცულობა: 1200 მლ",
    text4 : "სიჩქარეთა რაოდენობა: 2",
    text5 : "კორპუსის მასალა: პლასტმასი",
    text6 : "",
    title : "NEOS JB450 მექანიკური ბლენდერი 2 სიჩქარიანი თეთრი 1200 მლ (ნეოსი)",
    img1  : "https://i.ibb.co/p4ywpGK/blender2.jpg",
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



/*
function openPopup(){
	var popup = document.getElementById('myPopup');
    var overlay = document.getElementById('overlay');
	overlay.classList.toggle('show');
    popup.classList.toggle('show');
}
*/

    
    var slide =  document.getElementById('myPopup');
    var overlay = document.getElementById('overlay');
    var myNode = document.getElementById("myPopup");

    // ხსნის ფოფაფს
    const links = document.querySelectorAll("a.product-link");
    links.forEach(function(link) {
    	link.onclick = function(event){
            // ვმალავთ ტოგგლ ღილაკს და მენიუს ფოფაფის გახსნისას( თუ ის უკვე გახსნილია ფოფაფს ზევიდან ედება)
            toggle[0].style.zIndex = "-1";
            toggleMenu[0].style.zIndex = "-1";
            //ვამუქებთ უკანა ფონს ფოფაფის გახსნისას და ფოფაფი გადმოგვაქვს ზევით
    		overlay.style.zIndex = "2";
            slide.style.zIndex="3";


        	var product;
        	// ვიგებთ რომელ პროდუქტს დააჭირა მომხმარებელმა და ცვლადს ვანიჭებთ შესაბამის მასივს
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

			$('.popup').slick()

			// ხურავს ფოფაფს არ მუშაობს
			const closers = document.querySelectorAll("a.popup-close");
    		closers.forEach(function(closer) {
    			closer.onclick = function(event){
	        		//ვშლით ყველა ახლად შექმნილ დივს და სლიქ სლაიდერის მიერ მინიჭებულ კლასებს, იმისთვის 
                    //რომ ხელმეორედ დაჭერის შემთხვევაში ძველები აღარ გაიხსნას
					while (myNode.firstChild) {
	    				myNode.removeChild(myNode.firstChild);
					}
					myNode.classList.remove("slick-initialized");
					myNode.classList.remove("slick-slider");
					// ვმალავთ ტოგგლ ღილაკს და მენიუს ფოფაფის გახსნისას( თუ ის უკვე გახსნილია ფოფაფს ზევიდან ედება)
                    toggle[0].style.zIndex = "";
                    toggleMenu[0].style.zIndex = "";
                    //ვამუქებთ უკანა ფონს ფოფაფის გახსნისას და ფოფაფი გადმოგვაქვს ზევით
                    overlay.style.zIndex = "-1";
                    slide.style.zIndex="";
        		}
 			 });
        }
    });



