let loadMoreBtn = document.getElementById('loadMore');
let currentTotalItem = 9;
let i;
let allCards = 27;


loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.container .boxContainer .box')];
    for (i = currentTotalItem; i < allCards; i++) {
        boxes[i].style.display = 'inline-block';
    }

    loadMoreBtn.remove();


}