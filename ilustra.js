function showCategory(categoryId) {
    const categories = document.getElementsByClassName('category');
    for (let i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none';
    }
    document.getElementById(categoryId).style.display = 'block';
}

function showWord(categoryId, direction) {
    const categoryDiv = document.getElementById(categoryId);
    const words = categoryDiv.getElementsByClassName('word-container');
    let activeIndex = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].classList.contains('active')) {
            activeIndex = i;
            words[i].classList.remove('active');
            break;
        }
    }
    let newIndex = activeIndex + direction;
    if (newIndex < 0) newIndex = words.length - 1;
    if (newIndex >= words.length) newIndex = 0;
    words[newIndex].classList.add('active');
}

// Initially display the first category
document.addEventListener('DOMContentLoaded', function () {
    showCategory('days');
});
