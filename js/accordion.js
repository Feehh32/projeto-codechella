function abrirAccordion(){
    const accordionHeader = document.querySelectorAll('[data-header]');

    accordionHeader.forEach(element =>{
        element.addEventListener('click', function(){
            element.classList.toggle('active');
            const accordionContent = element.nextElementSibling;
    
            const icon = this.childNodes[3];
            icon.classList.toggle('changing');

            if(element.classList.contains('active') && icon.classList.contains('changing')){
                accordionContent.style.height = accordionContent.scrollHeight + 'px';
                icon.innerText = "-";
           
            }else {
                accordionContent.style.height = 0;
                icon.innerText = "+";
            };
        });
    });
}

abrirAccordion();