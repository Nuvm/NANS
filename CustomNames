//Default vars
var prevObj = 0;
var prevBr = 1;
var curObj;
var status = 'Not loaded';
var i = 0;

//Check if ready
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

//Check for new messages
function scfnm(){
  setInterval(function(){cfnm();},10);
}
function cfnm(){
  if(document.getElementById('messages').children.length!==prevObj){
    i++;
    //console.log('A new message has been detected!');
    prevObj = document.getElementById('messages').children.length;
    //prevBr = 1;
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='CSxKING'){
      i++;
      var unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      console.log(unamestuff);
      //console.log($(unamestuff));
      $(unamestuff).before('<i id='+("icon-sub"+i)+' class="icon" style="background-image:none"></i>');
      console.log(document.getElementById('icon-sub'+i));
      //$('.icon-sub'+i).css("background-image","url('http://electricgaming.ga/CSS/subscriber-15x15.png')");
      document.getElementById('icon-sub'+i).style.backgroundImage = "url('http://electricgaming.ga/CSS/subscriber-15x15.png')";
      console.log(document.getElementById('icon-sub'+i).style.backgroundImage);
      unamestuff.style.color='#A1BA00';
    }
  } 
  /*if(document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerHTML.split('<br>').length>prevBr){
    console.log('A new stacked message has been detected!');
    prevBr = document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerHTML.split('<br>').length;
  }*/
  //return document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerHTML.split('<br>')[document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerHTML.split('<br>').length];
}
