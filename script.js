const flexCard = document.querySelectorAll('.card');

flexCard.forEach(card => {
    image.addEventListener('mouseover', () => {
        image.style.fontSize = '40px';
    });
    image.addEventListener('mouseout', () => {
        image.style.fontSize = '30px';
    });
});
