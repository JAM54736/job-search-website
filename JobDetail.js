export default {
    name: 'JobDetail',
    props: ['id'],
    template: `
      <div>
        <h2>Job Details</h2>
        <p>{{ jobDetails }}</p>
      </div>
    `,
    data() {
      return {
        jobs: [
          { id: 1, details: 'Develop software applications.' },
          { id: 2, details: 'Analyze data trends and provide insights.' },
          { id: 3, details: 'Create modern website designs.' },
        ],
      };
    },
    computed: {
      jobDetails() {
        const job = this.jobs.find((job) => job.id === Number(this.$route.params.id));
        return job ? job.details : 'Job not found';
      },
    },
  };