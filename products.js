var products_data = JSON.parse(localStorage.getItem("Products"));
// document.querySelector("#container").innerText= products_data.length
document.getElementById("counter").innerHTML = `Total Products: ${products_data.length}`
products_data.map(function(elem, index){
    console.log("index", index)
   var grid = document.createElement("div");
   grid.setAttribute("class", "items")

   var img = document.createElement("img");
   img.src = elem.image;

   var name = document.createElement("p");
   name.textContent = `Name: ${elem.name}`;

   var category = document.createElement("p");
   category.textContent = `Category: ${elem.category}`;

   var price = document.createElement("p");
   price.textContent = `Price: ${elem.price}`;

   var gender = document.createElement("p");
   gender.textContent = `Gender: ${elem.gender}`;

   var soldvalue=document.createElement("p");
   soldvalue.textContent = elem.sold;

   var remove = document.createElement("button");
   remove.innerText = "Remove";
   remove.setAttribute("id", "remove")
   remove.addEventListener("click", function(){
       removeItem(elem, index);
   });

   var sold = document.createElement("button");
   sold.innerText = "Sold"
   sold.setAttribute("id","sold")
   if(elem.sold==true){
    sold.style.backgroundColor="red"
   }else{
    sold.style.backgroundColor="green"
   }
   
   sold.addEventListener("click", function(){
    //    console.log(soldvalue.innerHTML)
       var x = trueorfalse(soldvalue.innerHTML);
       soldvalue.textContent = x;
       if(soldvalue.textContent == "true"){
        sold.style.backgroundColor="red"
        
       }else{
        sold.style.backgroundColor="green"
       }
   });

   grid.append(img, name, category, price, gender, soldvalue, remove, sold)
   document.querySelector("#product_S").append(grid);

});

function removeItem(elem, index){
    products_data.splice(index, 1);
    localStorage.setItem("Products", JSON.stringify(products_data));
    window.location.reload()
}

function trueorfalse(e){
    if(e=="true"){
        return "false";
    }else{
        return "true";
    }
    
}