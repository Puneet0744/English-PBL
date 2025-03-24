function navigate(page) {
    const content = document.getElementById('content');

    fetch(page)
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}
