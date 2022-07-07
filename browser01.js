
//Step 01
const lc = new RTCPeerConnection();

//Create Channel to send data
const dc = lc.createDataChannel("channel");
dc.onmessage = e => console.log("Just got a message "+ e.data);
dc.onopen = e =>console.log("Connection opened");


//Before Creating offer Check the ICE candidate
lc.onicecandidate = e => console.log("New Ice Candidate! reprinting SDP " + JSON.stringify(lc.localDescription));


//Create Offer
lc.createOffer().then(o =>lc.setLocalDescription(o)).then(a=>console.log("set successfully!"));

//Move to browser02.js and perform step 02

//Step 03
const answer = ""; // Past the answer
lc.setRemoteDescription(answer);
///////////////////

//Sending data
dc.send("yo what's up!");
//lc.addTrack   -- to send video,audio etc


