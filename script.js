
function grade() {
    var score = document.getElementById("scores").value;
    var grade = document.getElementById("grade");

    if (score == "") {
        grade.innerHTML = "Enter your score before we can grade you";
        grade.style.background = "red";
        grade.style.color = "white";
        grade.style.padding = "10px"
    }

    else if (score >= 0 && score <= 39) {
        grade.innerHTML = "You failed (F9) but never give up, you can do better next time";
        grade.style.background = "red";
        grade.style.color = "white";
        grade.style.padding = "10px"
    }

    else if (score >= 40 && score <= 44) {
        grade.innerHTML = "You Passed (E8) but its not good enough, there is room for improvement";
        grade.style.background = "brown";
        grade.style.color = "white";
        grade.style.padding = "10px"
    }

    else if (score >= 45 && score <= 49) {
        grade.innerHTML = "You Advance Pass (D7) but never give up, you can do better next time";
        grade.style.background = "#D92D20";
        grade.style.color = "white";
        grade.style.padding = "10px"
    }

    else if (score >= 50 && score <= 54) {
        grade.innerHTML = "You get below Credit (C6) but more learning and dedication will get you there";
        grade.style.background = "#D92D20cc";
        grade.style.color = "white";
        grade.style.padding = "10px"
    }

    else if (score >= 55 && score <= 59) {
        grade.innerHTML = "You are an Average Student (C5), you better than some but not the best result, try more";
        grade.style.background = "#46635F";
        grade.style.color = "white";
        grade.style.padding = "10px"
    }

    else if (score >= 60 && score <= 64) {
        grade.innerHTML = "You grade is Credit (C4), you better than some but not the best result, try more";
        grade.style.background = "#46635F";
        grade.style.color = "white";
        grade.style.padding = "10px"
    }

    else if (score >= 65 && score <= 69) {
        grade.innerHTML = "You are are a Good student (B), but not the best, try harder and you will be the best";
        grade.style.background = "#54A75A";
        grade.style.color = "white";
        grade.style.padding = "10px"
    }

    else if (score >= 70 && score <= 100) {
        grade.innerHTML = "You are one of the BEST Student (A), dont relent and the sky will be your starting point";
        grade.style.background = "green";
        grade.style.color = "white";
        grade.style.padding = "10px"
    }

    else {
        grade.innerHTML = "Invalid score; Note: You cant score above 100 or less than zero (0), check your score again!!!";
        grade.style.background = "red";
        grade.style.color = "white";
        grade.style.padding = "10px"
    }
}