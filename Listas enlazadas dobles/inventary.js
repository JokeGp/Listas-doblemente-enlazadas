import Product from "./product.js";
export default class Inventary{

    constructor(){
        this.inicio=null;
    }
    /*agregar(nuevo){
        if (this.inicio==null){
            this.inicio=nuevo;
        } else {
            let temp=this.inicio;
            while (temp.siguiente!=null){
                temp=temp.siguiente;
            }
            temp.siguiente=nuevo;
        }
    }*/   
    add(product, newProduct) {
      if (this.inicio == null) {
          this.inicio = product;
      } else {
          let temp = this.inicio
          while (temp.next != null) {
          temp = temp.next
          }
          temp.next = newProduct;
          temp.next.past = temp;
      }
  }  
   /* add(nuevo){    
      if (this.inicio==null)
        this.inicio=nuevo;
      else              
        this._add(nuevo,this.inicio);
    }
 
    _add(nuevo,last){
      if (last.next==null)
          last.next=nuevo; //....
      else            
        this._add(nuevo,last.next);
    }*/
 
    list(interfaz){
      let temp = this.inicio;
      interfaz.showList(temp);
    }
 
    inverseList(interfaz){
      let temp = this.inicio;
      interfaz.showInverseList(temp);
    }
 
 
 
    /*listar2(){
      if (!this.inicio)
        return "";
      else
        return this._listarRec(this.inicio);;
    }
      _listarRec(nodo){
      if (nodo.next==null)
        return nodo.info();
      else
        return nodo.info() + this._listarRec(nodo.next);
    }  */      
 
 
 
 
    search(product){
      if (!this.inicio)
        return null;
      let temp=this.inicio;
      while(temp!=null){
        if (temp.code==product.code)
          return temp;
        temp=temp.next;
      }
      return null;
    }
    
    delete(code){
            //this.inicio.siguiente=
      //this.inicio.siguiente.siguiente;
       let temp = this.inicio;
        if (this.inicio != null) {
          if (this.inicio.code == code.code) {
            this.inicio = this.inicio.next;
            if (this.inicio != null) {
              this.inicio.past = null;
            }
            return new Product(temp.code, temp.name, temp.cost, temp.total, temp.next, temp.past);
          } else {
            try {
              while (temp.next.code != code.code) {
                temp = temp.next;
              }
              if (temp.next.code == code.code) {
                var found = new Product(temp.next.code, temp.next.name, temp.next.quantity, temp.next.cost, temp.next.total, temp.next.next, temp.next.past);
                try {
                  temp.next = temp.next.next;
                  temp.next.past = temp;
                } catch (error) {
                  return found;
                }
                return found;
              }
            } catch (error) {}
          }
        }
      };

    insertProduct(product, box) {
      let temp = this.inicio;
      if (box == 1) {
          this.inicio = product;
          product.next = temp;
      } else {
          let i = 2;
          while (i != box) {
              if (temp.next != null) {
                  temp = temp.next
                  i++;
              } else {
                console.log("Invalid Position");
                break;
              }
          }
          if (i == box) {
              product.next = temp.next;
              temp.next = product;
              product.past = temp;
              product.next.past = product;
          }
      }
  }
}