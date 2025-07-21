let players = [];
let currentPlaying = null;

// Create players after YouTube API loads
function onYouTubeIframeAPIReady() {
  const iframes = document.querySelectorAll(".youtubePlayer");

  iframes.forEach((iframe, index) => {
    const player = new YT.Player(iframe, {
      events: {
        onReady: () => {
          players.push(player);
        }
      }
    });

    // Attach dynamic hover/click handlers
    iframe.closest('.video-card').addEventListener('mouseenter', () => {
      if (currentPlaying && currentPlaying !== player) {
        currentPlaying.stopVideo();
      }
      player.playVideo();
      currentPlaying = player;
    });

    iframe.closest('.video-card').addEventListener('mouseleave', () => {
      player.stopVideo();
      if (currentPlaying === player) {
        currentPlaying = null;
      }
    });
  });
}


// bounce box code 

const boxes = document.querySelectorAll(".communication-box");
const sections = document.querySelectorAll(".communication-section");

boxes.forEach((box, index) => {
  const section = sections[index];
  let position = 0;
  let direction = 1;
  let speed = 2;

  function animate() {
    const sectionWidth = section.offsetWidth;
    const boxWidth = box.offsetWidth;

    position += direction * speed;

    if (position + boxWidth >= sectionWidth || position <= 0) {
      direction *= -1;
    }

    // DO NOT set box.style.position here — already set in CSS
    box.style.left = position + "px";

    requestAnimationFrame(animate);
  }

  animate();
});









// radomly generated code 

