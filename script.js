let todo =document.querySelector("#input");

let add2 = document.querySelector("#add");
let list = document.querySelector("#myList");


add2.addEventListener('click',()=>{
      const newList = document.createElement('li');
      const delButton = document.createElement('button');
      const EditButton = document.createElement('button');
      EditButton.style.padding = '8px 12px';
EditButton.style.margin = '5px';
EditButton.style.borderRadius = '4px';
EditButton.style.border = '1px solid #ccc';
EditButton.style.backgroundColor = '#f0f0f0';
EditButton.style.cursor = 'pointer';

delButton.style.padding = '8px 12px';
delButton.style.margin = '5px';
delButton.style.borderRadius = '4px';
delButton.style.border = '1px solid #ccc';
delButton.style.backgroundColor = '#f0f0f0';
delButton.style.cursor = 'pointer';

newList.style.padding = '10px 15px';
newList.style.margin = '5px 0 0 0';
newList.style.border = '1px solid #ccc';
newList.style.borderRadius = '4px';
newList.style.backgroundColor = '#f9f9f9';
newList.style.listStyleType = 'none'; // Remove bullet points
newList.style.cursor = 'pointer';

newList.addEventListener('mouseover', () => {
  newList.style.backgroundColor = '#e0e0e0';
});
newList.addEventListener('mouseout', () => {
  newList.style.backgroundColor = '#f9f9f9';
});


      delButton.textContent = 'Delete'
      newList.textContent = todo.value || 'Invalid Value';
      EditButton.textContent = 'Edit'
     
      
      EditButton.addEventListener('click', () => {
        if (newList.isContentEditable) {
            newList.contentEditable = 'false';
            EditButton.textContent = 'Edit';
    
           
            
        } else {
            newList.contentEditable = 'true';
            newList.focus();
            EditButton.textContent = 'Save';
    
          
        }
    });

                


      newList.addEventListener('click', () => {
           
            if (newList.style.textDecoration === 'line-through') { 
              newList.style.textDecoration = '';
            } else {
              newList.style.textDecoration = 'line-through';
            }
          });
      
      
      list.appendChild(newList);
      list.appendChild(delButton);
      list.appendChild(EditButton);

      delButton.addEventListener('click',()=>{
            list.removeChild(newList);
            list.removeChild(delButton);
            list.removeChild(EditButton);
      })

      
  todo.value ='';
})


