const family = {
    name: "Bobom",
    spouse: "Buvim",
    children: [
        {
            name: "Katta Amma",
            spouse: "Eri",
            children: [
                { name: "Farzand 1" },
                { name: "Farzand 2" },
                { name: "Farzand 3" },
                { name: "Farzand 4" },
                { name: "Farzand 5" },
                { name: "Farzand 6" }
            ]
        },
        {
            name: "Otam",
            spouse: "Onam",
            children: [
                { name: "Men" },
                { name: "Ukam" },
                { name: "Singlim" },
                { name: "Yana 1" },
                { name: "Yana 2" }
            ]
        },
        {
            name: "1-Amakim",
            spouse: "Xotini",
            children: [
                { name: "Farzand 1" },
                { name: "Farzand 2" },
                { name: "Farzand 3" },
                { name: "Farzand 4" }
            ]
        },
        {
            name: "2-Amakim",
            spouse: "Xotini",
            children: [
                { name: "Farzand 1" },
                { name: "Farzand 2" },
                { name: "Farzand 3" },
                { name: "Farzand 4" },
                { name: "Farzand 5" }
            ]
        },
        {
            name: "3-Amakim",
            spouse: "Xotini",
            children: [
                { name: "Farzand 1" },
                { name: "Farzand 2" },
                { name: "Farzand 3" }
            ]
        }
    ]
};

let stack = [family];

function render() {
    const tree = document.getElementById("tree");
    tree.innerHTML = "";

    const current = stack[stack.length - 1];

    // 👴👵 JUFTLIK
    const pair = document.createElement("div");
    pair.className = "pair main";

    pair.innerHTML = `
        <div class="person mainCard">
            <img src="https://picsum.photos/200?random=1">
            <p>${current.name}</p>
        </div>
        <div class="person mainCard">
            <img src="https://picsum.photos/200?random=2">
            <p>${current.spouse || ""}</p>
        </div>
    `;

    tree.appendChild(pair);

    // 👇 FARZANDLAR
    if (current.children) {
        const row = document.createElement("div");
        row.className = "children";

        current.children.forEach(child => {
            const card = document.createElement("div");
            card.className = "person childCard";

            card.innerHTML = `
                <img src="https://picsum.photos/200?random=${Math.random()}">
                <p>${child.name}</p>
            `;

            card.onclick = () => {
                if (child.children) {
                    stack.push(child);
                    render();
                }
            };

            row.appendChild(card);
        });

        tree.appendChild(row);
    }

    // 🔙 BACK
    if (stack.length > 1) {
        const btn = document.createElement("button");
        btn.className = "backBtn";
        btn.innerText = "⬅️ Orqaga";

        btn.onclick = () => {
            stack.pop();
            render();
        };

        tree.appendChild(btn);
    }
}
function goBack() {
    location.reload();
}

render();
