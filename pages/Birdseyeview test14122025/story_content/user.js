window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  // Define your Google Tag Manager ID
const googleTagManagerID = 'NFB_Measurment_ID';

// Create the first script tag for Google Tag Manager
var gtmScript = document.createElement('script');
gtmScript.id = 'google-ga-script';
gtmScript.async = true;
gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + googleTagManagerID;

// Append the first script tag to the head
document.head.appendChild(gtmScript);

// Create the inline script
var inlineScript = document.createElement('script');
inlineScript.id = 'google-ga-datalayer-script';
inlineScript.text = "window.dataLayer = window.dataLayer || [];" +
"function gtag(){dataLayer.push(arguments);}" +
"gtag('js', new Date());" +
"gtag('config', '" +
googleTagManagerID +
"');"; 


// Append the inline script to the head
document.head.appendChild(inlineScript);


}

window.Script2 = function()
{
  // Get the Storyline player and text variable
var player = GetPlayer();
var textToFind = player.GetVar("vartext").trim();

// Add pulse animation style if it doesn't exist
if (!document.getElementById("pulseTextStyle")) {
  var style = document.createElement("style");
  style.id = "pulseTextStyle";
  style.textContent = `
    @keyframes pulseText {
      0%, 100% { color: white; }
      50% { color: #05EE80; }
    }
    .pulse-html {
      animation: pulseText 4s infinite ease-in-out;
    }
  `;
  document.head.appendChild(style);
}

// Add class to <p> elements containing the reference text
document.querySelectorAll("span").forEach(el => {
  if (el.textContent.includes(textToFind)) {
    el.classList.add("pulse-html");
  }
});

console.log("Pulse animation applied to paragraphs containing matching text");

}

window.Script3 = function()
{
  function pulseIconColor(actual_accName) {
  const wrapper = document.querySelector(`[data-acc-text='${actual_accName}']`);
  if (!wrapper) {
    console.warn("No element with data-acc-text:", actual_accName);
    return;
  }

  const path = wrapper.querySelector("div > svg > g > path");
  if (!path) {
    console.warn("No SVG path found inside element for:", actual_accName);
    return;
  }

  console.log("Starting pulse animation on:", path.id || path.tagName);

  gsap.to(path, {
    duration: 2,
    fill: "#05EE80",  // green
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
}

// Run it on your arrow icon
pulseIconColor("Arrow pointing to Tips button");

}

};
