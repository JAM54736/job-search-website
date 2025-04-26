const JobDetail = {
    components: {
      JobOverview // Register the JobOverview component locally
    },
    data() {
      return {
        jobs: jobList, // Reference the hardcoded jobList array
        selectedJob: null, // Stores the selected job details
        showOverview: true // Set to true by default so JobOverview is displayed on load
      };
    },
    methods: {
      // Method to display job details based on job_id
      showJobDetails(jobId) {
        this.showOverview = false; // Hide overview when a job is selected
        this.selectedJob = this.jobs.find(job => job.job_id === jobId); // Find the job by job_id
      },
      // Method to toggle JobOverview
      toggleOverview() {
        this.selectedJob = null; // Clear any selected job
        this.showOverview = true; // Display JobOverview content
      }
    },
    template: `
      <div class="container mt-4">
        <h2 class="mb-4">Job Explorer</h2>
        <div class="row">
          <!-- Buttons for JobOverview and Job Details -->
          <div class="col-md-4">
            <ul class="list-unstyled">
              <li class="mb-3">
                <button @click="toggleOverview" class="btn btn-secondary w-100">
                  Show Job Overview
                </button>
              </li>
              <li v-for="job in jobs" :key="job.job_id" class="mb-3">
                <button @click="showJobDetails(job.job_id)" class="btn btn-primary w-100">
                  Show {{ job.job_id }}
                </button>
              </li>
            </ul>
          </div>
  
          <!-- Render JobOverview dynamically -->
          <div v-if="showOverview" class="col-md-8">
            <JobOverview></JobOverview>
          </div>
  
          <!-- Display Job Details -->
          <div v-if="selectedJob" class="col-md-8">
            <h3 class="mb-3">Job Details</h3>
            <p><strong>Job ID:</strong> {{ selectedJob.job_id }}</p>
            <p><strong>Job Title:</strong> {{ selectedJob.job_title }}</p>
            <p><strong>Category:</strong> {{ selectedJob.category }}</p>
            <p><strong>Location:</strong> {{ selectedJob.location }}</p>
            <p><strong>Employment Type:</strong> {{ selectedJob.employment_type }}</p>
            <p><strong>Salary Range:</strong> {{ selectedJob.salary_range }}</p>
            <p><strong>Job Level:</strong> {{ selectedJob.job_level }}</p>
            <p><strong>Required Skills:</strong> {{ selectedJob.required_skills.join(', ') }}</p>
            <p><strong>Preferred Qualifications:</strong> {{ selectedJob.preferred_qualifications.join(', ') }}</p>
            <p><strong>Job Description:</strong> {{ selectedJob.job_description }}</p>
            <p><strong>Application Deadline:</strong> {{ selectedJob.application_deadline }}</p>
            <p><strong>Posted Date:</strong> {{ selectedJob.posted_date }}</p>
            <p><strong>Company:</strong> {{ selectedJob.company }}</p>
            <p><strong>Supervisor:</strong> {{ selectedJob.supervisor }}</p>
            <p><strong>Positions Available:</strong> {{ selectedJob.positions_available }}</p>
            <p><strong>Start Date:</strong> {{ selectedJob.start_date }}</p>
            <p><strong>Tags:</strong> {{ selectedJob.tags.join(', ') }}</p>
          </div>
        </div>
      </div>
    `
  };
