
$(document).ready(function () {  
    
    //Đây là hàm search
   $("#search-product").keyup(function () {        
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
   $("#userInfo_body").ready(function() { 
       console.log("ok");    
        let successLoginUser = localStorage.getItem("successLoginUser");
        $("#userInfo_body").html("<h2 class='text-danger'>"+successLoginUser+"</h2>"+
                        "<p class='text-danger'>Đây là tài khoản của "+successLoginUser+"</p>"+                        
                        "<a href='login.html' id='logoutUer' class='text-danger'>Đăng xuất</a>");

        
        $("#logoutUer").click(function() {            
            localStorage.setItem("successLogin","b"); 
            console.log("logout");           
        });  
    });
      

  //Hết hàm search

   localStorage.setItem('valueUser',JSON.stringify(valueUser));
   localStorage.setItem('valueData',JSON.stringify(valueData));
   $("#linkLissProductAll").click(function() {
       let valueSearch = " ";
       localStorage.setItem("descriptionListItem",valueSearch);
   });
   $("#value-selectSearch").change(function () { 
       let valueSearch = $("#value-selectSearch").val();
       localStorage.setItem("descriptionListItem",valueSearch);
       location.href = "listProduct.html";       
   });
   $("#submit-search").click(function() {
       let valueSearch = $("#search-product").val();
       localStorage.setItem("descriptionListItem",valueSearch);           
   });  
})
