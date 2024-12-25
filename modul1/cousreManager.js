function courseManagement() {
    let courseMana = "";
    courseMana += ` <h1>quản lý khóa học</h1>
<div class="congcu">
<button onclick="addNew()">thêm mới</button>
<div>
    <input type="text" placeholder="nhập tên khóa học tìm kiếm">
    <button>tìm kiếm</button>
</div>
<div>
    <span>sắp xếp</span>
     <select name="" id="">lựa chọn</select>
</div>

</div>
<div class="table">
<table>
    <tr>
        <th>STT</th>
        <th>mã khóa học</th>
        <th>tên khóa học</th>
        <th>thời gian</th>
        <th>trạng thái</th>
        <th colspan="2">hành động</th>

    </tr>
    <div class="khoahoc">
    
    </div>
    
</table>
</div>
<div class="prev">
<table>
<tr>
<td>prev</td>
<td>1</td>
<td>2</td>
<td></td>
<td>999</td>
<td>next>></td>
</tr>
</table>
</div> `
    document.getElementsByClassName("main")[0].innerHTML = courseMana;
}
let course = JSON.parse(localStorage.getItem("course"))

//
function addNew() {
    let add = "";
    add += ` <div class="addnew">
            <form action="">
    <button class="btnX" onclick="addNewOutbtn()">X</button><br>
    <label for="">modal-Thêm khóa học mới</label><br>
     <label for="">Mã khóa học(*)</label> 
     <input id="idcourse" type="text" placeholder="NHập mã khóa học"><br>
     <label for="">Tên khóa học(*)</label>
     <input id="namecourse" type="text" placeholder="nhập tên khóa học"><br>
     <label for="">thời gian(*)</label>
     <input id="timecourse" type="text" placeholder="Nhập thời gian khóa học"><br>
    <div class="status">
    <label for="">Trạng thái(*)</label>     
<label for="">hoạt động</label>
<input onchange="changeValue()" id="status" type="radio" name="status1" value="hoạt động">
<label for="">không hoạt động</label>
<input onchange="changeValue()" id="status" type="radio" name="status1" value="không hoạt động">
    </div>
     
</form>
        </div>
        <div class="themdong">
        <table>
            <tr>
                <td onclick="addCourse()">thêm mới + </td>
                <td>đóng X</td>
            </tr>
        </table>
        </div>`
    document.getElementsByClassName("main")[0].innerHTML = add;
    
}
function addNewOutbtn() {
    courseManagement()
}
let newcourse = [];
function addCourse() {
    let courseID = document.getElementById("idcourse").value;
    let coursename = document.getElementById("namecourse").value;
    let coursetime = document.getElementById("timecourse").value;

    let html = "";
    html +=
        `
    <tr>
        <td>1</td>
        <td>${courseID}</td>
        <td>${coursename}</td>
        <td>${coursetime}</td>
        <td></td>
        <td>sửa</td>
        <td>xóa</td>
    </tr>
    `
    document.getElementsByClassName("kkhoahoc").innerHTML = html;
    
}


