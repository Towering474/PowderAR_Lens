// SliderToImageControl.js
//
// This script reads from two slider scripts and updates an image object.

// @input Component.ScriptComponent slider1  // the ScriptComponent whose script is SliderValue.js on Slider1
// @input Component.ScriptComponent slider2  // on Slider2
// @input SceneObject testObject                         // the image object you want to control
// @input float zScale = 100.0

@component
export class NewScript extends BaseScriptComponent {
    onAwake() {

    }
}


function slidernew() {

    if(this.slider1) {
        print("new slider value:" + this.slider1.getValue());
    }
}