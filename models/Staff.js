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
}
