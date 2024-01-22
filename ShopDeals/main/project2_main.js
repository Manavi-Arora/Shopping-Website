
let fl = document.getElementById("formlogin");
let fr = document.getElementById("formreg");
let f = document.getElementById("form");
let ls = document.getElementById("logsub");
let rs = document.getElementById("regsub");
let r=document.getElementById("register");
let nam=document.getElementById("name");
let phone=document.getElementById("phone");
let acc=document.getElementById("account");
let acc1=document.getElementById("account1");
let l=document.getElementById("login");
let navbar=document.getElementById("navbar");
let cross=document.getElementById("cross");
let sidebar=document.getElementById("sidebar");

navbar.onclick=()=>{
    sidebar.style.transform==="translateX(165px)"?sidebar.style.transform="translateX(-165px)":sidebar.style.transform="translateX(165px)";
    
}
acc.addEventListener("click",dis)
acc1.addEventListener("click",dis)
function dis(){
    fl.style.display="block";
    cross.style.display="block";
    f.style.display="block";
}
cross.onclick=()=>{
    (fl.style.display==="none")?fr.style.display="none":fl.style.display="none";
    cross.style.display="none";
    f.style.display="none";
}
ls.addEventListener("click",()=>{
    fl.style.display="none";
    acc.innerText="User";
    acc1.innerText="User";
    cross.style.display="none";
    f.style.display="none";
    acc.removeEventListener("click",dis);
    acc1.removeEventListener("click",dis);
    acc.style.cursor="default";
})

rs.addEventListener("click",()=>{
    fr.style.display="none";
    nam.value=nam.value.charAt(0).toUpperCase()+nam.value.slice(1);
    if(nam.value){const names=document.createElement("li");
    names.textContent=nam.value;
    acc.innerText="Hello, "+nam.value;
    acc1.innerText="Hello, "+nam.value;
    acc.removeEventListener("click",dis);
    acc1.removeEventListener("click",dis);
    acc.style.cursor="default";
    sidebar.replaceChild(names,sidebar.childNodes[3]);}
    if(phone.value){const phones=document.createElement("li");
    phones.textContent=phone.value;
    sidebar.replaceChild(phones,sidebar.childNodes[5]);}
    f.style.display="none";
    cross.style.display="none";
})
r.addEventListener("click",()=>{
    fl.style.display="none";
    fr.style.display="block";
})
l.addEventListener("click",()=>{
    fr.style.display="none";
    fl.style.display="block";
})

