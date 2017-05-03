window.onload=function(e){
	var box=document.getElementById("lj")
	title=box.getElementsByTagName("div")
	menu=box.getElementsByTagName("ul")
	as=box.getElementsByTagName("a")
	index=-1;
}
  title.onclick=function(event){
        event = event || window.event;
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        };
          menu.style.display = "block";