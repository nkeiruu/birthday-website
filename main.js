window.onload = initPage;

var loveMessages=[{us:"I love You"},{br:"Eu te amo"},{jp:"わたしわ だいすき"},{kr:"사랑해"},
{fr:"je t'aime"},{es:"yo te amo"},{it:"ti amo"},{nr:"Jeg elsker deg"},{ta:"ฉันรักคุณ"},{ch:"我愛你"},
{pl:"kocham Cię"},{cr:"Volim te"},{ho:"ik hou van jou"},{bu:"обичам те"},{bo:"volim te"},{ru:"Я люблю вас"},
{di:"jeg elsker dig"},{gr:"Σε αγαπώ"},{tch:"Miluji tě"},{he:"אני אוהב אותך"},{hv:"aloha wau iā 'oe"},
{ir:"Is breá liom tú"},{hu:"Szeretlek"},{eslc:"Ľúbim ťa"},{esln:"Ljubim te"},{uc:"я тебе люблю"},
{bl:"я цябе кахаю"},{se:"Волим те"},{lx:"ech hunn dech gär"},{vt:"Tôi mến bạn"},{is:"ég elska þig"},
{su:"jag älskar dig"},{al:"ich liebe dich"},{af:"Ek het jou lief"},{gl:"Quérote"},{alb:"Unë të dua"},{tm:"Ni mel tye"},
{gro:"I am Groot"},{mi:"ka ern to"},{yo:"Love you,I"},{co:"01001001 00100000 0110110 01101111 01110110 01100101 00100000 01111001 01101111 01110101 "}];

var languages=[{us:"No Estados Unidos"},{br:"No Brasil"},{jp:"No Japão"},{kr:"Na Córeia"},
{fr:"Na França"},{es:"Na Espanha"},{it:"Na Itália"},{nr:"Na Noruega"},{tl:"Na Tailândia"},{ch:"Na China"},
{pl:"NaPolônia"},{cr:"Na Croácia"},{ho:"Na Holanda"},{bu:"Na Bulgária"},{bo:"Na Bósnia"},{ru:"Na Rússia"},
{di:"Na Dinarmaca"},{gr:"Na Grécia"},{tch:"Na República Tcheca"},{he:"Em Isreal"},{hv:"No Havaí"},
{ir:"Na Irlanda"},{hu:"Na Hungria"},{eslc:"Na Eslováquia"},{esln:"Na Eslovênia"},{uc:"Na Ucrânia"},
{bl:"Na Bielo-Rússia"},{se:"Na Sérvia"},{lx:"Em Luxemburgo"},{vt:"Na Vietnã"},{is:"Na Islândia"},
{su:"Na Suécia"},{al:"Na Alemanha"},{af:"Na África do sul"},{gl:"Na Galiza"},{alb:"Na Albânia"},{tm:"Na Terra Média"},
{gro:"Se eu fosse o Groot"},{mi:"Se eu fosse um minion"},{yo:"Se eu fosse o Yoda"},{co:"Se eu fosse um computador"}];
var already=[];

function initPage(){
    document.getElementsByClassName("allLanguages")[0].innerHTML=loveMessages.length;
    document.getElementById("country").innerHTML=languages[0].us;
    document.getElementsByClassName("message")[0].innerHTML=loveMessages[0].us;
    already.push(loveMessages[0]);
}

setInterval(function(){ 
    let love;
    let language;
    while(true){
        if(already.length==loveMessages.length){
            already=[]
        }
        let attempt=Math.floor(Math.random() * loveMessages.length); 
        if(!already.includes(loveMessages[attempt])){
            already.push(loveMessages[attempt]);
            love=loveMessages[attempt];
            language=Object.keys(love);
            break;
        }
    }

    for (let index = 0; index < languages.length; index++) {
        let key=Object.getOwnPropertyNames(languages[index])[0];
        if(key==language){
            document.getElementById("country").innerHTML=languages[index][key];
            document.getElementsByClassName("message")[0].innerHTML=loveMessages[index][key];
        }
    }
}, 5000);

function next(){
    let love;
    let language;
    while(true){
        if(already.length==loveMessages.length){
            already=[]
        }
        let attempt=Math.floor(Math.random() * loveMessages.length); 
        if(!already.includes(loveMessages[attempt])){
            already.push(loveMessages[attempt]);
            love=loveMessages[attempt];
            language=Object.keys(love);
            break;
        }
    }

    for (let index = 0; index < languages.length; index++) {
        let key=Object.getOwnPropertyNames(languages[index])[0];
        if(key==language){
            document.getElementById("country").innerHTML=languages[index][key];
            document.getElementsByClassName("message")[0].innerHTML=loveMessages[index][key];
        }
    }
}

    
