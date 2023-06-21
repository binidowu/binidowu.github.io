document.addEventListener("DOMContentLoaded", function () {
    // Check if the checkbox is clicked
    var checkbox = document.getElementById("copydata");
    checkbox.addEventListener("click", function () {
        // Copy data from entry 1 to entry 2
        if (checkbox.checked) {
            var firstName1 = document.getElementById("dataEntry1").elements.namedItem("firstname").value;
            var lastName1 = document.getElementById("dataEntry1").elements.namedItem("lastname").value;
            var address1 = document.getElementById("dataEntry1").elements.namedItem("address").value;
            var gender1 = document.getElementById("dataEntry1").elements.namedItem("gender").value;
            var year1 = document.getElementById("dataEntry1").elements.namedItem("year").value;

            document.getElementById("dataEntry2").elements.namedItem("fname").value = firstName1;
            document.getElementById("dataEntry2").elements.namedItem("lname").value = lastName1;
            document.getElementById("dataEntry2").elements.namedItem("addr").value = address1;
            document.getElementById("dataEntry2").elements.namedItem("gen").value = gender1;
            document.getElementById("dataEntry2").elements.namedItem("yr").value = year1;
        }
        else {
            // Clear data in entry 2 if checkbox is unchecked
            document.getElementById("dataEntry2").reset();
            document.getElementById("gen").selectedIndex = -1;
        }
    });

    // Add custom validation feedback
    var inputs = document.querySelectorAll("input, select");
    inputs.forEach(function (input) {
        input.addEventListener("invalid", function () {
            if (input.selectedIndex === -1) {
                this.setCustomValidity("Please fill out this field.");
            }
        });
        input.addEventListener("input", function () {
            this.setCustomValidity("");
        });
    });

    var submitButton = document.getElementById("submitBtn");
    submitButton.addEventListener("click", function (event) {
        var form = document.getElementById("dataEntry1");
        if (!form.checkValidity()) {
            event.preventDefault(); // Prevent form submission
            form.reportValidity(); // Display validation bubbles
        }
    });
    var resetButton = document.getElementById("resetBtn");
    resetButton.addEventListener("click", function () {
        // Reset fields in dataEntry1 form
        document.getElementById("dataEntry1").reset();

        // Reset fields in dataEntry2 form
        document.getElementById("dataEntry2").reset();
        document.getElementById("dataEntry2").selectedIndex = -1;
    });

});
