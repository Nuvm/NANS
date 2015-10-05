var checkIfReady;
setTimeout(function(){checkIfReady = setInterval(function(){if(document.getElementsByClassName('loading').length!==1){start('ready');}},100);},2000);
function start(s){
  clearInterval(checkIfReady);
  if(s==='ready'){
    $('head').append('<link rel="stylesheet" href="https://cdn.rawgit.com/Nuvm/NCS/master/NC331_Style.css">');
  }
}
