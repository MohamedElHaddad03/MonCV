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

const langprog = [
    { skill: 'C', rating: 4 },
    { skill: 'C++', rating: 4 },
    { skill: 'SQL/PLSQL', rating: 5 },
    { skill: 'C#', rating: 4 },
    { skill: 'PHP', rating: 3 }
];

const devMob = [
    { skill: 'HTML', rating: 5 },
    { skill: 'CSS', rating: 5 },
    { skill: 'JavaScript', rating: 5 },
    { skill: 'Frameworks (Laravel)', rating: 4 },
    { skill: 'Frameworks (React.js)', rating: 5 },
    { skill: 'Frameworks (Java Spring Boot)', rating: 4 },
    { skill: 'Frameworks (React Native)', rating: 4 },
    { skill: 'Frameworks (Django)', rating: 3 }
];

const sysAdmin = [
    { skill: 'Windows Server 2019', rating: 4 },
    { skill: 'Linux', rating: 5 }
];

const containerization = [
    { skill: 'Docker', rating: 4 },
    { skill: 'Kubernetes', rating: 5 }
];

const dbAdmin = [
    { skill: 'Oracle', rating: 4 },
    { skill: 'PgSql', rating: 4 },
    { skill: 'MySql', rating: 4 }
];

const noSqlDB = [
    { skill: 'MongoDb', rating: 4 },
    { skill: 'Neo4j', rating: 3 }
];

const projMgmt = [
    { skill: 'Jira', rating: 4 },
    { skill: 'Github', rating: 5 },
    { skill: 'GitLab', rating: 4 }
];

const ciCdTools = [
    { skill: 'Github Actions', rating: 4 },
    { skill: 'Jenkins', rating: 4 },
    { skill: 'Gitlab CI/CD', rating: 4 },
    { skill: 'Ansible', rating: 3 }
];

function generateStarRating(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
        stars += '<span style=" color: gold; ">★</span>';  
    }
    for (let i = rating; i < 5; i++) {
        stars += '<span style="color: gold;">☆</span>';  
    }
    return stars;
}

function displayRatings(categoryName, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; 

    categoryName.forEach(skillObj => {
        const skillElement = document.createElement('div');
        skillElement.style.display ="flex-box"

        skillElement.innerHTML = `${skillObj.skill}: ${generateStarRating(skillObj.rating)}`;
        container.appendChild(skillElement);
    });
}

displayRatings(langprog, 'langprogContainer');
displayRatings(devMob, 'devMobContainer');
displayRatings(sysAdmin, 'sysAdminContainer');
displayRatings(containerization, 'containerizationContainer');
displayRatings(dbAdmin, 'dbAdminContainer');
displayRatings(noSqlDB, 'noSqlDBContainer');
displayRatings(projMgmt, 'projMgmtContainer');
displayRatings(ciCdTools, 'ciCdToolsContainer');



const languages = [
    { skill: "Arabe", rating: 5 },
    { skill: "Français", rating: 4 },
    { skill: "Anglais", rating: 3 },

];


function drawHistogram() {
    const canvas = document.getElementById("myChart");
    const ctx = canvas.getContext("2d");
    
    const maxRating = 5;  
    const barHeight = 10;  
    const barSpacing = 30;  
    const canvasWidth = 300;
    const canvasHeight = languages.length * (barHeight + barSpacing) ;  

     canvas.height = canvasHeight;  

    languages.forEach((skillObj, index) => {
        ctx.fillStyle = "#ddd";  
        ctx.fillRect(0, index * (barHeight + barSpacing), canvasWidth, barHeight);
        
        const barWidth = (skillObj.rating / maxRating) * canvasWidth;  
        ctx.fillStyle = "green";  
        ctx.fillRect(0, index * (barHeight + barSpacing), barWidth, barHeight);  
        
        ctx.fillStyle = "black";

        const textWidth = ctx.measureText(skillObj.skill).width; 
        const xText = (canvasWidth - textWidth) / 2; 

        const yText = index * (barHeight + barSpacing) - 5; 

        ctx.fillText(skillObj.skill, xText, yText);
    });
}


drawHistogram();


});    