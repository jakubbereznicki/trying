const bar = document.querySelector('.bar');
const btn = document.querySelector('.fas');

function clickBar() {
    if (bar.style.display === 'none') {
        bar.style.display = 'block';
    } else {
        bar.style.display = 'none';
    }
}

btn.addEventListener('click', clickBar);