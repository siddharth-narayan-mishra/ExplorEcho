let count=0;

let darkModeBtn = document.getElementById("dark-mode");
let darkModeBtnMobile = document.getElementById("dark-mode1");
let pages = document.getElementsByClassName("page");
let cardContainer = document.getElementById("card-container");
let headline  = document.getElementsByClassName("headline");
let readMore = document.getElementsByClassName("rm");
let horDiv = document.getElementsByClassName("hor-div");
let underline = document.getElementsByClassName("underline");
let artImage = document.getElementsByClassName("article-image");
let linearGradient = document.getElementsByClassName("linear-gradient");
let heroSection= document.getElementsByClassName("hero-section");
let tagline = document.getElementsByClassName("tagline");
let time = document.getElementById("time")
let time1 = document.getElementById("time1")
let navbar = document.getElementsByClassName("navbar")
let imgBox = document.getElementById("imgBox");
let fullImg = document.getElementById("fullImg");
let closeBtn = document.getElementById("close-btn");

setInterval(()=>{
    let currentTime = new Date;
    let a = "AM";
    let hour = currentTime.getHours();

    if (hour>12) {
        hour=hour-12;
        a="PM"
    }
    hour = (hour<10?"0":"")+hour;
    let min = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    let sec = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
    time.innerHTML=hour+":"+min+":"+sec+" "+a;
    time1.innerHTML=hour+":"+min+":"+sec+" "+a;
},1000)

let oneURL="https://images.unsplash.com/photo-1516690553959-71a414d6b9b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let twoURL="https://images.unsplash.com/photo-1526475742373-fb7d3f1b4b55?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let threeURL="https://images.unsplash.com/photo-1703692218696-c9f830a81f65?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let fourURL="https://images.unsplash.com/photo-1703372619010-ed887f803eab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let fiveURL="https://getwallpapers.com/wallpaper/full/8/1/2/1477510-download-free-widescreen-nature-wallpapers-high-resolution-3840x1080-for-tablet.jpg";
let sixURL="https://images.unsplash.com/photo-1698766767195-fdaba9166ab9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let sevenURL="https://images.unsplash.com/photo-1692060234392-aa41b4703065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D";

let antelopeCanyonURL = "https://images.unsplash.com/photo-1589824503758-a4ebd0ef8a8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW50ZWxvcGUlMjBjYW55b258ZW58MHx8MHx8fDA%3D"
let palawanURL = "https://images.unsplash.com/photo-1591049014083-3339a6fe59eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let lakeOhridURL = "https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let finlandURL ="https://images.unsplash.com/photo-1528155124528-06c125d81e89?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

let angelFallsURL = "https://images.unsplash.com/photo-1636257763258-a78982bd7ead?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QW5nZWwlMjBGYWxscyUyQyUyMFZlbmV6dWVsYXxlbnwwfHw0fHx8MA%3D%3D";
let serengetiURL = "https://plus.unsplash.com/premium_photo-1661962606244-567dd302286e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VyZW5nZXRpJTIwTmF0aW9uYWwlMjBQYXJrJTJDJTIwVGFuemFuaWF8ZW58MHx8NHx8fDA%3D";
let gbrURL = "https://plus.unsplash.com/premium_photo-1661862758718-d68e9ee13357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");

let antelopeCanyon = document.getElementById("antelope-canyon");
let palawan = document.getElementById("palawan");
let lakeOhrid = document.getElementById("lake-ohrid");
let finland = document.getElementById("finland");

let angelFalls = document.getElementById("angel-falls");
let serengeti = document.getElementById("serengeti");
let gbr = document.getElementById("gbr");

function gofull(URL){
    imgBox.style.display="flex";
    fullImg.src = URL;
}

