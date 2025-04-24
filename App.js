import { getJobs } from "../router/router.js"; // Import the job list
import JobOverview from "../components/JobOverview.js"; // Import the JobOverview component

document.addEventListener("DOMContentLoaded", () => {
  const jobs = getJobs();
  const jobContainer = document.getElementById("job-container");
  const jobDetailsContainer = document.getElementById("job-details");

  // Add a button for JobOverview
  const overviewButton = document.createElement("button");
  overviewButton.className = "btn btn-primary w-100 mb-2"; // Full-width button with margin
  overviewButton.textContent = "Job Overview";

  // Add a click event listener to display the JobOverview template
  overviewButton.addEventListener("click", () => {
    jobDetailsContainer.innerHTML = JobOverview.template; // Render the JobOverview template
  });

  jobContainer.appendChild(overviewButton); // Add the button to the container

  // Automatically display the JobOverview template on page load
  jobDetailsContainer.innerHTML = JobOverview.template;

  // Loop through each job and create a button for it
  jobs.forEach((job) => {
    const jobButton = document.createElement("button");
    jobButton.className = "btn btn-secondary w-100 mb-2"; // Full-width button with margin
    jobButton.textContent = job.job_title; // Set the button text to the job title

    // Add a click event listener to display job details
    jobButton.addEventListener("click", () => {
      const jobDetails = `
        <h3>${job.job_title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Employment Type:</strong> ${job.employment_type}</p>
        <p><strong>Salary:</strong> ${job.salary_range}</p>
        <p><strong>Skills Required:</strong> ${job.required_skills.join(", ")}</p>
        <p><strong>Description:</strong> ${job.job_description}</p>
        <p><strong>Application Deadline:</strong> ${job.application_deadline}</p>
        <p><strong>Start Date:</strong> ${job.start_date}</p>
      `;

      // Display the job details in the job-details section
      jobDetailsContainer.innerHTML = jobDetails;
    });

    jobContainer.appendChild(jobButton);
  });
});