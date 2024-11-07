document.addEventListener('DOMContentLoaded', () => {

    function afficher_detail(event) {
        const detailElements = document.querySelectorAll('[id*="detail"]');
        detailElements.forEach(element => {
            element.style.display = "none";  
        });

        document.querySelectorAll('.btn-detail').forEach(button => {
            button.textContent = "+";
        });

        const detail = event.target.parentElement.nextElementSibling;

        if (detail.style.display == "none" ) {
            detail.style.display = "block";
            event.target.textContent = "-";
            console.log('------------------------------------');
            console.log("-");
            console.log('------------------------------------');
        } else {
            detail.style.display = "none";
            event.target.textContent = "+";
            console.log('------------------------------------');
            console.log("+");
            console.log('------------------------------------');
        }
    }

    document.querySelectorAll('.btn-detail').forEach(button => {
        button.addEventListener('click', afficher_detail);
    });

});