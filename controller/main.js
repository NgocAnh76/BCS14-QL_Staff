let staffSer = new StaffService();

//Hiển thị lên table
function hienThiTable(arrStaff) {
  let contentTable = "";
  arrStaff.map(function (staff, index) {
    let trStaff = `
    <tr>
    <td>${staff.taiKhoan}</td>
    <td>${staff.name}</td>
    <td>${staff.email}</td>
    <td>${staff.date}</td>
    <td>${staff.chucVu}</td>
    <td>${staff.tongLuong}</td>
    <td>${staff.xepLoai}</td>
    <td> 
    <button id="xem"  data-toggle="modal" data-target="#myModal" class= " btn btn-info" onclick="findEmployee('${staff.taiKhoan}')">Xem</button>
    <button  class= "btn btn-danger" onclick="deleteEmployee('${staff.taiKhoan}')">Xoá</button>
    </td>

    </tr> `;
    contentTable += trStaff;
  });

  // console.log(contentTable);
  document.querySelector("#tableDanhSach").innerHTML = contentTable;
}

// validation
function validateForm(
  taiKhoan,
  name,
  email,
  password,
  date,
  luongCB,
  chucVu,
  gioLam
) {
  const taiKhoanRegex = /^\d{4,6}$/;
  const nameRegex = /^[A-Za-zÀ-ỹ]+(?: [A-Za-zÀ-ỹ]+)*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;

  if (!taiKhoanRegex.test(taiKhoan))
    return "Tài khoản không hợp lệ (4-6 ký số)";
  if (!nameRegex.test(name))
    return "Tên nhân viên không hợp lệ (Không được để trống)";
  if (!emailRegex.test(email)) return "Email không hợp lệ";
  if (!passwordRegex.test(password))
    return "Mật khẩu không hợp lệ (6-10 ký tự, chứa ít nhất 1 số, 1 chữ in hoa, 1 ký tự đặc biệt)";
  if (!date) return "Ngày làm không được để trống";
  if (luongCB < 1000000 || luongCB > 20000000)
    return "Lương cơ bản không hợp lệ (1.000.000 - 20.000.000)";
  if (!["Sếp", "Trưởng phòng", "Nhân viên"].includes(chucVu))
    return "Chức vụ không hợp lệ";
  if (gioLam < 80 || gioLam > 200)
    return "Số giờ làm không hợp lệ (80-200 giờ)";

  return null;
}

// Lấy dữ liệu và lưu xuống localStorage
function setLocalStorage() {
  localStorage.setItem("StaffList", JSON.stringify(staffSer.arrStaff));
}
// Lấy dữ liệu từ localStorage
function getLocalStorage() {
  let result = localStorage.getItem("StaffList");
  if (result) {
    staffSer.arrStaff = JSON.parse(result);
    hienThiTable(staffSer.arrStaff);
  }
}
getLocalStorage();

// tạo thêm ds nhân viên mới:
function addEmployee() {
  //B1: lấy dữ liệu từ user
  let taiKhoan = document.getElementById("tknv").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let date = document.getElementById("datepicker").value;
  let luongCB = document.getElementById("luongCB").value * 1;
  let chucVu = document.getElementById("chucvu").value;
  let gioLam = document.getElementById("gioLam").value * 1;

  // console.log(taiKhoan, name, email, password, date, luongCB, chucVu, gioLam);
  const validateMessage = validateForm(
    taiKhoan,
    name,
    email,
    password,
    date,
    luongCB,
    chucVu,
    gioLam
  );
  if (validateMessage) {
    alert(validateMessage);
    return;
  }
  // B2: Tạo đối tượng nhân viên mới
  let newStaff = new Staff(
    taiKhoan,
    name,
    email,
    password,
    date,
    luongCB,
    chucVu,
    gioLam
  );
  newStaff.tinhLuong();
  newStaff.xepLoaiNv();
  // B3: Lưu vào mảng
  staffSer.addStaff(newStaff);
  // B4: đưa dữ liệu lên UI
  setLocalStorage();
  getLocalStorage();
}
// xoá ds nhân viên:
function deleteEmployee(tkDelete) {
  staffSer.deleteStaff(tkDelete);
  alert("Xoá thành công");
  setLocalStorage();
  getLocalStorage();
}
//xem
function findEmployee(indexFind) {
  let staffObj = staffSer.findIndex(indexFind);
  document.querySelector("#tknv").value = staffObj.taiKhoan;
  document.querySelector("#name").value = staffObj.name;
  document.querySelector("#email").value = staffObj.email;
  document.querySelector("#password").value = staffObj.password;
  document.querySelector("#datepicker").value = staffObj.date;
  document.querySelector("#luongCB").value = staffObj.luongCB;
  document.querySelector("#chucvu").value = staffObj.chucVu;
  document.querySelector("#gioLam").value = staffObj.gioLam;
  document.getElementById("header-title").textContent = "Thông Tin Nhân Viên";
  document.getElementById("btnThemNV").style.display = "none";
  document.getElementById("btnCapNhat").style.display = "Block";
}
//  update
function updateEmployee() {
  let taiKhoan = document.getElementById("tknv").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let date = document.getElementById("datepicker").value;
  let luongCB = document.getElementById("luongCB").value;
  let chucVu = document.getElementById("chucvu").value;
  let gioLam = document.getElementById("gioLam").value * 1;

  const validateMessage = validateForm(
    taiKhoan,
    name,
    email,
    password,
    date,
    luongCB,
    chucVu,
    gioLam
  );
  if (validateMessage) {
    alert(validateMessage);
    return;
  }
  let objUpdate = new Staff(
    taiKhoan,
    name,
    email,
    password,
    date,
    luongCB,
    chucVu,
    gioLam
  );
  objUpdate.tinhLuong();
  objUpdate.xepLoaiNv();
  staffSer.updateData(objUpdate);
  setLocalStorage();
  getLocalStorage();
}
// tìm kiếm theo tên
function searchEmployee() {
  let valueSearch = document.querySelector("#searchName").value;
  let result = staffSer.searchStaff(valueSearch);
  hienThiTable(result);
}
// reset modal
document.getElementById("btnThem").onclick = function () {
  document.querySelector("#tknv").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#datepicker").value = "";
  document.querySelector("#luongCB").value = "";
  document.querySelector("#chucvu").value = "";
  document.querySelector("#gioLam").value = "";
  document.getElementById("header-title").textContent = "Log In";
  document.getElementById("btnThemNV").style.display = "block";
  document.getElementById("btnCapNhat").style.display = "none";
};
