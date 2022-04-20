$(document).ready(function () {

    
    let valueDataProduct = JSON.parse(localStorage.getItem("valueData"));
    let keyinfoItem = localStorage.getItem("descriptionInfoItem"); 
    
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
   });
   $(document).click(function () {
       $(".autocomplete-suggestions").css('display','none');
   });

  //Hết hàm search
    
  $("#infoItem-container").ready(function() {
    valueDataProduct.filter(x =>x.id.toLowerCase().includes(keyinfoItem.toLowerCase())).forEach(element => {
        let temp = $("<div class='col-5'>"+
                        "<img src='"+element.image+"' alt='' class='img-fluid'>"+
                    "</div>"+
                    "<div class='col-7'>"+
                        "<p>ID : "+element.id+"</p>"+
                        "<p>"+element.title+"</p>"+
                        "<p class='text-danger'>Giá : "+element.price+"</p>"+
                    "</div>");                           
        $("#infoItem-container").append(temp);                                 
    });
});
     
})


    
    

     

  
     
