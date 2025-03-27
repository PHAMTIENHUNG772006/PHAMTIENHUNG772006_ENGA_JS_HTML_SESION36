let btnSave = document.querySelector("#btnSave");
let show = document.querySelector("#show");

btnSave.addEventListener("click", function () {
    let name = document.querySelector("#input").value.trim();
    
    if (name === "") {
        alert("Không được để trống dữ liệu..!");
        return;  // Dừng lại nếu không có dữ liệu nhập vào
    }

    localStorage.setItem("name", JSON.stringify(name));
    display(name);
});

function display(name) {
    if (!name) {
        name = JSON.parse(localStorage.getItem("name")) || "";
    }

    if (name === "") {
        form.style.display = "block"; // Hiển thị lại form nếu không có tên
        return;
    }

    show.innerHTML = `
        <h1>Chào bạn ..! ${name}</h1>
        <button class="btn-Change">Đổi tên</button>
    `;

    let changeName = document.querySelector(".btn-Change");
    changeName.addEventListener("click", function () {
        document.querySelector("#input").value = name; // Điền tên cũ vào ô nhập
        form.style.display = "block"; // Hiển thị lại form để nhập tên mới
        show.style.display = "none";
    });

    form.style.display = "none"; // Ẩn form khi đã nhập tên
}

// Hiển thị lại tên nếu đã lưu trong `localStorage`
let form = document.querySelector("#form")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let savedName = JSON.parse(localStorage.getItem("name")) || "";
    display(savedName);
});
