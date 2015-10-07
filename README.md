# NCS DEVS

##STUFF TO DO  

* Make the app-right div containing the chat, users and waitlist tabs to 50px;  
* Make a div that fades in over the chat when NCS-btn is clicked;  
* Make the checkmark schtuff and each feature;  
* Shrink the 3 app-right tabs to the left to allow the NCS icon a 50 x 50 px space (WIP);  
* Put a clearchat icon under the empty spot of the chat tab when the chat tab is selected;  
* Make the JS to do a browser-side clearchat (DONE)  

###Everything needs to be done in order to push the next update

#####Some code for the next release :P  
  
  >Trying to make these tabs to shrink properly  
  initialWidth1 = $('#chat-button').css('width').split('px')[0];  
initialWidth2 = $('#users-button').css('width').split('px')[0];  
initialWidth3 = $('#waitlist-button').css('width').split('px')[0];  
$('#chat-button').parent().css('height','50px');  
$('#chat').css('height',$('#chat').css('height').split('px')[0]-20);  
$('#chat-button').css('width',initialWidth1*0.85);//.css('left',$('#chat-button').css('left').split('px')[0]-((initialWidth1)-(initialWidth1*0.85)));  
$('#users-button').css('width',initialWidth2*0.85).css('left',$('#users-button').css('left').split('px')[0]-((initialWidth2)-(initialWidth2*0.85)));  
$('#waitlist-button').css('width',initialWidth3*0.85).css('left',$('#waitlist-button').css('left').split('px')[0]-(((initialWidth3)-(initialWidth3*0.85))+((initialWidth2)-(initialWidth2*0.85))));  



