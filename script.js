//alert("dsafasd");
/* lấy tất cả các lớp modal là show */
let showmodal = document.querySelectorAll(".show");
/* Lấy lớp cửa sổ modal */
let showWindow = document.querySelector(".window");
/* Lấy lớp đóng cửa sổ */
let close = document.querySelector(".close");
// Lấy lớp phủ
let lopphu = document.querySelector(".chephu");

//Hàm mở cửa sổ modal
let openModal = function () {
  showWindow.style.display = "block"; //Hiển thị cửa sổ Modal
  lopphu.style.display = "block"; // cho hiển thị lớp phủ
};

// Viết hàm thoát khỏi chế độ modal.
let outModal = function () {
  showWindow.style.display = "none"; //ẩn cửa sổ modal
  lopphu.style.display = "none"; // Ẩn lớp phủ
};

/* Lặp qua các lớp có tên show */
for (let i = 0; i < showmodal.length; i++) {
  /*Khi click vào show modal */
  showmodal[i].addEventListener("click", openModal);
}

// Khi click vào đóng modal
close.addEventListener("click", outModal);

// Khi click vào lớp phủ cũng thoát khỏi cửa sổ modal
lopphu.addEventListener("click", outModal);

// Khi ta nhấn phím Esc
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    outModal();
  }
});
