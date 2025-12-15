// -----JS CODE-----
// SliderToImageControl.js
// Uses Slider1 and Slider2 values to change Test image opacity and Z position

//@input Component.ScriptComponent slider1Script
//@input Component.ScriptComponent slider2Script
//@input SceneObject testObject

// Optional: scale Z movement
//@input float zScale = 50.0

function onUpdate() {
    if (!script.slider1Script || !script.slider2Script || !script.testObject) {
        print("Missing inputs on SliderToImageControl script.");
        return;
    }

    // Assuming each slider script exposes a 'value' property from 0.0 to 1.0
    var opacityValue = script.slider1Script.value;
    var zValue = script.slider2Script.value;

    // --- Update Opacity ---
    var imageComponent = script.testObject.getComponent("Component.Image");
    if (imageComponent) {
        var color = imageComponent.mainPass.baseColor;
        color.w = opacityValue; // Alpha
        imageComponent.mainPass.baseColor = color;
    }

    // --- Update Z position ---
    var transform = script.testObject.getTransform();
    var pos = transform.getLocalPosition();
    pos.z = zValue * script.zScale;
    transform.setLocalPosition(pos);
}

// Run on every frame
var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(onUpdate);
