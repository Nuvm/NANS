var version = '0.1.1 Minor 3';
var startUpMsg = 'Welcome to NCS version ' + version + '!';
var newFeaturesMsg = 'The NCS Website is now online! https://electricgaming.ga/ncs/<b><i>BIG CHANGES SOON</b></i>(™) :)';
var uname;

//Default vars
var prevObj = 0;
var status = 'Not loaded';
var i = 0;
var unamestuff;
var unameicon;
var rotateDeg = 0;
var rotateDeg2 = 0;

//Check if ready
var checkIfReady;
setTimeout(function(){checkIfReady = setInterval(function(){if(document.getElementsByClassName('loading').length!==1){start('ready');}else{document.getElementsByClassName('loading').innerHTML+='NCS is loading too! :D';}},100);},2000);
function start(s){
  clearInterval(checkIfReady);
  if(s!=='ready'){
    console.warn("Woops! Seems like NCS couldn't start somehow. Sorry about the issue! Try refreshing; If it still doesn't work, report the bug on our forums. Thanks!");
  } else {
    console.log('[NCS] Started!');
    status = 'ready';
    uname = document.getElementsByClassName('navbar header')[0].getElementsByClassName('nav-form nav-right')[0].getElementsByTagName('p')[0].innerHTML;
    $('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/daneden/animate.css/master/animate.min.css">');
    $('head').append('<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=IM+Fell+English+SC">');
    if(!Notification){
      alert('Please use a modern version of Chrome, Firefox, Opera or Firefox.');
    } else if (Notification.permission !== "granted"){
      Notification.requestPermission();
    }
    API.on(API.events.CHAT,cfnm);
    NCSinit();
  }
}

