$( document ).ready(function(){
    $("#facebook").click(function (){
        window.open('http://facebook.com', '_blank'); 
    });
    $("#twitter").click(function (){
        window.open('http://twitter.com', '_blank'); 
    });
    $("#youtube").click(function (){
        window.open('http://youtube.com', '_blank'); 

    });
    $("#instagram").click(function (){
        window.open('http://instagram.com', '_blank'); 
    });

    var date=new Date(),
    year = date.getFullYear(),
    text = "© " + year + " Momi";
    document.getElementById("copyrightOutput").innerHTML=text;
});