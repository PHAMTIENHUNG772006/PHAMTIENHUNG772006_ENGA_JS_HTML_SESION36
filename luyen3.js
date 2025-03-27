let btns = document.querySelectorAll(".btn");
let main = document.querySelector("#main");

// Lấy màu đã lưu và áp dụng
let savedColor = localStorage.getItem("color");
if (savedColor) {
    main.style.backgroundColor = savedColor;
}

btns.forEach(btn => {
    btn.addEventListener("click", function () {
        let bgColor = btn.textContent.trim().toLowerCase(); // Lấy chữ trên nút
        let color = ""; // Biến để lưu mã màu

        if (bgColor === "xanh") {
            color = "green";
        } else if (bgColor === "tím") {
            color = "purple";
        } else if (bgColor === "đỏ") {
            color = "red";
        } else if (bgColor === "vàng") {
            color = "yellow";
        }

        if (color) {
            main.style.backgroundColor = color;
            localStorage.setItem("color", color); // Lưu mã màu vào localStorage
        }
    });
});
