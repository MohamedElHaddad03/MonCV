
document.addEventListener('DOMContentLoaded', () => {

    function afficher_detail(event) {
        const detailElements = document.querySelectorAll('[id*="detail"]');
        detailElements.forEach(element => {
            if (element !== event.target.parentElement.nextElementSibling) {
                element.style.display = "none";  
            }
        });

        document.querySelectorAll('.btn-detail').forEach(button => {
            button.textContent = "+";
        });

        const detail = event.target.parentElement.nextElementSibling;

        console.log('Détail actuel:', detail);
        console.log('Détail affiché:', detail.style.display);

        if (detail.style.display === "none" || detail.style.display === "") {
            detail.style.display = "block";  
            event.target.textContent = "-";  
            console.log('------------------------------------');
            console.log('Détail affiché');
            console.log('------------------------------------');
        } else {
            detail.style.display = "none";  
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