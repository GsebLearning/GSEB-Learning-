/* =====================================
   dashboard.js
   GSEB Smart Learning Portal
=====================================*/

// Student Data
let student = {
    name: "Student",
    coins: 0,
    level: 1,
    xp: 0,
    streak: 0
};

// Load Saved Data
if(localStorage.getItem("student")){
    student = JSON.parse(localStorage.getItem("student"));
}

// Save Data
function saveStudent(){
    localStorage.setItem("student", JSON.stringify(student));
}

// Update Dashboard
function updateDashboard(){

    document.querySelector(".student").innerHTML =
    "👤 Welcome " + student.name;

    document.querySelector(".profile").innerHTML = `

    <h2>👨‍🎓 Student Profile</h2>

    <p>👤 Name : ${student.name}</p>

    <p>🪙 Coins : ${student.coins}</p>

    <p>⭐ Level : ${student.level}</p>

    <p>⚡ XP : ${student.xp}</p>

    <p>🔥 Streak : ${student.streak} Day</p>

    `;
}

updateDashboard();


// Daily Reward

function dailyReward(){

student.coins +=10;

student.xp +=5;

saveStudent();

updateDashboard();

alert("🎁 Daily Reward +10 Coins");

}


// Dark Mode

function darkMode(){

document.body.classList.toggle("dark");

}


// Start Quiz Button

function startQuiz(){

alert("🧠 Quiz Module Coming Soon");

}


// Start Game

function startGame(){

alert("🎮 Game Zone Coming Soon");

}


// Welcome

setTimeout(()=>{

console.log("Welcome Student");

},1000);
