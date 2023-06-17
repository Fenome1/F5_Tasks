const selectsList = document.querySelectorAll('.custom_select');

selectsList.forEach(select => {

    const selectedOption = select.querySelector('.selected_option');
    const optionsList = select.querySelector('.options');

    selectedOption.addEventListener('click', () => {
        select.classList.toggle('open');

        optionsList.style.display = select.classList.contains('open') ? 'block' : 'none';
    });

    optionsList.addEventListener('click', event => {
        if (event.target.classList.contains('selected_item')) {

            selectedOption.textContent = event.target.textContent;

            select.classList.remove('open');
            optionsList.style.display = 'none';
        }
    });

    document.addEventListener('click', event => {
        if (!select.contains(event.target)) {
            select.classList.remove('open');
            optionsList.style.display = 'none';
        }
    });

});

document.addEventListener('DOMContentLoaded', () => {

    const clearButton = document.getElementById('clearButton');
    const colorSelect = document.getElementById('colorSelect');
    const categorySelect = document.getElementById('categorySelect');
    const searchInput = document.getElementById('searchInput');

    const checkBoxes = document.querySelectorAll('.custom_checkbox');
    const selectionItems = document.querySelectorAll('.selected_item');

    function checkButtonVisibility() {
        clearButton.style.display = searchInput.value !== "" ||
        Array.from(checkBoxes).some(checkBox => checkBox.checked) ? 'block' : 'none';
    }

    selectionItems.forEach(selectionItem => {
        selectionItem.addEventListener('click', () => {
            clearButton.style.display = 'block'
        });
    })

    searchInput.addEventListener('input', checkButtonVisibility);

    checkBoxes.forEach(checkBox => {
        checkBox.addEventListener('click', checkButtonVisibility);
    });

    clearButton.addEventListener('click', () => {
        colorSelect.textContent = "Цвет";
        categorySelect.textContent = "Рубрика";
        searchInput.value = "";
        checkBoxes.forEach(checkBox => {
            checkBox.checked = false;
        });
        clearButton.style.display = 'none';
    });

});






