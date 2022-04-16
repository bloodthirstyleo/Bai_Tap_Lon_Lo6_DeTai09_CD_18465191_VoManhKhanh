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
    $("#model-login-txtuser").blur(function () {
        if ($("#model-login-txtuser").val() == "") {
            $("#model-login-spUser").text("*Bắt buộc nhập");
            checkLoginUser = 0;
        }
        var nameCheck = /^[a-z]\w*/;
        if (nameCheck.test($("#model-login-txtuser").val()) == false) {
            $("#model-login-spUser").text("*Bắt buộc phải bắt đầu bằng kí tự");
            $("#model-login-spUser").css('color', 'red');
            checkLoginUser = 0;
        }
        else {
            $("#model-login-spUser").text("Hợp lệ");
            $("#model-login-spUser").css('color', 'green');
            checkLoginUser = 1;
        }
    });
    $("#model-login-txtpassword").blur(function () {
        if ($("#model-login-txtpassword").val() == "") {
            $("#model-login-spPassWord").text("*Bắt buộc nhập");
            checkLoginPassWord = 0;
        }
        var nameCheck = /(?=.*).{6,}/;
        if (nameCheck.test($("#model-login-txtpassword").val()) == false) {
            $("#model-login-spPassWord").text("*Mật khẩu phải có cả số và chữ và dài hơn 6 kí tự");
            $("#model-login-spPassWord").css('color', 'red');
            checkLoginPassWord = 0;
        }
        else {
            $("#model-login-spPassWord").text("Hợp lệ");
            $("#model-login-spPassWord").css('color', 'green');
            checkLoginPassWord = 1;
        }
    });
    $("#model-login-submit").click(function () {
        if (checkLoginUser == 0 || checkLoginPassWord == 0) {
            alert("Nhập Lại Thông Tin");
        }
        else {
            alert("Thông tin hợp lệ");
        }
    })
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

    

})