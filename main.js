"use strict";

const subjects=document.querySelectorAll('td');

for (let i=0;i<subjects.length;i++){
  if(subjects[i].className==="kokusei"){
  subjects[i].innerHTML='<a href="https://wsdmoodle.waseda.jp/course/view.php?id=106055" target=_blank>国際政治学</a>'
  }else if(subjects[i].className==="kokuseizoom"){
    subjects[i].innerHTML='<a href="https://zoom.us/w/93225811617?tk=Fxt2XEGN1Bw-i0sUWd7JR517V2Bnka-QKb4tUjktIkI.DQIAAAAVtLD-oRZtejlXM2FsMlExcUZBOWNEeERlRFl3AAAAAAAAAAAAAAAAAAAAAAAAAAAA&pwd=Y09qcVZ1V3NEM2lYT3BPKzBHTUphZz09" target=_blank>国際政治学Zoom</a>'
  }else if(subjects[i].className==="koukyou"){
      subjects[i].innerHTML='<a href="https://wsdmoodle.waseda.jp/course/view.php?id=101993" target=_blank>公共政策</a>'
  }else if(subjects[i].className==="engglobal"){
    subjects[i].innerHTML='<a href="https://wsdmoodle.waseda.jp/course/view.php?id=104316" target=_blank>English Language Course (Global Issues) 05</a>'
  }else if(subjects[i].className==="engbusiness"){
    subjects[i].innerHTML='<a href="https://wsdmoodle.waseda.jp/course/view.php?id=81961" target=_blank>English Language Course (Business English) 03</a>'
  }else if(subjects[i].className==="france"){
    subjects[i].innerHTML='<a href="https://wsdmoodle.waseda.jp/course/view.php?id=82459" target=_blank>仏語(中級) 04</a>'
  }else if(subjects[i].className==="sentan"){
    subjects[i].innerHTML='<a href="https://wsdmoodle.waseda.jp/course/view.php?id=77381" target=_blank>先端化学技術 02</a>'
  }else if(subjects[i].className==="mathB"){
    subjects[i].innerHTML='<a href="https://wsdmoodle.waseda.jp/course/view.php?id=83606" target=_blank>数学基礎プラスβ(金利編)</a>'
  }else if(subjects[i].className==="programing"){
    subjects[i].innerHTML='<a href="https://wsdmoodle.waseda.jp/course/view.php?id=80859" target=_blank>プログラミング入門05</a>'
  }else if(subjects[i].className==="scratch"){
    subjects[i].innerHTML='<a href="https://scratch.mit.edu/" target=_blank>Scratch</a>'
  }else if(subjects[i].textContent===""){
    subjects[i].innerHTML='<a></a>'
  }
};

//  }else if(subjects[i].className===""){
//   subjects[i].innerHTML='<a href="URL" target=_blank>subjectName</a>'