document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.nav-menu a');
    const mainContent = document.getElementById('main-content');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');

            fetch(page)
                .then(response => response.text())
                .then(data => {
                    mainContent.classList.add('fade-out');

                    setTimeout(() => {
                        mainContent.innerHTML = data;
                        mainContent.classList.remove('fade-out');
                        mainContent.classList.add('fade-in');
                    }, 500);

                    setTimeout(() => {
                        mainContent.classList.remove('fade-in');
                    }, 1000);
                })
                .catch(error => console.error('Error loading page:', error));
        });
    });
});
