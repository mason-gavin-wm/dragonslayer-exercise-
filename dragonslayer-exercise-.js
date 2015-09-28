/**
 * Created by session1 on 9/28/15.
 */
var score = true;

var yourGrade = Math.floor(Math.random() * 50);

var gradeThatTest = Math.floor(Math.random() * 100);

var totalScore =  gradeThatTest;

while (score) {

    if (yourGrade) {

        console.log("You finished the test and got a " + totalScore + " %!");

        if (totalScore >= 80) {

            console.log("You did it! You passed your test!");

            score = false;
        }

        else {

            yourGrade = Math.floor(Math.random() * 68);

        }
    }

    else {
        console.log("You failed... Try again next time. Or wait there isn't a next time...");

        score = false;

    }
}