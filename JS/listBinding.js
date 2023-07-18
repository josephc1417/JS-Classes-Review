 //  Class wil keep a reference of the physical elements that are within the HTML document
 
 
 class ListBinding {
    constructor(element){
      
      //this instance property (listElement) refers to the physical HTML ELEMENT
      this.listElement = element;
      this.textList = [];
    }

     //This instance method will update the DOM with the items Contained in //*>> this.textList[] <<*/
     updates() {

     }
 }