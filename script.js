function loadContent(page) {
    const content = document.getElementById('content');

    if (page === 'home') {
        content.innerHTML = `
            <div class="grid">
                <div class="item"><img src="https://source.unsplash.com/random/300x300?sig=1" alt="Random"></div>
                <div class="item"><img src="https://source.unsplash.com/random/300x300?sig=2" alt="Random"></div>
                <div class="item"><img src="https://source.unsplash.com/random/300x300?sig=3" alt="Random"></div>
                <div class="item"><img src="https://source.unsplash.com/random/300x300?sig=4" alt="Random"></div>
            </div>
        `;
    } else {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => {
                content.innerHTML = `<p>Error loading content.</p>`;
                console.error(error);
            });
    }
}
