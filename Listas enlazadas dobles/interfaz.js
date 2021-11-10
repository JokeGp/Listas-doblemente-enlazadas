export default class Interfaz {
    showProduct(product) {
        let tableCode = document.getElementById('tableCode');
        let tableName = document.getElementById('tableName');
        let tableQuantity = document.getElementById('tableQuantity');
        let tableCost = document.getElementById('tableCost');
        let tabletotal = document.getElementById('tabletotal');
        tableCode.innerText = product.code;
        tableName.innerText = product.name;
        tableQuantity.innerText = product.quantity;
        tableCost.innerText = product.cost;
        tabletotal.innerText = product.total;
    }
    hideProduct() {
        let tableCode = document.getElementById('tableCode');
        let tableName = document.getElementById('tableName');
        let tableQuantity = document.getElementById('tableQuantity');
        let tableCost = document.getElementById('tableCost');
        let tabletotal = document.getElementById('tabletotal');
        tableCode.innerText = '----';
        tableName.innerText = '----';
        tableQuantity.innerText = '----';
        tableCost.innerText = '----';
        tabletotal.innerText = '----';
    }
    showList(temp) {
        let table = document.getElementById('list');
        table.innerHTML = '';
        let headboard = table.insertRow(-1);
        let title1 = headboard.insertCell(0);
        let title2 = headboard.insertCell(1);
        title1.textContent = 'Code';
        title2.textContent = 'Name';
        while (temp != null) {
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.textContent = temp.code;
            cell2.textContent = temp.name;
            temp = temp.next;
        }
    }
    showInverseList(temp) {
        let tableinvertida = document.getElementById('invertedList');
        tableinvertida.innerHTML = '';
        let headboard = tableinvertida.insertRow(0);
        let title1 = headboard.insertCell(0);
        let title2 = headboard.insertCell(1);
        title1.textContent = 'Code';
        title2.textContent = 'Name';
        while (temp != null) {
            let row = tableinvertida.insertRow(1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.textContent = temp.code;
            cell2.textContent = temp.name;
            temp = temp.next;
        }
    }

    cleanTheList(){
        let table = document.getElementById('list');
        table.innerHTML = '';
        let tableinvertida = document.getElementById('invertedList');
        tableinvertida.innerHTML = '';
        return -1;
    };

    showRegistry(event, product) {
        let tableHistory = document.getElementById('history');
        let row = tableHistory.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.textContent = event;
        cell2.textContent = product.code;
        cell3.textContent = product.name;
    }
    showInsert(cboxInsert) {
        if (cboxInsert.checked == true) {
            let divinsert = document.getElementById('divinsert');
            divinsert.innerHTML = '<input name="casilla" type="number" placeholder="Casilla" id="casilla" />';
        } else if (cboxInsert.checked == false) {
            let casilla = document.querySelector('#casilla');
            casilla.remove();
        }
    }

    clean(code, name, quantity, cost) {
        code.value = '';
        name.value = '';
        quantity.value = '';
        cost.value = '';
/*        checkboxInsert.checked = false;
        if (checkbox) {
            checkbox.remove();
        }*/
    }
   
}