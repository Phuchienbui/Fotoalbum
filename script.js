const images =
    [
        { src: "./imgPixabay/ahmetyuksek-swan-close-up-9767494_1920.jpg", alt: "Schwan mit Jungtier auf dem Wasser", title: "Schwanenfamilie auf dem See" },
        { src: "./imgPixabay/babelphotography-village-279013.jpg", alt: "Küstenort mit bunten Häusern auf einer Klippe am Meer", title: "Küstenstadt bei Abendlicht" },
        { src: "./imgPixabay/couleur-dandelion-10245975_1920.jpg", alt: "Löwenzahn mit Samen im Gegenlicht", title: "Löwenzahn im Wind" },
        { src: "./imgPixabay/daniil_kondrashin-autumn-9912502_1920.jpg", alt: "Frau mit roten Haaren", title: "Porträt einer Frau" },
        { src: "./imgPixabay/fotos-art-fine-art-9978188_1920.jpg", alt: "Nahaufnahme von Kirschblüten", title: "Kirschblüte im Frühling" },
        { src: "./imgPixabay/gom_su_cuong_duyen-ceramic-vase-10211596_1920.jpg", alt: "Porträt einer Frau neben einer Blumenvase", title: "Porträt mit Blumenarrangement" },
        { src: "./imgPixabay/gruendercoach-robin-10205230_1920.jpg", alt: "Ein Rotkehlchen sitzt auf einem Ast mit Tannen-Nadeln", title: "Das ist ein Rotkehlchen" },
        { src: "./imgPixabay/guvo59-berry-tarts-9735441_1920.jpg", alt: "Törtchen mit Beeren und Puderzucker", title: "Beeren-Törtchen mit Puderzuckert" },
        { src: "./imgPixabay/kyraxys-depth-10210903_1920.png", alt: "Silhouette eines Tauchers unter Wasser im Lichtstrahl", title: "Tauchgang ins Licht" },
        { src: "./imgPixabay/storme22k-fennec-fox-9846388_1920.jpg", alt: "Schlafender Fuchs auf einem Stein", title: "Ein Moment der Ruhe" },
        { src: "./imgPixabay/thibaultlamtran-vinyl-9617456_1920.jpg", alt: "Schallplatte auf einem Plattenspieler", title: "Vinyl auf dem Plattenspieler" },
        { src: "./imgPixabay/veronika_andrews-anna-10217636_1920.jpg", alt: "Kolibri im Flug mit ausgebreiteten Flügeln", title: "Leichter Flug" }
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

