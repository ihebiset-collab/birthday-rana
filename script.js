/* =========================
   PROJECT FRECKLES
   JavaScript Foundation
========================= */

const starsContainer = document.getElementById("stars");

// Create stars
function createStars() {
    for (let i = 0; i < 120; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 5 + "s";
        star.style.opacity = Math.random();
        starsContainer.appendChild(star);
    }
}

createStars();

// Loading animation
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
            const welcome = document.getElementById("welcome");
            welcome.classList.remove("hidden");
            welcome.animate([
                { opacity: 0, transform: "translateY(30px)" },
                { opacity: 1, transform: "translateY(0)" }
            ], {
                duration: 1500,
                fill: "forwards"
            });
        }, 1000);
    }, 2500);
});

// =========================
// Chapter System
// =========================

const welcome = document.getElementById("welcome");

// Chapter One
const chapterOne = document.createElement("section");
chapterOne.id = "chapter-one";
chapterOne.innerHTML = `
<div class="chapter-content">
    <div class="number">22</div>
    <h2>Happy Birthday, Rana</h2>
    <p>Twenty-two years of becoming the person you are today.</p>
    <p>Keep growing. Keep praying. Keep chasing your dreams.</p>
    <button id="next-button">Continue ✨</button>
</div>
`;
document.body.appendChild(chapterOne);

document.getElementById("start-button").addEventListener("click", () => {
    welcome.style.opacity = "0";
    setTimeout(() => {
        welcome.style.display = "none";
        chapterOne.classList.add("active");
    }, 800);
});

// Chapter Two
const chapterTwo = document.createElement("section");
chapterTwo.id = "chapter-two";
chapterTwo.innerHTML = `
<div class="cards-container">
    <h2>The Light You Bring</h2>
    <p class="chapter-intro">Some things deserve to be said.</p>
    <div class="cards">
        <div class="card">
            <h3>💙 Your Energy</h3>
            <p>Your energy has always been something special. You have a way of making places feel brighter just by being yourself.</p>
        </div>
        <div class="card">
            <h3>✨ Your Light</h3>
            <p>Some people search for ways to shine. You naturally bring light wherever you go.</p>
        </div>
        <div class="card">
            <h3>🌱 Your Growth</h3>
            <p>Keep working on yourself. Keep becoming the person you want to be.</p>
        </div>
        <div class="card">
            <h3>🤍 Your Faith</h3>
            <p>Keep praying. Keep trusting the path ahead.</p>
        </div>
        <div class="card">
            <h3>💬 Thank You</h3>
            <p>Thank you for always encouraging me to talk about what's on my mind instead of keeping everything inside.</p>
        </div>
    </div>
    <button id="stars-button">Discover something ✨</button>
</div>
`;
document.body.appendChild(chapterTwo);

document.getElementById("next-button").addEventListener("click", () => {
    chapterOne.style.opacity = "0";
    setTimeout(() => {
        chapterOne.style.display = "none";
        chapterTwo.classList.add("active");
        const cards = document.querySelectorAll(".card");
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 400);
        });
    }, 1000);
});

// Chapter Three
const chapterThree = document.createElement("section");
chapterThree.id = "chapter-three";
chapterThree.innerHTML = `
<div class="constellation-container">
    <h2>A Small Constellation</h2>
    <p>Twenty-two little reminders for your twenty-second year.</p>
    <div id="birthday-stars"></div>
    <div id="star-message"></div>
    <button id="future-button" class="hidden-button">Continue the journey 🌙</button>
</div>
`;
document.body.appendChild(chapterThree);

document.getElementById("stars-button").addEventListener("click", () => {
    chapterTwo.style.opacity = "0";
    setTimeout(() => {
        chapterTwo.style.display = "none";
        chapterThree.classList.add("active");
        createBirthdayStars();
    }, 1000);
});

const starMessages = [
    "Never stop believing in yourself.",
    "Your kindness matters.",
    "Keep chasing your dreams.",
    "Your efforts are seen.",
    "Keep growing every day.",
    "Your energy inspires people.",
    "Do not forget how strong you are.",
    "Small steps still move you forward.",
    "Your smile can change someone's day.",
    "Keep learning.",
    "Keep creating.",
    "Keep praying.",
    "Keep trusting yourself.",
    "You are capable of more than you think.",
    "Your journey is yours. Enjoy it.",
    "Be proud of how far you have come.",
    "Keep protecting your peace.",
    "Stay curious.",
    "Keep bringing light.",
    "Never lose your good heart.",
    "More beautiful memories are waiting.",
    "Happy 22nd, Rana 💙"
];

let collectedStars = 0;

