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
   <div class="Job-ApplicationForm">
  <form method="post" action="http://mercury.swin.edu.au/it000000/formtest.php" @submit="submitForm">
    <fieldset>
      <legend>Personal Information</legend>
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="form.firstName" name="firstName" />
        <span class="error">{{ errors.firstName }}</span>
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="form.lastName" name="lastName" />
        <span class="error">{{ errors.lastName }}</span>
      </div>
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="form.username" name="username" />
        <span class="error">{{ errors.username }}</span>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="form.password" name="password" />
        <span class="error">{{ errors.password }}</span>
      </div>
      <div>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="form.confirmPassword" name="confirmPassword" />
        <span class="error">{{ errors.confirmPassword }}</span>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" name="email" />
        <span class="error">{{ errors.email }}</span>
      </div>
    </fieldset>
    <fieldset>
      <legend>Address Information</legend>
      <div>
        <label for="streetAddress">Street Address (Optional):</label>
        <input type="text" id="streetAddress" v-model="form.streetAddress" maxlength="40" name="streetAddress" />
      </div>
      <div>
        <label for="suburb">Suburb (Optional):</label>
        <input type="text" id="suburb" v-model="form.suburb" maxlength="20" name="suburb" />
      </div>
      <div>
        <label for="postcode">Postcode:</label>
        <input type="text" id="postcode" v-model="form.postcode" name="postcode" />
        <span class="error">{{ errors.postcode }}</span>
      </div>
    </fieldset>
    <fieldset>
      <legend>Other Details</legend>
      <div>
        <label for="mobileNumber">Mobile Number:</label>
        <input type="text" id="mobileNumber" v-model="form.mobileNumber" name="mobileNumber" />
        <span class="error">{{ errors.mobileNumber }}</span>
      </div>
      <div>
        <label for="dateOfBirth">Date of Birth:</label>
        <input type="date" id="dateOfBirth" v-model="form.dateOfBirth" name="dateOfBirth" />
        <span class="error">{{ errors.dateOfBirth }}</span>
      </div>
      <div>
        <label for="preferredJobCategory">Preferred Job Category:</label>
        <select id="preferredJobCategory" v-model="form.preferredJobCategory" name="preferredJobCategory">
          <option value="">Select a category</option>
          <option value="AI">AI</option>
          <option value="Data Science">Data Science</option>
          <option value="Web Development">Web Development</option>
        </select>
        <span class="error">{{ errors.preferredJobCategory }}</span>
      </div>
    </fieldset>
    <div>
      <button type="button" @click="toggleTerms">Terms and Conditions</button>
      <div v-if="showTerms" class="terms">
        <p>Placeholder terms and conditions text goes here.</p>
      </div>
    </div>
    <button type="submit">Submit</button>
  </form>
</div>
    `
  };
