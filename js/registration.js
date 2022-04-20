$(document).ready(function () {   
       
    var checkRegistrationUser = 1;
    var checkRegistrationPassWord = 1;
    var checkRegistrationRePassWord = 1;  
    var checkRegistrationName = 1;  
    var checkRegistrationEmail = 1;  
    var checkRegistrationPhone = 1;      
    $("#modal-registration-txtuser").blur(function () {
        console.log("ok");
        if ($("#modal-registration-txtuser").val() == "") {
            $("#modal-registration-spUser").text("*Bắt buộc nhập");
            checkRegistrationUser = 0;
        }
        var nameCheck = /^[a-z]\w*/;
        if (nameCheck.test($("#modal-registration-txtuser").val()) == false) {
            $("#modal-registration-spUser").text("*Bắt buộc phải bắt đầu bằng kí tự");
            $("#modal-registration-spUser").css('color', 'red');
            checkRegistrationUser= 0;
        }
        else {
            $("#modal-registration-spUser").text("Hợp lệ");
            $("#modal-registration-spUser").css('color', 'green');
            checkRegistrationUser = 1;
        }
    });
    $("#modal-registration-txtpassword").blur(function () {
        if ($("#modal-registration-txtpassword").val() == "") {
            $("#modal-registration-spPassWord").text("*Bắt buộc nhập");
            checkRegistrationPassWord = 0;
        }
        var nameCheck = /(?=.*).{6,}/;
        if (nameCheck.test($("#modal-registration-txtpassword").val()) == false) {
            $("#modal-registration-spPassWord").text("*Mật khẩu phải có cả số và chữ và dài hơn 6 kí tự");
            $("#modal-registration-spPassWord").css('color', 'red');
            checkRegistrationPassWord = 0;
        }
        else {
            $("#modal-registration-spPassWord").text("Hợp lệ");
            $("#modal-registration-spPassWord").css('color', 'green');
            checkRegistrationPassWord = 1;
        }
    });
    $("#modal-registration-txtRepassword").blur(function () {
        let value1 = $("#modal-registration-txtpassword").val();
        let value2 = $("#modal-registration-txtRepassword").val() ;         
        if(value1 != value2){
            $("#modal-registration-spRePassWord").text("Nhập Lại Mật Khẩu Sai");
            $("#modal-registration-spRePassWord").css('color', 'red')
            checkRegistrationRePassWord = 0;
        }
        else{
            $("#modal-registration-spRePassWord").text("Hợp Lệ");
            $("#modal-registration-spRePassWord").css('color', 'green');            
            checkRegistrationRePassWord = 1;  
        }        
    });
    $("#modal-registration-txtName").blur(function () { 
        let nameCheck = /(?=\d*).{5,40}/;
        if(nameCheck.test($(this).val())==false){
            $("#modal-registration-spName").text("Tên Không hợp lệ");
            $("#modal-registration-spName").css('color', 'red');
            checkRegistrationName = 0;
        }
        else{
            $("#modal-registration-spName").text("Hợp lệ");
            $("#modal-registration-spName").css('color', 'green');
            checkRegistrationName = 1;
        }
    });
    $("#modal-registration-txtEmail").blur(function () { 
        let nameCheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(nameCheck.test($(this).val())==false){
            $("#modal-registration-spEmail").text("Email Không hợp lệ");
            $("#modal-registration-spEmail").css('color', 'red');
            checkRegistrationEmail = 0;
        }
        else{
            $("#modal-registration-spEmail").text("Hợp lệ");
            $("#modal-registration-spEmail").css('color', 'green');
            checkRegistrationEmail = 1;
        }
    });
    $("#modal-registration-txtPhone").blur(function () { 
        let nameCheck = /(?=^0\d*).{10}/;
        if(nameCheck.test($(this).val())==false){
            $("#modal-registration-spPhone").text("Số Điện Thoại Không hợp lệ");
            $("#modal-registration-spPhone").css('color', 'red');
            checkRegistrationPhone = 0;
        }
        else{
            $("#modal-registration-spPhone").text("Hợp lệ");
            $("#modal-registration-spPhone").css('color', 'green');
            checkRegistrationPhone = 1;
        }
    });
    $("#modal-registration-submit").click(function () {
        if (checkRegistrationUser == 0 || checkRegistrationPassWord == 0 || checkRegistrationRePassWord == 0
            || checkRegistrationName == 0 || checkRegistrationEmail == 0 || checkRegistrationPhone == 0) {
            alert("Nhập Lại Thông Tin");
        }
        else {
            let valueDataUsers = JSON.parse(localStorage.getItem("valueUser"));            
            var successRegistration = true;
            valueDataUsers.forEach(element =>{
                if($("#modal-registration-txtuser").val() == element.user)
                {
                    successRegistration = false;
                    alert("Tên Đăng Nhập Đã Tồn Tại")
                }
            })
            if (successRegistration)
            {                
                let temp = {
                    "user": ($("#modal-registration-txtuser").val()),
                    "password": ($("#modal-registration-txtpassword").val()),
                    "permission": "3" 
                    };
                valueDataUsers.push(temp);                   
                localStorage.setItem('valueUser',JSON.stringify(valueDataUsers));
                alert("Đăng kí thành công!");
                location.href = "../login.html";
            }            
        }
    });
     //Đây là hàm search
     $("#search-product").keyup(function () {
        console.log("ok");
        const key = $(this).val();            
        $(".autocomplete-suggestions").css('display','block');
        $(".autocomplete-suggestions .list").html("");        
        valueData.filter(x =>x.title.toLowerCase().includes(key.toLowerCase())).forEach(element => {
            let temp = $("<a href='"+element.url+"'>"+
            "<img src='"+element.image+"'"+
            "    alt='"+element.title+"'>"+
            "<span class='info'>"+
            "    <span class='name'>"+element.title+"</span>"+
            "    <span class='price'>"+element.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})+"</span> </span> </a>");
            
            $(".autocomplete-suggestions .list").append(temp);
        });        
    })
    $(document).click(function () {
        $(".autocomplete-suggestions").css('display','none');
    })

   //Hết hàm search
})