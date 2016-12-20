// Version 0.6.0, temporary method of update. Used it to remove broken features in prep for the new NC331 patch.
// This update fixes/moves the NCS issue button.
var version = '1.0.5 | Moving on...';
var ncApiKey = '6R9fc29cMLw615PBv98u072430tZ3E9c';
var startUpMsg = "Welcome to NCS version " + version;
var newFeaturesMsg = "NCS for Musiqpad is out now! Click <a href='https://ncs.electricgaming.ga' target=_blank>here</a> to install it!<br><a target='_blank' href='https://ncs.electricgaming.ga/' target='_blank'>NCS website</a><br><a href='https://github.com/Nuvm/NCS/raw/master/NCS.user.js' target='_blank'>NCS autoloader</a>";
var alertMsg = "Ok now seriously, the lolis tell me I cant update this anymore else they'll get angry. Meaning this is the final NCS for ANC update. This does not however mean the project is being abandoned. Please click <a target=_blank href='http://electricgaming.ga/en/index.php?u=/topic/6/ggmoving-on'>here</a> for more information.";
var errorMsg = "It seems that you are already running NCS. If that is not the case, please refresh and try again. If it still doesn't work, please report the issue <a href='https://github.com/Nuvm/NCS/issues/new' target='_blank'>here</a>.";
var uname, lastSelected, prevObj, unamestuff, unameicon, checkIfReady, ccid, previousBg, ytNextPage, ytPrevPage, ytPage, ytCurrentSearch;
var ytCurPage = 0,
  rotateDeg = 0,
  rotateDeg2 = 0;
var wsongs = [],
  msongs = [],
  ytSearchResults = [],
  songHistory = [];
var apiKey = 'AIzaSyARvwirFktEIi_BTaKcCi9Ja-m3IEJYIRk';
var NCSsettings = [false, false, false, false, false, false, false, false, false, false, false, false, false, false,];
setTimeout(function() {
  checkIfReady = setInterval(function() {
    if (document.getElementsByClassName('loading').length !== 1) {
      start();
    }
  }, 100);
}, 2000);
var afkRespondCooldown = false;
var afkRespondReset = null;


function start() {
  $.getScript('https://rawgit.com/Nuvm/NCS/dev/CustomNames.js');
  clearInterval(checkIfReady);
  if ($('#NCS-menu')[0] || $('#NCS-btn')[0] || $('#THEME_BUG')[0]) {
    $('#messages').append('<center class="NCSalert cm log mention" style="color:whitesmoke;text-align:center;font-weight:150;font-size:30;">' + errorMsg + '</center>');
  } else {
    console.log('[NCS] Started!');
    uname = document.getElementsByClassName('navbar header')[0].getElementsByClassName('nav-form nav-right')[0].getElementsByTagName('p')[0].innerHTML;
    $('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/daneden/animate.css/master/animate.min.css">');
    $('head').append('<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=IM+Fell+English+SC">');
    $('head').append('<script src="https://apis.google.com/js/client.js?onload=googleApiClientReady"></script>');
    setTimeout(API.on(API.events.CHAT, cfnm), 4000);
    setTimeout(API.on(API.events.ADVANCE, cfns), 4000);
    NCSinit();
  }
}

function cfns(data) {
  //ccid = data.media.cid;
  /*if($('#NCS-f5').hasClass('enabled')){
    if(wsongs.indexOf(ccid)!==-1){
      setTimeout(function(){$('#btn-woot').click();},1500);
    } else if(msongs.indexOf(ccid)!==-1){
      setTimeout(function(){$('#btn-meh').click();},1500);
    }
  }*/

  /*if($('#NCS-f7').hasClass('enabled')){
    for(i=0;i<songHistory.length;i++){
      if(songHistory[i].cid==data.media.cid){
        $('#messages').append('<center class="NCSalert cm log mention" style="color:whitesmoke;text-align:center;font-weight:100;font-size:28;padding:5px;"><b>[NCS]</b> This song is in history and was played '+(i+1)+' songs ago by ' + songHistory[i].user + '!</center>');
        $('#chat-sound-1')[0].play();
      }
    }*/
  if (NCSsettings[6]) {
    var inWaitlist = false;
    for (var i in wl) {
      var wlData = wl[i];
      if (wlData.user.userid == User.userid) {
        inWaitlist = true;
      }
    }
    if (!inWaitlist) {
      console.log('joining waitlist');
      socket.send(JSON.stringify({
        name: username,
        type: 'booth',
        operation : 'join',
      }));
    }
  }
  /*if (songHistory.length == 49) {
    songHistory.pop();
  }
  songHistory.unshift({
    'cid': data.media.cid,
    'user': data.user.username
  });*/
}


function cfnm(data) {
  if (data.message.indexOf('@' + User.username) > -1 && NCSsettings[13] == true) {
    if (!afkRespondCooldown) {
      afkRespondCooldown = true;
      afkRespondReset = setTimeout(function () {afkRespondCooldown = false;},60000);
      API.sendChat('[NCS] @' + data.user.username + ' ' + afkresponse);
    }
  }
  if (document.getElementById('messages').lastChild.id !== prevObj) {
    prevObj = document.getElementById('messages').lastChild.id;
    if (document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerHTML.slice(0, 4) === '$NCS') {
      NCScommandSorter(document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerText, document.getElementById('messages').lastChild.getElementsByClassName('uname')[0], document.getElementById('messages').lastChild)
    }
    if ($('#NCS-f3').hasClass('enabled') && !document.hasFocus()) {
      if (document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerHTML.indexOf('@' + uname) !== -1) {
        var notif = new Notification(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML, {
          icon: 'http://i.imgur.com/5ThdRUd.png',
          body: document.getElementById('messages').lastChild.getElementsByClassName('msg')[0].innerText
        });
        notif.onclick = function() {
          window.focus();
          notif.close()
        };
        setTimeout(function() {
          notif.close()
        }, 3000)
      }
    }
    if (!NCSsettings[8]) {
      cfun()
    }
  }
}

