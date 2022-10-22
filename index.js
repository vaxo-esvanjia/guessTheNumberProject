var inp = document.querySelector(".xomagi")
var submit = document.querySelector(".submit")
var res = document.querySelector(".res")
var xo = document.querySelector(".xo")
var inf = document.querySelector(".inf")
var counter = 0
var resul = document.querySelector(".zx")
var random = parseInt(Math.random()*20)+1
console.log(random)
submit.addEventListener("click", function(){
    counter++
    xo.innerHTML= counter
    var val = inp.value
    while (true) {
        if (val==random) {
            resul.innerHTML = "გამოიცანი, შედეგი იყო: " +inp.value
            inp.disabled = true;
            submit.disabled = true;
            break;
        }
        if(random+3>=val && random-3<=val) {
            resul.innerHTML = "ახლოს იყავი, თქვენი შეყვანილი რიცხვია : " +inp.value
            break 
        }
        else{
            resul.innerHTML = "ძაან აცდი, თქვენი შეყვანილი რიცხვია: " +inp.value
            break
            
        }
    
    }
    inp.value = ""

})
res.addEventListener("click", function(){
    xo.innerHTML= 0
    counter = 0;
    resul.innerHTML = "";
    inp.value = "";
    inp.disabled = false;
    submit.disabled = false;
    random = parseInt(Math.random()*20)+1
    console.log(random)
})


