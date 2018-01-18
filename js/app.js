var cats =
  [{name:"meeow1", img:"img/Peterbold3.jpg", cnt:0},
  {name:"meeow2",img:"img/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg", cnt:0},
  {name:"meeow3", img:"img/happy-cat-blog-cover.jpg", cnt:0},
  {name:"meeow4", img:"img/Nqf3H.jpg", cnt:0},
  {name:"meeow5", img:"img/petmd-cat-happy-10.jpg", cnt:0},
  ]
cats.map((cat) => {
  $("#catlist").append("<p id=\""+cat.name+"Name\" >"+cat.name+"</p>");

  $("#"+cat.name+"Name").click(()=>{
    $("#catDisplayArea").empty();
    $("#catDisplayArea").append("<figure><img class=\""+cat.name+"Img\" src="+cat.img+" alt=\"Cat\"> <figurecaption>"+ cat.name +"</figurecaption> </figure>");
    $("#catDisplayArea").append("<p>"+cat.name+" counter: <span class=\"numOfClick"+cat.name+"\">"+cat.cnt+"</span></p>");

    $("."+cat.name+"Img").click(() => {
      cat.cnt++;
      $(".numOfClick"+cat.name).text(cat.cnt);
    });
  });
});





/*$("#catlist").append("<figure><img class=\""+cat.name+"Img\" src="+cat.img+" alt=\"Cat\"> <figurecaption>"+ cat.name +"</figurecaption> </figure>");
$("#catlist").append("<p>"+cat.name+" counter: <span class=\"numOfClick"+cat.name+"\">"+cat.cnt+"</span></p>");
$("."+cat.name+"Img").click(() => {
  cat.cnt++;
  $(".numOfClick"+cat.name).text(cat.cnt);
});*/
