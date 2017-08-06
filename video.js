/* -+-+-+----------------------------+-+-+-
Data
-+-+-+----------------------------+-+-+- */

var videoData = [
    ["1", 0.240, 4.130, "Now that we've looked at the architecture of the internet, let's see how you might"],
    ["2", 4.130, 7.535, " connect your personal devices to the internet inside your house."],
    ["3", 7.535, 11.270, " Well there are many ways to connect to the internet, and"],
    ["4", 11.270, 13.960, " most often people connect wirelessly."],
    ["5", 13.960, 17.940, " Let's look at an example of how you can connect to the internet."],
    ["6", 17.940, 22.370, " If you live in a city or a town, you probably have a coaxial cable for"],
    ["7", 22.370, 26.880, " cable Internet, or a phone line if you\n" +
    "have DSL, running to the outside of"],
    ["8", 26.880, 30.920, " your house, that connects you to the Internet Service Provider, or ISP."],
    ["9", 32.100, 34.730, " If you live far out in the country you'll more likely have"],
    ["10", 34.730, 39.430, " a dish outside your house, connecting you wirelessly to your closest ISP, or"],
    ["11", 39.430, 41.190, " you might also use the telephone system."],
    ["12", 42.350, 46.300, " Whether a wire comes straight from the ISP hookup outside your house, or"],
    ["13", 46.300, 49.270, " it travels over radio waves from your roof,"],
    ["14", 49.270, 53.760, " the first stop a wire will make once inside your house, is at your modem."],
    ["15", 53.760, 57.780, " A modem is what connects the internet to your network at home."],
    ["16", 57.780, 60.150, " A few common residential modems are DSL or"]
];

/* -+-+-+----------------------------+-+-+-
Appending data to document
-+-+-+----------------------------+-+-+- */

var captionWrapper = document.getElementById("caption-container");
var paragraph1 = document.createElement("p");
var paragraph2 = document.createElement("p");
var paragraph3 = document.createElement("p");

for (var i = 0; i < videoData.length; i++) {
    if (i >= 0 && i < 4) {
        var spanElement = document.createElement("span");
        spanElement.setAttribute("id", videoData[i][0]);
        spanElement.innerHTML = videoData[i][3];
        paragraph1.appendChild(spanElement);
    } else if (i >= 4 && i < 11) {
        var spanElement = document.createElement("span");
        spanElement.setAttribute("id", videoData[i][0]);
        spanElement.innerHTML = videoData[i][3];
        paragraph2.appendChild(spanElement);
    } else if (i >= 11 && i < 16) {
        var spanElement = document.createElement("span");
        spanElement.setAttribute("id", videoData[i][0]);
        spanElement.innerHTML = videoData[i][3];
        paragraph3.appendChild(spanElement);
    }
}

captionWrapper.appendChild(paragraph1);
captionWrapper.appendChild(paragraph2);
captionWrapper.appendChild(paragraph3);

var video = document.getElementById("video");
var span = document.getElementsByTagName("span");

/* -+-+-+----------------------------+-+-+-
Transcript Highlighting
-+-+-+----------------------------+-+-+- */

video.addEventListener('timeupdate', function() {
    var time = this.currentTime;
    for (var i = 0; i < videoData.length; i++) {
        if (time >= videoData[i][1] && time < videoData[i][2]) {
            for (var j = 0; j < videoData.length; j++) {
                if (j !== i) {
                    removeOrange(videoData[j][0]);
                }
            }
            orangeText(videoData[i][0]);
        }
    }
});

/* -+-+-+----------------------------+-+-+-
Clickable transcript to take to that part of video
-+-+-+----------------------------+-+-+- */

for (var i = 0; i < span.length; i++) {
    var startTime = videoData[i][1];
    span[i].addEventListener('click', function() {
        var indexVid = (this.getAttribute("id") - 1);
        var thisTime = videoData[indexVid][1];
        loading(thisTime);
    });
}

function loading(time) {
    video.currentTime = time;
}

/* -+-+-+----------------------------+-+-+-
Orange highlighting functions
-+-+-+----------------------------+-+-+- */

function orangeText(identifier) {
    document.getElementById(identifier).style.color = 'orange';
}

function removeOrange(identifier) {
    document.getElementById(identifier).style.color = '';
}