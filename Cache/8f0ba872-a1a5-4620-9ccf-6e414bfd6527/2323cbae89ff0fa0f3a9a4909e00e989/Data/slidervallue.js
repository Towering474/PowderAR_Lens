// SliderValue.js
//
// This script should be placed on your slider object (Slider1 or Slider2).
// It holds the current slider value (0.0 to 1.0).

// @input float initialValue = 0.0
// @input float minValue = 0.0
// @input float maxValue = 1.0

// Public property (non-deprecated) to store current value
script.currentValue = script.initialValue;

// Example: you might update this via your UI interactions. For demo, we just clamp it:
function updateValue(newVal) {
    var v = Math.max(script.minValue, Math.min(script.maxValue, newVal));
    script.currentValue = v;
}

// (Optional) If your slider has an event or callback for value change, hook into it
// e.g. sliderComponent.onValueChanged.bind(...) and call updateValue there

// For debugging, print the value at Awake
print("[SliderValue] Awake: setting currentValue = " + script.currentValue);
