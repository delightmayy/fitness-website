const person1 = document.querySelector("#optt");
const person2 = document.querySelector("#optt2");
const person3 = document.querySelector("#optt3");
const mydate =document.querySelector(".mydate");
const btt = document.querySelector(".btt");


person1.addEventListener("mouseover", ()=>{person1.style  ="background-image: url(/images/personaltrainer3-pic1.webp);    background-position: center;background-size: cover;height: 450px;"
})
person1.addEventListener("mouseout", ()=>{person1.style  ="background-image: url(/images/personaltrainer3-pic1a.webp);    background-position: center;background-size: cover;height: 450px;"
})
person2.addEventListener("mouseover", ()=>{person2.style  ="background-image: url(/images/personaltrainer3-pic2.webp);    background-position: center;background-size: cover;height: 450px;"
})
person2.addEventListener("mouseout", ()=>{person2.style  ="background-image: url(/images/personaltrainer3-pic2a.webp);    background-position: center;background-size: cover;height: 450px;"
})
person3.addEventListener("mouseover", ()=>{person3.style  ="background-image: url(/images/personaltrainer3-pic3.webp);    background-position: center;background-size: cover;height: 450px;"
})
person3.addEventListener("mouseout", ()=>{person3.style  ="background-image: url(/images/personaltrainer3-pic3a.webp);    background-position: center;background-size: cover;height: 450px;"
})
btt.addEventListener("mouseover", ()=>{btt.style  ="background-color:brown; text:black ;"
})

 updateyear()
 function updateyear () {
    mydate.innerHTML = new Date().toLocaleDateString()
    
} 
