function abreMenu(){
    const menu = document.querySelector('[data-lista]');
    const btnMenu = document.querySelector('[data-btnMenu]');

    btnMenu.addEventListener('click', ()=>{
        menu.classList.toggle('abre-menu');
        console.log(menu.scrollHeight + 'px');

        if(menu.classList.contains('abre-menu')){
            menu.style.height = menu.scrollHeight + 'px';

        }else {
            menu.style.height = 0;
        }
    })
}

abreMenu(); 