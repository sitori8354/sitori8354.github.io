
function receive(){
  var name=$("input#knowinput").val();
  alert("hi"+name);
  
}
function check(){
  var come=$("input#where");
  var whereopt=[];
  
  for(var i=0;i<whereopt.length;i++){
   if( $(come=[i]).prop("checked") ){
    whereopt.push( $(come[i]).val() );
   }
  }
  alert("你好,原來你"+whereopt[i]);
}
