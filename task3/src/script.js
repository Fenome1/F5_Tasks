function bindEventHandlers() {
    const headers = document.querySelectorAll('.accordion_item_header');
    const contents = document.querySelectorAll('.accordion_item_content');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');

            closeAllAccordions();

            if (!isActive) {
                openAccordion(content, this);
            }
        });
    });

    function closeAllAccordions() {
        contents.forEach(content => {
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                setTimeout(() => {
                    content.style.display = 'none';
                }, 100);
            }
        });

        headers.forEach(header => {
            header.classList.remove('active');
            const arrowIcon = header.querySelector('.accordion_arrow_icon_item');
            arrowIcon.style.transform = 'rotate(0deg)';
        });
    }

    function openAccordion(content, header) {
        content.style.display = 'block';
        setTimeout(() => {
            content.style.maxHeight = content.scrollHeight + 'px';
        }, 10);
        header.classList.add('active');
        const arrowIcon = header.querySelector('.accordion_arrow_icon_item');
        arrowIcon.style.transform = 'rotate(180deg)';
    }

    let ratingItems = document.getElementsByClassName('accordion_rate');

    for (let i = 0; i < ratingItems.length; i++) {
        let stars = ratingItems[i].querySelectorAll('.star');

        stars.forEach(function (star) {
            star.addEventListener('mouseenter', function () {
                for (let j = 0; j <= star.getAttribute('name') - 1; j++) {
                    stars[j].setAttribute('src', './src/img/starFill.svg');
                }
            });

            star.addEventListener('mouseleave', function () {
                stars.forEach(function (star) {
                    star.setAttribute('src', './src/img/starEmpty.svg');
                });
            });
        });
    }
}