function NCScommandSorter(msg, user, element) {
  msg = msg.slice(4, 255);
  if (msg === 'update') {
    if (user.innerHTML === 'Nuvm' || user.innerHTML === 'CSxKING' || user.innerHTML === 'PixelBreeze' || user.innerHTML === 'WindWalk') {
      $('#messages').append('<center class="NCSalert cm log mention" style="color:whitesmoke;text-align:center;font-weight:200;font-size:46;padding:5px;">A new update is available for NCS!<br><span style="font-weight:100;font-size:28">Refresh your page to get the latest update!</span></center>');
      $('#chat-sound-1')[0].play();
      setTimeout(function() {
        $(element).remove()
      }, 50)
    }
  } else if (msg.slice(0, 7) === 'message') {
    if (user.innerHTML === 'Nuvm' || user.innerHTML === 'CSxKING' || user.innerHTML === 'Pixel' || user.innerHTML === 'WindWalk') {
      $('#messages').append('<center class="NCSalert cm log mention" style="color:whitesmoke;text-align:center;font-weight:150;font-size:30;">[' + user.innerHTML + '] says: ' + msg.slice(7, 255) + '</center>');
      setTimeout(function() {
        $(element).remove()
      }, 50)
    }
  } else if (msg.slice(0, 5) === 'alert') {
    if (user.innerHTML === 'Nuvm' || user.innerHTML === 'CSxKING' || user.innerHTML === 'Pixel' || user.innerHTML === 'WindWalk') {
      $('#messages').append('<center class="NCSalert cm log mention" style="color:whitesmoke;text-align:center;font-weight:500;font-size:46;"><b>[NCS ALERT]</b><br> ' + msg.slice(5, 255) + '</center>');
      $('#chat-sound-1')[0].play();
      setTimeout(function() {
        $(element).remove()
      }, 50)
    }
  }
}

window.addEventListener('beforeunload', function() {
  localStorage.setItem('NCSlocalSettings', JSON.stringify(NCSsettings));
  localStorage.setItem('NCSsmartWoot', JSON.stringify(wsongs));
  localStorage.setItem('NCSsmartMeh', JSON.stringify(msongs));
});
if (typeof(Storage) === "undefined") {
  alert("Unfortunately, your browser does not support local storage. Your NCS settings will not be saved. Please use a modern version of Chrome, Firefox, Safari or Opera.")
}
if (typeof localStorage.NCSlocalSettings !== undefined) {
  var localSettings = JSON.parse(localStorage.NCSlocalSettings);
  for (i = 0; i < localSettings.length; i++) {
    NCSsettings[i] = localSettings[i];
  }
}
if (typeof localStorage.NCSsmartWoot !== undefined) {
  var localWoot = JSON.parse(localStorage.NCSsmartWoot);
  var localMeh = JSON.parse(localStorage.NCSsmartMeh);
  for (i = 0; i < localWoot.length; i++) {
    wsongs.push(localWoot[i]);
  }
  for (i = 0; i < localMeh.length; i++) {
    msongs.push(localMeh[i]);
  }
}

