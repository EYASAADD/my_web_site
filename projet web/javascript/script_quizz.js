
   function corrigerQuizz(event) {
        event.preventDefault(); // Empêche le rechargement de la page
    
        const reponsesCorrectes = {
            q1: "La Vie en rose", 
            q2: "Edith Piaf",
            q3: "Ne me quitte pas", 
            q4: "Johnny Hallyday", 
            q5: "Céline Dion", 
            q6: "Tourner dans le vide", 
            q7: "Les Lacs du Connemara", 
            q8: "Daniel Lavoie",
            q9: "Je t'aime... moi non plus", 
            q10: "Coeur de Pirate"
        };
    
        let score = 0;
        let reponses = "";
    
        // Récupération des données soumises via FormData
        const form = document.getElementById("quizForm");
        const formData = new FormData(form);
    
        // Parcours des questions et comparaison des réponses
        for (const question in reponsesCorrectes) {
            const reponseUtilisateur = formData.get(question); // Récupère la réponse de l'utilisateur
            if (reponseUtilisateur) {
                if (reponseUtilisateur === reponsesCorrectes[question]) {
                    score++;
                }
            }
            reponses += `Question ${question}: La bonne réponse est "${reponsesCorrectes[question]}"\n`;
        }
    
        // Affichage des résultats avec alert
        alert(`Votre score : ${score} / 10\n\n${reponses}`);
    }
    


