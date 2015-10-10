function cfun(){
  if(document.getElementById('messages').children.length!==prevObj){
    i++;
    prevObj = document.getElementById('messages').children.length;
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='CSxKING'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-2');
      $(unameicon).before('<i id='+("icon-01NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-01NCS'+i).style.backgroundImage = "url('http://imgur.com/3hN3fNi.png')";
      $(unamestuff).removeClass('rank-2');
      unamestuff.style.color='#A1BA00';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Loli'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-02NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-02NCS'+i).style.backgroundImage = "url('http://i.imgur.com/BSky1IS.png')";
      unamestuff.style.color='#9966FF';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Pro Hop'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-2');
      $(unameicon).before('<i id='+("icon-03NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-03NCS'+i).style.backgroundImage = "url('http://imgur.com/f5HTF9D.png')";
      $(unamestuff).removeClass('rank-2');
      unamestuff.style.color='#B20DA5';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Elitehunter47'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-04NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-04NCS'+i).style.backgroundImage = "url('http://i.imgur.com/Wyh8Mbv.png')";
      unamestuff.style.color='#EA6900';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Nuvm'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-3');
      $(unameicon).before('<i id='+("icon-00NCS"+i)+' class="icon icon-rank-10"></i>');
      //document.getElementById('icon-04NCS'+i).style.backgroundImage = "url('http://i.imgur.com/Wyh8Mbv.png')";
      //unamestuff.style.color='#EA6900';
      $(unamestuff).removeClass('rank-3');
      $(unamestuff).addClass('rank-10');
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Koalaaa__'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-05NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-05NCS'+i).style.backgroundImage = "url('http://i.imgur.com/ucqMWad.jpg')";
      //unamestuff.style.color='#EA6900';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='KuriaMisuto'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-2');
      $(unameicon).before('<i id='+("icon-06NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-06NCS'+i).style.backgroundImage = "url('http://i.imgur.com/LXoYihi.png')";
      $(unamestuff).removeClass('rank-2');
      unamestuff.style.color='#00E5EE';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Daisy-Chan'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-2');
      $(unameicon).before('<i id='+("icon-07NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-07NCS'+i).style.backgroundImage = "url('http://i.imgur.com/1kemcRT.pngQ')";
      //$(unamestuff).removeClass('rank-2');
      //unamestuff.style.color='#00E5EE';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='HaremKing'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-2');
      $(unameicon).before('<i id='+("icon-07NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-07NCS'+i).style.backgroundImage = "url('http://i.imgur.com/Gcf5bSn.png')";
      $(unamestuff).removeClass('rank-2');
      unamestuff.style.color='#FF29EE';
    }
  }
}
