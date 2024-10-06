function showDay(day) {
    // Hide all day sections
    const days = document.getElementsByClassName('day');
    for (let i = 0; i < days.length; i++) {
        days[i].style.display = 'none';
    }

    // Show the selected day section
    document.getElementById(day).style.display = 'block';
}

// Default: Show Sunday's routine on page load
window.onload = function() {
    showDay('sunday');
    updateCountdowns();
};



// Function to start countdown for all class tests
function startCountdown() {
    // Test Dates
    const testDates = {
        math: new Date("November 25, 2024 01:30:00").getTime(),  //akhan theka CT er date change korte hobe
        discrete: new Date("November 1, 2024 00:00:00").getTime(), 
        chemistry: new Date("November 5, 2024 00:00:00").getTime()
    };

    // Update countdown every second
    setInterval(function() {
        updateCountdown('math', testDates.math);
        updateCountdown('discrete', testDates.discrete);
        updateCountdown('chemistry', testDates.chemistry);
    }, 1000);
}

// Function to update the countdown for a specific test
function updateCountdown(subject, testDate) {
    const now = new Date().getTime();  // Get current time
    const timeRemaining = testDate - now;  // Calculate the difference in milliseconds

    if (timeRemaining >= 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById(`${subject}-remaining`).textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        // If the date has passed
        document.getElementById(`${subject}-remaining`).textContent = "CT Completed!";
    }
}

// Start the countdown when the page loads
window.onload = startCountdown;






const files = {
    cse: [],
discrete: [],
    math: [],
   eee: [],
  chemistry: []
};

// Show the selected day and reset file section
function showDay(day) {
    const days = document.getElementsByClassName('day');
    for (let i = 0; i < days.length; i++) {
        days[i].style.display = 'none';
    }
    document.getElementById(day).style.display = 'block';
    document.getElementById('file-section').style.display = 'none'; // Hide file section
}

// Show files for selected subject
function showFiles() {
    const subject = document.getElementById('subject-select').value;
    const fileList = document.getElementById('file-list');
    fileList.innerHTML = ''; // Clear previous files

    if (subject) {
        document.getElementById('file-section').style.display = 'block';
        const uploadedFiles = files[subject];
        if (uploadedFiles.length > 0) {
            uploadedFiles.forEach(file => {
                const div = document.createElement('div');
                div.textContent = file;
                fileList.appendChild(div);
            });
        } else {
            fileList.textContent = 'No files uploaded for this subject.';
        }
    } else {
        document.getElementById('file-section').style.display = 'none';
    }
}

// Simulate file upload (visible only to admins)
function uploadFile() {
    const subject = document.getElementById('subject-select').value;
    const fileName = prompt('Enter file name:'); // Simulate file name input

    if (fileName && subject) {
        files[subject].push(fileName);
        showFiles(); // Update file list
    } else {
        alert('Please select a subject and enter a file name.');
    }
}

