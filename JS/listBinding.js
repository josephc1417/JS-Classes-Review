 //  Class wil keep a reference of the physical elements that are within the HTML document
 
 
 class ListBinding {
    constructor(element){
      
      //this instance property (listElement) refers to the physical HTML ELEMENT
      this.listElement = element;
      this.textList = [
         "hi","bye","Go"
      ];
    }

    // creating a static method (helper method )
    // create an item <li> with text passed into it
    // item <li> + text = [] >> appended to this.listElement = ul
    static createListElement(text) {
         const li = document.createElement("li");
         li.textContent = text;

         return li;
      
    }


    //This instance method will update the DOM with the items Contained in //*>> this.textList[] <<*/
     updates() {
      //* Remove all existing <li> element tags first from parent Element(this.listElement)
      while (this.listElement.firstChild){
           this.listElement.removeChild(this.listElement.firstChild);
      }
      
      //this will loop through the array of sting literals and append each array element to this.listElement
      // we are appending the stat
      for (const text of this.textList) {
         this.listElement.appendChild(ListBinding.createListElement(text));
     }
   }
}