one.addEventListener("click",()=>{gofull(oneURL)});
two.addEventListener("click",()=>{gofull(twoURL)});
three.addEventListener("click",()=>{gofull(threeURL)});
four.addEventListener("click",()=>{gofull(fourURL)});
five.addEventListener("click",()=>{gofull(fiveURL)});
six.addEventListener("click",()=>{gofull(sixURL)});
seven.addEventListener("click",()=>{gofull(sevenURL)});
antelopeCanyon.addEventListener("click",()=>{gofull(antelopeCanyonURL)});
palawan.addEventListener("click",()=>{gofull(palawanURL)});
lakeOhrid.addEventListener("click",()=>{gofull(lakeOhridURL)});
finland.addEventListener("click",()=>{gofull(finlandURL)});
angelFalls.addEventListener("click",()=>{gofull(angelFallsURL)});
serengeti.addEventListener("click",()=>{gofull(serengetiURL)});
gbr.addEventListener("click",()=>{gofull(gbrURL)});

closeBtn.addEventListener("click",()=>{imgBox.style.display="none"})

let email = document.getElementById("email");
let submit = document.getElementById("submit");

submit.addEventListener("click",()=>{
    console.log(email.value);
    submit.style.boxShadow="none";
    submit.style.translate="2.5px 3px";

    setTimeout(() => {
        submit.style.boxShadow="5px 6px 0px 0px #2F195F";
        submit.style.translate="-2px -2.5px";        
    },1000);

    setTimeout(()=>{
        alert("You have subsribed to our newsletter! You shall be greeted with our updated catalogue of photos every Sunday!")
    },3000)
})

