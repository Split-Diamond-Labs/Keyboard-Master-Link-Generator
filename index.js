let things = {
    mode: 0,
    time: 120,
    pointGoal: 2000,
    stageTime: 30
};

let url = "https://split-diamond-labs.github.io/Keyboard-Master?mode=0&time=1200&pointGoal=2000&stageTime=300";
document.getElementById("url").value = url;

const modes = ["Timed Challenge", "Point Challenge", "Stage By Stage Challenge"]

document.getElementById("mode").innerText = modes[0];
document.getElementById("time").value = 120;
document.getElementById("pointGoal").value = 2000;
document.getElementById("stageTime").value = 30;

let updateURL = () => {
    url = `https://split-diamond-labs.github.io/Keyboard-Master?mode=${things.mode}&time=${things.time*10}&pointGoal=${things.pointGoal}&stageTime=${things.stageTime*10}`;
    document.getElementById("url").value = url;
}

document.getElementById("mode").addEventListener("click", (e) => {
    things.mode++; // Toggle mode 
    things.mode %= modes.length; // If the mode index overflows, this line will automatically bring it back to 0
    e.target.innerText = modes[things.mode];
    updateURL();
});

document.getElementById("time").addEventListener("change", (e) => {
    if (typeof JSON.parse(e.target.value) != "number") return;

    things[e.target.id] = JSON.parse(e.target.value);
    updateURL();
});

document.getElementById("pointGoal").addEventListener("change", (e) => {
    if (typeof JSON.parse(e.target.value) != "number") return;

    things[e.target.id] = JSON.parse(e.target.value);
    updateURL();
});

document.getElementById("stageTime").addEventListener("change", (e) => {
    if (typeof JSON.parse(e.target.value) != "number") return;

    things[e.target.id] = JSON.parse(e.target.value);
    updateURL();
});

document.getElementById("url").addEventListener("change", updateURL);

document.querySelector("#url").onclick = function() {
    document.querySelector("#url").select();
}