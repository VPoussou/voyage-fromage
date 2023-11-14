const cards = document.getElementsByClassName('card');

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
        const desc = this.querySelector(".desc");
        if (desc) {
            // Toggle the display property
            desc.style.display = (desc.style.display === 'block') ? 'none' : 'block';
        }
    });
}
