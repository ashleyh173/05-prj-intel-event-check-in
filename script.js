// Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");

// Track Attendance
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  // Stop more check-ins if the event is full
  if (count >= maxCount) {
    alert("Sorry, the check-in limit has been reached.");
    return;
  }

  // Increment Count
  count++;
  console.log("Total check-ins: ", count);
  attendeeCount.textContent = count;

  // Update Progress Bar
  const percentage = Math.round((count / maxCount) * 100);
  progressBar.style.width = percentage + "%";
  progressBar.setAttribute("aria-valuenow", percentage);
  console.log(`Progress: ${percentage}%`);

  // Update Team Counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Show Welcome Message
  const message = `🎉 Welcome, ${name} from ${teamName}`;
  console.log(message);
  alert(message);

  if (count >= maxCount) {
    const water = parseInt(document.getElementById("waterCount").textContent);
    const zero = parseInt(document.getElementById("zeroCount").textContent);
    const power = parseInt(document.getElementById("powerCount").textContent);

    let winner = "";
    if (water > zero && water > power) {
      winner = "🌊 Team Water Wise";
    } else if (zero > water && zero > power) {
      winner = "🌿 Team Net Zero";
    } else if (power > water && power > zero) {
      winner = "⚡ Team Renewables";
    } else {
      winner = "it's a tie";
    }

    alert(`🎉 Check-in goal reached!\nCongratulations ${winner}!`);
  }

  form.reset();
});