function NCSinit() {
  $('#volume').bind('mousewheel', function(e) {
    if (e.originalEvent.wheelDelta > 0) {
      $('#volume').val(JSON.stringify(JSON.parse($('#volume').val()) + 1));
      player.setVolume($('#volume').val());
    } else if (e.originalEvent.wheelDelta < 0) {
      $('#volume').val($('#volume').val() - 1);
      player.setVolume($('#volume').val());
    }
    $('#volumePercent').text(player.getVolume() + '%');
  });
  $('#notifications').append('<div id="NCS-notif" class="notification" style="display:none"><div class="notif-title"><img src="http://i.imgur.com/5ThdRUd.png" class="notif-icon"><span id="NCS-notif-title-text" class="notif-title-text"></span><img id="NCS-notif-close" src="img/close.png" class="notif-close"></div><div id="NCS-notif-content" style="overflow-y:auto;overflow-x:hidden;" class="notif-content"><div id="NCS-notif-content-text" style="top:50px;position:absolute;" class="notif-content-text"></div></div></div>');
  $('#NCS-notif-close').on('click', function() {
    $('#NCS-notif').css('display', 'none');
    $('#notifications').css('display', 'none');
  });
  $('#chat-button').parent().append('<div id="NCS-btn" class="animated" style="transform:rotate(0deg);background-image:none;height:30px;width:30px;float:right;margin-right:5px;-webkit-user-select: none;"></div>');
  $('#NCS-btn').append('<div id="NCS-name" style="position:absolute;transform:rotate(0deg);font-family:IM Fell English SC;color:black;bottom:10px;text-shadow:0px 0px 2px #FFD700;"><b>NCS</b></div>');
  //$('.navbar.header').append('<a href="http://electricgaming.ga/forums/en/forumdisplay.php?fid=24" target="_blank"><button id="THEME_BUG" class="nav-form nav-right">[NCS] Report an Issue</button></a>');
  $('#NCS-btn')[0].style.backgroundImage = "url('http://i.imgur.com/5ThdRUd.png')";
  initialWidth1 = $('#chat-button').css('width').split('px')[0];
  initialWidth2 = $('#users-button').css('width').split('px')[0];
  initialWidth3 = $('#waitlist-button').css('width').split('px')[0];
  $('#chat-button').parent().css('height', '35px');
  $('#chat').css('height', ($('#chat').css('height').split('px')[0] - 5));
  $('#chat-button').css('width', initialWidth1 * 0.9);
  $('#users-button').css('width', initialWidth2 * 0.9).css('left', $('#users-button').css('left').split('px')[0] - ((initialWidth2) - (initialWidth2 * 0.9)));
  $('#waitlist-button').css('width', initialWidth3 * 0.9).css('left', $('#waitlist-button').css('left').split('px')[0] - (((initialWidth3) - (initialWidth3 * 0.9)) + ((initialWidth2) - (initialWidth2 * 0.9))));
  $('#NCS-btn').css('top', '0px').css('right', '0px');
  $('#app-right').append('<div id="NCS-menu" style="display:none;background-color:transparent;box-shadow: rgba(12, 12, 12, 0.901961) 0px 0px 10px 4px inset;"></div>');
  $('#NCS-menu').css('top', '100%-35').css('height', $('#chat').css('height')).css('width', '100%');
  $('#NCS-menu').append('<div id="NCS-f1" class="disabled animated NCSf">Hide Video Player<span id="NCS-f1c" class="NCS-checkmark" style="display:none"/></div>');
  $('#NCS-menu').append('<div id="NCS-f2" class="disabled animated NCSf">Custom Theme<span id="NCS-f2c" class="NCS-checkmark" style="display:none"/></div>');
  $('#NCS-menu').append('<div id="NCS-f14" class="disabled animated NCSf">Plug Theme<span id="NCS-f14c" class="NCS-checkmark" style="display:none"/></div>');
  $('#NCS-menu').append('<div id="NCS-f3" class="disabled animated NCSf">Desktop Notifications<span id="NCS-f3c" class="NCS-checkmark" style="display:none"/></div>');
  $('#NCS-menu').append('<div id="NCS-f4" class="disabled animated NCSf">Remove Video Player<span id="NCS-f4c" class="NCS-checkmark" style="display:none"/></div>');
  //$('#NCS-menu').append('<div id="NCS-f5" class="disabled animated NCSf" style="top:170px;">Smartvote<span id="NCS-f5c" class="NCS-checkmark" style="display:none"/></div>');
  $('#NCS-menu').append('<div id="NCS-f6" class="disabled animated NCSf">Custom Background<span id="NCS-f6c" class="NCS-checkmark" style="display:none"/></div>');
  //if(username==='Nuvm'||username==='CSxKING'||username==='Pixel'||username==='Don'){
    $('#NCS-menu').append('<div id="NCS-f7" class="disabled animated NCSf">Autojoin Waitlist<span id="NCS-f7c" class="NCS-checkmark" style="display:none"/></div>');
  //}
  //$('#NCS-menu').append('<div id="NCS-f8" class="disabled animated NCSf">YouTube Search<span id="NCS-f8c" style="display:none"/></div>');
  $('#NCS-menu').append('<div id="NCS-f9" class="disabled animated NCSf">Disable Custom Usernames<span id="NCS-f9c" class="NCS-checkmark" style="display:none"/></div>');
  $('#NCS-menu').append('<div id="NCS-f10" class="disabled animated NCSf">Custom Mention Sounds<span id="NCS-f10c" class="NCS-checkmark" style="display:none"/></div>');
  $('#NCS-menu').append('<div id="NCS-f12" class="disabled animated NCSf">ETA<span id="NCS-f12c" class="NCS-checkmark" style="display:none"/></div>');
  $('#NCS-menu').append('<div id="NCS-f13" class="disabled animated NCSf">AFK Responder<span id="NCS-f13c" class="NCS-checkmark" style="display:none"/><span id="afk-edit"></span></div>');
  $('#NCS-menu').append('<div id="NCS-f11" class="disabled animated NCSf"><a style="text-decoration: none; color: white;"  target="_blank" href="https://github.com/Nuvm/NCS/issues">Found An Issue? Report It Here!</a></div>');
  $('#NCS-btn').on('click', function() {
    if ($('#NCS-menu').css('display') === 'block') {
      $('#' + lastSelected.split('-button')[0]).css('display', 'block');
      $('#NCS-menu').css('display', 'none')
    } else {
      if (document.getElementsByClassName('selected')[0]) {
        lastSelected = document.getElementsByClassName('selected')[0].id
      }
      $('#chat-button,#users-button,#waitlist-button').removeClass('selected');
      $('#chat,#users,#waitlist').css('display', 'none');
      $('#NCS-menu').css('display', 'block')
    }
  });
  $('#chat-button,#users-button,#waitlist-button').on('click', function() {
    if ($('#NCS-menu').css('display') === 'block') {
      $('#NCS-menu').css('display', 'none')
    }
  });
  $('#NCS-f1,#NCS-f2,#NCS-f3,#NCS-f4,'/*#NCS-f5,*/ + '#NCS-f6,#NCS-f7,'/*#NCS-f8,*/+'#NCS-f9,#NCS-f10,#NCS-f12,#NCS-f13, #NCS-f14').on('click', NCSfeatures);
  $('head').append('<style type="text/css">#NCS-btn:hover{cursor:pointer;background-color:grey;}.NCS-checkmark{float:right;background-image:url("http://i.imgur.com/rF5fHxr.png");background-repeat:no-repeat;height:15px;width:15px;margin-right:25px;}.NCSf{height:15px;word-wrap:break-word;opacity:0.8;padding-top:9.5px;padding-bottom:9.5px;padding-left:15px;color:white;}.NCSf:hover{cursor:pointer;box-shadow:inset 0px 0px 9px 1px rgba(255,255,255,0.8);}.NCScopiable{height:30px;text-align:left;padding:30px;padding-bottom:33px;overflow-wrap:break-word;display:block;}</style>');
  $('#messages').append('<center id="NCS-startupmsg" class="cm log mention" style="color:whitesmoke;text-align:center;font-weight:200;font-size:120%;padding:30px;">' + startUpMsg + '<br><span style="font-weight:100;font-size:85%">' + newFeaturesMsg + '</span></center>');
  $('#messages').append('<center id="NCS-startupalert" class="cm log mention" style="color:whitesmoke;text-align:center;font-weight:100;font-size:85%;padding:30px;">'+alertMsg);
  //document.getElementById("chat-sound-1").play();
  $('#messages')[0].scrollIntoView(false);
  for (i = 0; i < NCSsettings.length; i++) {
    if (i === 5) {
      if (NCSsettings[5] !== false) {
        previousBg = $('#img')[0].style.backgroundImage;
        $('#img')[0].style.backgroundImage = 'url(' + NCSsettings[5] + ')';
        $('#NCS-f6c').css('display', 'block');
        $('#NCS-f6').removeClass('disabled').addClass('enabled');
      }
    } else if (i === 9) {
      if (NCSsettings[9] !== false) {
        $('#chat-sound-1')[0].src = NCSsettings[9];
        $('#NCS-f10c').css('display', 'block');
        $('#NCS-f10').removeClass('disabled').addClass('enabled');
      }
    } else if (NCSsettings[i] && i !== 7) {
      $('#NCS-f' + (i + 1)).click();
    }
  }

  if (localStorage.getItem('ncsRun') == null) {
    trackNewNcsUser();
    localStorage.setItem('ncsRun', '');
  }
}

