/*****   Exercice1 XP Ninja  
 * 
 * @author : Magara Etychien N'gouan
 * 
 * ***/



let Person1 = {
    FullName : "Bamba Amara",
    Mass : 65,
    Height : 1.85,
    BMICalculator : function () {
        return (this.Mass/Math.pow(this.Height, 2)); 
    }
}

let Person2 = {
    FullName : "Bedia Hugues",
    Mass : 85,
    Height : 1.70,
    BMICalculator : function () {
        return (this.Mass/Math.pow(this.Height, 2)); 
    }
}

// 3 - create a JS function that compares the BMI of both objects

function compareBMI(Person1,Person2) {

    /**
     * @description : cette fonction compare 2 object person et determine qui des deux
     * à le plus grand BMI.
     * @param : firstPerson
     * @param : secondPerson
     * @returns
     */
    
    if(Person1.BMICalculator() > Person2.BMICalculator()) {
        console.log(`the person who have the largest BMI is : ${Person1.FullName}`);
        return;
    }
    console.log(`the person who have the largest BMI is : ${Person2.FullName}`);
}

// 4 - call the function for display the name of the person who has the largest BMI

compareBMI(Person1,Person2);


