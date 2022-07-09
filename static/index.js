var logiin=document.getElementById("log");
var log=document.getElementById("logform");
var new_user=document.getElementById("res1");
var signup=document.getElementById("signform");
var old_user=document.getElementById("res2");
var apply_form=document.getElementById("apl");
var apply_form1=document.getElementById("apl1");
var apply_form2=document.getElementById("apl2");

var admission_opn=document.getElementById("adm");

var budy=document.getElementById("budy");


logiin.addEventListener("click",()=>{
      
    log.classList.add("login_change");
});
apply_form.addEventListener("click",()=>{
    budy.style.opacity=0.7;
    admission_opn.classList.add("admission_open"); 
});
apply_form1.addEventListener("click",()=>{
    budy.style.opacity=0.7;
    admission_opn.classList.add("admission_open"); 
});
apply_form2.addEventListener("click",()=>{
    budy.style.opacity=0.7;
    admission_opn.classList.add("admission_open"); 
});
new_user.addEventListener("click",()=>{
    signup.style.visibility="visible";
    log.style.visibility="hidden";
});
old_user.addEventListener("click",()=>{
    signup.style.visibility="hidden";
    log.style.visibility="visible";
});
