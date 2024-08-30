let applicationId = "";
let sessionId = "";
let token = "";  
let session;
let audioToggle;
let videoToggle;

// ********** STEP 6 CODE GOES HERE **********
     

// ********** STEP 12 CODE GOES HERE **********


// Initialize a Vonage Session object
function initializeSession() {
// ********** STEP 3 CODE GOES HERE **********


// Set session and token (and optionally properties) for Web Components
// ********** STEP 7 CODE GOES HERE **********
   
  
// ********** STEP 9 CODE GOES HERE **********

   
// ********** STEP 13 CODE GOES HERE **********



}


function getCredentials() {
  // Get credentials from backend server
  fetch(window.location.href + 'session')
  .then((response) => response.json())
  .then((json) => {
  // ********** STEP 2 CODE GOES HERE **********

  
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


















































// stuff for steps

import confetti from "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/+esm";


const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.initiatorType === "fetch") {
      console.log('Fetch request detected to', entry.name);
      console.log("fetch", {applicationId, sessionId, token}, typeof session === "undefined");
      setTimeout(() => {
        console.log("Getting next step.");
        getStep();
      }, "1500");
    }
  }
});

observer.observe({
  entryTypes: ["resource"]
});


const stepsEl = document.querySelector("#steps");

// Steps:
// 1. Load Vonage Video SDK
// 2. Get Credentials
// 3. Initialize session
// 4. Place video-publisher element
// 5. Load video-publisher library
// 6. Create a reference to video-publisher
// 7. Set properties on video-publisher
// 8. Add audio and video buttons
// 9. Create audio and video references and toggle functionality
// 10. Place video-subscribers element
// 11. Load video-subscribers library
// 12. Create a reference to video-subscribers
// 13. Set properties on video-subscribers
// 14. That's it!
// 15. Congrats!

const copyButton = document.querySelector("#copy-button");
const qrCode = document.querySelector("sl-qr-code");

