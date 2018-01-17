var cnt=0;
var cats =
  [{name:"meeow1", img:"img/Peterbold3.jpg" },
  {name:"meeow2",img:"img/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"}]
cats.map(function(cat){
  $("#catlist").append("<figure><img class=\"catImg\" src="+cat.img+" alt=\"Cat\"> <figurecaption>"+ cat.name +"</figurecaption> </figure>");
});

$('.catImg').click(function(){
  cnt++;
  $(".numOfClick").text(cnt);
});
//<figure><img class="catImg" src=cat.img alt="Cat"> <figurecaption> cat.name </figurecaption> </figure>
