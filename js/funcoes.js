
      function soma(p1, p2)
      {
        alert(p1 + p2)
      }
      function piscar()
      {
          var x = document.getElementById('blank');
          
          setInterval(function(){
            if (x.style.visibility === 'hidden'){
                x.style.visibility = 'visible';
            } else {
                x.style.visibility = 'hidden';
            }
          },100);

      }