function NCSfeatures(eventData) {
  if (eventData.target.id === 'NCS-f1') {
    if ($('#NCS-f1').hasClass('disabled')) {
      if (document.getElementById('player')) {
        $('#NCS-f1c').css('display', 'block');
        document.getElementById('player').style.display = 'none';
        NCSsettings[0] = true;
        $('#NCS-f1').removeClass('disabled').addClass('enabled')
      }
    } else {
      if (document.getElementById('player')) {
        $('#NCS-f1c').css('display', 'none');
        document.getElementById('player').style.display = 'block';
        NCSsettings[0] = false;
        $('#NCS-f1').removeClass('enabled').addClass('disabled')
      }
    }
  } else if (eventData.target.id === 'NCS-f2') {
    if ($('#NCS-f2').hasClass('disabled')) {
      $('head').append('<link id="CSxKINGtheme" rel="stylesheet" href="https://rawgit.com/Nuvm/NCS/dev/NC331_Style.css">');
      $('#NCS-f2c').css('display', 'block');
      NCSsettings[1] = true;
      $('#NCS-f2').removeClass('disabled').addClass('enabled')
    } else {
      $('#NCS-f2c').css('display', 'none');
      $('#CSxKINGtheme').remove();
      NCSsettings[1] = false;
      $('#NCS-f2').removeClass('enabled').addClass('disabled')
    }
  } else if (eventData.target.id === 'NCS-f3') {
    if ($('#NCS-f3').hasClass('disabled')) {
      if (!Notification) {
        alert('[NCS] You do not have notifications and therefore this option is not available. Please use a modern version of Chrome, Firefox, Opera or Firefox.')
      } else if (Notification.permission !== "granted") {
        Notification.requestPermission()
      } else {
        $('#NCS-f3c').css('display', 'block');
        NCSsettings[2] = true;
        $('#NCS-f3').removeClass('disabled').addClass('enabled')
      }
    } else {
      $('#NCS-f3c').css('display', 'none');
      NCSsettings[2] = false;
      $('#NCS-f3').removeClass('enabled').addClass('disabled')
    }
  } else if (eventData.target.id === 'NCS-f4') {
    if ($('#NCS-f4').hasClass('disabled')) {
      $('#NCS-f4c').css('display', 'block');
      $('#player').remove();
      $('#messages').append('<center class="NCSalert cm log mention animated fadeInLeftBig" style="color:whitesmoke;text-align:center;font-weight:150;font-size:30;">You will have to disable this option and refresh in order to have the video player back. Sorry, this is how it works currently!</center>');
      //document.getElementById("chat-sound-1").play();
      $('#messages')[0].scrollIntoView(false);
      NCSsettings[3] = true;
      $('#NCS-f4').removeClass('disabled').addClass('enabled')
    } else {
      $('#NCS-f4c').css('display', 'none');
      $('#messages').append('<center class="NCSalert cm log mention animated fadeInLeftBig" style="color:whitesmoke;text-align:center;font-weight:150;font-size:30;">Refresh the page to get the video player back!</center>');
      //document.getElementById("chat-sound-1").play();
      $('#messages')[0].scrollIntoView(false);
      NCSsettings[3] = false;
      $('#NCS-f4').removeClass('enabled').addClass('disabled')
    }
  }
  /* else if (eventData.target.id === 'NCS-f5') {
      if ($('#NCS-f5').hasClass('disabled')) {
        if (typeof(Storage) === "undefined") {
          alert("[NCS] Unfortunately, your browser does not support local storage. SmartVote will not work. Please use a modern version of Chrome, Firefox, Safari or Opera.");
        } else if(!document.getElementById('player')){
          alert("[NCS] SmartVote doesn't work when the video player is removed. We are sorry for the inconvenience.");
        } else {
          document.getElementById('btn-woot').addEventListener('click',voteclick);
          document.getElementById('btn-meh').addEventListener('click',voteclick);
          $('#NCS-f5c').css('display', 'block');
          NCSsettings[4] = true;
          $('#NCS-f5').removeClass('disabled').addClass('enabled')
        }
      } else {
        document.getElementById('btn-woot').removeEventListener('click',voteclick);
        document.getElementById('btn-meh').removeEventListener('click',voteclick);
        $('#NCS-f5c').css('display', 'none');
        NCSsettings[4] = false;
        $('#NCS-f5').removeClass('enabled').addClass('disabled')
      }
    }*/
  else if (eventData.target.id === 'NCS-f6') {
    if ($('#NCS-f6').hasClass('disabled')) {
      $('#notifications')[0].style.display = 'block';
      $('#NCS-notif').css('display', 'block');
      $('#NCS-notif-title-text')[0].innerHTML = '<b>[NCS]</b> Custom Background';
      $('#NCS-notif-content-text')[0].innerHTML = '<span style="marge:20px">Custom Background:</span><input type="text" placeholder="PNG/JPG/JPEG/GIF Image URL (ideally 1600x900)" id="NCS-customBgInput" value="" style="margin:20px;"/>';
      $('#NCS-customBgInput')[0].addEventListener('blur', function() {
        if (/^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$/ig.test($('#NCS-customBgInput')[0].value)) {
          previousBg = $('#img')[0].style.backgroundImage;
          $('#img')[0].style.backgroundImage = 'url(' + $('#NCS-customBgInput')[0].value + ')';
          $('#NCS-f6c').css('display', 'block');
          $('#NCS-f6').removeClass('disabled').addClass('enabled');
          NCSsettings[5] = $('#NCS-customBgInput')[0].value;
        } else {
          alert('Not a valid image URL.');
        }
      });
    } else {
      $('#img')[0].style.backgroundImage = previousBg;
      $('#NCS-f6c').css('display', 'none');
      NCSsettings[5] = false;
      $('#NCS-f6').removeClass('enabled').addClass('disabled')
    }
  } else if (eventData.target.id === 'NCS-f7') {
    if ($('#NCS-f7').hasClass('disabled')) {
      $('#NCS-f7c').css('display', 'block');
      NCSsettings[6] = true;
      $('#NCS-f7').removeClass('disabled').addClass('enabled');
      cfns();
    } else {
      $('#NCS-f7c').css('display', 'none');
      NCSsettings[6] = false;
      $('#NCS-f7').removeClass('enabled').addClass('disabled');
    }
  } else if (eventData.target.id === 'NCS-f8') {
    $('#notifications')[0].style.display = 'block';
    $('#NCS-notif').css('display', 'block');
    /*$('#NCS-notif-title-text')[0].innerHTML = '<b>[NCS]</b> Settings';
    $('#NCS-notif-content-text')[0].innerHTML = '<div id="NCS-ft-container-customBg"><input id="NCS-ft-checkbox-customBg" type="checkbox"/><span style="margin:10px;">Custom Background:</span><input style="float:right;" type="text" placeholder="PNG/JPG/JPEG/GIF Image URL (ideally 1600x900)" id="NCS-ft-customBgInput" value="" style="margin:20px;"/></div>';
    $('#NCS-ft-customBgInput')[0].addEventListener('blur',function(){if(/^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$/ig.test($('#NCS-ft-customBgInput')[0].value)){previousBg=$('#img')[0].style.backgroundImage;$('#img')[0].style.backgroundImage = 'url('+$('#NCS-ft-customBgInput')[0].value+')';$('#NCS-f6c').css('display','block');$('#NCS-f6').removeClass('disabled').addClass('enabled');NCSsettings[5]=$('#NCS-ft-customBgInput')[0].value;$('#NCS-ft-customBgInput')[0].value=NCSsettings[5];$('#NCS-ft-checkbox-customBg')[0].checked=true;}else{alert('Not a valid image URL.');$('#NCS-ft-checkbox-customBg')[0].checked=false;}});
    if($('#NCS-f6').hasClass('enabled')){
      $('#NCS-ft-checkbox-customBg')[0].checked=true;
      $('#NCS-ft-customBgInput')[0].value = NCSsettings[5];
    } else {
      $('#NCS-ft-checkbox-customBg')[0].checked=false;
      $('#NCS-ft-customBgInput')[0].value = '';
    }
    $('#NCS-notif-content-text')[0].innerHTML+='<br><div id="NCS-ft-ytSearch" class="NCSf" onclick="ytAppend()">Search YouTube</div>';*/
    ytAppend();
  } else if (eventData.target.id === 'NCS-f9') {
    if ($('#NCS-f9').hasClass('disabled')) {
      $('#NCS-f9c').css('display', 'block');
      NCSsettings[8] = true;
      $('#NCS-f9').removeClass('disabled').addClass('enabled')
    } else {
      $('#NCS-f9c').css('display', 'none');
      NCSsettings[8] = false;
      $('#NCS-f9').removeClass('enabled').addClass('disabled');
    }
  } else if (eventData.target.id === 'NCS-f10') {
    if ($('#NCS-f10').hasClass('disabled')) {
      $('#notifications')[0].style.display = 'block';
      $('#NCS-notif').css('display', 'block');
      $('#NCS-notif-title-text')[0].innerHTML = '<b>[NCS]</b> Custom Mention Sound';
      $('#NCS-notif-content-text')[0].innerHTML = '<span style="marge:20px">Custom Mention Sound:</span><input type="text" placeholder="OGG/MP3/WAV Audio URL" id="NCS-customSoundInput" value="" style="margin:20px;"/>';
      $('#NCS-customSoundInput')[0].addEventListener('blur', function() {
        if (/^https?:\/\/(?:[a-z\-0-9]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:ogg|mp3|wav)$/ig.test($('#NCS-customSoundInput')[0].value)) {
          $('#chat-sound-1')[0].src = $('#NCS-customSoundInput')[0].value;
          $('#NCS-f10c').css('display', 'block');
          $('#NCS-f10').removeClass('disabled').addClass('enabled');
          NCSsettings[9] = $('#NCS-customSoundInput')[0].value;
        } else {
          alert('Not a valid audio URL.');
        }
      });
    } else {
      $('#chat-sound-1')[0].src = 'https://cdn.bssecure.net/nightcore/audio/notif.mp3';
      $('#NCS-f10c').css('display', 'none');
      NCSsettings[9] = false;
      $('#NCS-f10').removeClass('enabled').addClass('disabled');
    }
  } else if (eventData.target.id === 'NCS-f12') {
    if ($('#NCS-f12').hasClass('disabled')) {
     $('#NCS-f12c').css('display', 'block');
     NCSsettings[12] = true;
     $('#NCS-f12').removeClass('disabled').addClass('enabled');
     ETA();
   } else {
    $('#NCS-f12c').css('display', 'none');
    NCSsettings[12] = false;
    $('#NCS-f12').removeClass('enabled').addClass('disabled');
    ETAOff();
   }
  } else if (eventData.target.id === 'NCS-f13') {
    if ($('#NCS-f13').hasClass('disabled')) {
     $('#NCS-f13c').css('display', 'block');
     NCSsettings[13] = true;
     $('#NCS-f13').removeClass('disabled').addClass('enabled');
     $('#msg-in').attr('disabled', 'disabled');
   } else {
    $('#NCS-f13c').css('display', 'none');
    NCSsettings[13] = false;
    $('#NCS-f13').removeClass('enabled').addClass('disabled');
    $('#msg-in').removeAttr('disabled');
   }
  } else if (eventData.target.id === 'NCS-f14') {
    if ($('#NCS-f14').hasClass('disabled')) {
     $('#NCS-f14c').css('display', 'block');
     NCSsettings[14] = true;
     $('#NCS-f14').removeClass('disabled').addClass('enabled');
     applyPlugTheme();
   } else {
    $('#NCS-f14c').css('display', 'none');
    NCSsettings[14] = false;
    $('#NCS-f14').removeClass('enabled').addClass('disabled');
    plugThemeOff();
   }
  } else if (eventData.target.id === 'afk-edit') {
  showNotif("afk-edit");
  }
}

