$(document).ready(function () {
    var checkLoginUser = 1;
    var checkLoginPassWord = 1;
    
   
   //Đây là hàm kiểm tra thông tin của modal login
    
    $("#modal-login-txtuser").blur(function () {
        if ($("#modal-login-txtuser").val() == "") {
            $("#modal-login-spUser").text("*Bắt buộc nhập");
            checkLoginUser = 0;
        }
        var nameCheck = /^[a-z]\w*/;
        if (nameCheck.test($("#modal-login-txtuser").val()) == false) {
            $("#modal-login-spUser").text("*Bắt buộc phải bắt đầu bằng kí tự");
            $("#modal-login-spUser").css('color', 'red');
            checkLoginUser = 0;
        }
        else {
            $("#modal-login-spUser").text("Hợp lệ");
            $("#modal-login-spUser").css('color', 'green');
            checkLoginUser = 1;
        }
    });
    $("#modal-login-txtpassword").blur(function () {
        if ($("#modal-login-txtpassword").val() == "") {
            $("#modal-login-spPassWord").text("*Bắt buộc nhập");
            checkLoginPassWord = 0;
        }
        var nameCheck = /(?=.*).{6,}/;
        if (nameCheck.test($("#modal-login-txtpassword").val()) == false) {
            $("#modal-login-spPassWord").text("*Mật khẩu phải có cả số và chữ và dài hơn 6 kí tự");
            $("#modal-login-spPassWord").css('color', 'red');
            checkLoginPassWord = 0;
        }
        else {
            $("#modal-login-spPassWord").text("Hợp lệ");
            $("#modal-login-spPassWord").css('color', 'green');
            checkLoginPassWord = 1;
        }
    });
    $("#modal-login-submit").click(function () {
        if (checkLoginUser == 0 || checkLoginPassWord == 0) {
            alert("Nhập Lại Thông Tin");
        }
        else {            
            let valueDataUsers = JSON.parse(localStorage.getItem("valueUser"));
            var successLogin = false;
            valueDataUsers.forEach(element => {
                if (($("#modal-login-txtuser").val()) == element.user && ($("#modal-login-txtpassword").val())  == element.password)
                {
                    successLogin = true;
                    localStorage.setItem("successLogin","a");
                    localStorage.setItem("successLoginUser",$("#modal-login-txtuser").val());
                    location.href = "index.html";
                }
            });
            console.log(successLogin)
        }
        
    });
    $("#linkLissProductAll").click(function() {
        let valueSearch = " ";
        localStorage.setItem("descriptionListItem",valueSearch);
    }); 
    $("#value-selectSearch").change(function () { 
        let valueSearch = $("#value-selectSearch").val();
        localStorage.setItem("descriptionListItem",valueSearch);
        location.href = "listProduct.html";       
    });
    $("login_container").ready(function() {
        let successLoginUser = localStorage.getItem("successLoginUser");
        
        console.log(successLoginUser);        
        if(localStorage.getItem("successLogin") == "a")
        {
            $("#login_container").html("<a href='userInfo.html' class='text-white mt-5 pt-3'><h3>"+successLoginUser+"</h3></a>");
        }
        else
        {
            $("#login_container").html("<a href='login.html' class='text-white mt-3'>Đăng Nhập</a>"+
                                        "<a href='registration.html' class='text-white'><br>Đăng ký</a>");
        }
    });

    
     /* #region search funtion */
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
    });

   /* #endregion */    
})