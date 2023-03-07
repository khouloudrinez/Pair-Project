var states=[{state:"ariana",m1:"Ben Ayed Palace",im1:"images/Ariana/Ben Ayed Palace.jpg",m2:"Park Ennahli",im2:"images/Ariana/ennahli.jpg"},
{state:"beja",m1:"Djebba",im1:"images/Beja/Djebba.jpg",m2:"Dougga",im2:"images/Beja/Dougga.jpg"},
{state:"ben arous",m1:"Mount Bougarnin",im1:"images/Ben arous/bougarnin.jpg",m2:"Oudna",im2:"images/Ben arous/Oudna.jpg"},
{state:"bizerte",m1:"Bizerte Port",im1:"images/Bizerte/bizerte harbor.jpg",m2:"Coco Beach",im2:"images/Bizerte/star-beach-coco.jpg"},
{state:"gabes",m1:"Matmata",im1:"images/Gabes/Matmata.jpg",m2:"Oued Akarit pre-historic site",im2:"images/Gabes/oued akarit pre-historic site.jpg"},
{state:"gafsa",m1:"Gafsa lake",im1:"images/Gafsa/Gafsa lake.jpg",m2:"Roman pool",im2:"images/Gafsa/Roman_Pool_in_Gafsa Termil.jpg"},
{state:"jendouba",m1:"Bulla Regia",im1:"images/Jendouba/bulla regia.jpg",m2:"Tabarka port",im2:"images/Jendouba/Tabarka port.jpg"},
{state:"kairouan",m1:"Aghlabide's bassin",im1:"images/Kairouan/Aghlabides's bassins.jpg",m2:"The great mosque of Okba",im2:"images/Kairouan/the great mosque of Okba.jpg"},
{state:"kasserine",m1:"Haidra",im1:"images/Kasserine/haidra.png",m2:"Sbeitla",im2:"images/Kasserine/Sbeitla.jpg"},
{state:"kebili",m1:"Douz International Festival",im1:"images/Kebili/CIRCUIT_SUD_SPeCIAL_FESTIVAL_DOUZ_5.jpg",m2:"Ksar Ghilane",im2:"images/Kebili/Ksar Ghilane.jpg"},
{state:"kef",m1:"Basilique Saint Pierre",im1:"images/Kef/basilique saint pierre.jpg",m2:"Kesba",im2:"images/Kef/El_Kef_et_sa_Kasbah.jpg"},
{state:"mahdia",m1:"Amphitheatre El Jem",im1:"images/Mahdia/amphitheatre-el-jem.webp",m2:"The beach",im2:"images/Mahdia/Mahdia-Beach.jpg"},
{state:"manouba",m1:"Kobber Ennhas Palace",im1:"images/Manouba/kobbet ennhas palace.jpg",m2:"National Military Museum",im2:"images/Manouba/natioanal military museum.JPG"},
{state:"medenine",m1:"Houmet Essouk",im1:"images/Medenine/houmet essouk.jpg",m2:"Ksar Medenine",im2:"images/Medenine/ksar medenine (star wars).webp"},
{state:"monastir",m1:"Habib Bourgiba Mausoleum",im1:"images/Monastir/Habib Bourguiba Mausoleum.jpg",m2:"Monastir Keep",im2:"images/Monastir/monastir keep.jpg"},
{state:"nabeul",m1:"Kesba Of Klibia",im1:"images/Nabeul/kasba of kelibia.JPG",m2:"Carthage Land",im2:"images/Nabeul/carthage land.jpg"},
{state:"sfax",m1:"Medina",im1:"images/Sfax/medina.jpg",m2:"Olive Fields",im2:"images/Sfax/olive farms.jpg"},
{state:"sidi bouzid",m1:"Nature",im1:"images/Sidi Bouzid/nature.jpg",m2:"Henchir Sminidja",im2: "images/Sidi Bouzid/Henchir Simindja.jpg"},
{state:"siliana",m1:"Makthar",im1:"images/Siliana/makthar landscape.webp",m2:"Saint Felicite Church Tborba",im2:"images/Siliana/saint Felicite church tborba.jpeg"},
{state:"sousse",m1:"Medina",im1:"images/Sousse/medina.jpg",m2:"Port El Kantaoui",im2:"images/Sousse/port-El-Kantaoui-sousse.jpg"},
{state:"tataouine",m1:"Chenini",im1:"images/Tataouine/chenini.jpg",m2:"Star Wars Sites",im2:"images/Tataouine/star wars tataouine.png"},
{state:"touzeur",m1:"Dar Chrayet",im1:"images/Touzeur/dar chrayet.jpg",m2:"Ras Al Ain",im2:"images/Touzeur/ras al ain.jpg"},
{state:"tunis",m1:"Carthage",im1:"images/Tunis/byrsa-hill-carthage.jpg",m2:"Sidi Bousaid",im2:"images/Tunis/sidi bousaid.jpg"},
{state:"zaghouan",m1:"Water's Temple",im1:"images/Zaghouan/11622016_yJdk9E6Kgnch-AI7uViPP_TLluBkpAI6GWQdxqKXL44.jpg",m2:"Roman Aqueduct",im2:"images/Zaghouan/shutterstock_311406212.jpg"}]

