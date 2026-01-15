 const todoList = JSON.parse(localStorage.getItem('todos')) || [{
      nameofTask : 'Make Lunch',
      dueDate : '07-01-2026'
    },{
      nameofTask : 'Study',
      dueDate : '07-01-2026'
    }];

    

    function showList (){
      let todoListHTML='';
      todoList.forEach((todo,index) => {
        const displayName=todo.nameofTask;
        const displayDate=todo.dueDate;
        const html=`
        <div>${displayName}</div> 
        <div>${displayDate}</div>
          <button class="delete" onclick="
            todoList.splice(${index},1);
            saveTodos();
            showList();
          " >Delete</button>
        `;
        todoListHTML+=html;
      });





      // for(let i = 0; i < todoList.length;i++ ){
      //   const displayName=todoList[i].nameofTask;
      //   const displayDate=todoList[i].dueDate;
      //   const html=`
      //   <div>${displayName}</div> 
      //   <div>${displayDate}</div>
      //     <button class="delete" onclick="
      //       todoList.splice(${i},1);
      //       saveTodos();
      //       showList();
      //     " >Delete</button>
      //   `;
      //   todoListHTML+=html;
        
      // }
      document.querySelector('.showList').innerHTML=todoListHTML;
    }

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }


    function addTask(){
      let getTask=document.querySelector('.task');
      let getDate=document.querySelector('.date');

      let taskName=getTask.value;
      let taskDate=getDate.value;
      if (getTask.value==='' || getDate.value==='') {
        alert('Please add your task!')
      }else{
        todoList.push({
          nameofTask:taskName,
          dueDate:taskDate
        });
        saveTodos();
        showList();
      }
  
      getTask.value='';
      getDate.value='';
    }

    saveTodos();
    showList();
