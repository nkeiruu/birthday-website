window.onload = initPage;

var loveMessages=[{us:"I love You"},{br:"Eu te amo"},{jp:"わたしわ だいすき"},{kr:"사랑해"},
{fr:"je t'aime"},{es:"yo te amo"},{it:"ti amo"},{nr:"Jeg elsker deg"},{ta:"ฉันรักคุณ"},{ch:"我愛你"},
{pl:"kocham Cię"},{cr:"Volim te"},{ho:"ik hou van jou"},{bu:"обичам те"},{bo:"volim te"},{ru:"Я люблю вас"},
{di:"jeg elsker dig"},{gr:"Σε αγαπώ"},{tch:"Miluji tě"},{he:"אני אוהב אותך"},{hv:"aloha wau iā 'oe"},
{ir:"Is breá liom tú"},{hu:"Szeretlek"},{eslc:"Ľúbim ťa"},{esln:"Ljubim te"},{uc:"я тебе люблю"},
{bl:"я цябе кахаю"},{se:"Волим те"},{lx:"ech hunn dech gär"},{vt:"Tôi mến bạn"},{is:"ég elska þig"},
{su:"jag älskar dig"},{al:"ich liebe dich"},{af:"Ek het jou lief"},{gl:"Quérote"},{alb:"Unë të dua"},{tm:"Ni mel tye"},
{gro:"I am Groot"},{mi:"ka ern to"},{yo:"Love you, I do"},{co:"01001001 00100000 0110110 01101111 01110110 01100101 00100000 01111001 01101111 01110101 "}];

var languages=[{us:"In the United States"},{br:"In Brazil"},{jp:"In Japan"},{kr:"In Córeia"},
{fr:"In France"},{es:"In Spain"},{it:"In Italy"},{nr:"In Norway"},{tl:"In Thailand"},{ch:"In China"},
{pl:"In Poland"},{cr:"In Croatia"},{ho:"In Holland"},{bu:"In Bulgaria"},{bo:"In Bosnia"},{ru:"In Russia"},
{di:"In Dinarmaca"},{gr:"In Greece"},{tch:"In the Czech Republic"},{he:"In Israel"},{hv:"In Hawaii"},
{ir:"In Ireland"},{hu:"In Hungary"},{eslc:"In Slovakia"},{esln:"In Slovenia"},{uc:"In Ukraine"},
{bl:"In Belarus"},{se:"In Serbia"},{lx:"In Luxembourg"},{vt:"In Vietnam"},{is:"In Iceland"},
{su:"In Sweden"},{al:"In Germany"},{af:"In South Africa"},{gl:"In Galicia"},{alb:"In Albania"},{tm:"In Middle Earth"},
{gro:"If I were Groot"},{mi:"If I were a minion"},{yo:"If I were Yoda"},{co:"If I were a computer"}];
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

    
