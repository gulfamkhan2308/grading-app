function gradecheck(event) {
    event.preventDefault();

    let marksInput = document.querySelector("#marksinput").value;
    marksInput = Number(marksInput);

    console.log(marksInput);

    let message = "";

    if (marksInput >= 0) {
        if (marksInput <= 100) {
            if (marksInput >= 80) {
                message = "A+";
            } else if (marksInput >= 70) {
                message = "A";
            } else if (marksInput >= 60) {
                message = "B";
            } else if (marksInput >= 50) {
                message = "C";
            } else {
                message = "F";
            }
        } else {
            message = "Invalid input. Please enter a value less than or equal to 100.";
        }
    } else {
        message = "Invalid input. Please enter a value greater than or equal to 0.";
    }

    document.querySelector("#resultWindow").innerHTML = message;
}

// Attach the function to a form submit event
document.querySelector("#gradeForm").addEventListener("submit", gradecheck);
