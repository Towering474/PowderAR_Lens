// SliderToImageControl.js
//
// This script reads from two slider scripts and updates an image object.

// @input Component.ScriptComponent slider1ValueScript  // the ScriptComponent whose script is SliderValue.js on Slider1
// @input Component.ScriptComponent slider2ValueScript  // on Slider2
// @input SceneObject testObject                         // the image object you want to control
// @input float zScale = 100.0

function onUpdate(eventData) {
    if (!script.slider1ValueScript || !script.slider2ValueScript || !script.testObject) {
        print("[SliderToImageControl] ERROR: One or more inputs not assigned");
        return;
    }

    // Try to read the slider values
    var v1 = script.slider1ValueScript["currentValue"];
    var v2 = script.slider2ValueScript["currentValue"];
    if (v1 === undefined) {
        print("[SliderToImageControl] ERROR: slider1ValueScript.currentValue is undefined");
        v1 = 0;
    }
    if (v2 === undefined) {
        print("[SliderToImageControl] ERROR: slider2ValueScript.currentValue is undefined");
        v2 = 0;
    }

    print("[SliderToImageControl] Before: opacity = " + v1 + ", z slider = " + v2);

    // Update image opacity
    var img = script.testObject.getComponent("Component.Image");
    if (img) {
        var color = img.mainPass.baseColor;
        color.w = v1;
        img.mainPass.baseColor = color;
    } else {
        print("[SliderToImageControl] WARNING: testObject has no Image component");
    }

    // Update Z position
    var t = script.testObject.getTransform();
    var pos = t.getLocalPosition();
    pos.z = v2 * script.zScale;
    t.setLocalPosition(pos);

    print("[SliderToImageControl] After: set image alpha = " + (img ? img.mainPass.baseColor.w : "n/a")
        + ", new z = " + pos.z);
}

// Bind update
var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(onUpdate);
