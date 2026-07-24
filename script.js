// Welcome Message
console.log("Welcome to my Portfolio Aditi here!");

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
const form = document.getElementById("contactForm");


form.addEventListener("submit", function(event){

event.preventDefault();


let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;


if(name === "" || email === "" || message === ""){

alert("Please fill all fields");

}

else{

alert("Message sent successfully!");

form.reset();

}


});