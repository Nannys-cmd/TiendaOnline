// Obtén todos los elementos de categoría
const categories = document.querySelectorAll('.category');

// Itera sobre cada categoría y agrega un evento de clic para mostrar/ocultar las subcategorías
categories.forEach(category => {
    category.addEventListener('click', () => {
        category.classList.toggle('active');
    });
});
