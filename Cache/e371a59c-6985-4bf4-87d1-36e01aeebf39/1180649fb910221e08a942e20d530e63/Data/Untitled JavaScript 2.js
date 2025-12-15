//@input Component.ScriptComponent sliderScript  // drag the Slider script here in Inspector
//@input Component.ScriptComponent imageController

function onSliderValueChanged(value) {
    print("Slider value changed:" + value);
    
    // Call the shared image update function
    if (script.imageController && script.imageController.api.updateImage) {
        script.imageController.api.updateImage(opacity, zPos);
    } else {
        print("⚠️ Image controller not set or missing updateImage()");
    }
    // You can access the actual number in the defined range
    // e.g., do something like:
    // script.someOtherComponent.setParameter(value);
}

// Wait for Lens to start before attaching listeners
script.createEvent("OnStartEvent").bind(function() {
    if (!script.sliderScript) {
        print("Slider script not assigned!");
        return;
    }
    
    // Subscribe to the event
    script.sliderScript.onValueChanged.add(onSliderValueChanged);

    print("Listening to slider value changes!");

    
});