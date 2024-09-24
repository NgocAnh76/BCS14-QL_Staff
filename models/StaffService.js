class StaffService {
  constructor() {
    this.arrStaff = [];
  }
  // inout: newStaff
  addStaff(newStaff) {
    // outPut: lưu newStaff vào mảng arrStaff
    this.arrStaff.push(newStaff);
  }
  deleteStaff(tkDelete) {
    let indexDel = this.arrStaff.findIndex(function (staff) {
      return staff.taiKhoan == tkDelete;
    });
    console.log(tkDelete, indexDel);
    // xoá
    this.arrStaff.splice(indexDel, 1);
  }
  // Xem chi tiết
  fixStaff(tkFix) {
    console.log(tkFix);
    let staffObj = this.arrStaff.find(function (staff) {
      return staff.taiKhoan == tkFix;
    });
    console.log(staffObj);
    return staffObj;
  }
  // Sửa ds nhân viên
  updateData(objUpdate) {
    let indexUpdate = this.arrStaff.findIndex(function (staff) {
      return staff.taiKhoan == objUpdate.taiKhoan;
    });
    this.arrStaff[indexUpdate] = objUpdate;
  }
}
