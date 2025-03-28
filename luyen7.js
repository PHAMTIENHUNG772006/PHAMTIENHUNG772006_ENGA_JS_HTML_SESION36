    let signupForm = document.querySelector(".main-signup");
    let signinForm = document.querySelector(".main-signin");
    let signupLink = document.querySelector(".main-signup a");
    let signinLink = document.querySelector(".main-signin a");
    let loginButton = document.querySelector("#btnLogin");
    let signupButton = document.querySelector("#btnSignup");
    let done = document.querySelector("#done-signin");
    let btnOut = document.querySelector("#btn-out");

    let loginUsernameInput = document.querySelector(".main-signup input[type='text']");
    let loginPasswordInput = document.querySelector(".main-signup input[type='password']");

    let signupUsernameInput = document.querySelector(".main-signin input[type='text']");
    let signupPasswordInput = document.querySelector(".main-signin input[type='password']");
    
    let loginError = document.querySelector(".main-signup .error");
    let signupError = document.querySelector(".main-signin .error");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // chuyển  form đăng nhập và đăng kí
    signupLink.addEventListener("click", function (event) {
        event.preventDefault();
        signupForm.style.display = "none";
        signinForm.style.display = "block";
    });

    signinLink.addEventListener("click", function (event) {
        event.preventDefault();
        signinForm.style.display = "none";
        signupForm.style.display = "block";
    });

    // phần đăng kí
    signupButton.addEventListener("click", function (event) {
        event.preventDefault();
        let username = signupUsernameInput.value.trim();
        let password = signupPasswordInput.value.trim();
        signupError.innerHTML = "";

        if (!username || !password) {
            let show = document.createElement("p");
            show.innerHTML = "Dữ liệu không được để trống..!";
            show.style.color = "red";
            signupError.appendChild(show);
            return;
        }

        let existingUser = users.find(user => user.username === username);
        if (existingUser) {
            let show = document.createElement("p");
            show.innerHTML = "Tên người dùng đã tồn tại!";
            show.style.color = "red";
            signupError.appendChild(show);
            return;
        }

        let user = { username, password };
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        let success = document.createElement("p");
        success.innerHTML = "Đăng ký thành công!";
        success.style.color = "green";
        signupError.appendChild(success);

        // dọn ô nhập liệu 
        signupUsernameInput.value = "";
        signupPasswordInput.value = "";
    });

    // phần đăng nhập
    loginButton.addEventListener("click", function (event) {
        event.preventDefault();
        let username = loginUsernameInput.value.trim();
        let password = loginPasswordInput.value.trim();
        loginError.innerHTML = "";

        if (!username || !password) {
            let show = document.createElement("p");
            show.innerHTML = "Dữ liệu không được để trống..!";
            show.style.color = "red";
            loginError.appendChild(show);
            return;
        }
        
        let user = users.find(user => user.username === username && user.password === password);
        if (user) {
            signupForm.style.display = "none";
            signinForm.style.display = "none";
            done.innerHTML = `
            <div class="done">
            <h2>Xin chào,${user.username} 😊</h2>
            <p>chào mừng bạn đến với hệ thống mini</p>
            <button id="btn-out">Đăng xuất</button>
            </div>
            `
            btnOut.addEventListener("click",function(){
                alert("bạn đã đăng xuất thành công..!");
            });
        } else {
            let show = document.createElement("p");
            show.innerHTML = "Sai tên đăng nhập hoặc mật khẩu!";
            show.style.color = "red";
            loginError.appendChild(show);
        }
    });

