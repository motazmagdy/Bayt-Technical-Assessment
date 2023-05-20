function toggleItems(){
    var element = document.getElementById("headerItems");
    if(element.className =="headerItems"){
        element.className = "navbarItemsShow"
    }else {
        element.className ="headerItems"
    }
}