window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  console.log("hello world!")

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /data
xhr.open('GET', 'https://bmcresearch.utm.utoronto.ca/molly/index.php?slide_name=landing_page&layer_name=NA', true);

// Set up a function to handle the response
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Parse the JSON response
        //var data = JSON.parse(xhr.responseText);
        // Do something with the data
        console.log(data);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

// Set up a function to handle errors
xhr.onerror = function() {
    console.error('Request failed');
};

// Send the request
xhr.send();
}

window.Script2 = function()
{
  console.log("hello world!")

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /data
xhr.open('GET', 'https://bmcresearch.utm.utoronto.ca/molly/index.php?slide_name=intro_page&layer_name=NA', true);

// Set up a function to handle the response
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Parse the JSON response
        //var data = JSON.parse(xhr.responseText);
        // Do something with the data
        console.log(data);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

// Set up a function to handle errors
xhr.onerror = function() {
    console.error('Request failed');
};

// Send the request
xhr.send();
}

window.Script3 = function()
{
  console.log("hello world!")

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /data
xhr.open('GET', 'https://bmcresearch.utm.utoronto.ca/molly/index.php?slide_name=extra_page&layer_name=NA', true);

// Set up a function to handle the response
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Parse the JSON response
        //var data = JSON.parse(xhr.responseText);
        // Do something with the data
        console.log(data);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

// Set up a function to handle errors
xhr.onerror = function() {
    console.error('Request failed');
};

// Send the request
xhr.send();
}

window.Script4 = function()
{
  console.log("hello world!")

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /data
xhr.open('GET', 'https://bmcresearch.utm.utoronto.ca/molly/index.php?slide_name=video_page&layer_name=NA', true);

// Set up a function to handle the response
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Parse the JSON response
        //var data = JSON.parse(xhr.responseText);
        // Do something with the data
        console.log(data);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

// Set up a function to handle errors
xhr.onerror = function() {
    console.error('Request failed');
};

// Send the request
xhr.send();
}

window.Script5 = function()
{
  console.log("hello world!")

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /data
xhr.open('GET', 'https://bmcresearch.utm.utoronto.ca/molly/index.php?slide_name=MPA_page&layer_name=NA', true);

// Set up a function to handle the response
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Parse the JSON response
        //var data = JSON.parse(xhr.responseText);
        // Do something with the data
        console.log(data);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

// Set up a function to handle errors
xhr.onerror = function() {
    console.error('Request failed');
};

// Send the request
xhr.send();
}

window.Script6 = function()
{
  console.log("hello world!")

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /data
xhr.open('GET', 'https://bmcresearch.utm.utoronto.ca/molly/index.php?slide_name=surface_page&layer_name=NA', true);

// Set up a function to handle the response
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Parse the JSON response
        //var data = JSON.parse(xhr.responseText);
        // Do something with the data
        console.log(data);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

// Set up a function to handle errors
xhr.onerror = function() {
    console.error('Request failed');
};

// Send the request
xhr.send();
}

window.Script7 = function()
{
  console.log("hello world!")

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /data
xhr.open('GET', 'https://bmcresearch.utm.utoronto.ca/molly/index.php?slide_name=tutorial_page&layer_name=NA', true);

// Set up a function to handle the response
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Parse the JSON response
        //var data = JSON.parse(xhr.responseText);
        // Do something with the data
        console.log(data);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

// Set up a function to handle errors
xhr.onerror = function() {
    console.error('Request failed');
};

// Send the request
xhr.send();
}

window.Script8 = function()
{
  console.log("hello world!")

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /data
xhr.open('GET', 'https://bmcresearch.utm.utoronto.ca/molly/index.php?slide_name=submarine_page&layer_name=plankton_inset', true);

// Set up a function to handle the response
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Parse the JSON response
        //var data = JSON.parse(xhr.responseText);
        // Do something with the data
        console.log(data);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

// Set up a function to handle errors
xhr.onerror = function() {
    console.error('Request failed');
};

// Send the request
xhr.send();
}

window.Script9 = function()
{
  console.log("hello world!")

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /data
xhr.open('GET', 'https://bmcresearch.utm.utoronto.ca/molly/index.php?slide_name=submarine_page&layer_name=map_inset', true);

// Set up a function to handle the response
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Parse the JSON response
        //var data = JSON.parse(xhr.responseText);
        // Do something with the data
        console.log(data);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

// Set up a function to handle errors
xhr.onerror = function() {
    console.error('Request failed');
};

// Send the request
xhr.send();
}

};
