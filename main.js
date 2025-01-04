document.addEventListener("DOMContentLoaded", function(){
    let password = document.getElementById("#password").value;
    let confirmedPassword = document.getElementById("#confirmPassword").value;

    let error = document.getElementById("#error")

    if (password != confirmedPassword) {
        error.innerHTML = "*Passwords do not match."
    }

})