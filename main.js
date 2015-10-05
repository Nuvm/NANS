var version = '0.0.8 Patch 6';
var startUpMsg = 'Welcome to NCS version ' + version + '!';
var newFeaturesMsg = 'Welcome our new dev, Pixel!<br>TRYING TO FIX ALL THEM GODDAMN BUGS!<br>Added Accidental Navigation Prevention';
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
setTimeout(function(){checkIfReady = setInterval(function(){if(document.getElementsByClassName('loading').length!==1){start('ready');}},100);},2000);
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
    scfnm();
    NCSinit();
  }
}

//Check for new messages
function scfnm(){
  setInterval(function(){cfnm();},10);
}
function cfnm(){
  //$('#messages')[0].scrollIntoView(false);
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
      document.getElementById('icon-03NCS'+i).style.backgroundImage = "url('http://imgur.com/XAqDL7z.png')";
      $(unamestuff).removeClass('rank-2');
      unamestuff.style.color='#00E5EE';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerHTML.slice(0,4)==='/NCS'){
      NCScommandSorter(document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerHTML,document.getElementById('messages').lastChild.getElementsByClassName('uname')[0],document.getElementById('messages').lastChild);
    }
  } 
}
function NCScommandSorter(msg,user,element){
  msg = msg.slice(4,255);
  if(msg==='updateAlert'){
    if(user.innerHTML==='Nuvm'||user.innerHTML==='CSxKING'){
      $('#messages').append('<center class="NCSalert cm log mention animated fadeInLeftBig" style="color:whitesmoke;text-align:center;font-weight:200;font-size:46;padding:5px;">A new update is available for NCS!<br><span style="font-weight:100;font-size:28">Refresh your page to get the latest update!</span></center>');
      if(username==='Nuvm')
      setTimeout(function(){$(element).remove();},50);
    }
  } else if(msg.slice(0,13)==='globalMessage'){
    if(user.innerHTML==='Nuvm'||user.innerHTML==='CSxKING'){
      $('#messages').append('<center class="NCSalert cm log mention animated fadeInLeftBig" style="color:whitesmoke;text-align:center;font-weight:150;font-size:30;">['+user.innerHTML+'] says: '+msg.slice(13,255)+'</center>');
      setTimeout(function(){$(element).remove();},50);
    }
  }
}
var NCSsettings= [false,true];
window.addEventListener('beforeunload',function(){localStorage.setItem('NCSlocalSettings',JSON.stringify(NCSsettings));});
if(typeof(Storage) === "undefined"){
  alert("Unfortunately, your browser does not support local storage. Your NCS settings will not be saved. Please use a modern version of Chrome, Firefox, Safari or Opera.");
}
if(typeof localStorage.NCSlocalSettings!==undefined){var localSettings = JSON.parse(localStorage.NCSlocalSettings);NCSsettings[0]=localSettings[0];NCSsettings[1]=localSettings[1];}

/*NCS MENU STUFF*/
function NCSinit(){
  $('.navbar.footer').append('<div id="NCS-btn" class="animated nav-form nav-right" style="transform:rotate(0deg);background-image:none;bottom:11px;height:30px;width:30px;-webkit-user-select: none;"></div>');
  $('#NCS-btn').append('<span id="NCS-name" style="font-family:IM Fell English SC;color:gold;bottom:15px;"><b>NCS</b></span>');
  $('.navbar.header').append('<a href="http://electricgaming.ga/forums/en/forumdisplay.php?fid=24" target="_blank"><button id="THEME_BUG" class="nav-form nav-right">[NCS] Report an Issue</button></a>');
  $('.navbar.header').append('<a href="http://electricgaming.ga/forums/en/showthread.php?tid=5" target="_blank"><button id="THEME_BUG" class="nav-form nav-right">[NCS] Changelog</button></a>');
  $('#NCS-btn')[0].style.backgroundImage = "url('http://i.imgur.com/5ThdRUd.png')";
  setInterval(function(){rotateDeg+=2;rotateDeg2-=2;$('#NCS-btn')[0].style.transform='rotate('+rotateDeg+'deg)';$('#NCS-name')[0].style.transform='rotate('+rotateDeg2+'deg)';},20);
  $('body').append('<div id="NCS-menu" class="animated" style="display:none;position:absolute;bottom:52px;left:-50px;background-color:#0a0a0a;height:80px;width:200px;color:gray;border:2px #1B1B1B solid;text-align:left;z-index:3;opacity:0.8"><!--<center class="animated infinite flip" style="text-align:center">Whoa, Animations!</center>--></div>');
  $('#NCS-menu').append('<button id="NCS-f1" class="disabled animated" style="float:left;text-align:center;word-wrap:break-word;opacity:0.8">Hide YT player</button>');
  $('#NCS-menu').append('<button id="NCS-f2" class="disabled animated" style="float:right;text-align:center;word-wrap:break-word;opacity:0.8">Theme</button>');
  $('#NCS-menu').css('left',(($('#NCS-btn').css('width').split('px')[0]/2)-$('#NCS-btn').offset().left)*-1+'px');
  $('#NCS-btn').on('click',function(){$('#NCS-menu').css('left',(($('#NCS-btn').css('width').split('px')[0]/2)-$('#NCS-btn').offset().left)*-1+'px');if($('#NCS-menu').css('display')==='block'){$('#NCS-menu').addClass('fadeOutRight');$('#NCS-menu').removeClass('fadeInLeft');setTimeout(function(){$('#NCS-menu').css('display','none');$('#NCS-menu').css('left',(($('#NCS-btn').css('width').split('px')[0]/2)-$('#NCS-btn').offset().left)*-1+'px');},500);}else{$('#NCS-menu').addClass('fadeInLeft');$('#NCS-menu').css('display','block');$('#NCS-menu').removeClass('fadeOutRight');}});
  window.onresize = function(){$('#NCS-menu').css('left',(($('#NCS-btn').css('width').split('px')[0]/2)-$('#NCS-btn').offset().left*-1)+'px');};
  $('#NCS-f1').on('click',NCSfeatures);
  $('#NCS-f2').on('click',NCSfeatures);
  $('head').append('<style type="text/css">.enabled{background-color:#B4CFEC;color:white; !important}.disabled{color:black; !important}#NCS-menu{padding:3px}#NCS-btn:hover{cursor:pointer}</style>');
  $('#app-right').css('z-index',1);
  if(NCSsettings[0]){
    $('#NCS-f1').click();
  }
  if(NCSsettings[1]){
    $('#NCS-f2').click();
  }
  $('#messages').append('<center id="NCS-startupmsg" class="cm log mention animated flip" style="color:whitesmoke;text-align:center;font-weight:200;font-size:120%;padding:30px;">'+startUpMsg+'<br><span style="font-weight:100;font-size:85%">'+newFeaturesMsg+'</span></center>');
  $('#messages')[0].scrollIntoView(false);
  $('body').css('overflow-y','hidden');
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
  }
}
