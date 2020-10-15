function menuScript() {
    const menuBtn = document.querySelector(".menu-btn");

    menuBtn.addEventListener('click', (event) => {
        const hiddenMenu = document.querySelector('.menu-container');
        const container = document.querySelector('.header-container');
        const root = document.querySelector('html');
        event.stopImmediatePropagation()

        if(hiddenMenu.style.display = "none") {
            hiddenMenu.style.display = "block";
            container.style.filter = "blur(3px)";
            setTimeout(() => {
                root.addEventListener('click', () => {
                    function execute() {
                        hiddenMenu.style.display = "none";
                        container.style.filter = "none";
                    }
                    execute()
                    menuBtn.removeEventListener('click', execute());
                });
            }, 1000);
        }
    });

}

export default menuScript