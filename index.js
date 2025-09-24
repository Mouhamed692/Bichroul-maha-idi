const form=document.getElementById('form');
  
const table = document.getElementById('table').getElementsByTagName('tbody')[0];


function saveToLocalStorage() {
    const rows = Array.from(table.rows).map(row => ({
        nom: row.cells[0].textContent,
        prénom: row.cells[1].textContent,
        tel: row.cells[2].textContent,
        profession: row.cells[3].textContent
    }));
    localStorage.setItem('tableData', JSON.stringify(rows));
}
function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('tableData') || '[]');
    data.forEach(item => {
        const newRow = table.insertRow();
        newRow.insertCell(0).textContent = item.nom;
        newRow.insertCell(1).textContent = item.prénom;
        newRow.insertCell(2).textContent = item.tel;
        newRow.insertCell(3).textContent = item.profession;
    });
}


window.addEventListener('DOMContentLoaded', loadFromLocalStorage);



form.addEventListener('submit',(e)=>{
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
  
   saveToLocalStorage();
    form.reset();




})

