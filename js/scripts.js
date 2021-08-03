const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.cardContent');
const modal = document.querySelector(".modal")

for ( let cardContent of cards) {
    cardContent.addEventListener("click", function () {
        const blogId = cardContent.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src=`https://blog.rocketseat.com.br/${blogId}`

    })
}

closeModal = document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src=""

    modal.classList.remove('maximize');
})


const maximizeModal = document.querySelector(".modal-overlay")
document.querySelector('.maximize-modal').addEventListener('click',
    function() {
        if (modal.classList.contains('maximize')) {
            modal.classList.remove('maximize')
        } else {
            modal.classList.add('maximize')
        }

})
