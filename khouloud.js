//Where to eat
var whereToEat= 
[{state:"bizerte" ,resturant:[{name:'Le Sport Nautique',adress:'Quai Tarak Ibn Ziad, Bizerte 7000',tel:'72 432 262'},{name:'Restaurant Le Phénicien',adress:'Vieux Port, Bizerte 7000',tel:'72 424 480'}]},
{state:"tunis" ,resturant:[{name:'Le Rocher Gammarth',adress:'Av. Taieb Mhiri, Gammarth 2075',tel:' 26 136 132'},{name:'Dar El Jeld',adress:'5-10, Rue Dar El Jeld، Street 1005',tel:' 71 560 916'}]},
{state:"mahdia" ,resturant:[{name:'Restaurant Neptune',adress:'Av. 14 Janvier, Mahdia 5100',tel:'23 163 153'},{name:'Restaurant Darna',adress:'G353+XHR, Av. 14 Janvier, Mahdia',tel:'54 676 088'}]},
{state:"jendouba" ,resturant:[{name:'Mon Plaisir',adress:"Cité el Hana avenue de l'environnement 8100, Jendouba 8100",tel:'78 613 045'},{name:'Le Sultan',adress:' FQXF+4VX, P17, Jendouba',tel:'90 707 888'}]},
{state:"ariana" ,resturant:[{name:'Dar Fatma',adress:' R5V9+X22, Rue Ahmed Tlili, Ariana',tel:'23 463 000'},{name:'Rustik',adress:'V58C+P5X, Av. Hédi Nouira, Ariana',tel:' 26 556 622'}]},
{state:"beja" ,resturant:[{name:'Restaurant soltana',adress:"49 Béja l'avenir Béja Nord, 9000",tel:'55 565 859'},{name:'Restaurant Dar Beja',adress:'P5FQ+473, Av. de La République, Béja',tel:' 78 443 680'}]},
{state:"ben arous" ,resturant:[{name:"Chicago's Food & Drink",adress:'6 Rue De Gaza, Ben Arous 2014',tel:'27 358 065'},{name:'Restaurant Route 66',adress:'16 Avenue du 14 Janvier 2011, Ben Arous 2013',tel:' 51 494 949'}]},
{state:"manouba" ,resturant:[{name:'Restaurant La Mamma',adress:'Manouba Tech, Manouba 2010',tel:'53 488 281'},{name:'Restaurant ZANNI+',adress:' 28avenue Hedi chekir Manouba, 2010',tel:'58 806 048'}]},
{state:"monastir" ,resturant:[{name:'Restaurant le Pirate Monastir',adress:'Fishing Port 5000، El Ghedir, Monastir',tel:' 73 468 126'},{name:'restaurant Marina The Captain',adress:'cap marina, Monastir 5000',tel:'92 555 655'}]},
{state:"sousse" ,resturant:[{name:"Restaurant Farmer's Steakhouse",adress:' RJVF+4XP, Sousse',tel:'20 155 733'},{name:'Restaurant du Peuple',adress:'15 Rue des Remparts nord Sousse, 4000',tel:'73 220 564'}]},
{state:"tataouine" ,resturant:[{name:'Restaurant Margoum',adress:'WCHX+JH5, Tataouine',tel:''},{name:'Restaurant Castello',adress:'P19 Près de Cafe Charhan1 Tataouine, 3200',tel:' 21 397 103'}]},
{state:"gabes" ,resturant:[{name:'Le royal restaurant',adress:'V4P3+X89, cente, Avenue Habib Bourguiba، Gabès',tel:'75 279 252'},{name:'Restaurant le roi bleu',adress:'27 Avenue Mongi Slim, Gabes 6000',tel:''}]},
{state:"gafsa" ,resturant:[{name:'Restaurant Semiramis',adress:'Gafsa',tel:'20 740 746'},{name:'Restaurant Abid',adress:' CQ8Q+PF6, Rue Kilani Metoui, Gafsa',tel:' 98 429 137'}]},
{state:"kairouan" ,resturant:[{name:'El Brija Restaurant',adress:'Av. Oqba Ibn Nafaâ, Kairouan 3100',tel:'77 229 019'},{name:'Chez Mamie',adress:'270 rue om iyadh houmet jemaa kairouan, Kairouan 3100',tel:'50 333 411'}]},
{state:"nabeul" ,resturant:[{name:'Restaurant Dar Mrad',adress:'Ave Mongi Slim, Rue Khmais Hajri, Nabeul 8000',tel:'20 859 220'},{name:'',adress:'',tel:''}]},
{state:"kasserine" ,resturant:[{name:'Restaurant Elbecha',adress:' 5R9J+C6C, Rue 18 Janvier 1952, Kasserine',tel:'53 736 098'},{name:'Restaurant La Terrasse',adress:'5R8J+FMJ, P13, Kasserine',tel:'99 704 504'}]},
{state:"kebili" ,resturant:[{name:'Restaurant PARADISIO',adress:'PX4C+WVV, Kebili',tel:''},{name:'Bon Gusto',adress:'C206, Qibilī',tel:'22 900 717'}]},
{state:"kef" ,resturant:[{name:'Restaurant Chef Fatma',adress:'5PJ5+J68, Sidi ali ben, Rue Salah Ayach، Le Kef',tel:' 97 706 629'},{name:'Le Petit Bateau',adress:'5PH9+XJV, Le Kef',tel:'27 743 379'}]},
{state:"medenine" ,resturant:[{name:'Dar Dhiafa Medenine',adress:'8GXF+MPQ, Médenine',tel:'50 680 673'},{name:'cheesy',adress:'9G29+6RR, P1, Medinine',tel:'98 157 475'}]},
{state:"sfax" ,resturant:[{name:'Restaurant Baghdad',adress:'63, 3000, 63 Bd. Farhat Hached, Sfax',tel:'74 223 856'},{name:'Restaurant La Voile Blanche',adress:' Rte Teniour, Sfax',tel:' 22 287 799'}]},
{state:"sidi bouzid" ,resturant:[{name:'Restaurant Alkhayma',adress:'Bd Mohamed Bouazizi, Sidi Bouzid 9100',tel:'90 363 142'},{name:' LA MAMMA',adress:'AVENUE HABIB BOURGUIBA, Sidi Bouzid 9100',tel:'98 235 744'}]},
{state:"siliana" ,resturant:[{name:"L'imperial bistro",adress:'',tel:''},{name:'Pavarotti pizza',adress:'Rue Ahmed Ibn Abi Dhiaf, Siliana',tel:'22 365 444'}]},
{state:"tozeur" ,resturant:[{name:'Restaurant La Medina',adress:'Ave Farhat Hached, Tozeur 2200',tel:' 93 330 491'},{name:'Restaurant De La République Tozeur',adress:'Av. Habib Bourguiba, Tozeur 2200',tel:'23 821 901'}]},
{state:"zaghouan" ,resturant:[{name:'LA COMIDA',adress:'C42V+VXW, Cité el Bostene, Zaghouan',tel:'54 517 101'},{name:"Friday's",adress:"Rue De L'Indépendance, Zaghouan 1100",tel:'52 079 899'}]},
]



function eatingPlaces(){
    for (var i=0 ;i<whereToEat.length;i++){
        if(whereToEat[i].state.includes($("#inpstate").val())) {
            $("#stname").html(whereToEat[i].state)
            $("#rname1").html(whereToEat[i].resturant[0].name)
            $("#radress1").html(whereToEat[i].resturant[0].adress)
            $("#rtel1").html(whereToEat[i].resturant[0].tel) 
            $("#rname2").html(whereToEat[i].resturant[1].name)
            $("#radress2").html(whereToEat[i].resturant[1].adress)
            $("#rtel2").html(whereToEat[i].resturant[1].tel) 
        }
    }
} 

//from a slide to a slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
   slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
 
}


 
