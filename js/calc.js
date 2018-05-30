var buttonNum = document.getElementsByClassName('buttonNum');
var operator = document.getElementsByClassName('operator');
var buttonClear = document.getElementsByClassName('buttonClear');
var equals = document.getElementsByClassName('equals');
var display = document.getElementById('screen');
var toDoOperation;
var value1;
var value2;
var isOperationSet = false;
var val1set=false;
var val2set=false;

buttonClear[0].addEventListener('click',function(){clearall();});
equals[0].addEventListener('click',function(){result();});
operator[0].addEventListener('click',function(){multiply();});
operator[1].addEventListener('click',function(){divide();});
operator[2].addEventListener('click',function(){minus();});
operator[3].addEventListener('click',function(){plus();});
buttonNum[0].addEventListener('click',function(){setval(7);});
buttonNum[1].addEventListener('click',function(){setval(8);});
buttonNum[2].addEventListener('click',function(){setval(9);});
buttonNum[3].addEventListener('click',function(){setval(4);});
buttonNum[4].addEventListener('click',function(){setval(5);});
buttonNum[5].addEventListener('click',function(){setval(6);});
buttonNum[6].addEventListener('click',function(){setval(1);});
buttonNum[7].addEventListener('click',function(){setval(2);});
buttonNum[8].addEventListener('click',function(){setval(3);});

function setval(value){
  if(val1set==false){
    value1=value;
    val1set=true;
    display.innerHTML=value1;
  }else if (val2set==false) {
    value2=value;
    val2set=true;
    display.innerHTML=value2;
  }
}
function clearall(){
  val1set=false;
  val2set=false;
  display.innerHTML="Sparta Calculator";
}
function multiply(){
  toDoOperation='mul';
  isOperationSet=true;
}
function divide(){
  toDoOperation='div';
  isOperationSet=true;
}
function minus(){
  toDoOperation='min';
  isOperationSet=true;
}
function plus(){
  toDoOperation='plus';
  isOperationSet=true;
}
function result(){
  if (val1set==true&&val2set==true&&isOperationSet==true) {
    var returnValue=0;
    switch (toDoOperation) {
      case 'mul':
        returnValue = value1 * value2;
        display.innerHTML=returnValue;
        break;
      case 'div':
      returnValue = value1/value2;
      display.innerHTML=returnValue;
        break;
      case 'min':
      returnValue = value1-value2;
      display.innerHTML=returnValue;
        break;
      case 'plus':
      returnValue = value1+value2;
      display.innerHTML=returnValue;
        break;
    }
  }
}
