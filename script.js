function scrollSlider(direction) {
            const slider = document.querySelector('.image-list');
            const scrollAmount = 400;
            slider.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        }