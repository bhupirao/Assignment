function Product(name,category,image,price,gender){
 this.name = name;
this.category = category;
this.image=image;
this.price=price;
this.gender=gender;
sold=false
}
let arr=JSON.parse(localStorage.getItem("Products"))|| [];

function submitProduct(e){
  e.preventDefault();

  let form = document.getElementById("product")
  let name=form.name.value;
  let category=form.category.value;
  let image=form.image.value;
  let price =form.price.value;
  let gender =form.gender.value;

  let p= new Product(name,category,image,price,gender,false) 
  arr.push(p)
  
  localStorage.setItem("Products",JSON.stringify(arr))
  form.name.value=null
  form.category.value=null
  form.image.value=null
  form.price.value=null
  
  
  
}