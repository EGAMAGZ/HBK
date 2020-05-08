var openNavBtn=document.getElementById("navToggle");

openNavBtn.onclick=()=>{
    document.getElementById("sidenavbar").style.width = "250px";
    document.getElementById("contentcontainer").style.marginLeft="250px";
};

function closeNav(){
    document.getElementById("sidenavbar").style.width = "0";
    document.getElementById("contentcontainer").style.marginLeft= "0";
}
