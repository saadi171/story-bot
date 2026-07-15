const stories = {
    happy: [
        "The Selfish Giant",
        "Toy Story",
        "The Happy Prince"
    ],

    sad: [
        "The Little Match Girl",
        "The Last Leaf",
        "The Necklace"
    ],

    bored: [
        "The Cop and the Anthem",
        "The Great Gatsby",
        "The Ransom of Red Chief"
    ]
};

function recommendStory() {

    let mood = document.getElementById("mood").value;
    let chatBox = document.getElementById("chatBox");

    if (mood === "") {
        alert("Please select a mood.");
        return;
    }

    chatBox.innerHTML += `
    <div class="user-message">
        My mood is ${mood}
    </div>
    `;

    let list = stories[mood];

    let randomStory = list[Math.floor(Math.random() * list.length)];

    chatBox.innerHTML += `
    <div class="bot-message">
        📖 Here are some stories for you:<br><br>
        • ${list.join("<br>• ")}
        <br><br>
        ⭐ Recommended Story:<br>
        <b>${randomStory}</b>
    </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;
}
