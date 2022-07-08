const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const characterswithout = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d"
,"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



let passwordOne = document.getElementById("passwordOne");
let passwordTwo = document.getElementById("passwordTwo");

function genratePassword() {

  if (!toggleNumber) {
    passwordOne.innerText="";
    passwordTwo.innerText="";
    
    document.getElementById("copy1").innerText ="Copy Password 1"
    document.getElementById("copy2").innerText ="Copy Password 2"

    var length = document.getElementById("myInput").value;
    for (let i=0 ; i<length;i++) {
      passwordOne.innerText += characters[Math.floor(Math.random()*characters.length) ];
      passwordTwo.innerText += characters[Math.floor(Math.random()*characters.length) ];
    }

  }else{
    passwordOne.innerText="";
    passwordTwo.innerText="";
    document.getElementById("copy1").innerText ="Copy Password 1"
    document.getElementById("copy2").innerText ="Copy Password 2"
  
  
    var length = document.getElementById("myInput").value;
    for (let i=0 ; i<length;i++) {
      passwordOne.innerText += characterswithout[Math.floor(Math.random()*characterswithout.length) ];
      passwordTwo.innerText += characterswithout[Math.floor(Math.random()*characterswithout.length) ];
    }
  
  }
}







function copyPassowrd1() {
  let text =document.getElementById("copy1");
  text.innerText ="Copied"
  var copiedPassowrd1 = document.getElementById("passwordOne").innerText;
  navigator.clipboard.writeText(copiedPassowrd1); }


  
function copyPassword2() {
  let text =document.getElementById("copy2");
  text.innerText ="Copied"
  var copiedPassowrd2 = document.getElementById("passwordTwo").innerText;
  navigator.clipboard.writeText(copiedPassowrd2); }




  var toggle = document.getElementById('container');
var toggleContainer = document.getElementById('toggle-container');
var toggleNumber;

toggle.addEventListener('click', function() {
	toggleNumber = !toggleNumber;
	if (toggleNumber) {
		toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
		toggleContainer.style.backgroundColor = '#D74046';
	} else {
		toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
		toggleContainer.style.backgroundColor = '#10B981';
	}
	return toggleNumber;
  
});