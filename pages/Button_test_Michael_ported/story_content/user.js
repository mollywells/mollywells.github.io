window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var xhr = new XMLHttpRequest();
xhr.open("POST", "https://bmcresearch.utm.utoronto.ca/molly/index.php", true);
//xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(JSON.stringify({
//     value: value
// }));
xhr.send();
}

};
