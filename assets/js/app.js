// Current Year
document.getElementById("year").textContent = new Date().getFullYear();

// accordion
function toggleAccordion(index) {
    const content = document.getElementById('content' + index);
    const plusIcon = content.previousElementSibling.querySelector('.accordion-icon-plus');
    const minusIcon = content.previousElementSibling.querySelector('.accordion-icon-minus');
    // Toggle content visibility
    content.classList.toggle('hidden');

    // Toggle plus and minus icons
    plusIcon.classList.toggle('hidden');
    minusIcon.classList.toggle('hidden');
}
