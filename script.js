const images =
    [
        { src: "Fotoalbum\imgPixabay/ahmetyuksek-swan-close-up-9767494_1920.jpg", alt: "Schwan mit Jungtier auf dem Wasser", title: "Schwanenfamilie auf dem See" },
        { src: "Fotoalbum\imgPixabay\babelphotography-village-279013.jpg", alt: "Küstenort mit bunten Häusern auf einer Klippe am Meer", title: "Küstenstadt bei Abendlicht" },
        { src: "Fotoalbum\imgPixabay\couleur-dandelion-10245975_1920.jpg", alt: "Löwenzahn mit Samen im Gegenlicht", title: "Löwenzahn im Wind" },
        { src: "Fotoalbum\imgPixabay\daniil_kondrashin-autumn-9912502_1920.jpg", alt: "Frau mit roten Haaren", title: "Porträt einer Frau" },
        { src: "Fotoalbum\imgPixabay\fotos-art-fine-art-9978188_1920.jpg", alt: "Nahaufnahme von Kirschblüten", title: "Kirschblüte im Frühling" },
        { src: "Fotoalbum\imgPixabay\gom_su_cuong_duyen-ceramic-vase-10211596_1920.jpg", alt: "Porträt einer Frau neben einer Blumenvase", title: "Porträt mit Blumenarrangement" },
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

