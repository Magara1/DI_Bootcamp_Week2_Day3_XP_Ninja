
/*****   Exercice2 XP Ninja  
 * 
 * @author : Magara Etychien N'gouan
 * 
 * ***/


// variable

let gradesList = [15, 16, 8, 7, 51, 96, 0, 1];

// questions 1 and 2

function findAvg(gradesList) {

    /**
     * @description : cette fonction permet de calculer la moyenne d'une personne a l'aide
     * de ses notes. et elle appelle une autre fonction en son sein qui deternime si l'utilisateur
     * dois passer non
     * @param : gradesList -> la liste des notes de l'utilisateur
     * @param : average > reprensente la moyenne
     * @param : sum -> represente la somme des notes
     */
    
    let average = 0;
    let sum = 0;
    for(let grade of gradesList) {
        sum+=grade;
    }

    average = sum/gradesList.length; // calcule de la moyenne

    console.log(`The average is : ${average}`);
    checkIfAverageIsGood(average); // appel de la fonction de vérification


// .3.4

function checkIfAverageIsGood(average) {

    /**
     * @description : cette fonction vérifie la validité de la moyenne
     * @param : average -> represente la moyenne
     */
    
    if(average > 65) {
        console.log("Successfully you can pass!");
        return;
    }
    console.log("wooh, sorry you faild, you must repeat the course");
}

findAvg(gradesList)

}
