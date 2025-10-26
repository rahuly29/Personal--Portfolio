let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

// const form = document.getElementById("contact-me");

// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // prevent form from submitting

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;

//   const data = {
//     name: name,
//     email: email,
//     message: message,
//   };

//   fetch("send-message.php", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       alert("Your message has been sent!");
//     })
//     .catch((error) => {
//       console.error(error);
//       alert("There was an error sending your message.");
//     });
// });

const btn = document.getElementById("subBtn");
btn.addEventListener("click", function(){
  alert("Message can't be send, Please email on yadavrahul2910@outlook.com");
})