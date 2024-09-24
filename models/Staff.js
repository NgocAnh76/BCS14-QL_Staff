class Staff {
  constructor(taiKhoan, name, email, password, date, luongCB, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.name = name;
    this.email = email;
    this.password = password;
    this.date = date;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";
  }
  tinhLuong() {
    if (this.chucVu == "Sếp") {
      this.tongLuong = this.luongCB * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      this.tongLuong = this.luongCB * 2;
    } else if (this.chucVu == "Nhân viên") {
      this.tongLuong = this.luongCB;
    }
  }
  xepLoaiNv() {
    if (this.gioLam >= 192) {
      this.xepLoai = "Nhân viên xuất sắc";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      this.xepLoai = "Nhân viên giỏi";
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      this.xepLoai = "Nhân viên khá";
    } else {
      this.xepLoai = "Nhân viên trung bình";
    }
  }
  // static validateTk(taiKhoan) {
  //   const tkRegex = /^\d{4,6}$/;
  //   if (!taiKhoan) {
  //     return " Tài khoản không được để trống";
  //   } else if (!tkRegex.test(taiKhoan)) {
  //     return "Tài khoản phải từ 4 đến 6 ký tự";
  //   }
  //   return true;
  // }
  // static validateName(name) {
  //   const nameRegex = /^[A-Za-zÀ-ỹ\s]+$/;
  //   if (!name) {
  //     return "Tên không được để trống";
  //   } else if (!nameRegex.test(name)) {
  //     return "Tên chỉ được chứa các ký tự chữ";
  //   }
  //   return true;
  // }
  // static validateEmail(email) {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!email) {
  //     return "Email không hợp lệ";
  //   } else if (!emailRegex.test(email)) {
  //     return " Email không hợp lệ";
  //   }
  //   return true;
  // }
  // static validatePw(password) {
  //   const pwRegex =
  //     /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
  //   if (!password) {
  //     return "Password không được để trống";
  //   } else if (!pwRegex.test(password)) {
  //     return "Mật khẩu phải chứa ít nhất 1 số, 1 chữ in hoa, 1 ký tự đặc biệt và dài từ 6-10 ký tự";
  //   }
  //   return true;
  // }
  // static validateDate(date) {
  //   const dateRegex =
  //     /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
  //   if (!date) {
  //     return "Ngày không được để trống";
  //   } else if (!dateRegex.test(date)) {
  //     return "Ngày không đúng định dạng mm/dd/yyyy";
  //   }
  //   return true;
  // }
  // static validateLuongCb(luongCB) {
  //   if (!luongCB) {
  //     return "Lương cơ bản không được để trống";
  //   } else if (luongCB > 1000000 && luongCB < 20000000) {
  //     return "Lương cơ bản phải từ 1.000.000 đến 20.000.000";
  //   }
  //   return true;
  // }
  // static validateChucVu(chucVu) {
  //   const validChucVu = ["Giám đốc", "Trưởng Phòng", "Nhân Viên"];
  //   if (!chucVu) {
  //     return "Chức vụ không được để trống";
  //   } else if (!validChucVu.includes(chucVu)) {
  //     return "Chức vụ không hợp lệ";
  //   }
  //   return true;
  // }
  // static validateGioLam(gioLam) {
  //   if (!gioLam) {
  //     return "Số giờ làm không được để trống";
  //   } else if (gioLam < 80 && gioLam > 200) {
  //     return "Số giờ làm phải từ 80 đến 200 giờ";
  //   }
  //   return true;
  // }
  // static validateAll(staff) {
  //   const validationResults = [
  //     this.validateTaiKhoan(staff.taiKhoan),
  //     this.validateName(staff.name),
  //     this.validateEmail(staff.email),
  //     this.validatePassword(staff.password),
  //     this.validateDate(staff.date),
  //     this.validateLuongCB(staff.luongCB),
  //     this.validateChucVu(staff.chucVu),
  //     this.validateGioLam(staff.gioLam),
  //   ];
  // }
  // static validateTaiKhoan(taiKhoan) {
  //   const regex = /^[0-9]{4,6}$/;
  //   return regex.test(taiKhoan);
  // }

  // static validateName(name) {
  //   const regex = /^[a-zA-ZÀ-ỹ\s]+$/;
  //   return name.trim() !== "" && regex.test(name);
  // }

  // static validateEmail(email) {
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return email.trim() !== "" && regex.test(email);
  // }

  // static validatePassword(password) {
  //   const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
  //   return regex.test(password);
  // }

  // static validateDate(date) {
  //   const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  //   return date.trim() !== "" && regex.test(date);
  // }

  // static validateLuongCB(luongCB) {
  //   return luongCB >= 1000000 && luongCB <= 20000000;
  // }

  // static validateChucVu(chucVu) {
  //   const validPositions = ["Giám đốc", "Trưởng Phòng", "Nhân Viên"];
  //   return validPositions.includes(chucVu);
  // }

  // static validateGioLam(gioLam) {
  //   return gioLam >= 80 && gioLam <= 200;
  // }

  // static validateAll(
  //   taiKhoan,
  //   name,
  //   email,
  //   password,
  //   date,
  //   luongCB,
  //   chucVu,
  //   gioLam
  // ) {
  //   if (!this.validateTaiKhoan(taiKhoan)) {
  //     return "Tài khoản không hợp lệ. Phải có 4-6 ký số.";
  //   }
  //   if (!this.validateName(name)) {
  //     return "Tên nhân viên không hợp lệ. Phải là chữ cái.";
  //   }
  //   if (!this.validateEmail(email)) {
  //     return "Email không hợp lệ.";
  //   }
  //   if (!this.validatePassword(password)) {
  //     return "Mật khẩu không hợp lệ. Phải chứa ít nhất 1 chữ số, 1 ký tự in hoa, 1 ký tự đặc biệt.";
  //   }
  //   if (!this.validateDate(date)) {
  //     return "Ngày làm không hợp lệ. Định dạng phải là mm/dd/yyyy.";
  //   }
  //   if (!this.validateLuongCB(luongCB)) {
  //     return "Lương cơ bản không hợp lệ. Phải từ 1,000,000 đến 20,000,000.";
  //   }
  //   if (!this.validateChucVu(chucVu)) {
  //     return "Chức vụ không hợp lệ. Phải chọn một trong các chức vụ hợp lệ.";
  //   }
  //   if (!this.validateGioLam(gioLam)) {
  //     return "Số giờ làm không hợp lệ. Phải từ 80 đến 200 giờ.";
  //   }
  //   return null; // Trả về null nếu tất cả đều hợp lệ
  // }
}
// export { Staff };