const quotes = [
  "Believe in yourself and all that you are.",
  "Success is not final, failure is not fatal.",
  "Dream big and dare to fail.",
  "Keep going, you're getting there.",
  "Push yourself, no one else will.",
  "The best way to begin is to start now.",
  "Don't wait for opportunity. Create it.",
  "Your only limit is you.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Great things never come from comfort zones.",
  "Don’t stop until you’re proud.",
  "Success doesn’t just find you—you have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t wait for the perfect moment. Take the moment and make it perfect.",
  "Little things make big days.",
  "You are capable of amazing things.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Don’t limit your challenges. Challenge your limits.",
  "You don’t have to be great to start, but you have to start to be great.",
  "It always seems impossible until it's done.",
  "Don’t quit. Suffer now and live the rest of your life as a champion.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "The secret of getting ahead is getting started.",
  "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "Action is the foundational key to all success.",
  "Dreams don’t work unless you do.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Don’t wish it were easier. Wish you were better.",
  "Falling down is how we grow. Staying down is how we die.",
  "If you can dream it, you can do it.",
  "The future depends on what you do today.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Start where you are. Use what you have. Do what you can.",
  "Don’t count the days. Make the days count.",
  "Be proud of how hard you’re trying.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Don’t wait for things to happen. Make them happen.",
  "If it doesn't challenge you, it won't change you.",
  "You don’t need to see the whole staircase, just take the first step.",
  "Excellence is not an act, but a habit.",
  "Believe you can and you're halfway there.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Difficult roads often lead to beautiful destinations.",
  "Keep your eyes on the stars and your feet on the ground.",
  "Don’t let yesterday take up too much of today.",
  "A river cuts through rock not because of its power, but because of its persistence.",
  "If opportunity doesn’t knock, build a door.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "The harder the conflict, the more glorious the triumph.",
  "Believe in the power of yet—‘not yet’ means you’re on your way.",
  "Small progress is still progress.",
  "You are stronger than you think.",
  "Great things take time.",
  "Perseverance conquers all.",
  "Dreams are the seedlings of reality.",
  "Don’t fear failure. Fear being in the exact same place next year.",
  "You miss 100% of the shots you don’t take.",
  "Keep pushing. Keep trying. Keep believing.",
  "Let your courage be contagious.",
  "Doubt kills more dreams than failure ever will.",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "Everything you want is on the other side of fear.",
  "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
  "You are never too old to set another goal or to dream a new dream.",
  "Work until your idols become your rivals.",
  "Don’t wait for inspiration. Be the inspiration.",
  "Every accomplishment starts with the decision to try.",
  "You don’t have to see the whole path, just take the next step.",
  "Discipline is choosing between what you want now and what you want most.",
  "Winners are not people who never fail but people who never quit.",
  "Be stronger than your excuses.",
  "The only place where success comes before work is in the dictionary.",
  "What seems impossible today will one day become your warm-up.",
  "Your time is now. Start where you stand.",
  "Good things come to people who wait, but better things come to those who go out and get them.",
  "Your life does not get better by chance, it gets better by change.",
  "Don’t let what you cannot do interfere with what you can do.",
  "If you’re going through hell, keep going.",
  "A goal without a plan is just a wish.",
  "Don't stop when you're tired. Stop when you're done.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Motivation gets you going, and habit keeps you going.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "Be so good they can’t ignore you.",
  "Learn the rules like a pro, so you can break them like an artist.",
  "Success isn’t overnight. It’s when every day you get a little better than the day before.",
  "Champions keep playing until they get it right.",
  "You are the artist of your own life. Don’t hand the paintbrush to anyone else.",
  "Push harder than yesterday if you want a different tomorrow.",
  "Live less out of habit and more out of intent.",
  "You don’t find willpower, you create it.",
  "The beginning is the most important part of the work.",
  "Work hard in silence, let your success be your noise.",
  "If you want it, work for it.",
  "Be the change you wish to see.",
  "The difference between ordinary and extraordinary is that little extra.",
  "You are braver than you believe, stronger than you seem, and smarter than you think.",
  "Don’t downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny.",
  "Difficulties in life are intended to make us better, not bitter.",
  "Stop doubting yourself, work hard, and make it happen.",
  "Let your dreams be bigger than your fears.",
  "The only thing standing between you and your goal is the story you keep telling yourself.",
  "You can. Period.",
  "Anything’s possible if you’ve got enough nerve.",
  "With the new day comes new strength and new thoughts.",
  "Keep going. Each step may get harder, but don’t stop.",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "The key to success is to focus on goals, not obstacles.",
  "Push yourself because no one else is going to do it for you.",
  "Failure is not the opposite of success—it’s part of success.",
  "There is no substitute for hard work.",
  "You can’t have a million‑dollar dream with a minimum‑wage work ethic.",
  "Don’t wait. The time will never be just right.",
  "Believe it can be done. Your mind will find the way.",
  "Start now. No action is worthless.",
  "It’s going to be hard, but hard does not mean impossible.",
  "A year from now you may wish you had started today.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Dream. Believe. Build.",
  "The comeback is always stronger than the setback.",
  "You are the author of your own story. Make it a bestseller.",
  "Turn your wounds into wisdom.",
  "Your passion is waiting for your courage to catch up.",
  "Magic happens when you don’t give up.",
  "Work hard, stay humble.",
  "Success doesn’t come to you—you go to it.",
  "You are more powerful than you know.",
  "Never regret a day in your life: good days give happiness, bad days give experience.",
  "Live the life you’ve imagined.",
  "Don’t wait for opportunities—create them.",
  "Believe in the process and enjoy the journey.",
  "Let your hustle be louder than your mouth.",
  "Today’s struggles bring tomorrow’s strengths.",
  "Keep your spirits up and your game strong.",
  "Your best teacher is your last mistake.",
  "Bring your best self to every moment.",
  "Perfection is the enemy of progress.",
  "Dream big. Start small. Act now.",
  "Live boldly. Push yourself. Don’t settle.",
  "Turn 'I wish' into 'I will.'",
  "You are capable of more than you know.",
  "Action is the antidote to fear.",
  "Plant the seed of belief, water it with action.",
  "Success starts with self‑discipline.",
  "Invest in yourself—it pays the best interest.",
  "Stronger than yesterday. Smarter than last week.",
  "Chase your dreams, not people.",
  "Don’t fear mistakes—they're proof that you’re trying.",
  "Rise up and attack the day with enthusiasm.",
  "Your future is created by what you do today.",
  "You are only one decision away from a totally different life.",
  "Turn your can't into can, and your dreams into plans.",
  "Progress over perfection.",
  "Big things have small beginnings.",
  "Stay positive, work hard, make it happen.",
  "Make each day your masterpiece.",
  "Don’t look back—you’re not going that way.",
  "Rise before the sun and chase your dreams.",
  "Nobody is you, and that is your power.",
  "Accept challenges so you can feel the exhilaration of victory.",
  "Your only competition is who you were yesterday.",
  "Focus on your goal. Don’t look in any direction but ahead.",
  "Even the greatest was once a beginner.",
  "Be positive, patient, and persistent.",
  "Go the extra mile—it’s never crowded.",
  "Stay humble. Work hard. Be kind.",
  "Let your faith be bigger than your fear.",
  "Remember why you started.",
  "Don’t fear failure. Fear not trying.",
  "Take the risk or lose the chance.",
  "When you feel like quitting, remember why you started.",
  "Success is a series of small wins.",
  "Only those who dare to fail greatly can ever achieve greatly.",
  "Don't wait for opportunity. Create it.",
  "Let your light shine brighter than your fears.",
  "Sore today. Strong tomorrow.",
  "The struggle you’re in today is developing the strength you need for tomorrow.",
  "Believe it. Work for it. Achieve it.",
  "You have the power to change your story.",
  "Without struggle, there is no progress.",
  "Nothing worth having comes easy.",
  "Keep dreaming. Keep pushing. Keep going.",
  "This is your moment—rise to it."
];


