function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5oiqs3eqMTx":
        Script1();
        break;
      case "6ZF5IbBiPe5":
        Script2();
        break;
      case "6RBK1unxNqX":
        Script3();
        break;
      case "6SA2yC8edmT":
        Script4();
        break;
      case "6RyepGNGC5t":
        Script5();
        break;
      case "63QUgJQBXYh":
        Script6();
        break;
      case "5xfveGghUQP":
        Script7();
        break;
      case "5dXDQ2JTKvK":
        Script8();
        break;
      case "6iIlFJfOgcS":
        Script9();
        break;
      case "5dePzTFujJb":
        Script10();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5VjE2ujpCN5');
const duration = 750;
const easing = 'ease-out';
const id = '5bnLWkohDO1';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
