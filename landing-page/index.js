
 
    var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 2000);
    let len = 1;
    function next() {
        document.getElementById('radio' + len).checked = true; 
        len++;
        if(len > 4){
           len = 1;
          }
    }
    function pre() {
        len--;
        if(len<1){
            len=4
        }
        document.getElementById('radio' + len).checked = true; 
        if(len< 1){
           len = 4;
          }
    }