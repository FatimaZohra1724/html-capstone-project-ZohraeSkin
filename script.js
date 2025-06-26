// var user = prompt("What is your name?"); //Prompt use it to save user input and show a pop up
// alert("Welcome in Zohraeskin " + user + " love!");

var isdark = false;  //It is the variable start work if value is false

// Check if user already selected dark theme
if (localStorage.getItem("theme") === "dark") {
    document.body.style.background = "#2d002a";
    document.body.style.color = "lightpink";
    isdark = true;
} else {
    isdark = false;
}


var myButton = document.getElementById("Theme");
myButton.addEventListener("click",change_event)

function change_event(){
            
            if (isdark == false){
                        document.body.style.background = "black" ;//Two create this to check all color of background  and chnge into a dark burgandy color
                        document.body.style.color = "white"; //It will change the text color all of the web pages 
                        console.log("dark");
                        localStorage.setItem("theme", "dark"); // Save theme
                        isdark = true ;
            }
            else if(isdark == true){
                        document.body.style.background = "";
                        document.body.style.color = "";
                        console.log("Nochange");
                        localStorage.setItem("theme", "dark"); // Save theme
                        isdark = false;
            }
}
