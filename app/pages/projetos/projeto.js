import Project from '../../model/Project.js'
const $$ = function(id){
    return document.getElementById(id); 
} 

const projeto = function(){
    //carregar projetos do localstorage

    let size = (localStorage.length > 5? 5:localStorage.length); 
    for(let i = 0; i < size; i++){
        var projectOBJ = JSON.parse(localStorage.getItem(`project${i}`));
        var fullProject = `Cliente: ${projectOBJ.client} -- Arquiteto: ${projectOBJ.architect} -- M²: ${projectOBJ.square} -- CAU: ${projectOBJ.cau} -- ${projectOBJ.finished}`
        $$(`project${i}`).innerHTML = fullProject; 
    }

      $('.menu').load("/app/pages/header/header.html");
      $('.footer').load("/app/pages/footer/footer.html");
  
}
$(function(){
  $('#cpf').mask('000.000.000-00', {reverse: true});
  $('#cau').mask('000000-00');
})

projeto();

//evento disparado quando o formulário é finalizado
document.getElementById('form-project').onsubmit = (event) => {
        

    if (!isFormValid()) {
       alertify.error('Por favor, verifique os campos destacados.');
       return;
     }
    //criação do objeto projeto que será salvo no localstorage
    
    let finished = $('#check').is(':checked')?'Projeto Finalizado':'Projeto não Finalizado'; 
      
    
    
      var project = new Project(
       $$('client').value,
       $$('architect').value,
       $$('square').value,
       $$('url-image').value,
       $$('cpf').value,
       $$('cau').value,
       finished       
      ); 
      
      
     save(project);  
     confirm(`${project.client} cadastrado com Sucesso`)
}

//verifica os campos e muda o css para aparecer mensagem de erros, quando "blur" - desfocados/des selecionados
document.querySelector('#client').addEventListener('blur', function () {
    validateClientField();
});
document.querySelector('#architect').addEventListener('blur', function () {
    validateArchitectField();
});
document.querySelector('#square').addEventListener('blur', function () {
    validateSquareField();
});
document.querySelector('#url-image').addEventListener('blur', function () {
    validateUrlField();
});
document.querySelector('#cpf').addEventListener('blur', function () {
    validateCpfField();
});
document.querySelector('#cau').addEventListener('blur', function () {
    validateCauField();
});

//função que salva os dados no localstorage
function save(project){  
    var projectJSON = JSON.stringify(project); 
    localStorage.setItem('project'+ localStorage.length, projectJSON); 
  }


  //função que verifica se o formulário está válido
function isFormValid() {
    return (
      validateClientField()
    );
}



//funções de validações
function validateClientField() {
    const clientInput = document.getElementById('client');
    const clientError = document.getElementById('client-error');
    if (clientInput.validity.valueMissing) {
      clientError.textContent = 'O campo é obrigatório.';
      clientError.style.display = 'block';
      clientError.style.color = 'red';
      return false;
    }
    if (clientInput.validity.patternMismatch) {
      clientError.textContent = 'O valor não corresponde a um nome válido.';
      clientError.style.display = 'block';
      clientError.style.color = 'red';

      return false;
    }
    clientError.style.display = 'none';
    return true;
  }

function validateArchitectField() {
    const architectInput = document.getElementById('architect');
    const architectError = document.getElementById('architect-error');
    if (architectInput.validity.valueMissing) {
      architectError.textContent = 'O campo é obrigatório.';
      architectError.style.display = 'block';
      architectError.style.color = 'red';
      return false;
    }
    if (architectInput.validity.patternMismatch) {
      architectError.textContent = 'O valor não corresponde a um nome válido.';
      architectError.style.display = 'block';
      architectError.style.color = 'red';

      return false;
    }
    architectError.style.display = 'none';
    return true;
  }

function validateSquareField() {
    const squareInput = document.getElementById('square');
    const squareError = document.getElementById('square-error');
    if (squareInput.validity.valueMissing) {
      squareError.textContent = 'O campo é obrigatório.';
      squareError.style.display = 'block';
      squareError.style.color = 'red';
      return false;
    }
    if (squareInput.validity.patternMismatch) {
      squareError.textContent = 'O valor não corresponde a um número válido.';
      squareError.style.display = 'block';
      squareError.style.color = 'red';

      return false;
    }
    squareError.style.display = 'none';
    return true;
  }

  function validateUrlField() {
    const urlInput = document.getElementById('url-image');
    const urlError = document.getElementById('url-image-error');

    if (urlInput.validity.valueMissing) {
      urlError.textContent = 'O campo é obrigatório.';
      urlError.style.display = 'block';
      urlError.style.color = 'red';
      return false;
    }
    if (urlInput.validity.patternMismatch) {
      urlError.textContent = 'O valor não corresponde a um Url válido.';
      urlError.style.display = 'block';
      urlError.style.color = 'red';

      return false;
    }
    urlError.style.display = 'none';
    return true;
  }
  function validateCpfField() {
    const cpfInput = document.getElementById('cpf');
    const cpfError = document.getElementById('cpf-error');

    if (cpfInput.validity.valueMissing) {
      cpfError.textContent = 'O campo é obrigatório.';
      cpfError.style.display = 'block';
      cpfError.style.color = 'red';
      return false;
    }
    if (cpfInput.validity.patternMismatch) {
      cpfError.textContent = 'O valor não corresponde a um cpf válido.';
      cpfError.style.display = 'block';
      cpfError.style.color = 'red';

      return false;
    }
    cpfError.style.display = 'none';
    return true;
  }
  function validateCauField() {
    const cauInput = document.getElementById('cau');
    const cauError = document.getElementById('cau-error');

    if (cauInput.validity.valueMissing) {
      cauError.textContent = 'O campo é obrigatório.';
      cauError.style.display = 'block';
      cauError.style.color = 'red';
      return false;
    }
    if (cauInput.validity.patternMismatch) {
      cauError.textContent = 'O valor não corresponde a um cau válido.';
      cauError.style.display = 'block';
      cauError.style.color = 'red';

      return false;
    }
    cauError.style.display = 'none';
    return true;
  }