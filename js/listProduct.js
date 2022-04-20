$(document).ready(function () {

    let keyListItem = localStorage.getItem("descriptionListItem");
    let valueDataProduct = JSON.parse(localStorage.getItem("valueData"));    
    $("#container-listItem").ready(function() {
        valueDataProduct.filter(x =>x.title.toLowerCase().includes(keyListItem.toLowerCase())).forEach(element => {
            let temp = $("<div class='col-3 border'>"+
                            "<a href='infoProduct.html' class='link-infoItem' id='link-"+element.id+"'>"+
                            "<img src='"+element.image+"' alt='' class='img-fluid'>"+
                            "<p>ID : "+element.id+"</p>"+
                            "<p>"+element.title+"</p>"+
                            "<p class='text-danger'>Giá : "+element.price+"</p></a></div>");
            $("#container-listItem").append(temp);                                 
        });
        $(".link-infoItem").click(function() {
            let id_Value = $(this).text().slice(5,11);
            localStorage.setItem("descriptionInfoItem",id_Value);
        });   
    })
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
    

    //Đây là hàm search
   $("#search-product").keyup(function () {
       console.log("ok");
       const key = $(this).val();            
       $(".autocomplete-suggestions").css('display','block');
       $(".autocomplete-suggestions .list").html("");        
       valueDataProduct.filter(x =>x.title.toLowerCase().includes(key.toLowerCase())).forEach(element => {
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