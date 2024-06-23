let items = document.querySelectorAll('.novelty-item');

items.forEach((item) => {
    let num = item.querySelector('.num');
    let plus = item.querySelector('.plus');
    let minus = item.querySelector('.minus');

    minus.addEventListener('click', () => {
        num.value = Math.max(0, Number(num.value) - 1);
    });
    plus.addEventListener('click', () => {
        num.value = Math.min(100, Number(num.value) + 1);
    });
});