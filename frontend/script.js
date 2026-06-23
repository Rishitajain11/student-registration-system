const form = document.getElementById("studentForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const student = {

        name: document.getElementById("name").value,

        enrollment_number:
            document.getElementById("enrollment").value,

        email:
            document.getElementById("email").value,

        mobile_number:
            document.getElementById("mobile").value,

        branch:
            document.getElementById("branch").value

    };

    const response = await fetch(
        "http://localhost:5000/students",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

    const data = await response.text();

    alert(data);

    form.reset();

});