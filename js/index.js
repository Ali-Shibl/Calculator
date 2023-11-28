let btn=Array.from( document.querySelectorAll("button"))
let string=""
let input=document.querySelector("input")



for (let i = 0; i < btn.length; i++) {
btn[i].addEventListener('click',function(e){

if ( e.target.getAttribute("value") == '=') {
    
    input.value=eval(input.value)
}
else if (e.target.getAttribute("value") == 'del') {
    let x= input.value
  input.value=x.substring(0,x.length-1);
   

}
else if (e.target.getAttribute("value") == 'ac') {
    input.value=" "
}
else{
input.value+=e.target.getAttribute("value")
}

})
    
}