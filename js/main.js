
document.addEventListener("DOMContentLoaded", function () {
    // Select all topic names and dropdown lists
    const topics = document.querySelectorAll(".topic_name");

    topics.forEach(function (topic) {
        topic.addEventListener("click", function () {
            // Get the corresponding dropdown list
            const dropdownList = topic.nextElementSibling;  // Assumes the <ul> is right after the <h2>

            // Toggle the "show" class to show/hide the dropdown
            dropdownList.classList.toggle("show");
        });
    });


    // Бургер-меню
    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");
    const container = document.getElementById("container");

    burger.addEventListener("click", function () {
        // Перемикаємо клас "open" для бургер-меню
        burger.classList.toggle("open");

        // Перемикаємо відображення меню та зсув контейнера
        if (burger.classList.contains("open")) {
            menu.style.left = "0";
            container.style.marginLeft = "250px"; // Зсув основного контенту
        } else {
            menu.style.left = "-250px";
            container.style.marginLeft = "0"; // Відновлення положення основного контенту
        }
    });
});

 const menuItems = [
        { text: 'Холодильники', href: '/comfylearn/kbt/holodos.html' },
        { text: 'Варильні поверхні', href: '/comfylearn/kbt/varka.html' },
        { text: 'Духові шафи', href: '/comfylearn/kbt/duhovka.html' },


        { text: 'Ручний Блендер', href: '/comfylearn/mbt/blendruk.html' },
        { text: 'Електрогриль BBQ', href: '/comfylearn/mbt/greel.html' },
        { text: 'Електрогриль BBQ', href: '/comfylearn/mbt/kava.html' },

        { text: 'Конслосі/планшети', href: '/comfylearn/ciphra/consoles.html' },
    ];
    const menu = document.getElementById('menu');

    // Clear it just in case (optional)
    menu.innerHTML = '';

    // Create and append links
    menuItems.forEach(item => {
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        menu.appendChild(a);
    });