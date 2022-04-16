$(document).ready(function () {
    var checkLoginUser = 1;
    var checkLoginPassWord = 1;
    var valueData = [
        {
            "id": "36403",
            "price": "2699000",
            "title": "Mainboard ASROCK B560M Pro4",
            "image": "https://anphat.com.vn/media/product/75_36403_b560m_pro4_l1_.png",
            "url": "/mainboard-asrock-b560m-pro4.html"
        },
        {
            "id": "36639",
            "price": "3599000",
            "title": "Mainboard ASUS ROG STRIX B560-G GAMING WIFI",
            "image": "https://anphat.com.vn/media/product/75_36639_h732__9_.png",
            "url": "/mainboard-asus-rog-strix-b560-g-gaming-wifi_id36639.html"
        },
        {
            "id": "36640",
            "price": "4399000",
            "title": "Mainboard ASUS ROG STRIX B560-I GAMING WIFI",
            "image": "https://anphat.com.vn/media/product/75_36640_h732.png",
            "url": "/mainboard-asus-rog-strix-b560-i-gaming_id36640.html"
        },
        {
            "id": "36937",
            "price": "1679000",
            "title": "Mainboard ASROCK H510M-HVS ",
            "image": "https://anphat.com.vn/media/product/75_36937_h510m_hvs_l1_.png",
            "url": "/mainboard-asrock-h510m-hvs_id36937.html"
        },
        {
            "id": "36938",
            "price": "1699000",
            "title": "Mainboard ASROCK H510M-HDV",
            "image": "https://anphat.com.vn/media/product/75_36938_h510m_hdv_l1_.png",
            "url": "/mainboard-asrock-h510m-hdv_id36938.html"
        },
        {
            "id": "37021",
            "price": "2640000",
            "title": "Màn hình máy tính HP V19 18.5 inch 9TN41AA",
            "image": "https://anphat.com.vn/media/product/75_37021_c06694167.png",
            "url": "/man-hinh-may-tinh-hp-v19-18.5-inch-9tn41aa.html"
        },
        {
            "id": "37309",
            "price": "9249000",
            "title": "Vỏ case Asus ROG STRIX HELIOS White GUNDAM LIMITED",
            "image": "https://anphat.com.vn/media/product/75_37309_rog_strix_helios_gundam_ltd_01_t.jpg",
            "url": "/vo-case-asus-rog-strix-helios-white-gundam-limited_id37309.html"
        },
        {
            "id": "37742",
            "price": "7590000",
            "title": "Màn hình máy tính HP E24T G4 23.8 inch FHD IPS 9VH85AA - Cảm ứng",
            "image": "https://anphat.com.vn/media/product/75_37742_hp_e24t_g4.jpg",
            "url": "/man-hinh-may-tinh-hp-e24t-g4-23.8-inch-fhd-ips-9vh85aa-cam-ung.html"
        },
        {
            "id": "38423",
            "price": "5389000",
            "title": "Màn hình máy tính HP M27f 2H0N1AA 27 inch FHD IPS 60Hz",
            "image": "https://anphat.com.vn/media/product/75_38423_screenshot_3.png",
            "url": "/man-hinh-may-tinh-hp-m27f-2h0n1aa-27-inch-fhd-ips-60hz.html"
        },
        {
            "id": "38424",
            "price": "5449000",
            "title": "Màn hình máy tính HP M27fw 2H1B1AA 27 inch FHD IPS ",
            "image": "https://anphat.com.vn/media/product/75_38424_screenshot_10.png",
            "url": "/man-hinh-may-tinh-hp-m27fw-2h1b1aa-27-inch-fhd-ips.html"
        }
    ]
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
            alert("Thông tin hợp lệ");
        }
    });
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
            alert("Thông tin hợp lệ");
        }
    });
})