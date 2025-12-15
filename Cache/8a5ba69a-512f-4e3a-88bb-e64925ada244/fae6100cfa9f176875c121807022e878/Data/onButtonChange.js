//@input Component.ScriptComponent buttonScript  // drag the button script here in Inspector
//@input Component.ScriptComponent imageController
//@input Component.ScriptComponent objController

// Toggle state (tracks ON/OFF)
var isToggled = false;

function onbuttonValueChanged(value) {
    print("button value changed:" + value);
    
    // WIP check button state and call script.imageController.updateVisibility(toggle)
}

// Wait for Lens to start before attaching listeners
script.createEvent("OnStartEvent").bind(function() {
    if (!script.buttonScript) {
        print("button script not assigned!");
        return;
    }
    
    // Subscribe to the event
    script.buttonScript.onPress.add(onbuttonValueChanged);

    print("Listening to button value changes!");

    // WIP add init for button toggle variable

    
});