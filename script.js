// ==========================================
// Day 1: let, const, var (Magic Boxes)
// ==========================================
let myMagicLetBox = "Car";
const myLockedConstBox = "Teddy Bear";

document.getElementById('btnLet').addEventListener('click', () => {
    let val = document.getElementById('varInput').value || "Robot";
    myMagicLetBox = val; 
    document.getElementById('varResult').innerHTML = `<code>let</code> box now has: <b>${myMagicLetBox}</b> 🎁 <br>(It changed nicely!)`;
});
document.getElementById('btnConst').addEventListener('click', () => {
    try {
        let val = document.getElementById('varInput').value || "Robot";
        // This will throw error!
        myLockedConstBox = val; 
    } catch(err) {
        document.getElementById('varResult').innerHTML = `<span style="color:#ef4444">Oh no! Error!</span> 🚨<br>The <code>const</code> box is locked! It still has <b>Teddy Bear</b>!`;
    }
});

// ==========================================
// Day 2: Data Types (Age)
// ==========================================
document.getElementById('calcAgeBtn').addEventListener('click', () => {
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const currentYear = new Date().getFullYear();
    const res = document.getElementById('ageResult');
    if (isNaN(birthYear) || birthYear > currentYear) {
        res.style.color = '#ef4444'; res.innerHTML = "Oops! That year doesn't make sense! 🙈";
    } else {
        res.style.color = 'var(--accent)'; res.innerHTML = `You are <b>${currentYear - birthYear}</b> years old! 🎂`;
    }
});

// ==========================================
// Day 3: Conditions (Making Choices)
// ==========================================
document.getElementById('btnIfElse').addEventListener('click', () => {
    const weather = document.getElementById('conditionInput').value.toLowerCase().trim();
    const res = document.getElementById('conditionResult');
    
    if(weather === 'rain') {
        res.innerHTML = `Used <b>If</b>: It's raining! Take an Umbrella! ☔`;
    } else {
        res.innerHTML = `Used <b>Else</b>: It's sunny! Wear Sunglasses! 🕶️`;
    }
});

document.getElementById('btnSwitch').addEventListener('click', () => {
    const flavor = document.getElementById('conditionInput').value.toLowerCase().trim();
    const res = document.getElementById('conditionResult');
    
    switch(flavor) {
        case 'apple': res.innerHTML = `Used <b>Switch</b>: You got Apple Juice! 🍎`; break;
        case 'mango': res.innerHTML = `Used <b>Switch</b>: You got Mango Shake! 🥭`; break;
        default: res.innerHTML = `Used <b>Switch</b>: We don't have that flavor. Have some Water! 💧`;
    }
});

// ==========================================
// Day 4: Loops (Jumping)
// ==========================================
document.getElementById('btnFor').addEventListener('click', () => {
    const num = parseInt(document.getElementById('jumpNum').value) || 3;
    let str = "<b>For Loop says:</b><br>";
    for(let i=1; i<=num; i++) {
        if(i > 10) { str += "Too tired! 😴"; break; }
        str += `Jump ${i}! 🦘<br>`;
    }
    document.getElementById('loopResult').innerHTML = str;
});

document.getElementById('btnWhile').addEventListener('click', () => {
    const num = parseInt(document.getElementById('jumpNum').value) || 3;
    let str = "<b>While Loop says:</b><br>";
    let i = 1;
    while(i <= num && i <= 10) {
        str += `Spin ${i}! 🌪️<br>`;
        i++;
    }
    document.getElementById('loopResult').innerHTML = str;
});

// ==========================================
// Day 5: Functions (Helper Robot)
// ==========================================
function addNumbersRobot(a, b) {
    return a + b;
}
document.getElementById('callRobotBtn').addEventListener('click', () => {
    const a = parseFloat(document.getElementById('numA').value) || 0;
    const b = parseFloat(document.getElementById('numB').value) || 0;
    const ans = addNumbersRobot(a, b);
    document.getElementById('robotResult').innerHTML = `🤖 Beep Boop! The answer is <b>${ans}</b>!`;
});

// ==========================================
// Day 6: Arrays (Toy Train)
// ==========================================
let toyTrain = ["Car 🚗", "Bear 🧸"];
const updateTrain = () => document.getElementById('trainDisplay').innerText = `🚂 ` + toyTrain.join(' - ');
updateTrain();

document.getElementById('pushToyBtn').addEventListener('click', () => {
    const newToy = document.getElementById('newToy').value || "Block 🧱";
    toyTrain.push(newToy); // PUSH
    updateTrain();
});
document.getElementById('popToyBtn').addEventListener('click', () => {
    toyTrain.pop(); // POP
    updateTrain();
});

