//Add ID to fields to access in JS-->
    let form = document.getElementById("myForm");
    let askQuestion = document.getElementById("inputQuestion");
    let askButton = document.getElementById("askMe");
    let myImage = document.getElementById("dynamicImage");
    let myDiv = document.getElementById("answers");
    let myButton = document.getElementById("fortuneButton");

//My Array of images
    const answers = [
        "./images/magic8ball_1.png", 
        "./images/magic8ball_2.png",
        "./images/magic8ball_3.png", 
        "./images/magic8ball_4.png", 
        "./images/magic8ball_5.png", 
        "./images/magic8ball_6.png", 
        "./images/magic8ball_7.png",
        "./images/magic8ball_8.png",
        "./images/magic8ball_9.png",
        "./images/magic8ball_10.png",
        "./images/magic8ball_11.png",
        "./images/magic8ball_12.png",
        "./images/magic8ball_13.png",
        "./images/magic8ball_14.png",
        "./images/magic8ball_15.png",
        "./images/magic8ball_16.png",
        "./images/magic8ball_17.png",
        "./images/magic8ball_18.png",
        "./images/magic8ball_19.png",
    ];
console.log(answers)
// Create an "ask" function that when clicked, will choose a random 8ball image and insert it into your "answers" div
    // let ask = function () {

        form.addEventListener("click", function() {
        
//Assign a variable for the random # generator
       if (askQuestion.value.length < 1) {
           alert ("Please Enter A Question")
       } else {
        let getRandomInt = Math.floor(Math.random() * answers.length); 
        myImage.src = answers[getRandomInt];

       }});
    
    
        
// Replace the input field with the user's question when displaying the answer
    //     function replaceText() {
    //         let x = document.getElementById("inputQuestion").value;
    //         document.getElementById("inputQuestion").innerHTML = x;
         