function  nbselect(target){
  var select = document.getElementById(target);
  var optionArr = select.getElementsByTagName('option');
  console.log(optionArr);
  var nb_width = select.offsetWidth;
  console.log(nb_width);
  var finalarr =[];

  var div = document.createElement('div');
  div.classList.add('nb_select_wrapper');
  div.style.width = nb_width + 'px';





  var input = document.createElement('input');
  input.classList.add('nb_input');
  var ul = document.createElement('ul');
  ul.classList.add('nb_ul');

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
  document.body.appendChild(div)
}
