// ================================
// 🎯 Part 1: Basics (Variables, Conditionals)
// ================================
function checkAge() {
  let age = document.getElementById("ageInput").value;

  if (age >= 18) {
    document.getElementById("ageResult").innerText = "✅ You are an adult!";
  } else if (age > 0) {
    document.getElementById("ageResult").innerText = "👶 You are underage.";
  } else {
    document.getElementById("ageResult").innerText = "❌ Please enter a valid age.";
  }
}

// ================================
// ❤️ Part 2: Functions (Reusable Code)
// ================================
function calculateSum() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = addNumbers(num1, num2); // Using our custom function

  document.getElementById("sumResult").innerText = `Sum = ${sum}`;
}

// Reusable function
function addNumbers(a, b) {
  return a + b;
}

// Another example function (string formatting)
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("javascript is fun!"));

// ================================
// 🔁 Part 3: Loops (Repetition)
// ================================
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear old results

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Another loop example
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log(`🍎 Fruit: ${fruit}`));

// ================================
// 🌐 Part 4: DOM Manipulation
// ================================
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("toggleText").innerText =
    document.body.classList.contains("dark-mode")
      ? "🌙 Dark Mode Activated"
      : "☀️ Light Mode Activated";
}

function addListItem() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
}
