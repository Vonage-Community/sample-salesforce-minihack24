let applicationId = "";
let sessionId = "";
let token = "";  
let session;
let audioToggle;
let videoToggle;

// ********** STEP 6 CODE GOES HERE **********     
const videoPublisherEl = document.querySelector("video-publisher");

// ********** STEP 12 CODE GOES HERE **********
const videoSubscribersEl = document.querySelector("video-subscribers");

// Initialize a Vonage Session object
function initializeSession() {
  // ********** STEP 3 CODE GOES HERE **********
  session = OT.initSession(applicationId, sessionId);

  // Set session and token (and optionally properties) for Web Components
  // ********** STEP 7 CODE GOES HERE **********   
  videoPublisherEl.session = session;
  videoPublisherEl.token = token;
  videoPublisherEl.properties = {
    fitMode: "cover",
    height: "100%",
    resolution: "1920x1080",
    videoContentHint: "detail",
    width: "100%",
  };
    
  // ********** STEP 9 CODE GOES HERE **********   
  audioToggle = document.querySelector("#audio-toggle");
  videoToggle = document.querySelector("#video-toggle");

  audioToggle.addEventListener("click", () => {
    console.log("audioToggle!");
    videoPublisherEl.toggleAudio();
  });

  videoToggle.addEventListener("click", () => {
    console.log("videoToggle!");
    videoPublisherEl.toggleVideo();
  });

  // ********** STEP 13 CODE GOES HERE **********
  videoSubscribersEl.session = session;
  videoSubscribersEl.token = token;
  videoSubscribersEl.properties = {
    fitMode: "cover",
    height: "100%",
    resolution: "1920x1080",
    videoContentHint: "detail",
    width: "100%",
  };


}


function getCredentials() {
  // Get credentials from backend server
  fetch(window.location.href + 'session')
  .then((response) => response.json())
  .then((json) => {
  // ********** STEP 2 CODE GOES HERE **********  
    applicationId = json.applicationId;
    sessionId = json.sessionId;
    token = json.token;

    initializeSession();
  })
  .catch((error) => {
    // handleError(error);
    console.log("error: ", error);
    alert(
      'Failed to get Vonage Video sessionId and token. Make sure you have updated the config.js file.'
    );
  });
}

getCredentials();

