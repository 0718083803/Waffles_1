document.getElementById("waffle1").addEventListener("click", function(){
    alert("Waffle clicked!");
})
document.getElementById("waffle1").addEventListener("mouseover", function(){
     document.getElementById("waffle1").src = "image2.png";
})  
document.getElementById("waffle1").addEventListener("mouseout", function(){
    document.getElementById("waffle1").src = "image.png";
})
button_recipe = document.getElementById("Recipes");
button_recipe.addEventListener("click",function(){
    window.location.href = "Recipe's.html";
})