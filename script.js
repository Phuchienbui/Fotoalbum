const images =
    [
        { src: "img/Property 1=alaska-810433_1280.jpg.png", alt: "Schneebedeckte Landschaft in Alaska", title: "Alaska" },
        { src: "img/Property 1=anime-8788959_1280.jpg.png", alt: "animiertes Stadteil Tokyos", title: "Animiertes Tokyo" },
        { src: "img/Property 1=atmosphere-8752835_1280.png.png", alt: "dunkle Wolken am Himmel", title: "Gewitterwolken" },
        { src: "img/Property 1=blue-tit-8521052_1280.jpg.png", alt: "Blaumeise auf einem Ast", title: "Blaumeise" },
        { src: "img/Property 1=hurricane-92968_1280.jpg.png", alt: "Hurrikan in der Atmosphere", title: "Hurrikan" },
        { src: "img/Property 1=lake-2896379_1280.jpg.png", alt: "See in der einer Eislandschaft", title: "See" },
        { src: "img/Property 1=moorente-8783210_1280.jpg.png", alt: "Eine Moorente auf dem Wasser", title: "Moorente" },
        { src: "img/Property 1=sea-2563389_1280.jpg.png", alt: "Silhouette einer Person auf einem Felsen im Meer", title: "Der Mann auf dem Fels" },
        { src: "img/Property 1=snow-bunting-6781122_1280.jpg.png", alt: "Eine Schneeammer im Wintergefieder sitzt auf einem dunklen Küstenfelsen", title: "Schneeammer" },
        { src: "img/Property 1=snow-leopard-cubs-8039138_1280.jpg.png", alt: "junger Schneeleopard im Freien", title: "Baby Schneeleopard" },
        { src: "img/Property 1=travel-8785493_1280.jpg.png", alt: "Panorama einer schneebedeckten Gebirgskette wärend die Sonne untergeht", title: "Sonnenuntergang in den Bergen" },
        { src: "img/Property 1=winter-1675197_1280.jpg.png", alt: "Vereister Baum mitten in der Schneelandschaft", title: "Vereister Baum" }
    ]


const gallery = document.getElementById("gallery");
const dialog = document.querySelector("dialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogCloseBtn = document.getElementById("dialogCloseBtn");
const dialogLeftBtn = document.getElementById('dialogLeftBtn');
const dialogRightBtn = document.getElementById('dialogRightBtn');
const pCounter = document.getElementById('counter');
const dialogItems = document.getElementById('dialogimgs');

let currentCounter = 0;

function renderGallery() {
    let galleryHtML = "";
    for (let i = 0; i < images.length; i++) {
        galleryHtML +=
            `
            <li class="gallery_item">
                    <button onclick="openDialog(${i})" class="gallery__button" data-index="${i}">
                        <img class= "gallery__pic" src="${images[i].src}" alt="${images[i].alt}">
                    </button>
                </li>
        `
    }
    gallery.innerHTML = galleryHtML;
}

function updateDialog(index) {
    currentCounter = index;
    dialogItems.src = images[currentCounter].src;
    dialogItems.alt = images[currentCounter].alt;
    dialogTitle.textContent = images[currentCounter].title;
    pCounter.textContent = `${currentCounter+1}/${(images.length)}`
}

function swipeLeft(){
    currentCounter--;
    if(currentCounter <0){
        currentCounter = images.length-1;
    }
    updateDialog(currentCounter);
}

function swipeRight(){
    currentCounter++;
    if(currentCounter >= images.length){
        currentCounter = 0;
    }
    updateDialog(currentCounter);
}

function openDialog(index) {
    updateDialog(index);
    dialog.showModal();
}

function dialogClose() {
    dialog.close();
}

