

console.log('\'Allo \'Allo! Popup');

 $.ajax({

   url:"http://www.reddit.com/r/beerporn/.json",
   method: "GET",


   success:(function (data){
    console.log(data.data.children[0].data.thumbnail);



       var html = "<ul>"
       for(var i=0; i<25; i++){

        html += "<li>" + "<img src=\"" + data.data.children[i].data.thumbnail + "\">" + "</li>";

       }

        html += "</ul>";

        $(".putstuff").html(html);
   })
  });
