document.addEventListener('DOMContentLoaded', () => {

    function afficher_detail(event) {
        const detailElements = document.querySelectorAll('[id*="detail"]');
        detailElements.forEach(element => {
            if (element !== event.target.parentElement.nextElementSibling) {
                element.style.height = "0px";  
            }
        });

        document.querySelectorAll('.btn-detail').forEach(button => {
            button.textContent = "+";  
        });

        const detail = event.target.parentElement.nextElementSibling;

        console.log('Détail actuel:', detail);
        console.log('Détail affiché:', detail.style.display);

        if (detail.style.height === "0px" || detail.style.height === "" ) {
            //detail.style.display = "block";  
            setTimeout(() => {
                detail.style.height = `${detail.scrollHeight}px`; 
            }, 10); 
            event.target.textContent = "-";  
            console.log('------------------------------------');
            console.log('Détail affiché');
            console.log('------------------------------------');
        } else {
            detail.style.height = "0px";  
          //  detail.style.display = "none";  

            event.target.textContent = "+";  
            console.log('------------------------------------');
            console.log('Détail masqué');
            console.log('------------------------------------');
        }
    }

    document.querySelectorAll('.btn-detail').forEach(button => {
        button.addEventListener('click', afficher_detail);
    });

    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip => {
        const tooltipText = tooltip.querySelector('.tooltiptext');
    
        tooltip.addEventListener('mouseenter', function() {
            tooltipText.classList.add('visible'); 
        });
    
        tooltip.addEventListener('mouseleave', function() {
            tooltipText.classList.remove('visible');
        });
    
        tooltip.addEventListener('mousemove', function(event) {
            const mouseX = event.pageX;
            const mouseY = event.pageY;
    
       
            let left = mouseX + 10; 
            let top = mouseY + 10;  
    
    
            let rect = tooltipText.getBoundingClientRect(); 
    
            tooltipText.style.left = left - rect.left + 'px';
            tooltipText.style.top = top - rect.top + 'px';
            });
    });
});    