//Check for new messages
/*function scfnm(){
  setInterval(function(){cfnm();},10);
}*/
function cfnm(){
  //$('#messages')[0].scrollIntoView(false);
  if(document.getElementById('messages').children.length!==prevObj){
    i++;
    prevObj = document.getElementById('messages').children.length;
    if(document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerHTML.slice(0,4)==='/NCS'){
      NCScommandSorter(document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerHTML,document.getElementById('messages').lastChild.getElementsByClassName('uname')[0],document.getElementById('messages').lastChild);
    }
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
    if(document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerHTML.indexOf('@'+uname)!==-1 && $('#NCS-f3').hasClass('enabled') && !document.hasFocus()){
      var notif = new Notification(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML, { icon: 'http://i.imgur.com/5ThdRUd.png', body: document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerHTML});
      notif.onclick = function(){window.focus();notif.close();};
      setTimeout(function(){notif.close();},3000);
    }
  } 
}
function NCScommandSorter(msg,user,element){
  msg = msg.slice(4,255);
  if(msg==='updateAlert'){
    if(user.innerHTML==='Nuvm'||user.innerHTML==='CSxKING'||user.innerHTML==='Pixel'){
      $('#messages').append('<center class="NCSalert cm log mention animated fadeInLeftBig" style="color:whitesmoke;text-align:center;font-weight:200;font-size:46;padding:5px;">A new update is available for NCS!<br><span style="font-weight:100;font-size:28">Refresh your page to get the latest update!</span></center>');
      setTimeout(function(){$(element).remove();},50);
    }
  } else if(msg.slice(0,13)==='globalMessage'){
    if(user.innerHTML==='Nuvm'||user.innerHTML==='CSxKING'||user.innerHTML==='Pixel'){
      $('#messages').append('<center class="NCSalert cm log mention animated fadeInLeftBig" style="color:whitesmoke;text-align:center;font-weight:150;font-size:30;">['+user.innerHTML+'] says: '+msg.slice(13,255)+'</center>');
      setTimeout(function(){$(element).remove();},50);
    }
  }
}
var NCSsettings= [false,true,false,false];
window.addEventListener('beforeunload',function(){localStorage.setItem('NCSlocalSettings',JSON.stringify(NCSsettings));});
if(typeof(Storage) === "undefined"){
  alert("Unfortunately, your browser does not support local storage. Your NCS settings will not be saved. Please use a modern version of Chrome, Firefox, Safari or Opera.");
}
if(typeof localStorage.NCSlocalSettings!==undefined){var localSettings = JSON.parse(localStorage.NCSlocalSettings);NCSsettings[0]=localSettings[0];NCSsettings[1]=localSettings[1];NCSsettings[2]=localSettings[2];NCSsettings[3]=localSettings[3];}
if (Notification.permission !== "granted"){
  Notification.requestPermission();
}
/*NCS MENU STUFF*/
function NCSinit(){
  $('.navbar.footer').append('<div id="NCS-btn" class="animated nav-form nav-right" style="transform:rotate(0deg);background-image:none;bottom:13px;height:30px;width:30px;-webkit-user-select: none;"></div>');
  $('#NCS-btn').append('<div id="NCS-name" style="position:absolute;transform:rotate(0deg);font-family:IM Fell English SC;color:black;bottom:15px;text-shadow:0px 0px 2px #FFD700;"><b>NCS</b></div>');
  $('.navbar.header').append('<a href="http://electricgaming.ga/forums/en/forumdisplay.php?fid=24" target="_blank"><button id="THEME_BUG" class="nav-form nav-right">[NCS] Report an Issue</button></a>');
  $('.navbar.header').append('<a href="http://electricgaming.ga/forums/en/showthread.php?tid=5" target="_blank"><button id="THEME_BUG" class="nav-form nav-right">[NCS] Changelog</button></a>');
  $('#NCS-btn')[0].style.backgroundImage = "url('http://i.imgur.com/5ThdRUd.png')";
  //setInterval(function(){rotateDeg+=2;rotateDeg2-=2;$('#NCS-btn')[0].style.transform='rotate('+rotateDeg+'deg)';$('#NCS-name')[0].style.transform='rotate('+rotateDeg2+'deg)';},20);
  $('body').append('<div id="NCS-menu" class="animated" style="display:none;position:absolute;bottom:52px;left:-50px;background-color:#0a0a0a;height:140px;width:280px;color:gray;border:2px #1B1B1B solid;text-align:left;z-index:3;opacity:0.8"><!--<center class="animated infinite flip" style="text-align:center">Whoa, Animations!</center>--></div>');
  $('#NCS-menu').append('<button id="NCS-f1" class="disabled animated" style="float:left;margin:5px;text-align:center;word-wrap:break-word;opacity:0.8">Hide Video</button>');
  $('#NCS-menu').append('<button id="NCS-f2" class="disabled animated" style="float:right;margin:5px;text-align:center;word-wrap:break-word;opacity:0.8">Theme</button>');
  $('#NCS-menu').append('<button id="NCS-f3" class="disabled animated" style="float:left;margin:5px;text-align:center;word-wrap:break-word;opacity:0.8">Notifications</button>');
  $('#NCS-menu').append('<button id="NCS-f4" class="disabled animated" style="float:right;margin:5px;text-align:center;word-wrap:break-word;opacity:0.8">Remove Video</button>');
  $('#NCS-menu').css('left',(($('#NCS-btn').css('width').split('px')[0]/2)-$('#NCS-btn').offset().left)*-1+'px');
  $('#NCS-btn').on('click',function(){$('#NCS-menu').css('left',(($('#NCS-btn').css('width').split('px')[0]/2)-$('#NCS-btn').offset().left)*-1+'px');if($('#NCS-menu').css('display')==='block'){$('#NCS-menu').addClass('fadeOutRight');$('#NCS-menu').removeClass('fadeInLeft');setTimeout(function(){$('#NCS-menu').css('display','none');$('#NCS-menu').css('left',(($('#NCS-btn').css('width').split('px')[0]/2)-$('#NCS-btn').offset().left)*-1+'px');},500);}else{$('#NCS-menu').addClass('fadeInLeft');$('#NCS-menu').css('display','block');$('#NCS-menu').removeClass('fadeOutRight');}});
  window.onresize = function(){$('#NCS-menu').css('left',(($('#NCS-btn').css('width').split('px')[0]/2)-$('#NCS-btn').offset().left*-1)+'px');};
  $('#NCS-f1').on('click',NCSfeatures);
  $('#NCS-f2').on('click',NCSfeatures);
  $('#NCS-f3').on('click',NCSfeatures);
  $('#NCS-f4').on('click',NCSfeatures);
  $('head').append('<style type="text/css">.enabled{background-color:#B4CFEC;color:white; !important}.disabled{color:black; !important}#NCS-menu{padding:3px}#NCS-btn:hover{cursor:pointer}</style>');
  $('#app-right').css('z-index',1);
  if(NCSsettings[0]){
    $('#NCS-f1').click();
  }
  if(NCSsettings[1]){
    $('#NCS-f2').click();
  }
  if(NCSsettings[2]){
    $('#NCS-f3').click();
  }
  if(NCSsettings[3]){
    $('#NCS-f4').click();
  }
  $('#messages').append('<center id="NCS-startupmsg" class="cm log mention animated flip" style="color:whitesmoke;text-align:center;font-weight:200;font-size:120%;padding:30px;">'+startUpMsg+'<br><span style="font-weight:100;font-size:85%">'+newFeaturesMsg+'</span></center>');
  $('#messages')[0].scrollIntoView(false);
  //$('body').css('overflow-y','hidden');
}
function NCSfeatures(eventData){
  if(eventData.target.id==='NCS-f1'){
    if($('#NCS-f1').hasClass('disabled')){
      document.getElementById('player').style.display = 'none';
      NCSsettings[0] = true;
      $('#NCS-f1').removeClass('disabled').addClass('enabled');
      //$('#NCS-f1').removeClass('shake').addClass('bounce');
    } else {
      document.getElementById('player').style.display = 'block';
      NCSsettings[0] = false;
      $('#NCS-f1').removeClass('enabled').addClass('disabled');
      //$('#NCS-f1').removeClass('bounce').addClass('shake');
    }
  } else if(eventData.target.id==='NCS-f2'){
    if($('#NCS-f2').hasClass('disabled')){
      $('head').append('<link id="CSxKINGtheme" rel="stylesheet" href="https://cdn.rawgit.com/Nuvm/NCS/master/NC331_Style.css">');
      NCSsettings[1] = true;
      $('#NCS-f2').removeClass('disabled').addClass('enabled');
      //$('#NCS-f2').removeClass('shake').addClass('bounce');
    } else {
      $('#CSxKINGtheme').remove();
      NCSsettings[1] = false;
      $('#NCS-f2').removeClass('enabled').addClass('disabled');
      //$('#NCS-f2').removeClass('bounce').addClass('shake');
    }
  } else if(eventData.target.id==='NCS-f3'){
    if($('#NCS-f3').hasClass('disabled')){
      NCSsettings[2] = true;
      $('#NCS-f3').removeClass('disabled').addClass('enabled');
      //$('#NCS-f3').removeClass('shake').addClass('bounce');
    } else {
      NCSsettings[2] = false;
      $('#NCS-f3').removeClass('enabled').addClass('disabled');
      //$('#NCS-f3').removeClass('bounce').addClass('shake');
    }
  } else if(eventData.target.id==='NCS-f4'){
    if($('#NCS-f4').hasClass('disabled')){
      $('#player').remove();
      $('#messages').append('<center class="NCSalert cm log mention animated fadeInLeftBig" style="color:whitesmoke;text-align:center;font-weight:150;font-size:30;">You will have to disable this option and refresh in order to have the video player back. Sorry, this is how it works currently!</center>');
      $('#messages')[0].scrollIntoView(false);
      NCSsettings[3] = true;
      $('#NCS-f4').removeClass('disabled').addClass('enabled');
      //$('#NCS-f3').removeClass('shake').addClass('bounce');
    } else {
      $('#messages').append('<center class="NCSalert cm log mention animated fadeInLeftBig" style="color:whitesmoke;text-align:center;font-weight:150;font-size:30;">Refresh the page to get the video player back!</center>');
      $('#messages')[0].scrollIntoView(false);
      NCSsettings[3] = false;
      $('#NCS-f4').removeClass('enabled').addClass('disabled');
      //$('#NCS-f3').removeClass('bounce').addClass('shake');
    }
  }
}
