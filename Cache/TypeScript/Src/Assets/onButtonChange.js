//@input Component.ScriptComponent buttonScript  // drag the button script here in Inspector
//@input Component.ScriptComponent imageController
//@input Component.ScriptComponent objController
//@input Component.ScriptComponent buttonImageController

// Toggle state (tracks ON/OFF)
var isToggled = false;
var textureId = 0;
var tId = 0;

function onbuttonValueChanged() {
    print("button value changed:" + isToggled);

    // WIP check button state and call script.imageController.updateVisibility(toggle)
    isToggled = !isToggled;
    textureId = textureId + 1;
    tId = textureId % 3;

    print("button value changed:" + textureId + tId);

    // Rotate between textures
    if (script.imageController && script.imageController.updateTexture) {
        script.imageController.updateTexture(tId);
    }

    
    if (script.buttonImageController && script.buttonImageController.updateTexture) {
        script.buttonImageController.updateTexture(tId);
    }
    /*
    // Call visibility update in image controller, if exists
    if (script.imageController && script.imageController.updateVisibility) {
        script.imageController.updateVisibility(isToggled);
    }

    // Optional: call object controller toggle function if needed
    if (script.objController && script.objController.updateVisibility) {
        script.objController.updateVisibility(!isToggled);
    }
    */
}

// Wait for Lens to start before attaching listeners
script.createEvent("OnStartEvent").bind(function() {
    if (!script.buttonScript) {
        print("button script not assigned!");
        return;
    }

    // Subscribe to the event
    if (script.buttonScript.onPressDown) {
        script.buttonScript.onPressDown.add(onbuttonValueChanged);
    } else {
        print("buttonScript has no onValueChanged event!");
    }

    print("Listening to button value changes!");

    // WIP add init for button toggle variable

    /*
    // Initialize toggle state
    isToggled = true;
    if (script.objController && script.objController.updateVisibility) {
        script.objController.updateVisibility(!isToggled);
    } else {
        print("ERRORE!");
    }
    */
});