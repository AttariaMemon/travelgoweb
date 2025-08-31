    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });



     const form = document.getElementById("bookingForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      // Simple validation
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const destination = document.getElementById("destination").value;
      const date = document.getElementById("date").value;

      if (name === "" || email === "" || destination === "" || date === "") {
        alert("⚠️ Please fill all required fields!");
        return;
      }

      // Success
      successMessage.style.display = "block";
      form.reset();
    });

       // Dynamic year
    document.getElementById("year").textContent = new Date().getFullYear();

       gsap.to(".myImg", {
      x: 100,     // x axis (right side)
      y: 100,     // y axis (down)
      duration: 3,
      repeat: -1, // infinite loop
      yoyo: true, // forward-backward
      ease: "power1.inOut"
    });