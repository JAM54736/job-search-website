const ApplicationForm = {
    data() {
      return {
        form: {
          firstName: "",
          lastName: "",
          username: "",
          password: "",
          confirmPassword: "",
          email: "",
          streetAddress: "",
          suburb: "",
          postcode: "",
          mobileNumber: "",
          dateOfBirth: "",
          preferredJobCategory: "",
          termsAccepted: false
        },
        errors: {
          firstName: "",
          lastName: "",
          username: "",
          password: "",
          confirmPassword: "",
          email: "",
          postcode: "",
          mobileNumber: "",
          dateOfBirth: "",
          preferredJobCategory: ""
        },
        showTerms: false // Toggles visibility of terms and conditions
      };
    },
    methods: {
      validateForm() {
        // Reset errors
        this.errors = {
          firstName: "",
          lastName: "",
          username: "",
          password: "",
          confirmPassword: "",
          email: "",
          postcode: "",
          mobileNumber: "",
          dateOfBirth: "",
          preferredJobCategory: ""
        };
  
        let isValid = true;
  
        // First Name
        if (!this.form.firstName.match(/^[a-zA-Z]+$/)) {
          this.errors.firstName = "First name is required and must contain letters only.";
          isValid = false;
        }
  
        // Last Name
        if (!this.form.lastName.match(/^[a-zA-Z]+$/)) {
          this.errors.lastName = "Last name is required and must contain letters only.";
          isValid = false;
        }
  
        // Username
        if (this.form.username.length < 3) {
          this.errors.username = "Username is required and must be at least 3 characters.";
          isValid = false;
        }
  
        // Password
        if (!this.form.password.match(/^(?=.*[$%^&*]).{8,}$/)) {
          this.errors.password =
            "Password must be at least 8 characters and include at least one special character ($, %, ^, &, *).";
          isValid = false;
        }
  
        // Confirm Password
        if (this.form.password !== this.form.confirmPassword) {
          this.errors.confirmPassword = "Passwords must match.";
          isValid = false;
        }
  
        // Email
        if (!this.form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          this.errors.email = "Email is required and must be a valid format.";
          isValid = false;
        }
  
        // Postcode
        if (!this.form.postcode.match(/^\d{4}$/)) {
          this.errors.postcode = "Postcode is required and must be exactly 4 digits.";
          isValid = false;
        }
  
        // Mobile Number
        if (!this.form.mobileNumber.match(/^04\d{8}$/)) {
          this.errors.mobileNumber =
            "Mobile number is required, must start with '04', and be exactly 10 digits.";
          isValid = false;
        }
  
        // Date of Birth
        const dob = new Date(this.form.dateOfBirth);
        const age = new Date().getFullYear() - dob.getFullYear();
        if (isNaN(dob.getTime()) || age < 16) {
          this.errors.dateOfBirth =
            "Date of Birth is required, must be a valid date, and you must be at least 16 years old.";
          isValid = false;
        }
  
        // Preferred Job Category
        if (!this.form.preferredJobCategory) {
          this.errors.preferredJobCategory = "Preferred Job Category is required.";
          isValid = false;
        }
  
        return isValid;
      },
      toggleTerms() {
        this.showTerms = !this.showTerms;
      },
      submitForm(event) {
        if (!this.validateForm()) {
          event.preventDefault(); // Prevent submission if validation fails
          return;
        }
  
        alert("Form submitted successfully!");
      }
    },
    template: `
 <div class="container mt-5 Job-ApplicationForm">
  <h2 class="text-center mb-3 p-3 pt-5">Job Explorer</h2>
  <form method="post" action="http://mercury.swin.edu.au/it000000/formtest.php" @submit="submitForm">
    <!-- Personal Information Section -->
    <fieldset class="border border-3 p-3 mb-4">
      <legend class="fw-bold">Personal Information</legend>
      <!-- Two inputs in one row -->
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="firstName" class="form-label">First Name:</label>
          <input type="text" id="firstName" class="form-control" v-model="form.firstName" name="firstName" />
          <span class="text-danger">{{ errors.firstName }}</span>
        </div>
        <div class="col-md-6">
          <label for="lastName" class="form-label">Last Name:</label>
          <input type="text" id="lastName" class="form-control" v-model="form.lastName" name="lastName" />
          <span class="text-danger">{{ errors.lastName }}</span>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="username" class="form-label">Username:</label>
          <input type="text" id="username" class="form-control" v-model="form.username" name="username" />
          <span class="text-danger">{{ errors.username }}</span>
        </div>
        <div class="col-md-6">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" class="form-control" v-model="form.email" name="email" />
          <span class="text-danger">{{ errors.email }}</span>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="password" class="form-label">Password:</label>
          <input type="password" id="password" class="form-control" v-model="form.password" name="password" />
          <span class="text-danger">{{ errors.password }}</span>
        </div>
        <div class="col-md-6">
          <label for="confirmPassword" class="form-label">Confirm Password:</label>
          <input type="password" id="confirmPassword" class="form-control" v-model="form.confirmPassword" name="confirmPassword" />
          <span class="text-danger">{{ errors.confirmPassword }}</span>
        </div>
      </div>
       <legend class="fw-bold">Address Information</legend>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="streetAddress" class="form-label">Street Address (Optional):</label>
          <input type="text" id="streetAddress" class="form-control" v-model="form.streetAddress" maxlength="40" name="streetAddress" />
        </div>
        <div class="col-md-6">
          <label for="suburb" class="form-label">Suburb (Optional):</label>
          <input type="text" id="suburb" class="form-control" v-model="form.suburb" maxlength="20" name="suburb" />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="postcode" class="form-label">Postcode:</label>
          <input type="text" id="postcode" class="form-control" v-model="form.postcode" name="postcode" />
          <span class="text-danger">{{ errors.postcode }}</span>
        </div>
        <div class="col-md-6">
          <label for="mobileNumber" class="form-label">Mobile Number:</label>
          <input type="text" id="mobileNumber" class="form-control" v-model="form.mobileNumber" name="mobileNumber" />
          <span class="text-danger">{{ errors.mobileNumber }}</span>
        </div>
      </div>

        <legend class="fw-bold">Other Details</legend>
  <!-- Two inputs in one row -->
  <div class="row mb-3">
    <div class="col-md-6">
      <label for="mobileNumber" class="form-label">Mobile Number:</label>
      <input type="text" id="mobileNumber" class="form-control" v-model="form.mobileNumber" name="mobileNumber" />
      <span class="text-danger">{{ errors.mobileNumber }}</span>
    </div>
    <div class="col-md-6">
      <label for="dateOfBirth" class="form-label">Date of Birth:</label>
      <input type="date" id="dateOfBirth" class="form-control" v-model="form.dateOfBirth" name="dateOfBirth" />
      <span class="text-danger">{{ errors.dateOfBirth }}</span>
    </div>
  </div>
  
  <!-- Dropdown in its own row -->
  <div class="row mb-3">
    <div class="col-md-12">
      <label for="preferredJobCategory" class="form-label">Preferred Job Category:</label>
      <select id="preferredJobCategory" class="form-select" v-model="form.preferredJobCategory" name="preferredJobCategory">
        <option value="">Select a category</option>
        <option value="AI">AI</option>
        <option value="Data Science">Data Science</option>
        <option value="Web Development">Web Development</option>
      </select>
      <span class="text-danger">{{ errors.preferredJobCategory }}</span>
    </div>
  </div>

    </fieldset>


    <!-- Terms and Conditions Section -->
    <div class="mb-3">
      <button type="button" class="btn btn-secondary mb-2" @click="toggleTerms">Terms and Conditions</button>
      <div v-if="showTerms" class="terms border p-3">
        <h3>Terms and Conditions</h3>
        <p><strong>Eligibility:</strong> Applicants must meet the minimum age requirement of 16 years and provide accurate personal information in accordance with the stated form fields.</p>
        <p><strong>Privacy:</strong> All information submitted in this application form will be kept confidential and used solely for recruitment purposes. By submitting this form, you consent to the processing of your personal data.</p>
        <p><strong>Accuracy:</strong> Applicants are responsible for ensuring that all provided information is truthful and up-to-date. Any false or misleading information may result in disqualification.</p>
        <p><strong>Submission:</strong> Completing and submitting this form does not guarantee a position. Applications are subject to review based on the provided details and qualifications.</p>
        <p><strong>Compliance:</strong> By submitting this application, you agree to abide by any additional recruitment policies or procedures communicated during the hiring process.</p>
      </div>
    </div>
    
    <!-- Submit Button -->
    <div class="text-right">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</div>
    `
  };