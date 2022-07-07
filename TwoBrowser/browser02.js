//Step 02
//Signaling
const offer = "";  //Past Json Offer
const rc = new RTCPeerConnection();
rc.onicecandidate = e => console.log("New Ice Candidate! reprinting SDP " + JSON.stringify(rc.localDescription));

//WE will not create new data channel but we will recive channel from first party
rc.ondatachannel = e => {
    rc.dc = e.channel;
    rc.dc.onmessage = e => console.log("New message from client! "+ e.data);
    rc.dc.onopen = e => console.log("Connection Opened!!!")
}
rc.setRemoteDescription(offer).then(a=> console.log("Offer Set!"));

//Create Answer
rc.createAnswer().then(a => rc.setLocalDescription(a)).then(a=>console.log("Answer created!"));

//Move to browser01.js and perform step 03

//sending data
rc.dc.send("fine what about your fam");