function createBirthdayStars() {
    const container = document.getElementById("birthday-stars");
    
    starMessages.forEach((message, index) => {
        const star = document.createElement("div");
        star.className = "birthday-star";
        star.innerHTML = "✦";
        star.style.left = Math.random() * 85 + 5 + "%";
        star.style.top = Math.random() * 75 + 10 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";
        
        star.addEventListener("click", () => {
            if (star.classList.contains("found")) return;
            
            star.classList.add("found");
            collectedStars++;
            
            document.getElementById("star-message").innerHTML = `
                <div class="message-box">${message}</div>
            `;
            
            if (collectedStars === 22) {
                document.getElementById("star-message").innerHTML = `
                    <div class="message-box">
                        You found all the stars ✨<br>
                        The constellation is complete.
                    </div>
                `;
                
                const continueButton = document.getElementById("future-button");
                continueButton.classList.remove("hidden-button");
                continueButton.classList.add("show-button");
            }
        });
        
        container.appendChild(star);
    });
}

// =========================
// Chapter Four - The Legendary Collision
// =========================

const chapterFour = document.createElement("section");
chapterFour.id = "chapter-four";
chapterFour.innerHTML = `
<div class="field-container">
    <h2>The Legendary Collision</h2>
    <p class="memory-intro">A very serious sports investigation...</p>
    <div class="field">
        <div class="runner">🏃</div>
        <div class="rana-character">💙</div>
    </div>
    <div id="collision-text"></div>
    <button id="future-chapter-button" class="hidden-button">Continue 🌅</button>
</div>
`;
document.body.appendChild(chapterFour);

// Move from constellation to funny memory
document.getElementById("future-button").addEventListener("click", () => {
    chapterThree.style.opacity = "0";
    setTimeout(() => {
        chapterThree.style.display = "none";
        chapterFour.classList.add("active");
        startCollisionAnimation();
    }, 1200);
});

function startCollisionAnimation() {
    const runner = document.querySelector(".runner");
    
    setTimeout(() => {
        runner.classList.add("run");
    }, 1000);
    
    setTimeout(() => {
        document.getElementById("collision-text").innerHTML = `
            <div class="memory-box">
                💥 COLLISION DETECTED 💥<br><br>
                After careful investigation...<br><br>
                Rana was completely fine.<br><br>
                The only victim was the runner's confidence.<br><br>
                😂
            </div>
        `;
        
        const continueButton = document.getElementById("future-chapter-button");
        continueButton.classList.remove("hidden-button");
        continueButton.classList.add("show-button");
    }, 3500);
}

// =========================
// Chapter Five - The Road Ahead
// =========================

const chapterFive = document.createElement("section");
chapterFive.id = "chapter-five";
chapterFive.innerHTML = `
<div class="future-container">
    <h2>The Road Ahead</h2>
    <div class="sun">☀️</div>
    <div class="future-message">
        <p>Rana,</p>
        <p>As you enter this new year of your life,<br>
        I hope you continue becoming the person<br>
        you dream of becoming.</p>
        <p>Keep praying.<br>
        Keep working on yourself.<br>
        Keep believing in your journey.</p>
        <p>Never forget how much good energy<br>
        you bring into the world.</p>
        <p>I am proud of you,<br>
        and I hope life brings you many<br>
        beautiful moments ahead.</p>
    </div>
    <button id="memory-button">One last thing 💙</button>
</div>
`;
document.body.appendChild(chapterFive);

document.getElementById("future-chapter-button").addEventListener("click", () => {
    chapterFour.style.opacity = "0";
    setTimeout(() => {
        chapterFour.style.display = "none";
        chapterFive.classList.add("active");
    }, 1200);
});

// =========================
// Chapter Six - Final Surprise
// =========================

const chapterSix = document.createElement("section");
chapterSix.id = "chapter-six";
chapterSix.innerHTML = `
<div class="final-container">
    <h2>Happy Birthday, Rana 💙</h2>
    <div class="final-message">
        <p>You made it to the end!</p>
        <p>This is just a small way of saying</p>
        <p>how much you mean to me.</p>
        <br>
        <p>I hope you have the most</p>
        <p>beautiful year ahead.</p>
        <br>
        <p>With love,</p>
        <p>Your friend 💙</p>
    </div>
    <div class="final-hearts">💙✨💙✨💙</div>
    <button id="restart-button">Start again 🔄</button>
</div>
`;
document.body.appendChild(chapterSix);

// Fix the "One last thing" button
document.getElementById("memory-button").addEventListener("click", () => {
    chapterFive.style.opacity = "0";
    setTimeout(() => {
        chapterFive.style.display = "none";
        chapterSix.classList.add("active");
        createFinalCelebration();
    }, 1000);
});

// Restart button
document.getElementById("restart-button").addEventListener("click", () => {
    location.reload();
});

// Final celebration effect
function createFinalCelebration() {
    // Create floating hearts and stars
    const container = document.querySelector(".final-container");
    for (let i = 0; i < 30; i++) {
        const emoji = document.createElement("div");
        emoji.className = "celebration-emoji";
        emoji.innerHTML = ["💙", "✨", "⭐", "🎂", "🎉"][Math.floor(Math.random() * 5)];
        emoji.style.left = Math.random() * 100 + "%";
        emoji.style.top = Math.random() * 100 + "%";
        emoji.style.fontSize = Math.random() * 2 + 1.5 + "rem";
        emoji.style.animationDuration = Math.random() * 3 + 2 + "s";
        emoji.style.animationDelay = Math.random() * 2 + "s";
        container.appendChild(emoji);
    }
}