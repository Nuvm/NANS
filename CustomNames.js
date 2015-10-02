var version = '0.02-4';
var startUpMsg = 'Welcome to ANS version ' + version + '!';

//Default vars
var prevObj = 0;
var status = 'Not loaded';
var i = 0;
var unamestuff;

//Check if ready
var checkIfReady;
setTimeout(function(){checkIfReady = setInterval(function(){if(document.getElementsByClassName('loading').length!==1){start('ready');}},100);},2000);
function start(s){
  clearInterval(checkIfReady);
  if(s!=='ready'){
    console.warn("Woops! Seems like ANS couldn't start somehow. Sorry about the issue! Try refreshing; If it still doesn't work, report the bug on our forums. Thanks!");
  } else {
    console.log('[ANS] Started!');
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
    prevObj = document.getElementById('messages').children.length;
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='CSxKING'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-01NANS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-01NANS'+i).style.backgroundImage = "url('http://imgur.com/3hN3fNi.png')";
      unamestuff.style.color='#A1BA00';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Loli'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-02NANS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-02NANS'+i).style.backgroundImage = "url('http://i.imgur.com/BSky1IS.png')";
      unamestuff.style.color='#9966FF';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Pro Hop'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-03NANS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-03NANS'+i).style.backgroundImage = "url('http://imgur.com/f5HTF9D.png')";
      unamestuff.style.color='#B20DA5';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Elitehunter47'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-04NANS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-04NANS'+i).style.backgroundImage = "url('http://i.imgur.com/Wyh8Mbv.png')";
      unamestuff.style.color='#EA6900';
    }
  } 
}

/* ANS MENU STUFF*/
$('.navbar.footer').append('<button id="ANS-btn" class="nav-form nav-right">ANS Menu</button>');
$('body').append('<div id="ANS-menu" style="display:none;position:absolute;bottom:52px;left:-50px;background-color:#0a0a0a;height:80px;width:200px;color:gray;border:2px #1B1B1B solid;text-align:left;z-index:10;"></div>');
$('#ANS-menu').css('left',($('#ANS-btn').offset().left+($('#ANS-btn').css('width').split('px')[0]/2))+'px');
$('#ANS-btn').on('click',function(){$('#ANS-menu').css('left',($('#ANS-btn').offset().left+($('#ANS-btn').css('width').split('px')[0]/2))+'px');if($('#ANS-menu').css('display')!=='block'){$('#ANS-menu').css('display','block');}else{$('#ANS-menu').css('display','none');}});
window.onresize = function(){$('#ANS-menu').css('left',($('#ANS-btn').offset().left+($('#ANS-btn').css('width').split('px')[0]/2))+'px');};


$('#messages').append('<div id="ANS-startupmsg" class="cm log" style="color:whitesmoke;text-align:center;font-weight:200;font-size:38;">'+startUpMsg+'</div>');

