
function navigate(page) {
    const content = document.getElementById('content');
    content.innerHTML = "<p style='text-align:center;'>Loading...</p>";

    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            content.innerHTML = data;
            history.pushState({ page }, "", page);
            addImagePreview(); 
        })
        .catch(error => {
            console.error('Error loading content:', error);
            content.innerHTML = "<p style='color: red; text-align: center;'>Failed to load content. Please try again.</p>";
        });
}


window.addEventListener("popstate", (event) => {
    if (event.state && event.state.page) {
        navigate(event.state.page);
    }
});


function addImagePreview() {
    document.querySelectorAll(".item img").forEach(img => {
        img.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");

            
            const imgElement = document.createElement("img");
            imgElement.src = this.src;
            imgElement.alt = "Preview";

            
            const closeButton = document.createElement("span");
            closeButton.innerHTML = "&times;";
            closeButton.classList.add("close-btn");
            closeButton.addEventListener("click", () => {
                lightbox.remove();
            });

        
            lightbox.appendChild(imgElement);
            lightbox.appendChild(closeButton);
            document.body.appendChild(lightbox);
        });
    });
}

// Ensure lightbox works on initial load
document.addEventListener("DOMContentLoaded", addImagePreview);
