// Function to start countdown for all class tests
function startCountdown() {
    // Test Dates
    const testDates = {
      eee: new Date("November 27, 2024 13:30:00").getTime(), 
      //  math: new Date("November 25, 2024 10:30:00").getTime(),  // Change CT dates here, 24 hours
        // discrete: new Date("November 26, 2024 16:30:00").getTime(),
          cse: new Date("December 03, 2024 09:00:00").getTime(),
         //  chemistry: new Date("November 26, 2024 13:30:00").getTime()
    };

    // Update countdown every second
    setInterval(function() {
        updateCountdown('eee', testDates.eee);
      //  updateCountdown('math', testDates.math);
       // updateCountdown('discrete', testDates.discrete);
        updateCountdown('cse', testDates.cse);
      //  updateCountdown('chemistry', testDates.chemistry);
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

// Function to show the selected day and hide others
function showDay(day) {
    const days = document.getElementsByClassName('day');
    for (let i = 0; i < days.length; i++) {
        days[i].style.display = 'none';
    }
    document.getElementById(day).style.display = 'block';

    // Hide course material section when showing routine
    document.getElementById('course-material-section').style.display = 'none';
    document.getElementById('pdf-viewer-section').style.display = 'none';

    // Show routine section when navigating back to days or class test
    const routineSection = document.getElementById('routine');
    routineSection.style.display = 'block';
}

// Function to show course material links for selected subject
function showCourseMaterial() {
    const selectedSubject = document.getElementById('subject-select').value;
    const courseMaterialSection = document.getElementById('course-material-section');
    const pdfLinks = document.getElementById('pdf-links');
    const pdfViewerSection = document.getElementById('pdf-viewer-section');
    const routineSection = document.getElementById('routine');
    const classTestSection = document.getElementById('class-test');
    const headerSection = document.querySelector('header');
    
    // Hide the PDF viewer initially
    pdfViewerSection.style.display = 'none';

    // Clear previous PDF links
    pdfLinks.innerHTML = "";

    // Define the materials for each subject
    const materials = {
        chemistry: [
            { name: "Electro Chemistry", url: "https://drive.google.com/file/d/1DAKk7NYe9J_27taHdLVyfUHI4UZpVkhG/preview" },
            { name: "Phase rule & Phase diagram of Mono-component System", url: "https://drive.google.com/file/d/1m4umyQ3ukgPg87k7kTml4T04yqZHwbeO/preview" },
            { name: "Reaction Kinetics", url: "https://drive.google.com/file/d/1Mwi5mLr0hpDthPIhvv9NCOA97sritjqO/preview" },
        ],
        cse: [
            { name: "Inheritance", url: "https://drive.google.com/file/d/1mn-YluH0So18ec4v4eNzNclpV9TCT4Ai/preview" },
            { name: "Operator Overloading", url: "https://drive.google.com/file/d/1XqFJUDoAlfhDtn3KAuCv7zk5m2ncs5Ns/preview" },
            { name: "Lecture 11", url: "https://drive.google.com/file/d/1xnExKQjS5bZx-4HZi2cP7IoA3lqBWVOs/preview" },
            { name: "Polymorphism", url: "https://drive.google.com/file/d/1UB7z4li0AJ1nF2Re5W3DA5dfHeV6kPRh/preview" },
            { name: "Exception Handling", url: "https://drive.google.com/file/d/1Il9LkXW942Ygu8G3jzFgAstSnGVveBuc/preview" },
        ],
        
        discrete: [
            { name: "Sum Product Pigeon Principle (6) ", url: "https://drive.google.com/file/d/1g2yvpnt8fHdFzbT1CMHP3UZrEfrgSi5I/preview" },
            { name: "Permutation Combination (7)", url: "https://drive.google.com/file/d/1CxrychbeRpxgzjBsGS3jNaz7Rz4UUs0d/preview" },
             { name: "Graph (8)", url: "https://drive.google.com/file/d/1CK_rwhi5swxOZ7S80_e2zy-gpEMSH_XO/preview" },
             { name: "Relation (9)", url: "https://drive.google.com/file/d/1wZb_-ji61K-G9BKAfPFO9-8mu5xG-6bD/preview" },
             { name: "Graphs (10)", url: "https://drive.google.com/file/d/1cLMLVorhJRvIU7QZCJLcwZmf5CnuvjXm/preview" },
             { name: "Path & Connectivity (11)", url: "https://drive.google.com/file/d/1MYeJdsDA04TOIE6VEXuny19fdxg3JZ1a/preview" },
             { name: "Euler Path & Circuit Hamilton Path and Circuit Tree (12)", url: "https://drive.google.com/file/d/1eZLnLrR6xS0SalztC2GvW3bh-hMjFkgs/preview" },
        ],
        /*math: [
            { name: "Linear Algebra", url: "https://drive.google.com/file/d/YOUR_OTHER_FILE_ID_6/preview" },
            { name: "Calculus", url: "https://drive.google.com/file/d/YOUR_OTHER_FILE_ID_7/preview" },
        ],*/
        eee: [
            { name: "Bipolar Junction Transistor", url: "https://drive.google.com/file/d/1W15iygwbnCjmW1_68zlrx7eEODSBTOyG/preview" },
            { name: "Field Effect Transistor", url: "https://drive.google.com/file/d/1WEkUwPGDsT9yrPEG0QFFhs0hwj3d62N8/preview" },
        ],
    };

    // Check if the selected subject has materials
    if (materials[selectedSubject]) {
        courseMaterialSection.style.display = 'block';

        // Loop through the materials and create links
        materials[selectedSubject].forEach(material => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = "#"; // Prevents default link navigation
            link.textContent = material.name;
            link.onclick = function() {
                showPDF(material.url);  // Show PDF on click
                return false;  // Prevents page refresh
            };
            listItem.appendChild(link);
            pdfLinks.appendChild(listItem);
        });
    } else {
        courseMaterialSection.style.display = 'none';
    }
}

// Function to show PDF and hide other sections
function showPDF(pdfUrl) {
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfViewerSection = document.getElementById('pdf-viewer-section');
    const routineSection = document.getElementById('routine');
    const classTestSection = document.getElementById('class-test');
    const headerSection = document.querySelector('header');

    // Set the PDF source
    pdfViewer.src = pdfUrl;
    
    // Show the PDF viewer
    pdfViewerSection.style.display = 'block';

    // Hide other sections
    routineSection.style.display = 'none';
    classTestSection.style.display = 'none';
}

// Combined window.onload to avoid conflicts
window.onload = function() {
    showDay('sunday');
    startCountdown();
};
