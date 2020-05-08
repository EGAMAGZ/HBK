var openNavBtn=document.getElementById("navToggle");
var closeNavBtn=document.getElementById("sidenavbar");

openNavBtn.onclick=()=>{
    document.getElementById("sidenavbar").style.width = "250px";
    document.getElementById("contentcontainer").style.marginLeft="250px";
};

closeNavBtn.onclick=()=>{
    document.getElementById("sidenavbar").style.width = "0";
    document.getElementById("contentcontainer").style.marginLeft= "0";
};
