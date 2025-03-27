// Lấy dữ liệu từ localStorage, nếu không có thì dùng mảng mặc định
let dishes = [
    {
        id: 1,
        name: "Bún bò Huế",
        image: "https://www.foodstylistvn.com/wp-content/uploads/2021/09/bun-bo-cha-vietnam-food-stylist.jpg",
        likes: 0
    },
    {
        id: 2,
        name: "Phở bò Hà Nội",
        image: "https://media.istockphoto.com/id/503129686/vi/anh/ph%E1%BB%9F-vi%E1%BB%87t-nam-v%E1%BB%9Bi-s%E1%BB%91t-sriracha-cay-b%E1%BA%AFn-t%E1%BB%AB-tr%C3%AAn-xu%E1%BB%91ng.jpg?s=612x612&w=0&k=20&c=38zY6Qo2UiC0wjvVkCdCQCClYpS7PUvLgvf4zCzX1U8=",
        likes: 1
    },
    {
        id: 3,
        name: "Cơm tấm Sài Gòn",
        image: "https://ipos.vn/wp-content/uploads/2021/10/chup-anh-1.jpg",
        likes: 0
    }
];
dishes = JSON.parse(localStorage.getItem("dish")) || [] ;
// Lưu dữ liệu vào localStorage nếu chưa có
localStorage.setItem("dish", JSON.stringify(dishes));

let box = document.querySelector(".box");

function render() {
    let html = dishes.map(dish => `
        <div class="dish">
            <img src="${dish.image}" alt="${dish.name}">
            <div class="content">
                <h2>${dish.name}</h2>
                <p>❤️ <span class="like-count">${dish.likes}</span> Lượt thích</p>
                <button class="btn-like" data-id="${dish.id}">Thích +1</button>
            </div>
        </div>
    `).join("");

    box.innerHTML = html;

    // Gán sự kiện cho tất cả các nút "Thích +1"
    document.querySelectorAll(".btn-like").forEach(button => {
        button.addEventListener("click", function () {
            let id = parseInt(this.getAttribute("data-id"));
            likeDish(id);
        });
    });
}

function likeDish(id) {
    let dish = dishes.find(item => item.id === id);
    if (dish) {
        dish.likes += 1;
        localStorage.setItem("dish", JSON.stringify(dishes)); // Cập nhật toàn bộ danh sách vào localStorage
        render(); // Cập nhật giao diện
    }
}

render();
