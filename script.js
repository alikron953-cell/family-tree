const tree = document.getElementById("tree")

let historyStack = []

// FAMILY DATA
const family = {
    name: "Bobom",
    spouse: "Buvim",
    img: "https://picsum.photos/300?1",
    spouseImg: "https://picsum.photos/300?2",

    children: [
        {
            name: "Katta Amma",
            spouse: "Eri",
            img: "https://picsum.photos/300?3",
            spouseImg: "https://picsum.photos/300?4",

            children: [
                { name: "Farzand 1", img: "https://picsum.photos/200?11" },
                { name: "Farzand 2", img: "https://picsum.photos/200?12" },
                { name: "Farzand 3", img: "https://picsum.photos/200?13" },
                { name: "Farzand 4", img: "https://picsum.photos/200?14" },
                { name: "Farzand 5", img: "https://picsum.photos/200?15" },
                { name: "Farzand 6", img: "https://picsum.photos/200?16" },
            ]
        },

        {
            name: "Otam",
            spouse: "Onam",
            img: "https://picsum.photos/300?5",
            spouseImg: "https://picsum.photos/300?6",

            children: [
                { name: "Men", img: "https://picsum.photos/200?21" },
                { name: "Ukam", img: "https://picsum.photos/200?22" },
                { name: "Singlim", img: "https://picsum.photos/200?23" },
                { name: "Farzand 4", img: "https://picsum.photos/200?24" },
                { name: "Farzand 5", img: "https://picsum.photos/200?25" },
            ]
        },

        {
            name: "1-Amakim",
            spouse: "Xotini",
            img: "https://picsum.photos/300?7",
            spouseImg: "https://picsum.photos/300?8",

            children: [
                { name: "F1", img: "https://picsum.photos/200?31" },
                { name: "F2", img: "https://picsum.photos/200?32" },
                { name: "F3", img: "https://picsum.photos/200?33" },
                { name: "F4", img: "https://picsum.photos/200?34" },
            ]
        }
    ]
}

// GALLERY FUNCTION
function createGallery() {
    let html = `<div class="gallery">`
    for (let i = 1; i <= 10; i++) {
        html += `<img src="https://picsum.photos/100?random=${Math.random()}">`
    }
    html += `</div>`
    return html
}

// RENDER ROOT (BOBO + BUVI)
function renderRoot() {
    tree.innerHTML = `
        <div class="pair">
            <div class="person" onclick="openChildren()">
                <img src="${family.img}">
                <p>${family.name}</p>
                ${createGallery()}
            </div>

            <div class="person" onclick="openChildren()">
                <img src="${family.spouseImg}">
                <p>${family.spouse}</p>
                ${createGallery()}
            </div>
        </div>
    `
}

// OPEN CHILDREN
function openChildren() {
    historyStack.push("root")

    let html = `<div class="children">`

    family.children.forEach((child, index) => {
        html += `
            <div class="person childCard" onclick="openNext(${index})">
                <img src="${child.img}">
                <p>${child.name}</p>
                ${createGallery()}
            </div>
        `
    })

    html += `</div>
        <button class="backBtn" onclick="goBack()">⬅️ Orqaga</button>
    `

    tree.innerHTML = html
}

// OPEN NEXT LEVEL
function openNext(index) {
    const person = family.children[index]

    if (!person.children) return

    historyStack.push(index)

    let html = `<div class="children">`

    person.children.forEach(child => {
        html += `
            <div class="person childCard">
                <img src="${child.img}">
                <p>${child.name}</p>
                ${createGallery()}
            </div>
        `
    })

    html += `</div>
        <button class="backBtn" onclick="goBack()">⬅️ Orqaga</button>
    `

    tree.innerHTML = html
}

// BACK FUNCTION
function goBack() {
    historyStack.pop()

    if (historyStack.length === 0) {
        renderRoot()
    } else {
        openChildren()
    }
}

// START
renderRoot()
