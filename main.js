//declare horoscopes for each sign
//I used chatgpt to help me with this part
const horoscopes = {
    Aries: "You are energetic and courageous today. Take bold steps!",
    Taurus: "Stability and comfort are your focus. Enjoy the simple things.",
    Gemini: "Communication is key. Reach out to someone new.",
    Cancer: "Emotions run high. Take care of yourself and loved ones.",
    Leo: "Your confidence shines. Take the lead in group activities.",
    Virgo: "Attention to detail will pay off. Organize your space.",
    Libra: "Seek balance in your relationships. Harmony is possible.",
    Scorpio: "Your passion is strong. Channel it into a creative project.",
    Sagittarius: "Adventure awaits! Try something outside your comfort zone.",
    Capricorn: "Hard work brings rewards. Stay focused on your goals.",
    Aquarius: "Innovation is your strength. Share your ideas.",
    Pisces: "Let your imagination guide you. Artistic pursuits are favored."
};
//make a function to get sign based on day and month
//I used google to help me with this part
function getZodiacSign(month, day) {
   
   if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries"; 
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  
    return"Unknown";

    
}
//add event listener to button
//I created this part on my own based on what I learned in class
document.getElementById('yell').addEventListener('click', function () {
    //get birthday input val
    const birthdayInput = document.getElementById('birthday').value;
    //validate input
    if (!birthdayInput) {
        //if empty show error
        document.getElementById('placeToYell').textContent = "Please enter your birthday.";
        return;
    }
    //use date object to parse month and day
    //I used google to help me with this part
    const date = new Date(birthdayInput);
    const month = date.getMonth() + 1; // getMonth() is zero-based
    const day = date.getDate();
    const sign = getZodiacSign(month, day);
//display horoscope
    if (sign) {
        document.getElementById('placeToYell').textContent = `${sign}: ${horoscopes[sign]}`;
    } else {
        document.getElementById('placeToYell').textContent = "Invalid date. Please try again.";
    }
});
//copied from google 
//make my image move
// const image = document.getElementById('myImage');
//   let posX = 0;
//   let posY = 0;
//   let speed = 5;
//   let intervalId = null;

//   function moveImage() {
    // Update position
    // posX += speed;
    // posY += speed;

    // Apply new position to the image
    // image.style.left = posX + 'px';
    // image.style.top = posY + 'px';

    // Optional: Stop movement if it goes beyond a certain point
//     if (posX > 300 || posY > 300) {
//       clearInterval(intervalId);
//     }
//   }

  // Start moving the image by calling moveImage every 50 milliseconds
//   intervalId = setInterval(moveImage, 50);