function getStep(){
  if (!window.OT) {
    console.log("show step 1");
    stepsEl.querySelector("h1").innerText = "Step 1: Load Vonage Video SDK";
    stepsEl.querySelector("p").innerText =
      "We will use a CDN to load the Vonage Video SDK. Copy and paste the code below into the <head> section of index.html.";
    stepsEl.querySelector("code").innerText = `
<script src="https://cdn.jsdelivr.net/npm/@vonage/client-sdk-video@latest/dist/js/opentok.min.js"></script>`;
  } else if (applicationId === "" || sessionId === "" || token === "") {
    console.log("show step 2");
    stepsEl.querySelector("h1").innerText = "Step 2: Get Credentials";
    stepsEl.querySelector("p").innerText =
      "To participate in the video call, we will need some credentials. These are the Id of the Application (applicationId), the Id of the video call's session (sessionId) and a token to join the video call. We will get these from the server already created with this application. Copy and past the following code into the script.js file.";
        stepsEl.querySelector("code").innerText = `
applicationId = json.applicationId;
sessionId = json.sessionId;
token = json.token;`;
  } else if (typeof session === "undefined") {
  // } else if (initializeSession() || typeof session === "undefined") {
    console.log("show step 3");
    stepsEl.querySelector("h1").innerText = "Step 3: Initialize session";
    stepsEl.querySelector("p").innerText =
      "Before you can join the video call, the application needs to initialize the session that was created on the server. Copy this code into the script.js file.";
      stepsEl.querySelector("code").innerText = `
session = OT.initSession(applicationId, sessionId);`;
  } else if (!document.querySelector("video-publisher")) {
    console.log("show step 4");
    stepsEl.querySelector("h1").innerText =
      "Step 4: Place video-publisher element";
    stepsEl.querySelector("p").innerText =
      "Now, we'll place the Web Component that will handle sending your video to the video call (<video-publisher>). Place this code into the index.html file.";
    stepsEl.querySelector("code").innerText = `
<video-publisher></video-publisher>`;
  } else if (!customElements.get("video-publisher")) {
    console.log("show step 5");
    stepsEl.querySelector("h1").innerText =
      "Step 5: Load video-publisher library";
    stepsEl.querySelector("p").innerText =
      "For the browser to understand what to do with the <video-publisher> element, we'll need to load some code that describes the Web Component's behavior. We'll be using a CDN (content delivery network) to load the code. Copy the code into the index.html file.";
    stepsEl.querySelector("code").innerText = `
<script type="module" src="https://unpkg.com/@vonage/video-publisher@latest/video-publisher.js?module"></script>`;
  } else if (typeof videoPublisherEl === "undefined") {
    console.log("show step 6");
    stepsEl.querySelector("h1").innerText =
      "Step 6: Create a reference to video-publisher";
    stepsEl.querySelector("p").innerText =
      "Now that the browser knows what to do with the <video-publisher> element, let's get a reference to it so we can use it. Copy and paste this code into the script.js file.";
    stepsEl.querySelector("code").innerText = `
const videoPublisherEl = document.querySelector("video-publisher");`;
  } else if (videoPublisherEl.session === {} || videoPublisherEl.token === "") {
    console.log("show step 7");
    console.log("videoPublisherEl.session: ", videoPublisherEl.session);
    console.log("videoPublisherEl.token: ", videoPublisherEl.token);
    stepsEl.querySelector("h1").innerText =
      "Step 7: Set properties on video-publisher";
    stepsEl.querySelector("p").innerText =
      "To connect the <video-publisher> Web Component to the video call, we need to tell it the session, provide a token to be able to join, and pass some other optional properties. Copy and paste this code into the script.js file. Note: Please make sure to allow access to video and microphone.";
    stepsEl.querySelector("code").innerText = `
videoPublisherEl.session = session;
videoPublisherEl.token = token;
videoPublisherEl.properties = {
  fitMode: "cover",
  height: "100%",
  resolution: "1920x1080",
  videoContentHint: "detail",
  width: "100%",
};`;
  } else if (
    !document.querySelector("#video-toggle") ||
    !document.querySelector("#audio-toggle")
  ) {
    console.log("show step 8");
    stepsEl.querySelector("h1").innerText = "Step 8: Add audio and video buttons";
    stepsEl.querySelector("p").innerText =
      "The <video-publisher> Web Component allows the user to toggle on/off their audio and video in a video call. First we will place the buttons in the index.html file.";
    stepsEl.querySelector("code").innerText = `
<button id="video-toggle">toggle Video</button>
<button id="audio-toggle">toggle Audio</button>`;
  } else if (
    typeof videoToggle === "undefined" ||
    typeof audioToggle === "undefined"
  ) {
    console.log("show step 9");
    stepsEl.querySelector("h1").innerText =
      "Step 9: Create audio and video references and toggle functionality";
    stepsEl.querySelector("p").innerText =
      "Next, we need to get references to the buttons so that we can listen for click events to toggle the audio and video. Copy this code into the scripts.js file.";
    stepsEl.querySelector("code").innerText = `
audioToggle = document.querySelector("#audio-toggle");
videoToggle = document.querySelector("#video-toggle");

audioToggle.addEventListener("click", () => {
  console.log("audioToggle!");
  videoPublisherEl.toggleAudio();
});

videoToggle.addEventListener("click", () => {
  console.log("videoToggle!");
  videoPublisherEl.toggleVideo();
});`;
  } else if (!document.querySelector("video-subscribers")) {
    console.log("show step 10");
    stepsEl.querySelector("h1").innerText =
      "Step 10: Place video-subscribers element";
    stepsEl.querySelector("p").innerText =
      "Now, we'll place the Web Component that will handle showing other participants in the video call (<video-subscribers>). Place this code into the index.html file.";
    stepsEl.querySelector("code").innerText = `
<video-subscribers></video-subscribers>`;
  } else if (!customElements.get("video-subscribers")) {
    console.log("show step 11");
    stepsEl.querySelector("h1").innerText =
      "Step 11: Load video-subscribers library";
    stepsEl.querySelector("p").innerText =
      "For the browser to understand what to do with the <video-subscribers> element, we'll need to load some code that describes the Web Component's behavior. We'll be using a CDN (content delivery network) to load the code. Copy the code into the index.html file.";
    stepsEl.querySelector("code").innerText = `
<script type="module" src="https://unpkg.com/@vonage/video-subscribers@latest/video-subscribers.js?module"></script>`;
  } else if (typeof videoSubscribersEl === "undefined") {
    console.log("show step 12");
    stepsEl.querySelector("h1").innerText =
      "Step 12: Create a reference to video-subscribers";
    stepsEl.querySelector("p").innerText =
      "Now that the browser knows what to do with the <video-subscribers> element, let's create a reference so we can use it. Copy and paste this code into the script.js file.";
    stepsEl.querySelector("code").innerText = `
const videoSubscribersEl = document.querySelector("video-subscribers");`;
  } else if (
    videoSubscribersEl.session === {} ||
    videoSubscribersEl.token === ""
  ) {
    console.log("show step 13");
    console.log("videoSubscribersEl.session: ", videoSubscribersEl.session);
    console.log("videoSubscribers.token: ", videoSubscribersEl.token);
    stepsEl.querySelector("h1").innerText =
      "Step 13: Set properties on video-subscribers";
    stepsEl.querySelector("p").innerText =
      "To connect the <video-subscribers> Web Component to the video call, we need to tell it the session, provide a token to be able to join, and pass some other optional properties. Copy and paste this code into the script.js file.";
    stepsEl.querySelector("code").innerText = `
videoSubscribersEl.session = session;
videoSubscribersEl.token = token;
videoSubscribersEl.properties = {
  fitMode: "cover",
  height: "100%",
  resolution: "1920x1080",
  videoContentHint: "detail",
  width: "100%",
};`;
  } else {
    console.log("show step 14");
    stepsEl.querySelector("h1").innerText = "That's it!";
    stepsEl.querySelector("p").innerText =
      "Now scan the QR code to join your new video chat app.";
    stepsEl.querySelector("pre").style.display = "none";
    copyButton.style.display = "none";
    qrCode.value = window.location.href;
    qrCode.style.display = "block";
  }

  stepsEl.style.display = "block";



  if (typeof session !== "undefined") {
    session.on("streamCreated", function (event) {
      console.log("streamCreated!", event.stream.videoType);
      console.log("show step 15");
      qrCode.style.display = "none";
      stepsEl.querySelector("code").style.display = "none";
      stepsEl.querySelector("h1").innerText = "Congratulations!";
      stepsEl.querySelector("p").innerHTML =
        "<section id='prize-container'><center>Please notify a Vonage representative of your accomplishment to collect your Vonage socks!<br>Post a screenshot of your video call to X and tag @vonagedev and we'll DM you about an extra prize 👀</center><div><img id='socks' src='images/vonage-socks.png'/></div></section>";
      confetti({
        particleCount: 500,
        spread: 70,
        origin: { y: 0.6 },
      });
    });
  }


}


// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#using_execcommand
// https://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse
copyButton.addEventListener("click", () => {
  console.log("copy click!");
  //   const keyText = stepsEl.querySelector("code");
  //   keyText.select();

  const node = stepsEl.querySelector("code");
  if (document.body.createTextRange) {
    console.log("this one?");
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.warn("Could not select text in node: Unsupported browser.");
  }
  document.execCommand("copy");
  copyButton.textContent = "copied to clipboard";
  setTimeout(() => {
    copyButton.textContent = "copy to clipboard";
  }, 1000);
});

const socket = io();

socket.on('connect', () => {
  console.log(`event: connect | session id: ${socket.id}`);
});

socket.on('refresh', (arg) => {
  console.log('refresh!!!!',arg);
  window.location.reload();
});
