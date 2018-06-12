const boton = document.getElementById('btn');
function contar() { 
  const max = 100; 
  let comments = document.getElementById("comment").value; 
  let longitud =  comments.length; 

      if(longitud <= max) { 
           document.getElementById("contador").value = max-longitud; 
      } else { 
           document.getElementById("comment").value = cadena.substr(0, max);
      } 
} 

boton.addEventListener ('click',() => {

  let comments = document.getElementById('comment').value;
  document.getElementById('cont').innerHTML = comments;

  document.getElementById('comment').value = ' ';


  let cont = document.getElementById('cont');
  const contTwo = document.getElementById('contTwo');

  const newComments = document.createElement('div');
  if(comments.length === 0 || comments === null) {
    alert('Ingresa Un Mensaje');
  } return false;

  let textNewComment = document.createTextNode(comments);
  const contenedorElemento = document.createElement('p');
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);
  contTwo.appendChild(newComments);
});