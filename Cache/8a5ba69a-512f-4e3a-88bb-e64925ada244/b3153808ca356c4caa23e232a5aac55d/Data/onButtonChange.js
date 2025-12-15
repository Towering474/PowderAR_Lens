//@input Component.ScriptComponent buttonScript  // drag the button script here in Inspector
//@input Component.ScriptComponent imageController
//@input Component.ScriptComponent objController

function onbuttonValueChanged(value) {
    print("button value changed:" + value);
    
    // Call the shared image update function
    if (script.imageController && script.imageController.updateImage) {
        script.imageController.updateImage(-1, value);
    } else {
        print("⚠️ Image controller not set or missing updateImage()");
    }
    // You can access the actual number in the defined range
    // e.g., do something like:
    // script.someOtherComponent.setParameter(value);
}

// Wait for Lens to start before attaching listeners
script.createEvent("OnStartEvent").bind(function() {
    if (!script.buttonScript) {
        print("button script not assigned!");
        return;
    }
    
    // Subscribe to the event
    script.buttonScript.onValueChanged.add(onbuttonValueChanged);

    print("Listening to button value changes!");

    
});