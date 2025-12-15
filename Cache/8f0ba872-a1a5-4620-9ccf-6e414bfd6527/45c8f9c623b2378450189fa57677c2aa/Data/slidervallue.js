//@input Component.ScriptComponent sliderScript  // drag the Slider script here in Inspector

function onSliderValueChanged(sender, value) {
    print("Slider value changed:", value);
    
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