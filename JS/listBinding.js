 //  Class wil keep a reference of the physical elements that are within the HTML document
 
 
 class ListBinding {
    constructor(element){
      
      //this instance property (listElement) refers to the physical HTML ELEMENT
      this.listElement = element;
      this.textList = [];
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
     update() {
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

   
   //when the add method is called the user will add text as an argument, that will then 
   // be passed into the array 
   // the array will then be updated 
      add (text) {
         this.textList.push(text);
         this.update();
      }

      //using splice, we can remove an item starting at a specific index within the array
      //take in an index value as an argument 
      remove (index){
         //splice = .splice(index,#of elements to be removed at that index)
         this.textList.splice(index, 1);
         this.update();
      }


}
