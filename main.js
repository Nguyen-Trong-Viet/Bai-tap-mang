function getEle(id) {
  return document.getElementById(id);
}

var listNumber = [];

getEle("btnThemSo").onclick = function () {
  //input:
  var number = +getEle("txtNumber").value;

  //Thêm phần tử vào mảng listNumber
  listNumber.push(number);

  //output:
  getEle("ketQua1").innerHTML = listNumber;
};

//Bài tập 1: Tổng các số dương trong mảng.
function tinhTongSoDuong() {
  //Biến tích lũy
  var total = 0;

  //Duyệt mảng
  for (var i = 0; i < listNumber.length; i++) {
    //kiểm tra
    if (listNumber[i] > 0) {
      total += listNumber[i];
    }
  }
  return total;
}
getEle("btnTinhTong").onclick = function () {
  var total = tinhTongSoDuong();
  //Kết quả
  getEle("ketQua2").innerHTML = "Tổng số dương: " + total;
};

//Bài tập 2: Đếm cố bao nhiêu số dương trong mảng.

function demSoDuong() {
  //Biến tích lũy
  var count = 0;

  //Duyệt mảng
  for (var i = 0; i < listNumber.length; i++) {
    //Kiểm tra
    if (listNumber[i] > 0) {
      count += 1;
    }
  }
  return count;
}

getEle("btnDemSo").onclick = function () {
  var count = demSoDuong();
  //Kết quả
  getEle("ketQua3").innerHTML = "Số dương: " + count;
};

//Bài tập 3: Tìm số nhỏ nhất trong mảng.

function timSoNhoNhat() {
  //Biến tích lũy
  var min = listNumber[0];
  //Duyệt mảng
  for (var i = 0; i < listNumber.length; i++) {
    //kiểm tra
    if (min > listNumber[i]) {
      min = listNumber[i];
    }
  }
  return min;
}

getEle("btnSoNhoNhat").onclick = function () {
  var min = timSoNhoNhat();
  //Kết quả
  getEle("ketQua4").innerHTML = "Số nhỏ nhất: " + min;
};

//Bài tập 4: Tìm số dương nhỏ nhất trong mảng.

function timSoDuongNhoNhat() {
  var min = listNumber[0];
  //Kiểm tra số dương
  if (listNumber <= 0) {
    min = "Không có số dương trong mảng";
  }

  //Duyệt mảng
  for (var i = 0; i < listNumber.length; i++) {
    //Kiểm tra
    if (min > listNumber[i] && listNumber[i] > 0) {
      min = listNumber[i];
      min = "Số dương nhỏ nhất: " + min;
    }
  }
  return min;
}

getEle("btnSoDuongNhoNhat").onclick = function () {
  var min = timSoDuongNhoNhat();
  //Kết quả
  getEle("ketQua5").innerHTML = min;
};

//Bài tập 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.

function timSoChanCuoiCung() {
  // Biến tích lũy
  var evenNumber = -1;

  //Duyệt mảng
  for (var i = 0; i < listNumber.length; i++) {
    //Kiểm tra
    if (listNumber[i] % 2 == 0) {
      evenNumber = "Số chẵn cuối cùng: " + listNumber[i];
    }
  }
  return evenNumber;
}

getEle("btnTimSoChan").onclick = function () {
  var evenNumber = timSoChanCuoiCung();

  //kết quả
  getEle("ketQua6").innerHTML = evenNumber;
};

//Bài tập 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi giá trị).

getEle("btnDoiCho").onclick = function () {
  //input:
  var viTri1 = getEle("viTri1").value * 1;
  var viTri2 = getEle("viTri2").value * 1;

  //Xử lý:
  var temp = listNumber[viTri1];
  listNumber[viTri1] = listNumber[viTri2];
  listNumber[viTri2] = temp;

  //Kết quả
  getEle("ketQua7").innerHTML = "Mảng sau khi đổi: " + listNumber;
};

//Bài tập 7: Sắp xếp mảng theo thứ tự tăng dần

getEle("btnSapXep").onclick = function () {
  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      if (listNumber[i] > listNumber[j]) {
        var temp = listNumber[j];
        listNumber[j] = listNumber[i];
        listNumber[i] = temp;
      }
    }
  }
  getEle("ketQua8").innerHTML = "Mảng sau khi sắp xếp: " + listNumber;
};

//Bài tập 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có sô nguyển tố thì trả về -1.

function kiemTraSNT(number) {
  var checkSNT = true;

  if (number <= 1) {
    return false;
  }

  for (var i = 2; i <= number; i++) {
    if (number % i === 0) {
      checkSNT = false;
      break;
    }
  }

  return true;
}

getEle("btnTimSNTdauTien").onclick = function () {
  var soNguyenTo = -1;

  for (var i = 0; i < listNumber.length; i++) {
    var checkNST = listNumber[i];
    if (checkNST) {
      soNguyenTo = listNumber[i];
      break;
    }
  }
  getEle("ketQua9").innerHTML = "-> " + soNguyenTo;
};

//Bài tập 9:

var realNumber = [];

getEle("btnSoThuc").onclick = function () {
  //input:
  var number = +getEle("realNumber").value;

  //Thêm phần tử vào mảng
  realNumber.push(number);

  //kết quả
  getEle("ketQua10").innerHTML = realNumber;
};

getEle("btnDemSoNguyen").onclick = function () {
  var dem = 0;

  for (var i = 0; i < realNumber.length; i++) {
    dem++;
  }

  getEle("ketQua11").innerHTML = "Số nguyên: " + dem;
};

//Bài tập 10:

getEle("btnSoSanh").onclick = function () {
  var demSoAm = 1;
  var demSoDuong = 1;

  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > -1) {
      demSoDuong += 1;
    } else if (listNumber[i] < 0) {
      demSoAm += 1;
    }
  }
  if (demSoDuong > demSoAm) {
    getEle("ketQua12").innerHTML = "Số dương" + " > " + "Số âm";
  } else if (demSoAm > demSoDuong) {
    getEle("ketQua12").innerHTML = "Số âm" + " > " + "Số dương";
  } else if (demSoDuong == demSoAm) {
    getEle("ketQua12").innerHTML = "Số âm" + " = " + "Số dương";
  }
};
