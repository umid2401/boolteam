const users = [
    {
        id: 1,
        name: "Nikita Ryzhkov",
        time: "13:33",
        message: "Забаню",
        img: "../assets/icons/Ellipse 7-1.svg",
        messages: [
            { text: "Salom, qalesan?", sender: "received" },
            { text: "Yaxshi, o'zingchi?", sender: "sent" }
        ]
    },
    {
        id: 2,
        name: "Alex Ivanov",
        time: "12:50",
        message: "Ассалому алайкум!",
        img: "../assets/icons/Ellipse 7-2.svg",
        messages: [
            { text: "Salom!", sender: "received" },
            { text: "Qandaysan?", sender: "sent" }
        ]
    },
    {
        id: 3,
        name: "Sergey Petrov",
        time: "11:20",
        message: "Hey!",
        img: "../assets/icons/Ellipse 7-2.svg",
        messages: [
            { text: "Hey, what's up?", sender: "received" },
            { text: "All good!", sender: "sent" }
        ]
    },
    {
        id: 4,
        name: "Anna Smirnova",
        time: "10:05",
        message: "Salom!",
        img: "../assets/icons/Ellipse 7.svg",
        messages: [
            { text: "Salom, qanday?", sender: "received" },
            { text: "Yaxshi, rahmat!", sender: "sent" }
        ]
    }
];

const userList = document.getElementById("userList");
const chatTitle = document.getElementById("chatTitle");
const chatMessages = document.getElementById("chatMessages");
const chatContainer = document.querySelector(".chat-container");
const chatList = document.querySelector(".chat-list");
const chatWindow = document.querySelector(".chat-window");
const right = document.querySelector(".right_btn")

right.addEventListener("click", () => {
    chatContainer.classList.remove("chat-active");
    chatList.style.display = "block";
    chatWindow.style.display = "none";
});
function renderUsers() {
    userList.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("li");
        li.setAttribute("data-user", user.id);
        li.innerHTML = `
<img src="${user.img}" alt="User">
<div class="details">
    <div class="detail">
        <p class="name">${user.name}</p>
        <span>${user.time}</span>
    </div>
    <div class="detail">
        <small>${user.message}</small>
    </div>
</div>
`;
        li.addEventListener("click", () => loadChat(user));
        userList.appendChild(li);
    });
}

function loadChat(user) {
    chatTitle.textContent = user.name;
    chatMessages.innerHTML = "";
    user.messages.forEach(msg => {
        const div = document.createElement("div");
        div.classList.add("message", msg.sender);
        div.innerHTML = `
<div class="_div">
    
    <img src="${user.img}" alt="Avatar">
    <div class="message-content">${msg.text}</div>
</div>
`;
        chatMessages.appendChild(div);
    });

    if (window.innerWidth <= 768) {
        chatContainer.classList.add("active");
        chatList.style.display = "none";
        chatWindow.style.display = "flex";
        right.style.display = "block";
    }
}
function handleResize() {
    if (window.innerWidth > 768) {
        chatList.style.display = "flex";
        chatWindow.style.display = "flex";
        right.style.display = "none";
    } else if (!chatContainer.classList.contains("chat-active")) {
        chatList.style.display = "block";
        chatWindow.style.display = "none";
    }
}
window.addEventListener("resize", handleResize);
handleResize();
renderUsers();