function ytAppend() {
  if (!NCSsettings[7]) {
    alert('Hey there! To watch a YouTube video, click the thumbnail. Click on a title to join the waitlist with this song. This message will only appear the first time you will use this feature.');
    NCSsettings[7] = true;
  }
  $('#NCS-notif-title-text')[0].innerHTML = "<b>[NCS]</b> YouTube Search";
  $('#NCS-notif-content-text')[0].innerHTML = '';
  $('#NCS-notif-content-text').append('<div id="NCS-yt-search-container" style="position:absolute;top:30px;height:320px;width:580px;overflow-y:auto;"></div>');
  $('#NCS-notif-content-text').append('<div id="NCS-yt-buttons"><label><input id="NCS-yt-search-query" placeholder="Search YouTube" type="text/css"><button id="NCS-yt-search-button">Search</button></label><div style="float:right;position:absolute;right:10px;" id="NCS-yt-search-changePage"><span id="NCS-yt-search-prevPage" style="color:blue;cursor:pointer;margin:5px;display:none"><u>Previous Page</u></span><span id="NCS-yt-search-nextPage" style="color:blue;cursor:pointer;margin:5px;display:none"><u>Next Page</u></span></div></div>');
  $('#NCS-yt-search-button').on('click', function() {
    makeRequest(false);
  });
  $('#NCS-yt-search-prevPage').on('click', function() {
    ytCurPage--;
    ytPage = ytPrevPage;
    makeRequest(true);
  });
  $('#NCS-yt-search-nextPage').on('click', function() {
    ytCurPage++;
    ytPage = ytNextPage;
    makeRequest(true);
  });
}

