var productName=document.getElementById("prName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productDesc=document.getElementById("productDesc");
var proudectNameAlert=document.getElementById("proudectNameAlert");

//  var errors='';
var productContainer ;

if(localStorage.getItem("productList")==null){
    productContainer= [];
}
else{
    productContainer= JSON.parse(localStorage.getItem("productList"));
    displayProduct();
}

function addProduct(){

    if(validateproduct()==true){

        if(checkInputs()==true){
            var product={
                name:productName.value,
                price:productPrice.value,
                category:productCategory.value,
                desc:productDesc.value,
         };
         productContainer.push(product);
         localStorage.setItem("productList", JSON.stringify(productContainer));
         displayProduct();
         console.log(productContainer);
        
        }
        else{
            alert("sorry field is empty")
        }
       
     clearForm();
    }
    }

    
    // else{
    //     document.getElementById("alert").innerHTML=errors();
    //       alert("sorry")
    // }
   

function clearForm(){
    productName.value='';
    productPrice.value='';
    productCategory.value='';
    productDesc.value="";
}

function displayProduct(){
    var cartoona=``;

    for(var i=0;i<productContainer.length;i++){
        cartoona+=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
         <td>${productContainer[i].price}</td>
         <td>${productContainer[i].category}</td>
         <td>${productContainer[i].desc}</td>
         <td><button onclick=upDate(${i}) class="btn btn-outline-danger">update</button></td>
         <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
         
         </tr>`;

    }
    document.getElementById("tableBody").innerHTML=cartoona;
}

function upDate(ind){
    for(var i=0;i<productContainer.length;i++){
    productName.value=productContainer[ind].name;
    productPrice.value=productContainer[ind].price;
    productCategory.value=productContainer[ind].category;
    productDesc.value=productContainer[ind].desc;
    }

}

function checkInputs(){
    if(productName.value!=""&&productPrice.value!=""&&
    productCategory.value!=""&&productDesc.value!="")
    {
        return true;
    }
    else{
        return false;
    }
}

function validateproduct(){
    var regax = /^[A-Z][a-z]{3,8}$/;
    //var regaxP=/^[1-9][0-9]{2}|1000$/;
    //var regaxC=/^mobile$/;
    if(regax.test(productName.value)==true){
    //&&regaxP.test(productPrice.value)==true&&regaxC.test(productCategory)==true){
        productName.classList.add("is-valid");
        productName.classList.remove("is-invalid");
        proudectNameAlert.classList.replace("d-block","d-none");

        return true;
        
    }
    else{
        //errors+=`<p>productName is invalid</p>`;
        productName.classList.add("is-invalid");
        productName.classList.remove("is-valid");
        proudectNameAlert.classList.replace("d-none","d-block");

        return false;

    }
}
productName.addEventListener("keyup",validateproduct)

function searchProduct(searchTerm){
    var cartoona2=``;
    for(var i=0;i<productContainer.length;i++){
        if(productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true||
          productContainer[i].category.toLowerCase().includes(searchTerm.toLowerCase())==true){
            cartoona2+=`<tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
             <td>${productContainer[i].price}</td>
             <td>${productContainer[i].category}</td>
             <td>${productContainer[i].desc}</td>
             <td><button class="btn btn-outline-danger">update</button></td>
             <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
             
             </tr>`;
        }
        else{
            console.log("m777aogod")
        }
    }
    document.getElementById("tableBody").innerHTML=cartoona2;
}

function deleteProduct(index){
    productContainer.splice(index,1);
    localStorage.setItem("productList", JSON.stringify(productContainer));
    displayProduct();
}
// localStorage.setItem('name','ali');
// console.log(localStorage.getItem('name'))