 function add(){
      var player1_name=document.getElementById("player1_name_input").value;
      var player2_name=document.getElementById("player2_name_input").value;
      localStorage.setItem("player1 name",player1_name);
      localStorage.setItem("player2 name",player2_name);
      window.location="gamepage.html";
      
 }