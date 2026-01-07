    const output = document.querySelector('.output');

    function allClear(){
      const clear = document.querySelector('.clear');
      clear.addEventListener('click',function(){
        output.value='';
      });
    }

    function displayNum(num){
      output.value+=num;
    }

    function result (){
      let calculation=Number(eval(output.value));
      output.value=`${calculation}`;
    }
  

    allClear();