darkModeBtn.addEventListener("click",()=>{
    count=count+1;
    alert("Changed theme successfully")
    if (count%2) {
        for (let index = 0; index < pages.length; index++) {
            const element = pages[index];
            element.style.backgroundColor="#D3D3D3";
            element.style.color="#131516";
        }
        cardContainer.style.color="white";
        for (let i = 0; i< headline.length; i++) {
          const element = headline[i];
          element.style.color="#337CA0"           
        }
        for (let i = 0; i< readMore.length; i++) {
          const element = readMore[i];
          element.style.color="#337CA0"           
        }
        for (let i = 0; i< horDiv.length; i++) {
          const element = horDiv[i];
          element.style.outline="0.5px solid #337CA0"           
        }
        for (let i = 0; i< underline.length; i++) {
          const element = underline[i];
          element.style.outline="0.5px solid #337CA0"           
        }
        for (let i = 0; i < artImage.length; i++) {
            const element = artImage[i];
            element.style.boxShadow = "-22px -29px 0px 0px #7f8389"
        }
        linearGradient[0].style.background="linear-gradient(90deg, #d3d3d3 0%, transparent 100%)"
        heroSection[0].style.backgroundImage = 'url("https://plus.unsplash.com/premium_photo-1675756583701-2b364e4edf68?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
        tagline[0].style.color="black"
        darkModeBtn.innerHTML='<i class="fa-solid fa-moon"></i>'
        navbar[0].style.backgroundColor="rgba(211,211,211,0.5)"
        navbar[0].style.color="rgb(19, 21, 22)"
        imgBox.style.background="rgba(255,255,255,0.9)"
        closeBtn.style.color="black"
    }else{
        for (let index = 0; index < pages.length; index++) {
            const element = pages[index];
            element.style.backgroundColor="#131516";
            element.style.color="white";
        }
        for (let i = 0; i< headline.length; i++) {
            const element = headline[i];
            element.style.color="#EDCB96"           
          }
          for (let i = 0; i< readMore.length; i++) {
            const element = readMore[i];
            element.style.color="#EDCB96"           
          }
          for (let i = 0; i< horDiv.length; i++) {
            const element = horDiv[i];
            element.style.outline="0.5px solid #EDCB96"           
          }
          for (let i = 0; i< underline.length; i++) {
            const element = underline[i];
            element.style.outline="0.5px solid #EDCB96"           
          }
          for (let i = 0; i < artImage.length; i++) {
            const element = artImage[i];
            element.style.boxShadow = "-22px -29px 0px 0px #343434"
        }
        linearGradient[0].style.background="linear-gradient(90deg, #131516 0%, transparent 100%)"
        heroSection[0].style.backgroundImage = 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
        tagline[0].style.color="white"        
        darkModeBtn.innerHTML='<i class="fa-solid fa-sun"></i>'
        navbar[0].style.backgroundColor="rgba(19, 21, 22,0.5)"
        navbar[0].style.color="rgb(211, 211, 211)"
        imgBox.style.background="rgba(0,0,0,0.9)"
        closeBtn.style.color="white"
    }
})
darkModeBtnMobile.addEventListener("click",()=>{
    count=count+1;
    alert("Changed theme successfully")
    if (count%2) {
        for (let index = 0; index < pages.length; index++) {
            const element = pages[index];
            element.style.backgroundColor="#D3D3D3";
            element.style.color="#131516";
        }
        cardContainer.style.color="white";
        for (let i = 0; i< headline.length; i++) {
          const element = headline[i];
          element.style.color="#337CA0"           
        }
        for (let i = 0; i< readMore.length; i++) {
          const element = readMore[i];
          element.style.color="#337CA0"           
        }
        for (let i = 0; i< horDiv.length; i++) {
          const element = horDiv[i];
          element.style.outline="0.5px solid #337CA0"           
        }
        for (let i = 0; i< underline.length; i++) {
          const element = underline[i];
          element.style.outline="0.5px solid #337CA0"           
        }
        for (let i = 0; i < artImage.length; i++) {
            const element = artImage[i];
            element.style.boxShadow = "-22px -29px 0px 0px #7f8389"
        }
        linearGradient[0].style.background="linear-gradient(90deg, #d3d3d3 0%, transparent 100%)"
        heroSection[0].style.backgroundImage = 'url("https://plus.unsplash.com/premium_photo-1675756583701-2b364e4edf68?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
        tagline[0].style.color="black"
        darkModeBtn.innerHTML='<i class="fa-solid fa-moon"></i>'
        navbar[0].style.backgroundColor="rgba(211,211,211,0.5)"
        navbar[0].style.color="rgb(19, 21, 22)"
        imgBox.style.background="rgba(255,255,255,0.9)"
        closeBtn.style.color="black"
    }else{
        for (let index = 0; index < pages.length; index++) {
            const element = pages[index];
            element.style.backgroundColor="#131516";
            element.style.color="white";
        }
        for (let i = 0; i< headline.length; i++) {
            const element = headline[i];
            element.style.color="#EDCB96"           
          }
          for (let i = 0; i< readMore.length; i++) {
            const element = readMore[i];
            element.style.color="#EDCB96"           
          }
          for (let i = 0; i< horDiv.length; i++) {
            const element = horDiv[i];
            element.style.outline="0.5px solid #EDCB96"           
          }
          for (let i = 0; i< underline.length; i++) {
            const element = underline[i];
            element.style.outline="0.5px solid #EDCB96"           
          }
          for (let i = 0; i < artImage.length; i++) {
            const element = artImage[i];
            element.style.boxShadow = "-22px -29px 0px 0px #343434"
        }
        linearGradient[0].style.background="linear-gradient(90deg, #131516 0%, transparent 100%)"
        heroSection[0].style.backgroundImage = 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
        tagline[0].style.color="white"        
        darkModeBtn.innerHTML='<i class="fa-solid fa-sun"></i>'
        navbar[0].style.backgroundColor="rgba(19, 21, 22,0.5)"
        navbar[0].style.color="rgb(211, 211, 211)"
        imgBox.style.background="rgba(0,0,0,0.9)"
        closeBtn.style.color="white"
    }
})

function showSidebar(){
    let sidebar=document.querySelector(".sidebar");
    sidebar.style.visibility="visible"
}

function hideSidebar(){
    let sidebar=document.querySelector(".sidebar");
    sidebar.style.visibility="hidden"
}