$( document ).ready(function() {
  var array = Array();
  array[0]="Cuponsazo perron 1 10%";
  array[1]="Cuponsazo perron 2 20%";
  array[2]="Cuponsazo perron 3 30%";
  array[3]="Cuponsazo perron 4 40%";
  array[4]="Cuponsazo perron 5 50%";
  array[5]="Cuponsazo perron 6 60%";

  function display_array()
  {
    let e = "<hr/>";   
      
    for (var y=0; y<array.length; y++)
    {
      e += array[y] + "<br/>" + "<hr>";
    }
    document.getElementById("couponsList").innerHTML = e;
  }
});





