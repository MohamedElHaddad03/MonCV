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

});




