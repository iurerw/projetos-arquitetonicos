const galeria = function(){
    
}

onload = function() {
    let span =''; 
    for(let i = 0; i < localStorage.length; i++){
        var projectOBJ = JSON.parse(localStorage.getItem(`project${i}`));
        span += `
        <div class="card" style="width: 15rem;">
        <img src="${projectOBJ.url}" style="height: 23rem;" class="card-img-top" alt="...">
         <div class="card-body">
         <h4 class="card-title">Arquiteto: ${projectOBJ.architect}</h4>
         <h5 class="card-title">Cliente: ${projectOBJ.client}</h5>
         <h5 class="card-title">${projectOBJ.cau}</h5>
         <p class="card-text">Projeto de ${projectOBJ.square}m²</p>
         </div>
        </div>
        ` 
    }

    $$('img').innerHTML = span

    $('.card-img-top').click(function(){
        $('.card-body').slideToggle();  

    })

    $('.menu').load("/app/pages/header/header.html");
    $('.footer').load("/app/pages/footer/footer.html");

}


const $$ = function(id){
    return document.getElementById(id); 
} 




galeria(); 