const quoteText = document.getElementById("quoteText");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}

showRandomQuote(); // Show first quote immediately
setInterval(showRandomQuote, 4000); // Change every 5 seconds




function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString('en-IN', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  document.getElementById("datetime").innerText = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call


// Track session start time
let startTime, endTime;

window.onload = () => {
  startTime = new Date(); // Start the timer when page loads
};

// Triggered when user leaves, reloads, or closes the tab
window.onbeforeunload = () => {
  endTime = new Date();
  const timeSpent = Math.round((endTime - startTime) / 1000); // Total seconds

  // Convert to minutes & seconds
  const minutes = Math.floor(timeSpent / 60);
  const seconds = timeSpent % 60;

  // Save today's learning time in localStorage
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const previousTime = parseInt(localStorage.getItem(today)) || 0;
  localStorage.setItem(today, previousTime + timeSpent);

  // Show popup of time spent in this session
  alert(`🕒 You spent ${minutes} min ${seconds} sec learning on our site today.`);

  // You could send the timeSpent to your backend here if needed
};

// Function to show total time spent today
function showTodayTimeSpent() {
  const today = new Date().toISOString().split('T')[0];
  const total = parseInt(localStorage.getItem(today)) || 0;
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  alert(`📅 Today’s total learning time: ${minutes} min ${seconds} sec`);
}




// Run on page load
window.addEventListener('load', () => {
  const lastPromptTime = parseInt(localStorage.getItem('lastPromptTime'), 10);
  const now = Date.now();

  // If more than 6 hours passed or never set
  if (!lastPromptTime || now - lastPromptTime >= 6 * 60 * 60 * 1000) {
    const task = prompt("📝 Enter your main task for the next 6 hours:");
    if (task) {
      localStorage.setItem('dailyTask', task);
      localStorage.setItem('lastPromptTime', now.toString());
    }
  }

  startLearningTimer();
});


// Start timer
let learningStartTime = Date.now();
function startLearningTimer() {
  localStorage.setItem('startTime', learningStartTime.toString());
}

// Show time spent and today's task
function showTodayTimeSpent() {
  const startTime = parseInt(localStorage.getItem('startTime'), 10);
  const now = Date.now();
  const timeSpent = now - startTime;
  const minutes = Math.floor(timeSpent / 60000);
  const seconds = Math.floor((timeSpent % 60000) / 1000);

  const task = localStorage.getItem('dailyTask') || "No task set for today.";

  alert(`✅ Your Main Task: ${task}\n⏱️ Time Spent: ${minutes} min ${seconds} sec`);
}