var compStName=$('#searchs').val()

var showState = function (){
    for(var i=0;i<states.length;i++){
        if(states[i].state.includes($('#searchs').val())){
            $("#state").html(states[i].state)
            $("#nameM1").html(states[i].m1)
            $("#imM1").attr("src",states[i].im1)
            $("#nameM2").html(states[i].m2)
            $("#imM2").attr("src",states[i].im2)
        }
    }
}
var generateRandomState=function(){
    var random = Math.floor(Math.random()*states.length);
    $("#state").html(states[random].state)
    $("#nameM1").html(states[random].m1)
    $("#imM1").attr("src",states[random].im1)
    $("#nameM2").html(states[random].m2)
    $("#imM2").attr("src",states[random].im2)
};

var guides = [{state:"ariana",guide:["Med Amin Ajili","+216 26 874 651","Med.AJ@gmail.com"]},
{state:"beja",guide:["Omar Sallemi","+216 96 733 615","Omar.sallemi@gmail.com"]},
{state:"ben arous",guide:["Aziz Belarbi","+216 55 789 357","itsAziz@gmail.com"]},
{state:"bizerte",guide:["Hssan Icouch","+216 20 973 554","Hssan.ich@gmail.com"]},
{state:"gabes",guide:["Salah Mahjoubi","+216 21 789 012","Mahjoubi.Salah@gmail.com"]},
{state:"gafsa",guide:["Lasaad Masaoudi","+216 52 046 385","lassad.mass@gmail.com"]},
{state:"jendouba",guide:["Amin Habboubi","+216 91 192 891","AminHabboubi@gmail.com"]},
{state:"kairouan",guide:["Khalil Boudrigua","+216 22 647 816","Khalil.Boudrigua@gmail.com"]},
{state:"kasserine",guide:["Aya Ftayta","+216 21 501 348","Ftayta.aya@gmail.com"]},
{state:"kebili",guide:["Farid Katteni","+216 95 789 410","Katteni.f@gmail.com"]},
{state:"kef",guide:["Amira Kefi","+216 99 741 258","Amira0147@gmail.com"]},
{state:"mahdia",guide:["Karim Maaroufi","+216 53 491 735","Karimma3roufi@gmail.com"]},
{state:"manouba",guide:["Nada Jaffel","+216 20 112 574","jaff.Nada@gmail.com"]},
{state:"medenine",guide:["Bassem Bahloul","+216 98 201 638","Bassem.bahloul@gmail.com"]},
{state:"monastir",guide:["Oussema Dhrifi","+216 28 741 852","@gmail.com"]},
{state:"nabeul",guide:["Ahmed Cherif","+216 25 963 684","Amed.1990@gmail.com"]},
{state:"sfax",guide:["Alaa Srioui","+216 97 101 202","Torbaga.2003@gmail.com"]},
{state:"sidi bouzid",guide:["Amin Hamdi","+216 20 785 912","amin.haamdi@gmail.com"]},
{state:"siliana",guide:["Fakhreddin Bouslimi","+216 96 684 426","Fkh.28@gmail.com"]},
{state:"sousse",guide:["Walid Ben Braiek","+216 95 098 729","WalidBenBraiek@gmail.com"]},
{state:"tataouine",guide:["Sabrine Gaceur","+216 26 111 719","Gaceur.Sabrine@gmail.com"]},
{state:"touzeur",guide:["Masaoud Settou","+216 24 657 910","Settou.MA@gmail.com"]},
{state:"tunis",guide:["Med Aziz Guerfela ","+216 548 741","9erfela.Aziz@gmail.com"]},
{state:"zaghouan",guide:["Arbi Moussi","+216 53 748 912","Larab.1998@gmail.com"]}]

 function showGuide(){
    for(var i=0;i<guides.length;i++){
        if (guides[i].state.includes($("#searchG").val())){
            $("#gN").html(guides[i].guide[0])
            $("#gT").html(guides[i].guide[1])
            $("#gE").html(guides[i].guide[2])
        }
    }
 }