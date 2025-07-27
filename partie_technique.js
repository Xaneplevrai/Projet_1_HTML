document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const first_name = document.getElementById("first_name").value;
    const email = document.getElementById("email").value;
    const last_names = document.getElementById("last_names").value;
    const country = document.getElementById("country").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    if (first_name === "" || email === "" || last_names ==="" || country ==="" || phone ==="" ) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    console.log("Nom:", first_name);
    console.log("Prénom(s):", last_names);
    console.log("Email:", email);
    console.log("Pays:", country);    
    console.log("Adresse:", address);
    console.log("Numéro:", phone);
})