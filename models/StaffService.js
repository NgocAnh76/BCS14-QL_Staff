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
    // xoá
    this.arrStaff.splice(indexDel, 1);
  }
  // Xem chi tiết
  findIndex(indexFind) {
    let staffObj = this.arrStaff.find(function (staff) {
      return staff.taiKhoan == indexFind;
    });
    return staffObj;
  }
  // Sửa ds nhân viên
  updateData(objUpdate) {
    let indexUpdate = this.arrStaff.findIndex(function (staff) {
      return staff.taiKhoan == objUpdate.taiKhoan;
    });
    this.arrStaff[indexUpdate] = objUpdate;
  }
  // tìm kiếm
  searchStaff(valueSearch) {
    let userSearch = this.arrStaff.filter((value) => {
      return value.name.toUpperCase().includes(valueSearch.toUpperCase());
    });
    return userSearch;
  }
}
