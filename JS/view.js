
//let parent = document.getElementsByTagName("body")[0];
let parent = document.getElementsByClassName("gridcontainer")[0];
let parent2 = document.getElementsByClassName("Meida")[0];
parent2.appendChild(nmOfLownBk);
parent2.appendChild(whichBook);
createBookView=function(book)
{
    let div = document.createElement("div");
    //div.classList="card";
    div.setAttribute("class", "card");
    let img = document.createElement("img");
     if (book.ImageSrc)
        img.src = book.ImageSrc;
     else
    img.src = "pictures\\shutterstock_397790281.jpg";
    img.setAttribute("alt", "book");
    img.style.setProperty("width", "100%");
    div.appendChild(img);
   
    let h1=document.createElement("h1");
    h1.innerHTML=book.Title;
    div.appendChild(h1);

    let p=document.createElement("p");
    if (book.Author)
        p.innerHTML = book.Author;
    else
        p.innerHTML = "סופר אנונימי";
    div.appendChild(p);

    
   // let p2=document.createElement("p");
    let but=document.createElement("button");
    let flag=false;
    if(selectedBooks){
      selectedBooks.forEach(element => {
        if(element.Code==book.Code)
        flag=true;
});
    }
    
   
   
   if(flag==false)
    {but.innerHTML="השאלה";
    but.addEventListener("click",takeBook);
    // div.appendChild(but);
  }
else{
  but.innerHTML="השב ספר";
    but.addEventListener("click",returnBook);
    //v.appendChild(but);
}
    // but.innerHTML="השאלה";
    // but.addEventListener("click",takeBook);
    div.appendChild(but);

    
   
    //<p><button>השאלה</button></p>
  //()=> 
  function takeBook(b)
  {
      // let can=CanGetBooks();
      
    // if(can(selectedBooks.length)){
    //       let bb=new Book(book.Code,book.Title,book.Pages,book.Year,new Date());
    //       selectedBooks.push(bb);
    //       but.innerHTML="השב ספר";
    //       but.removeEventListener("click",takeBook);
    //       but.addEventListener("click",returnBook);
         
         
    //       presentData();
    //       saveToLocalStorage();  
         
    //   }


      let can=CanGetBooks();
      var countt;
      if(selectedBooks)
      countt=selectedBooks.length
      else
      countt=0;
      
      
        if(can(countt)){
          let bb=new Book(book.Code,book.Title,book.Pages,book.Year,new Date());
          if(countt==0){
            selectedBooks=[]
            selectedBooks[0]=bb

          }
          else
          selectedBooks.push(bb);
          but.innerHTML="השב ספר";
          but.removeEventListener("click",takeBook);
          but.addEventListener("click",returnBook);
         
         
          presentData();
          saveToLocalStorage();  
        }
         else{
         window.alert("ברשותך 5 ספרים אין אפשרות לקחת יותר מכמות זו")
         }
  }       

  function saveToLocalStorage(){
        localStorage.setItem("BooksList",JSON.stringify(selectedBooks));
  }
  function CanGetBooks()
  {
      let maxBooks = 5;
      return function check (length) {
          return length<maxBooks;
      }
  }

  function returnBook(b)
  {

          but.innerHTML="השאלה";
          but.removeEventListener("click",returnBook);
          but.addEventListener("click",takeBook);
         let arr = selectedBooks.filter(i => i.Code == b.Code)
         let index = selectedBooks.indexOf(arr[0]);

        selectedBooks.splice(index, 1);
       
        
        presentData();
          saveToLocalStorage();  
          
  }
 

    parent.appendChild(div);

  }  
// {
//     "Code":777,
//     "Title":"book7",
//     "Pages":350,
//     "Year":2016,
//     "SelctedDate":null
    
// },
// {
//     "Code":888,
//     "Title":"book8",
//     "Pages":134,
//     "Year":2018,
//     "SelctedDate":null
// },
// {
//     "Code":999,
//     "Title":"book9",
//     "Pages":350,
//     "Year":2016,
//     "SelctedDate":null
// }
