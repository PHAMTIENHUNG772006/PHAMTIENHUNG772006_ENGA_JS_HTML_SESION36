 let darkModeToggle = document.querySelector(".dark-mode-toggle");
  let body = document.body;

  // Khi nhấn nút, đổi chế độ sáng/tối
  darkModeToggle.addEventListener("click", function (darkMode) {
    body.classList.toggle("dark-mode");
    // lưu giá trị của chế độ sáng tối vào trong localtring (enabled<bật>/disabled<tẵt>)
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });

