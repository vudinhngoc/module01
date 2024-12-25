function remoteControl() {
    let html = "";
    html += `         <table>
            <tr>
                <th>icon</th>
                <th>thống kê khóa học</th>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>số khóa học</td>
                <td>5</td>
            </tr>
            <tr>
                <th>icon</th>
                <th>thống kê lớp học</th>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>số lớp học</td>
                <td>20</td>
            </tr>
            <tr>
                <td></td>
                <td>số lớp đang hoạt động</td>
                <td>10</td>
            </tr>
            <tr>
                <td></td>
                <td>số lớp đã kết thúc</td>
                <td>4</td>
            </tr>
            <tr>
                <td></td>
                <td>số lớp đang chờ </td>
                <td>6</td>
            </tr>
            <tr>
                <th>icon</th>
                <th>thống kê sinh viên</th>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>tổng số SV</td>
                <td>1000</td>
            </tr>
            <tr>
                <td></td>
                <td>số SV chờ lớp</td>
                <td>200</td>
            </tr>
            <tr>
                <td></td>
                <td>số SV đang học</td>
                <td>600</td>
            </tr>
            <tr>
                <td></td>
                <td>số SV bảo lưu</td>
                <td>50</td>
            </tr>
        </table>`;
    document.getElementsByClassName("main")[0].innerHTML = html;
}
function addNewClass() {
    let addNewClassbtn = "";
    addNewClassbtn +=
        ` <div class="addnew">
            <form action="">
    <button class="btnX" onclick="OutButtonClass()">X</button><br>
    <label for="">modal-Thêm lớp học mới</label><br>
     <label for="">Mã lớp học(*)</label> 
     <input type="text" placeholder="NHập mã khóa học"><br>
     <label for="">Tên lớp học(*)</label>
     <input type="text" placeholder="nhập tên khóa học"><br>
     <label for="">giảng viên(*)</label>
     <input type="text" placeholder="Nhập thời gian khóa học"><br>
<label for="">sĩ số(*)</label>
     <input type="text" placeholder="Nhập sĩ số lớp"><br>
     <label for="">mô tả(*)</label>
     <input type="text" placeholder="Nhập mô tả cuả lớp"><br>
     <div class="status">
    <label for="">Trạng thái(*)</label>     
 <input type="text" placeholder="chọn trạng thái lớp học"><br>
    </div>
     
</form>
        </div>
        <div class="themdong">
        <table>
            <tr>
                <td>thêm mới + </td>
                <td>đóng X</td>
            </tr>
        </table>
        </div>`
    document.getElementsByClassName("main")[0].innerHTML = addNewClassbtn;
}
function OutButtonClass() {
    classManagement()
}