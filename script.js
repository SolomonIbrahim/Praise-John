const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', ()=>{
    menuToggle.classList.toggle('active');
    const sideMenu = document.querySelector('.side-menu');
    
    const menuItems = sideMenu.querySelectorAll('a');
    menuItems.forEach(link => {
    link.addEventListener("click", () => {
        sideMenu.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});
    sideMenu.classList.toggle('active');
})

const imageModal = document.getElementById("image-modal");
const photoGrid = document.querySelector(".photos-grid");
const modalImage = document.getElementById("modalImage");
const images = ["images/1.jpeg", "images/2.jpeg", "images/3.jpeg", "images/4.jpeg"];

const imgCounter = document.getElementById("imageCounter");

let currentIndex = 0;

const thumbnails = photoGrid.querySelectorAll('img');
thumbnails.forEach( (thumbnail, index) => {
    thumbnail.addEventListener('click', ()=>{
        currentIndex = index;
        modalImage.src = images[index];
        imageModal.classList.add('active');
        
        imgCounter.textContent = `${currentIndex+1} / ${images.length}`;
    });
});

const closeBtn = document.getElementById("close-img-btn");
closeBtn.addEventListener('click', ()=>{
    imageModal.classList.remove('active');
})

function updateCounter(){
    imgCounter.textContent = `${currentIndex+1} / ${images.length}`;
}

const nextBtn = document.getElementById("next-img-btn");
nextBtn.addEventListener('click', ()=>{
    if(currentIndex < images.length-1){
         currentIndex++;
         modalImage.src = images[currentIndex];
         updateCounter();
    }
})

const prevBtn = document.getElementById("prev-img-btn");
prevBtn.addEventListener('click', ()=>{
    if(currentIndex > 0){
         currentIndex--;
         modalImage.src = images[currentIndex];
         updateCounter();
    }
})

const videos = document.getElementsByTagName("video");


const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }else{
            entry.target.classList.remove('active');
        }
    });
})

const reveal = document.querySelectorAll('.reveal');
reveal.forEach(item=>{
    observer.observe(item)
});