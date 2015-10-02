var version = '0.0.3-3';
var startUpMsg = 'Welcome to NCS version ' + version + '!';

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
    console.warn("Woops! Seems like NCS couldn't start somehow. Sorry about the issue! Try refreshing; If it still doesn't work, report the bug on our forums. Thanks!");
  } else {
    console.log('[NCS] Started!');
    status = 'ready';
    $('head').append('<link rel="stylesheet" href="https://rawgit.com/daneden/animate.css/master/animate.min.css">');
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
      $(unamestuff).before('<i id='+("icon-01NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-01NCS'+i).style.backgroundImage = "url('http://imgur.com/3hN3fNi.png')";
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
      $(unamestuff).before('<i id='+("icon-03NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-03NCS'+i).style.backgroundImage = "url('http://imgur.com/f5HTF9D.png')";
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
      var unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-3');
      $(unameicon).before('<i id='+("icon-00NCS"+i)+' class="icon icon-rank-10"></i>');
      //document.getElementById('icon-04NCS'+i).style.backgroundImage = "url('http://i.imgur.com/Wyh8Mbv.png')";
      //unamestuff.style.color='#EA6900';
      $(unamestuff).removeClass('.rank-3');
      $(unamestuff).addClass('.rank-10');
      
    }
  } 
}

/* NCS MENU STUFF*/
$('.navbar.footer').append('<button id="NCS-btn" class="nav-form nav-right">NCS Menu</button>');
$('body').append('<div id="NCS-menu" class="animated" style="display:none;position:absolute;bottom:52px;left:-50px;background-color:#0a0a0a;height:80px;width:200px;color:gray;border:2px #1B1B1B solid;text-align:left;z-index:3;"><center class="animated infinite flip" style="text-align:center">Whoa, Animations!</center></div>');
$('#NCS-menu').css('left',($('#NCS-btn').offset().left-($('#NCS-btn').css('width').split('px')[0]/2))+'px');
$('#NCS-btn').on('click',function(){$('#NCS-menu').css('left',($('#NCS-btn').offset().left-($('#NCS-btn').css('width').split('px')[0]/2))+'px');if($('#NCS-menu').css('display')==='block'){$('#NCS-menu').addClass('fadeOutRight');$('#NCS-menu').removeClass('fadeInLeft');$('#NCS-menu').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$('#NCS-menu').css('display','none');$('#NCS-menu').css('left',($('#NCS-btn').offset().left-($('#NCS-btn').css('width').split('px')[0]/2))+'px');});}else{$('#NCS-menu').addClass('fadeInLeft');$('#NCS-menu').css('display','block');$('#NCS-menu').removeClass('fadeOutRight');}});
window.onresize = function(){$('#NCS-menu').css('left',($('#NCS-btn').offset().left-($('#NCS-btn').css('width').split('px')[0]/2))+'px');};


$('#messages').append('<div id="NCS-startupmsg" class="cm log mention animated flip" style="color:whitesmoke;text-align:center;font-weight:200;font-size:38;">'+startUpMsg+'</div>');

