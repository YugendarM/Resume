


const hiddenElements = document.querySelector('.hidden')
hiddenElements.forEach((el) => observer.observe(el));


function greet(username) {
    var username= document.getElementById("name").value;
    alert("Thanks "+ username +" for submitting");
}

