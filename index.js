const form=document.getElementById('form');
  

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nom=document.getElementById('nom').value.trim();
    const prénom=document.getElementById('prénom').value.trim();
    const tel=document.getElementById('tel').value.trim();
    const profession=document.getElementById('profession').value.trim();
    
    if(!nom || !prénom || !tel || !profession){
        alert('Veuillez remplir tous les champs');
        return;
    }
    const table=document.getElementById('table').getElementsByTagName('tbody')[0];
    const newRow=table.insertRow();
    const cell1=newRow.insertCell(0);
    const cell2=newRow.insertCell(1);
    const cell3=newRow.insertCell(2);
    const cell4=newRow.insertCell(3);
    cell1.textContent=nom;
    cell2.textContent=prénom;
    cell3.textContent=tel;
    cell4.textContent=profession;
  
   
    form.reset();




})



