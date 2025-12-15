// SliderValue.js
//
// Attach this to your Slider object (Interaction Kit Slider component present on same object).

// @input Component.ScriptComponent (optional) // if you want to reference other scripts
// (No need for @input here unless you want to configure something)

script.currentValue = 0.0;

// On awake or start, bind the slider event
function onAwake() {
    // Get the Slider component (Interaction Kit Slider)
    var sliderComp = script.getSceneObject().getComponent("Packages/SpectaclesInteractionKit/Components/UI/Slider/Slider.Slider");
    if (!sliderComp) {
        print("[SliderValue] ERROR: No Slider component found on this object");
        return;
    }

    // Read initial value
    script.currentValue = sliderComp.currentValue;

    // Subscribe to value change event
    sliderComp.api.addCallback("onValueUpdate", handleSliderUpdate);

    print("[SliderValue] subscribed to onValueUpdate; initial value = " + script.currentValue);
}

function handleSliderUpdate(newVal) {
    script.currentValue = newVal;
    print("[SliderValue] handleSliderUpdate: newVal = " + newVal);
}

// Bind Awake event to set this up
var awakeEvent = script.createEvent("AwakeEvent");
awakeEvent.bind(onAwake);