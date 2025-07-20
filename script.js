
function startCountdown() {
    // Test Dates
    const testDates = {
    //  eee: new Date("March 24, 2025 10:30:00").getTime(), 
      //  math: new Date("July 01, 2025 10:00:00").getTime(),  // Change CT dates here, 24 hours
    //     discrete: new Date("June 26, 2025 10:00:00").getTime(),
      //    cse: new Date("June 23, 2025 10:00:00").getTime(),
       //    oopcse: new Date("July 03, 2025 10:00:00").getTime(), 
       //    chemistry: new Date("June 29, 2025 10:00:00").getTime(),
    };

    // Update countdown every second
    setInterval(function() {
      //  updateCountdown('eee', testDates.eee);
      //  updateCountdown('math', testDates.math);
      //  updateCountdown('discrete', testDates.discrete);
     //   updateCountdown('cse', testDates.cse);
     //   updateCountdown('oopcse', testDates.oopcse);
     //   updateCountdown('chemistry', testDates.chemistry);
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
        document.getElementById(`${subject}-remaining`).textContent = "Exam Completed!";
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

    const materials = {
        eee: {
            color: "#4CAF50", 
            items: [
            //    { name: "৬ দফা আন্দোলন", url: "https://drive.google.com/file/d/1jNf5uUldwL5bmoWs-e8_4BwEY3EWddTt/preview" },
             //   { name: "1969 গণ-অভ্যুত্থান", url: "https://drive.google.com/file/d/1bj3UyVX9qj6PYsSaieO0g4-xkM7Rf3AN/preview" },
            ],
        },
        cse: {
            color: "#2196F3", 
            items: [
              //  { name: "Polymorphism", url: "https://drive.google.com/file/d/1aMkWhPrcNPXGuICtabLKvigi30pK8uOD/preview" },
              //  { name: "Abstraction", url: "https://drive.google.com/file/d/1wT-5ZCFyElhjmNPsvrFNT5D8uN6tYGRR/preview" },
            ],
        },
        discrete: {
           color: "#483D8B", 
           items: [
             //   { name: "Introduction", url: "https://drive.google.com/file/d/1sR1iuP5qs-TsuzzYqkJtWPyKh5-z6EU4/preview" },
        //        { name: "Algorithms in Discrete Structures", url: "https://drive.google.com/file/d/1x16dYBlhEB6C70-HWQ2S8qIrspd8Ma5y/preview" },
           ],
        },

     //   chemistry: {
     //       color: "#9C27B0", 
      //      items: [
      //          { name: "Basic Chemistry", url: "https://drive.google.com/file/d/1wQwwUEOdxbfpgqHuGOR3ZTfCBK54valq/preview" },
     //           { name: "Chemical Reactions", url: "https://drive.google.com/file/d/1x16dYBlhEB6C70-HWQ2S8qIrspd8Ma5y/preview" },
     //       ],
     //   },
     //   math: {
     //       color: "#191970", 
     //       items: [
      //          { name: "Calculus Fundamentals", url: "https://drive.google.com/file/d/1wQwwUEOdxbfpgqHuGOR3ZTfCBK54valq/preview" },
      //          { name: "Linear Algebra", url: "https://drive.google.com/file/d/1x16dYBlhEB6C70-HWQ2S8qIrspd8Ma5y/preview" },
       //     ],
     //   },
    };

    // Check if the selected subject has materials
    if (materials[selectedSubject]) {
        courseMaterialSection.style.display = 'block';

        // Loop through the materials and create buttons
        materials[selectedSubject].items.forEach(material => {
            const button = document.createElement('button');
            button.textContent = material.name;
            button.classList.add('material-button'); // Add class for styling
            button.style.backgroundColor = materials[selectedSubject].color; // Set the background color
            button.onclick = function() {
                showPDF(material.url);  // Show PDF on click
                return false;  // Prevents page refresh
            };
            pdfLinks.appendChild(button);
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
