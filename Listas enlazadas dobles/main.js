import Product from './product.js'
import Inventary from './inventary.js'
import Interfaz from './interfaz.js'

var interfaz = new Interfaz;

const btnAdd = document.querySelector('#btnAdd');
const btnDelete = document.querySelector('#btnDelete');
const btnSearch = document.querySelector('#btnSearch');
const btnClean = document.querySelector('#btnClean');
const btnList = document.querySelector('#btnList');
const btnInvertedList = document.querySelector('#btnInvertedList');
//const cboxInsert = document.querySelector('#checkboxInsert');

var product;
var inventary = new Inventary();
console.log(inventary);

btnAdd.addEventListener('click', () => {

    let code = document.getElementById('Code').value;
    let name = document.getElementById('Name').value;
    let quantity = document.getElementById('Quantity').value;
    let cost = document.getElementById('Cost').value;
    var checkbox = document.getElementById('checkbox');

    if (code != '' && name != '' && quantity != '' && cost != '') {
        
        if (inventary.inicio == null) {

            if (checkbox) {
               console.log("The inventary is empty");
            } else {
                product = new Product(code, name, quantity, cost);
                inventary.add(product);
                interfaz.showRegistry('Add', product);
            }
        } else {
            if (checkbox) {

                if (checkbox.value != '') {
                    var aux = new Product(code, name, quantity, cost);

                    if (inventary.search(aux) != null) {

                        if (inventary.search(aux).code != aux.code) {
                            inventary.insertProduct(aux, checkbox.value);
                            product = aux;
                            interfaz.showRegistry('Insert', product);
                        }if(inventary.length >20){
                            console.log("sorry the inventary is full rigth now")
                            return null
                        }
                         else {
                            console.log("The products have the same code");
                        }
                    } else {
                        let found= inventary.insertProduct(aux, checkbox.value);
                        product = aux;
                        if(found != false) {
                            interfaz.showRegistry('Insert', product);
                        } else {
                            console.log("You can´t insert products in the end of the list")
                        }
                    }

                } else {
                    console.log("Checkbox is not selected");
                }

            } else {
                var aux = new Product(code, name, quantity, cost);

                if (inventary.search(aux) != null) {

                    if (inventary.search(aux).code != aux.code) {
                        inventary.add(product, aux);
                        product = aux;
                        interfaz.showRegistry('Agregar', product);
                    } else {
                        console.log("The products have the same code");
                    }

                } else {
                    inventary.add(product, aux);
                    product = aux;
                    interfaz.showRegistry('Add', product);
                }
            }
        }

        console.log(inventary );

        btnList.addEventListener('click', () =>{
            inventary.list(interfaz);
        });

        btnInvertedList.addEventListener('click', () => {
            inventary.inverseList(interfaz);
        });


    } else {
        console.log("Empty spaces")
        }
});

btnDelete.addEventListener('click', () => {
    let code = document.getElementById('Code').value;

    if (code != '') {

        if (inventary.inicio != null) {
            console.clear();
            var aux = new Product(code, '', '', '', '');
            var found = inventary.delete(aux);
            interfaz.cleanTheList();
            if (found != null) {
                interfaz.showRegistry('Delete', found);
                interfaz.cleanTheList();
                console.log(found);
            } else {
                console.log("Product dont exist");
            }
        } else {
            console.log("No products in inventary");
        }
    } else {
        console.log("Product code not found");
    }
});

btnSearch.addEventListener('click', () => {

    let code = document.getElementById('Code').value;

    if (code != '') {

        console.clear();
        var product = new Product(code, '', '', '', '');
        product = inventary.search(product);
        console.log(inventary );

        if (product == undefined) {
            interfaz.hideProduct();
            console.log(`product not found`);
        } else {
            interfaz.showProduct(product);
            interfaz.showRegistry('Search', product);
            console.log(product);
        }
    } else {
        console.log("Enter product code")
        }
});

btnClean.addEventListener('click', () => {

    let code = document.getElementById('Code');
    let name = document.getElementById('Name');
    let quantity = document.getElementById('Quantity');
    let cost = document.getElementById('Cost');
    let checkbox = document.getElementById('checkbox');
    let checkboxInsert = document.getElementById('checkboxInsert');
    interfaz.clean(code, name, quantity, cost, checkbox, checkboxInsert);
    interfaz.cleanTheList();

});

cboxInsert.addEventListener('click', () => {
    interfaz.showInsert(cboxInsert);
});

