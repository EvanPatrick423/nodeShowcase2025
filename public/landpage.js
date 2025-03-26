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

  let column1 = document.createElement('div');
  column1.classList.add('column1','col-lg-8', 'col-md-8', 'col-sm-8', 'col-xs-12');

  let header = document.createElement('div');
  //header.id = "homeHeader";
  header.classList.add('homeHeader');
  header.textContent = 'Hello World! Welcome to My Website';
  column1.appendChild(header);

  darkCont.appendChild(column1);

  view.appendChild(darkCont);
}

/*function homePageAnimations(){
  let header = document.getElementById('homeHeader');
  header.classList.add('visible');
}*/


showHomePage();
//setTimeout(homePageAnimations(),1000);
