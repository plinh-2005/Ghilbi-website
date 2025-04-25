// Chọn tất cả các item trong FAQ
const faqItems = document.querySelectorAll('.faq-item');


faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    const icon = item.querySelector('.faq-icon');


    button.addEventListener('click', () => {
        item.classList.toggle('open');
        // Đổi dấu + và -
        if (item.classList.contains('open')) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});
