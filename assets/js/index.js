const portfolioData = [
    { title: "Proyek 1", description: "Deskripsi proyek 1."},
    { title: "Proyek 2", description: "Deskripsi proyek 2."},
    { title: "Proyek 3", description: "Deskripsi proyek 3."}
];

const portfolioContainer = document.getElementById("portfolioContainer");

portfolioData.forEach(project => {
    const projectItem = document.createElement("div");
    projectItem.className = "item";
    projectItem.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    `;
    portfolioContainer.appendChild(projectItem);
});

    const form = document.querySelector('form');
    const items = document.querySelectorAll('.item');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const searchTerm = form.search.value.toLowerCase ();

        items.forEach(item => {
            const projectTitle = item.querySelector('h2').textContent.toLowerCase();
            const projectDescription = item.querySelector('p').textContent.toLowerCase();

            if (projectTitle.includes(searchTerm) || projectDescription.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }    
        });
    });