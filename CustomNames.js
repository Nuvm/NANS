var prevObj = 0;
var status = 'Not loaded';
var i = 0;

var checkIfReady;
setTimeout(function(){checkIfReady = setInterval(function(){if(document.getElementsByClassName('loading').length!==1){start('ready');}},100);},2000);
function start(s){
  clearInterval(checkIfReady);
  if(s!=='ready'){
    console.warn("Woops! Seems like NANS couldn't start somehow. Sorry about the issue! Try refreshing; If it still doesn't work, report the bug on our forums. Thanks!");
  } else {
    console.log('[NANS] Started!');
    status = 'ready';
    scfnm();
  }
}
function scfnm(){
  setInterval(function(){cfnm();},10);
}
function cfnm(){
  if(document.getElementById('messages').children.length!==prevObj){
    i++;
    prevObj = document.getElementById('messages').children.length;
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='CSxKING'){
      var unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-sub"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-sub'+i).style.backgroundImage = "url('http://i.imgur.com/3hN3fNi.png')";
      unamestuff.style.color='#A1BA00';
    }
  } 
}
