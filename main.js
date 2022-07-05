// BÀI 1:
document.getElementById('btnBai1').onclick = function() {
    var so1 = Number(document.getElementById('so1').value);
    var so2 = Number(document.getElementById('so2').value);
    var so3 = Number(document.getElementById('so3').value);
    var first = '';
    var second = '';
    var last = '';
    //so1 > so2
    if ( so1 >= so2) {
        //so 1 > so3
        if( so1 >= so3) {
            first = so1;
            //so1 > so2
            //so 1 > so3
            //so2 > so3
            if ( so2 >= so3) {
                second = so2;
                last = so3;
            } 
            //so1 > so2
            //so 1 > so3
            //so2 < so3 
            else {
                second = so3;
                last = so2;
            }
        }
        // so1 > so2
        // so1 < so3
        else {
            first = so3;
            second = so1;
            last = so2; 
        }
    }
    // so2 > so1
    else {
        // so2 > so1
        // so2 < so3
        if( so2 <= so3){
            first = so3;
            second = so2;
            last = so1;
        }
        // so2 > so1
        // so2 > so3
        else {
            first = so2;
            // so2 > so1
            // so2 > so3
            // so1 > so3
            if (so1 >= so3) {
                second = so1;
                last = so3;
            } else {
                second = so3;
                last = so1;
            }
        }
    }
    document.getElementById('ketQuaBai1').innerHTML = 'Thứ tự từ nhỏ đến lớn là: ' + '|' + last + '|' + second + '|' + first;
}
// BÀI 2:
document.getElementById('btnBai2').onclick = function() {
   if (document.getElementById("dad").checked == true) {
    document.getElementById('ketQuaBai2').innerText = 'Hola Bố';
    document.getElementById("dad").checked = false;
   }
    if (document.getElementById("mom").checked == true) {
    document.getElementById('ketQuaBai2').innerText = 'Hi Mẹ';
    document.getElementById("mom").checked = false;
  }
    if (document.getElementById("sis").checked == true) {
    document.getElementById('ketQuaBai2').innerHTML = 'Em chào Chụy';
    document.getElementById("sis").checked = false;
  }
    if (document.getElementById("son").checked == true) {
    document.getElementById('ketQuaBai2').innerHTML = 'Hello Nhóc';
    document.getElementById("son").checked = false;
  }
    if (document.getElementById("grandpa").checked == true) {
    document.getElementById('ketQuaBai2').innerHTML = 'Cháu chào Cụ';
    document.getElementById("grandpa").checked = false;
  }
}
//BÀI 3:
document.getElementById('btnBai3').onclick = function() {
    var soA = document.getElementById('soA').value * 1;
    var soB = document.getElementById('soB').value * 1;
    var soC = document.getElementById('soC').value * 1;
    var countSoChan = 0;
    if ( soA % 2 == 0) {
        countSoChan++;
    }   
    if ( soB % 2 == 0) {
    countSoChan++;
    } 
    if ( soC % 2 == 0) {
        countSoChan++;
    }
    console.log('countSoChan: ', countSoChan);
    document.getElementById('ketQuaBai3').innerHTML = 'Số chẵn là ' + countSoChan + ' Số lẻ là ' + (3 - countSoChan );
} 
//BÀI 4:
document.getElementById('btnBai4').onclick = function(){
    var canh1 = document.getElementById('canh1').value * 1;
    var canh2 = document.getElementById('canh2').value * 1;
    var canh3 = document.getElementById('canh3').value * 1;
    var loaiTamGiac = '';
    if ( canh1 == canh2 && canh2 == canh3 ) {
        loaiTamGiac = 'Tam giác đều';
    }   else if(canh1 == canh2 || canh2 == canh3 || canh3 == canh1 ) {
            loaiTamGiac = 'Tam giác cân';
        } else if ( canh1 * canh1 == (canh2*canh2 + canh3*canh3) 
        || (canh2 * canh2 == (canh1*canh1 + canh3*canh3)) 
        || (canh3 * canh3 == (canh2*canh2 + canh1*canh1)) ){
                loaiTamGiac = 'Tam giác vuông'
            } else {
                    loaiTamGiac = ' Tam giác tầm thường. Phèn !'
        }
    document.getElementById('ketQuaBai4').innerHTML = ' Loại tam giác là: ' + loaiTamGiac;    

}
