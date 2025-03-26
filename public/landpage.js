function clearView(){
  while (view.lastChild) {
    view.removeChild(view.firstChild);
  }
}

function showHomePage(){
  clearView();
  document.body.style.backgroundImage = "url('imgs/pexels-bich-tran-669996.jpg')";
  document.body.style.backgroundSize = 'cover';

  let view = document.getElementById('view');
  view.classList.add('viewHome');

  let darkCont = document.createElement('div');
  darkCont.classList.add('darkCont','row');
  darkCont.id = 'darkCont';

  view.appendChild(darkCont);
}



showHomePage()