function voteclick(e) {
  if (e.target.offsetParent.id === 'btn-woot' || e.target.id === 'btn-woot') {
    if (e.target.offsetParent.className === 'active') {
      if (wsongs.indexOf(ccid) === -1 && ccid !== undefined) {
        wsongs.push(ccid);
      }
      if (msongs.indexOf(ccid) !== -1 && ccid !== undefined) {
        msongs.splice(msongs.indexOf(ccid), 1);
      }
    } else {
      if (wsongs.indexOf(ccid) !== -1 && ccid !== undefined) {
        wsongs.splice(wsongs.indexOf(ccid), 1);
      }
    }
  } else if (e.target.offsetParent.id === 'btn-meh' || e.target.id === 'btn-meh') {
    if (e.target.offsetParent.className === 'active') {
      if (msongs.indexOf(ccid) === -1 && ccid !== undefined) {
        msongs.push(ccid);
      }
      if (wsongs.indexOf(ccid) !== -1 && ccid !== undefined) {
        wsongs.splice(wsongs.indexOf(ccid), 1);
      }
    } else {
      if (msongs.indexOf(ccid) !== -1 && ccid !== undefined) {
        msongs.splice(msongs.indexOf(ccid), 1);
      }
    }
  }
}

function makeRequest(e) {
  console.log(e);
  ytCurrentSearch = $('#NCS-yt-search-query').val();
  $('#NCS-yt-search-container')[0].innerHTML = '';
  $('#NCS-yt-search-container').append('<div id="NCS-yt-thumbnail-container" style="margin:10px;position:absolute;height:100%;width:120px;float:left;"></div>');
  $('#NCS-yt-search-container').append('<div id="NCS-yt-title-container" style="margin:10px;margin-left:20px;position:absolute;left:120px;height:100%;"></div>');
  ytSearchResults = [];
  var q = $('#NCS-yt-search-query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    maxResults: 10,
    pageToken: ytPage,
    type: 'video',
    safeSearch: 'none',
    videoSyndicated: 'true'
  });
  request.execute(function(response) {
    var str = response.result;
    if (str.items.length !== 0) {
      ytNextPage = str.nextPageToken;
      ytPrevPage = str.prevPageToken;
      for (i = 0; i < str.items.length; i++) {
        $('#NCS-yt-thumbnail-container')[0].innerHTML += '<a href="https:youtube.com/watch?v=' + str.items[i].id.videoId + '" target="_blank"><image src=' + str.items[i].snippet.thumbnails.default.url + ' aria-label="Click here to go to the youtube page"></image></a>';
        $('#NCS-yt-title-container')[0].innerHTML += '<div id="' + str.items[i].id.videoId + '" class="NCScopiable" aria-label="Click to join waitlist & play this song">' + str.items[i].snippet.title + '</div>';
      }
      //$('#NCS-yt-buttons')[0].innerHTML += '<br><div style="float:right;position:absolute;right:10px;" id="NCS-yt-search-changePage"><span id="NCS-yt-search-prevPage" style="color:blue;cursor:pointer;margin:5px"><u>Previous Page</u></span><span id="NCS-yt-search-nextPage" style="color:blue;cursor:pointer;margin:5px"><u>Next Page</u></span>';
      if (ytCurPage > 0) {
        $('#NCS-yt-search-prevPage')[0].style.display = 'block';
        $('#NCS-yt-search-nextPage')[0].style.display = 'block';
      } else {
        ytCurPage = 0;
        $('#NCS-yt-search-prevPage')[0].style.display = 'none';
        $('#NCS-yt-search-nextPage')[0].style.display = 'block';
      }

      console.log('Current ytCurPage value: ' + ytCurPage);
      $('.NCScopiable').on('click', cTWI);
      $('#NCS-yt-search-query').val(ytCurrentSearch);
    } else {
      $('#NCS-yt-search-container')[0].innerHTML = 'No search results.';
    }
  });

}

