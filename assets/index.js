let bouton = document.getElementById("btn");
let liste = document.getElementById("list");

bouton.onclick = function() {
    let textvalue = document.getElementById("typeinput").value;
    let listHtmln = `<tr>` +`<td>`+ textvalue +`</td>` 
      + `<td>` + `<a href="#" class="item-modify"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> </a>` + `</td>` 
      + `<td>` + `<a href="#" class="item-delete"><i class="fa fa-trash " aria-hidden="true"></i></a>` + `</td>` + `</tr>`;
    let prependElement = listHtmln + liste.innerHTML;
    liste.innerHTML = prependElement;
    deleteElement();
    addModifyListener();

    // Clear the input value
    document.getElementById("typeinput").value = "";
}

function addModifyListener() {
    let btnModifies = document.getElementsByClassName("item-modify");
    for (const btnModify of btnModifies) {
        btnModify.addEventListener('click', function() {
            let listItem = this.closest('tr');
            let currentText = listItem.cells[0].textContent;
            let newText = prompt("Enter new text:", currentText);
            if (newText !== null) {
                listItem.cells[0].textContent = newText;
            }
        });
    }
}

function deleteElement() {
    let btnDeletes = document.getElementsByClassName("item-delete");
    for (const btnDelete of btnDeletes) {
        btnDelete.addEventListener('click', function() {
            this.closest('tr').remove();
            // this.closest('tr').parentNode.removeChild(this.closest('tr'));
        });
    }
}