// Welcome Message
console.log("Welcome to my Portfolio!");

// View Projects Button
const projectBtn = document.getElementById("projectBtn");

projectBtn.addEventListener("click", function(){

    document.getElementById("projects").scrollIntoView({
        behavior:"smooth"
    });

});

// Contact Button
const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function(){

    const contactSection = document.getElementById("contact");

    if(contactSection){
        contactSection.scrollIntoView({
            behavior:"smooth"
        });
    }else{
        alert("Contact section will be added soon!");
    }

});

// Scroll Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 200){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});