function cTWI(e) {
  $('#song-in').val('https://youtu.be/' + e.target.id);
  console.log($('#song-in').val());
  setTimeout(function() {
    $('#waitlist-join').click();
  }, 50);
}

// ETA Script by Thomas. Made toggleable by WindWalk.
function ETA() {
if (NCSsettings[12] == true) {
(function() {
  $('head').prepend('<style>#waitlist-join::after { content: attr(data-eta); display: block; }</style>');
  $('head').append('<style>#waitlist-join { padding: 0px !important; }</style>');
  $('head').append('<style>#waitlist-join::after { display: block; }</style>');
  // $('head').prepend('<style>input[type="text"] { position: relative; bottom: 11px; right: 0px; width: 230px; height: 11px; }</style>');

  function readable(total) {
    var hours = ~~(total / 3600);
    var minutes = (~~(total / 60)) % 60;
    var seconds = total % 60;
    return normalize(hours) + ':' + normalize(minutes) + ':' + normalize(seconds);
  }

  function normalize(number) {
    var addition = (number < 10
      ? '0'
      : '');
    return addition + number;
  }

  function getPosition() {
    var userid = User.userid;
    for (var i = 0; i < wl.length; i++) {
      if (wl[i].user.userid == userid)
        return i;
    }
    return -1;
  }

var ETAInterval = setInterval(function() {
    var position = getPosition();
    position = (position < 0) ? wl.length : position;
    var eta = ~~((position * (3.5 * 60)) + (player.getDuration() - player.getCurrentTime()));
    $('#waitlist-join').attr('data-eta', readable(eta));
  }, 1000);
})();
}
};

function ETAOff() {
 if (NCSsettings[12] == false) {
  $('head').append('<style>#waitlist-join::after { display: none; }</style>');
  $('head').append('<style>#waitlist-join { padding: 7px !important; }</style>');
  }
};

// Loli Counter script
$('head').append('<style>#loli-counter.hidden { display: block; pointer-events:none; opacity: 0; }</style>');
$('head').append('<style>#loli-counter { position: absolute; left: 0; top: 0; margin: 15px; padding: 5px; background: rgba(0,0,0,0.6); font-size: 24px;  font-family: arial, sans-serif; border: 2px lightblue; border-style: solid; opacity: .3; transition: opacity .2s ease-in-out; -moz-transition: opacity .2s ease-in-out; -webkit-transition: opacity .2s ease-in-out; }</style>');
$('head').append('<style>#loli-counter:hover { opacity: 1; transition: opacity .2s ease-in-out; -moz-transition: opacity .2s ease-in-out; -webkit-transition: opacity .2s ease-in-out; }</style>');


