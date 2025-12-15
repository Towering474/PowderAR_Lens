// Main Controller
//
// Made with Easy Lens

//@input Component.ScriptComponent zSliderLabel
//@input Component.ScriptComponent zSliderValue
//@input Component.ScriptComponent opacitySliderLabel
//@input Component.ScriptComponent opacitySliderValue
//@input Component.ScriptComponent touchEvents


try {

// SLIDER CONFIG
const Z_MIN = -2.0;
const Z_MAX = 2.0;
const OPACITY_MIN = 0.0;
const OPACITY_MAX = 1.0;

// UI LAYOUT
const zSliderCenter = new vec2(0.2, 0.15);
const opacitySliderCenter = new vec2(0.2, 0.25);

// STATE
let draggingSlider = null; // "z" or "opacity"
let dragStartX = 0;
let sliderStartValue = 0;

// INITIAL VALUES
let zValue = 0.0;
let opacityValue = 1.0;

// Update slider UI
function updateSliderUI() {
    script.zSliderValue.text = zValue.toFixed(2);
    script.opacitySliderValue.text = opacityValue.toFixed(2);
    // Set positions (keep labels and values aligned)
    script.zSliderLabel.position = new vec2(zSliderCenter.x - 0.12, zSliderCenter.y);
    script.zSliderValue.position = new vec2(zSliderCenter.x + 0.09, zSliderCenter.y);

    script.opacitySliderLabel.position = new vec2(opacitySliderCenter.x - 0.12, opacitySliderCenter.y);
    script.opacitySliderValue.position = new vec2(opacitySliderCenter.x + 0.09, opacitySliderCenter.y);
}
updateSliderUI();

// Set label texts
script.zSliderLabel.text = "Z Position";
script.opacitySliderLabel.text = "Opacity";

// Touch detection for "slider" area
function isNear(pos, center) {
    // Simple hit area for slider value text
    const dx = pos.x - center.x;
    const dy = pos.y - center.y;
    return (dx*dx + dy*dy) < 0.0225; // ~0.15 radius
}

// Map horizontal drag to value
function dragToValue(start, current, min, max) {
    let delta = (current - start) * 3.2; // Sensitivity
    let value = sliderStartValue + delta * (max - min);
    if (value < min) { value = min; }
    if (value > max) { value = max; }
    return value;
}

// Touch Events
script.touchEvents.onTouchDown.add(function(id, x, y) {
    let pos = new vec2(x, y);
    if (isNear(pos, script.zSliderValue.position)) {
        draggingSlider = "z";
        dragStartX = x;
        sliderStartValue = zValue;
    }
    else if (isNear(pos, script.opacitySliderValue.position)) {
        draggingSlider = "opacity";
        dragStartX = x;
        sliderStartValue = opacityValue;
    }
});

script.touchEvents.onTouchMove.add(function(id, x, y) {
    if (draggingSlider === "z") {
        zValue = dragToValue(dragStartX, x, Z_MIN, Z_MAX);
        updateSliderUI();
        // Update Test image Z position (assumes Test image is script.testImage, update if needed)
        if (script.testImage && script.testImage.getTransform) {
            let t = script.testImage.getTransform();
            let pos = t.getLocalPosition();
            t.setLocalPosition(new vec3(pos.x, pos.y, zValue));
        }
    }
    else if (draggingSlider === "opacity") {
        opacityValue = dragToValue(dragStartX, x, OPACITY_MIN, OPACITY_MAX);
        updateSliderUI();
        // Update Test image opacity (assumes script.testImage.material supports opacity)
        if (script.testImage && script.testImage.material) {
            if (script.testImage.material.opacity !== undefined) {
                script.testImage.material.opacity = opacityValue;
            }
            // If material uses baseColor, set alpha channel
            if (script.testImage.material.baseColor && script.testImage.material.baseColor.w !== undefined) {
                let c = script.testImage.material.baseColor;
                script.testImage.material.baseColor = new vec4(c.x, c.y, c.z, opacityValue);
            }
        }
    }
});

script.touchEvents.onTouchUp.add(function(id, x, y) {
    draggingSlider = null;
});

} catch(e) {
  print("error in controller");
  print(e);
}