// ==========================================
// Day 7: Objects (Superhero)
// ==========================================
const myHero = { 
    name: "Spider-Boy", 
    color: "Red & Blue",
    power: "Web Shooting 🕸️",
    describe: function() {
        return `Name: <b>${this.name}</b><br>Suit: ${this.color}<br>Power: ${this.power}`;
    }
};
document.getElementById('showHeroBtn').addEventListener('click', () => {
    document.getElementById('heroResult').innerHTML = myHero.describe();
});

// ==========================================
// Day 8: Array Methods (Magic Spells)
// ==========================================
const candies = [2, 5, 10];
document.getElementById('btnMap').addEventListener('click', () => {
    const doubled = candies.map(c => c * 2);
    document.getElementById('magicResult').innerHTML = `<b>Map Spell:</b> Candies doubled to [${doubled.join(', ')}]! 🍬🍬`;
});
document.getElementById('btnFilter').addEventListener('click', () => {
    const bigBags = candies.filter(c => c > 4);
    document.getElementById('magicResult').innerHTML = `<b>Filter Spell:</b> Kept only bags with >4 candies: [${bigBags.join(', ')}]! 🎒`;
});

// ==========================================
// Day 9: DOM Manipulation (Magic Wand)
// ==========================================
document.getElementById('domChangeBtn').addEventListener('click', () => {
    const title = document.getElementById('mainTitle');
    const colors = ['#f43f5e', '#3b82f6', '#10b981', '#eab308'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    title.style.background = 'none';
    title.style.color = randomColor;
    title.style.webkitTextFillColor = randomColor;
    title.innerText = "✨ MAGIC! JS Changed Me! ✨";
});

// ==========================================
// Day 10: Events
// ==========================================
const eventRes = document.getElementById('eventResult');
document.getElementById('eventClickBtn').addEventListener('click', () => {
    eventRes.innerHTML = "You Clicked the button! 🖱️ *Boop*!";
});
document.getElementById('eventInput').addEventListener('input', (e) => {
    eventRes.innerHTML = `You are typing... I see: <b>${e.target.value}</b> ⌨️👀`;
});

// ==========================================
// Day 11: ES6 (Shortcuts)
// ==========================================
document.getElementById('btnArrow').addEventListener('click', () => {
    const name = document.getElementById('es6Name').value || "Friend";
    // Arrow function & Template literal
    const greet = (n) => `Hey ${n}! This is an Arrow Function shortcut! 🏹`;
    document.getElementById('es6Result').innerHTML = greet(name);
});

// ==========================================
// Day 12: Async / Fetch (Pigeon)
// ==========================================
const apiRes = document.getElementById('apiResult');
document.getElementById('fetchApiBtn').addEventListener('click', async () => {
    apiRes.innerHTML = "🕊️ Pigeon is flying to the internet...";
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        apiRes.innerHTML = `🕊️ Pigeon is back! Brought the name: <b>${data.name}</b>!`;
    } catch(err) {
        apiRes.innerHTML = "🕊️ Pigeon got lost! 😢";
    }
});

// ==========================================
// Day 13: Local Storage (Backpack)
// ==========================================
document.getElementById('btnLocal').addEventListener('click', () => {
    const val = document.getElementById('storageInput').value || "Magic Stone";
    localStorage.setItem('myKidData', val);
    document.getElementById('storageResult').innerHTML = "Stored safely in the Backpack! 🎒";
});
document.getElementById('btnRead').addEventListener('click', () => {
    const lData = localStorage.getItem('myKidData') || "Nothing inside!";
    document.getElementById('storageResult').innerHTML = `I looked in the Backpack! Found: <b>${lData}</b> 👀`;
});

// ==========================================
// Day 14: To-Do App
// ==========================================
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

let todos = JSON.parse(localStorage.getItem('kidTodos')) || [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <span>${todo.task}</span>
            <div>
                <button class="todo-action check" onclick="toggleTodo(${index})">⭐</button>
                <button class="todo-action delete" onclick="deleteTodo(${index})">❌</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

function addTodo() {
    const task = todoInput.value.trim();
    if (task) {
        todos.push({ task, completed: false });
        todoInput.value = '';
        saveAndRender();
    }
}

window.toggleTodo = function(index) {
    todos[index].completed = !todos[index].completed;
    saveAndRender();
}

window.deleteTodo = function(index) {
    todos.splice(index, 1);
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem('kidTodos', JSON.stringify(todos));
    renderTodos();
}

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

// Initial render
renderTodos();
