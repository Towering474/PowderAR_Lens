//@input Component.ScriptComponent buttonScript  // drag the button script here in Inspector
//@input Component.ScriptComponent imageController
//@input Component.ScriptComponent objController

// Toggle state (tracks ON/OFF)
var isToggled = false;

function onbuttonValueChanged(value) {
    print("button value changed:" + value);
    
    // WIP check button state and call script.imageController.updateVisibility(toggle)
    isToggled = !isToggled;


    // Call visibility update in image controller, if exists
    if (script.imageController && script.imageController && script.imageController.updateVisibility) {
        script.imageController.updateVisibility(isToggled);
    }

    // Optional: call object controller toggle function if needed
    if (script.objController && script.objController && script.objController.toggleObject) {
        script.objController.toggleObject(!isToggled);
    }
}

// Wait for Lens to start before attaching listeners
script.createEvent("OnStartEvent").bind(function() {
    if (!script.buttonScript) {     
        print("button script not assigned!");
        return;
    }
    
    // Subscribe to the event
    if (script.buttonScript.onPress) {
        script.buttonScript.onPress.add(onbuttonValueChanged);
    } else {
        print(" buttonScript has no onValueChanged event!");
    }

    print("Listening to button value changes!");

    // WIP add init for button toggle variable

    // Initialize toggle state
    isToggled = false;
    
});