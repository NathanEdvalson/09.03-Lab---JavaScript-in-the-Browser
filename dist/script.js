function myLineUp(event) {
    // Get the form
    const form = document.getElementById("lineUpForm");
    const formData = new FormData(form);

    // Print all received data to the console
    for (const [key, value] of formData.entries()) {
        console.log(key + ": " + value);
    }

    // Concatenate all the information into one string
    let selections = "";
    for (const [key, value] of formData.entries()) {
        selections += key + ": " + value + " | ";
    }

    // Display the selections on the webpage
    document.getElementById("result").textContent = selections;
}

// Add an event listener to the submit button
document.getElementById("lineUpForm").addEventListener("submit", myLineUp);