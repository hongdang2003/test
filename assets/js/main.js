function signup(e) {
  event.preventDefault();
  var taikhoan = document.getElementById("taikhoan").value;
  var email = document.getElementById("email").value;
  var matkhau = document.getElementById("matkhau").value;
  var nguoidung = {
    taikhoan: taikhoan,
    email: email,
    matkhau: matkhau,
  };
  var json = JSON.stringify(nguoidung);
  localStorage.setItem(taikhoan, json);
  alert("Đăng ký thành công");
}

function login() {
  event.preventDefault();
  var taikhoan = document.getElementById("taikhoan").value;
  var email = document.getElementById("email").value;
  var matkhau = document.getElementById("matkhau").value;
  var nguoidung = localStorage.getItem(taikhoan);
  var data = JSON.parse(nguoidung);
  if (nguoidung == null) {
    alert("Vui lòng nhập Tài khoản,Mật khẩu");
  } else if (
    taikhoan == data.taikhoan &&
    email == data.email &&
    matkhau == data.matkhau
  ) {
    alert("Đăng nhập thành công");
    window.location.href = "index.html";
  } else {
    alert("Đăng nhập thất bại");
  }
}
