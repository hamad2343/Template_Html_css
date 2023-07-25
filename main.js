let list=document.getElementById('list')
let Links_list=document.getElementById('Links_list')
let arrow=document.getElementById('arrow')
list.onclick=function(){
    Links_list.classList.toggle('hidden')
}
onscroll=function(){
    if(scrollY>300){
        arrow.style.display='block'
    }
    else{
        arrow.style.display='none'
    }
}
arrow.onclick=function(){
    scroll({
        top:0,
        behavior:"smooth"
    })
}
