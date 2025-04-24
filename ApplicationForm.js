document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("applicationForm");
    
    form.addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let isValid = true;

        // First Name and Last Name Validation
        const namePattern = /^[A-Za-z]+$/;
        isValid &= validateField("firstName", namePattern, "First Name must contain only letters.");
        isValid &= validateField("lastName", namePattern, "Last Name must contain only letters.");

        // Username Validation
        isValid &= validateLength("username", 3, "Username must be at least 3 characters long.");

        // Password Validation
        const passwordPattern = /^(?=.*[\$\%\^\&\*]).{8,}$/;
        isValid &= validateField("password", passwordPattern, "Password must be at least 8 characters long and contain one special character ($, %, ^, &, *).");
        
        // Confirm Password Validation
        isValid &= validateMatch("confirmPassword", "password", "Passwords do not match.");

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid &= validateField("email", emailPattern, "Please enter a valid email address.");

        // Mobile Number Validation (must start with 04 and be 10 digits long)
        const mobilePattern = /^04\d{8}$/;
        isValid &= validateField("mobile", mobilePattern, "Mobile number must be exactly 10 digits and start with '04'.");

        // Date of Birth Validation (must be at least 16 years old)
        isValid &= validateAge("dob", 16, "You must be at least 16 years old.");

        // Preferred Job Category Validation
        isValid &= validateSelection("jobCategory", "Please select a preferred job category.");

        return isValid;
    }

    function validateField(fieldId, pattern, errorMessage) {
        const field = document.getElementById(fieldId);
        const value = field.value.trim();
        if (!pattern.test(value)) {
            alert(errorMessage);
            return false;
        }
        return true;
    }

    function validateLength(fieldId, minLength, errorMessage) {
        const field = document.getElementById(fieldId);
        const value = field.value.trim();
        if (value.length < minLength) {
            alert(errorMessage);
            return false;
        }
        return true;
    }

    function validateMatch(fieldId, matchId, errorMessage) {
        const field = document.getElementById(fieldId);
        const matchField = document.getElementById(matchId);
        if (field.value !== matchField.value) {
            alert(errorMessage);
            return false;
        }
        return true;
    }

    function validateAge(fieldId, minAge, errorMessage) {
        const field = document.getElementById(fieldId);
        const dob = new Date(field.value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        
        if (today.getMonth() < dob.getMonth() || 
            (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
            age--;
        }

        if (age < minAge) {
            alert(errorMessage);
            return false;
        }
        return true;
    }

    function validateSelection(fieldId, errorMessage) {
        const field = document.getElementById(fieldId);
        if (field.value === "") {
            alert(errorMessage);
            return false;
        }
        return true;
    }
});