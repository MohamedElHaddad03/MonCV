document.addEventListener('DOMContentLoaded', () => {    function afficher_detail(event) {
        let detail = event.target.parentElement.nextElementSibling;

        if (detail.style.display === "none" || detail.style.display === "") {
            detail.style.display =   "block" ;
            this.textContent ="-";
        }else {
            detail.style.display = "none";
            this.textContent ="+";
        }
    }

    document.querySelectorAll('.btn-detail').forEach(button => {
        button.addEventListener('click', afficher_detail);
    });
});
