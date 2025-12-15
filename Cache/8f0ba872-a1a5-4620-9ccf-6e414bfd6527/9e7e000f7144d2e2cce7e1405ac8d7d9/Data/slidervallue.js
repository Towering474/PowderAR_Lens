//@input Component.ScriptComponent sliderScript  // drag the Slider script here in Inspector
/*
function valueChange(value) {
    print("Slider value changed:", value);
    
    // You can access the actual number in the defined range
    // e.g., do something like:
    // script.someOtherComponent.setParameter(value);
}
*/
script.valueChange = function() {
    print("Slider value changed:", this.sliderScript.getCounterValue());
};