var array = JSON.parse(localStorage.getItem("Products")) || [];

function Products(n, c, i, p, g, s){
    this.name = n;
    this.category = c;
    this.image = i;
    this.price = p;
    this.gender = g;
    this.sold = s;
}

function products(e){
    e.preventDefault();

    let form = document.getElementById("form")

    let name = form.name.value
    let category = form.category.value
    let image_url = form.image.value
    let price = form.price.value
    let gender = form.gender.value
    let sold = form.sold.checked
    console.log(sold)
    

    let p1 = new Products(name, category, image_url, price, gender, sold)
    array.push(p1)
    localStorage.setItem("Products", JSON.stringify(array));    

}

