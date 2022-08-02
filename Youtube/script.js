function clone() {
    const content = document.querySelector('.content');
    const card = document.querySelector('.card');

    for (let i = 0; i < 30; i++) {
        let copy = card.cloneNode(true)
        content.appendChild(copy)
    }
}

clone()