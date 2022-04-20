$(document).ready(function () {  
    
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

    localStorage.setItem('valueUser',JSON.stringify(valueUser));
    localStorage.setItem('valueData',JSON.stringify(valueData));  
})
