 const expenseList = JSON.parse(localStorage.getItem('expense') )|| [{
      expense : 'Bought lunch',
      price : 20
    },{
      expense : 'Bought a T-shirt',
      price : 3
    }]

    const expense = document.querySelector('.inputName');
    const price = document.querySelector('.inputCost');

   

    function showExpenses(){
      let insideHTML = '';
      let sum = 0;
      let html='';
      
      expenseList.forEach((fullList,index) => {
        const Expenses = fullList.expense;
        const Prices = Number(fullList.price); 
        html = `
         <div>
           <div>${Expenses}</div>
           <div>$${Prices}</div>
           <button class="delete" onclick="expenseList.splice(${index},1)
           saveExpenses();
           showExpenses();
           ">Delete</button>
         </div>`;
        sum+=Prices;
        

         insideHTML+=html
      });




      // for (let i = 0; i<expenseList.length;i++){
      //   const Expenses = expenseList[i].expense;
      //   const Prices = Number(expenseList[i].price);
      //   html = `
      //   <div>
      //     <div>${Expenses}</div>
      //     <div>$${Prices}</div>
      //     <button class="delete" onclick="expenseList.splice(${i},1)
      //     saveExpenses();
      //     showExpenses();
      //     ">Delete</button>
      //   </div>`;
      //   sum+=Prices;
        

      //   insideHTML+=html
      

      document.querySelector('.displayExpenses').innerHTML=insideHTML; 
      document.querySelector('.displayTotal').innerHTML=`Total : $${sum}`; 
    }

    function addExpenses(){
      if (expense.value === '' || price.value === '' || price.value<0) {
        alert('Please add valid Expense and Cost to calculate total')
        showExpenses();
      }else{
        expenseList.push({
          expense: expense.value,
          price: Number(price.value)
        });
        saveExpenses()
        expense.value='';
        price.value=''
        showExpenses();
      }
    }

    function saveExpenses(){
      localStorage.setItem('expense',JSON.stringify(expenseList));
    }

 

    showExpenses();
    saveExpenses();
    
