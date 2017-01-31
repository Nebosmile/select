function  nbselect(target){
  var select = document.getElementById(target);

  select.style.display = 'none';

  var optionArr = select.getElementsByTagName('option');
  var nb_width = select.offsetWidth;
  var finalarr =[];

  var father = select.parentNode;


  var ul = document.createElement('ul');
    ul.classList.add('nb_ul');



  var div = document.createElement('div');
    div.classList.add('nb_select_wrapper');


  var input = document.createElement('input');
  input.name =select.name;
  select.name = "";
    input.classList.add('nb_input');
    input.addEventListener('click', function() {
      inspection();
    })


function inspection() {
  if(!ul.classList.contains('open')){
    ul.classList.add('open');
  }else{
    ul.classList.remove('open');
  }
}


  optionArr =[].slice.call(optionArr);

  optionArr.forEach(function(key, index) {
    var li = document.createElement('li');
    li.innerHTML = optionArr[index].innerHTML;
    li.addEventListener('click', function(){
      if(!li.classList.contains('nb_active')){
        optionArr[index].selected = true;
        li.classList.add('nb_active');
        addvalue();

      }else{
        li.classList.remove('nb_active');
        optionArr[index].selected = false;
        addvalue();
      }

    })

    ul.appendChild(li);
  })


  function addvalue() {
    finalarr =[];
    input.value= '';
    for(i = 0; i < optionArr.length; i++){
      if(optionArr[i].selected == true){
        finalarr.push(optionArr[i].value);

      }
    }
    input.value = finalarr.join(',')

    console.log(finalarr);
  }
  div.appendChild(input);
  div.appendChild(ul);
  father.appendChild(div)
}
