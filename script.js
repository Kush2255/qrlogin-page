const password = document.getElementById("password");
const togglePassword = document.querySelector(".toggle-password");

togglePassword.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    togglePassword.querySelector("img").src =
        type === "password" ? "images/eye.svg" : "images/close-eye.svg";
});
