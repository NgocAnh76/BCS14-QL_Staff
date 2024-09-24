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
    <button  data-toggle="modal" data-target="#myModal" class= "btn btn-info" onclick="fixEmployee('${staff.taiKhoan}')">Xem</button>
    <button  class= "btn btn-danger" onclick="deleteEmployee('${staff.taiKhoan}')">Xoá</button>
    </td>

    </tr> `;
    contentTable += trStaff;
  });

  // console.log(contentTable);
  document.querySelector("#tableDanhSach").innerHTML = contentTable;
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
  // validation
  // const validationError = Staff.validateAll(
  //   taiKhoan,
  //   name,
  //   email,
  //   password,
  //   date,
  //   luongCB,
  //   chucVu,
  //   gioLam
  // );
  // if (validationError) {
  //   alert(validationError);
  //   return; // Dừng lại nếu có lỗi
  // }
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
  // console.log(newStaff);
  // B3: Lưu vào mảng
  staffSer.addStaff(newStaff);
  // console.log(staffSer.arrStaff);
  // B4: đưa dữ liệu lên UI
  // hienThiTable(staffSer.arrStaff);
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
function fixEmployee(tkFix) {
  let staffObj = staffSer.fixStaff(tkFix);
  document.querySelector("#tknv").value = staffObj.taiKhoan;
  document.querySelector("#name").value = staffObj.name;
  document.querySelector("#email").value = staffObj.email;
  document.querySelector("#password").value = staffObj.password;
  document.querySelector("#datepicker").value = staffObj.date;
  document.querySelector("#luongCB").value = staffObj.luongCB;
  document.querySelector("#chucvu").value = staffObj.chucVu;
  document.querySelector("#gioLam").value = staffObj.gioLam;
}
function updateEmployee() {
  let taiKhoan = document.getElementById("tknv").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let date = document.getElementById("datepicker").value;
  let luongCB = document.getElementById("luongCB").value;
  let chucVu = document.getElementById("chucvu").value;
  let gioLam = document.getElementById("gioLam").value * 1;

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