$('#app-left').prepend('<span id="loli-counter"></span>');
var lolis = 0;
API.on(0, function(chat) {
  lolis += (chat.message.match(/loli/gi) || []).length;
  $('#loli-counter').text('Loli count: ' + lolis);
});

//Stuff for the plug theme
function applyPlugTheme() {
 if (NCSsettings[14] == true) {
   $('#logout').remove();
   $('#menu').append('<div class="menu-tile" id="logout"><span class="tile-text">Logout</span></div>');
   $('#app').prepend('<div id="img-ncs"></div>');
   $('#ratingbuttons').detach().prependTo('#app-left');
   $('head').append("<style id='NCSdjhistorybtn'>#dj-history-button { right: 200px !important; }</style>");
   $('head').append("<style id='NCStimeleft'>#time-left { right: 300px !important; }</style>");
   // Giving this a go, if it breaks i'll delete it (Test finished, it works, dont delete this.)
    grabCalc = setInterval(function() {
   var playlistSpan = $('#grab-playlists > span').length;
   var calculateTPixels = parseInt(playlistSpan * 29);
   var calculateHPixels = parseInt(playlistSpan * 28);
   for (i = 0; i < playlistSpan; i++) {
     $('#grab-playlists').css({'top': '-' + calculateTPixels + 'px'});
     $("#grab-playlists").css({'height': '+' + calculateHPixels + 'px'});
   }},3000);
   removeThemes();
   $('head').append('<link id="PlugTheme" rel="stylesheet" href="https://rawgit.com/Nuvm/NCS/dev/PlugTheme.css">');
   //function to make the logout button work again as we remove it and then the click listener is removed too
   $('#logout').click(function() {if (localStorage.authToken !== undefined) {
   localStorage.removeItem('authToken');
   location.href = location.href.replace('#', "");
  }})
 }
};

//To take the theme off
function plugThemeOff() {
 if (NCSsettings[14] == false) {
  $('#logout').remove();
  $('.header').find('.nav-right').not('#loginForm').prepend('<button id="logout">Logout</button>')
  $('#ratingbuttons').detach().appendTo('#player');
  $('#grab-playlists').removeAttr('height top style');
  $('#NCSdjhistorybtn').remove();
  $('#NCStimeleft').remove();
  $('#countdown1').remove();
  clearInterval(grabCalc);
  $('#PlugTheme').remove();
  $('#img-ncs').remove();
  //function to make the logout button work again as we remove it and then the click listener is removed too
  $('#logout').click(function() {if (localStorage.authToken !== undefined) {
   localStorage.removeItem('authToken');
   location.href = location.href.replace('#', "");
  }})
 }
};

/*It doesn't work so great with NCS and therefor commented out I'm letting it be if it did more that was needed
$('.theme').on('click', plugThemeOff2);
function plugThemeOff2() {
  $('#logout').remove();
  $('.header').find('.nav-right').not('#loginForm').prepend('<button id="logout">Logout</button>')
  $('#PlugTheme').remove();
  $('#PlugTheme').remove();
  $('#img-ncs').remove();
  $('#logout').click(function() {if (localStorage.authToken !== undefined) {
   localStorage.removeItem('authToken');
   location.href = location.href.replace('#', "");
  }})
};

*/
function removeThemes() {
  $('link[href="' + themeFiles.christmas15 + '"]').remove();
  $('link[href="' + themeFiles.tiki + '"]').remove();
  $('link[href="' + themeFiles.hw15 + '"]').remove();
  $('link[href="' + themeFiles.ncs + '"]').remove();
  $('link[href="' + themeFiles.kawaii + '"]').remove();
}

//To remove plugTheme if you apply another theme in the themeselector
$('.theme').on('click', function() {
  $('#NCS-f14c').css('display', 'none');
   NCSsettings[14] = false;
   $('#NCS-f14').removeClass('enabled').addClass('disabled');
   plugThemeOff();
 });

function trackNewNcsUser() {
  $.ajax({type: 'POST',url: "https://stg.nightcore-331.net/api/stats/NCSUsageCounter?apiKey=" + ncApiKey + "&action=increment",data: '',error: function(e) {console.log(e);},dataType: "json",contentType: "application/json"});
}

//AFK response
$('head').append('<style>#afk-edit {background-image: url("http://i.imgur.com/Zzp8jQC.png");background-size: 15px; background-repeat: no-repeat;height: 15px;width: 15px;position: absolute; margin-left: 215px; }</style>');
$('#notifications').append('<div id="notif-afk-edit" class="notification" style="display: none;"><div class="notif-title"><span class="notif-title-text">AFK Message</span><i class="fa fa-times notif-close"></i></div><div style="overflow: hidden; height: 140px;" class="notif-content"><p>Set your afk response:</p><input type="text" id="afk-response" style="border:solid white 1px; margin:10px;" maxlength="200" placeholder="Set AFK Message"><button style="border-radius:5px;" onclick="resetinput()">Submit</button></input></div></div>');
var afkresponse = 'I am currently AFK.'
$('#notif-afk-edit .notif-content').append('<p class="afk-preview">Current message: ' + afkresponse + '</p>');
function resetinput() {
afkresponse = $('#afk-response').val();
$('#afk-response').val('');
$('.afk-preview').remove();
$('#notif-afk-edit .notif-content').append('<p class="afk-preview">Current message: ' + afkresponse + '</p>');
}

// New timer that is cross-compatible with Musiqpad and ANC.
$.getScript('https://pad.electricgaming.ga/ext/scripts/countdown_timer.js');
