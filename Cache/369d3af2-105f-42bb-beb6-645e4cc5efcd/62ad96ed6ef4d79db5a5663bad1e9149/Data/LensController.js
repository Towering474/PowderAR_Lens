// Main Controller
//
// Made with Easy Lens



try {

// Assumptions:
// - script.Slider1 and script.Slider2 are references to the slider UI components.
// - script.Test is a reference to the image component to be controlled.
// - Slider1 value is normalized (0...1) for opacity.
// - Slider2 value is normalized (0...1), mapped to the desired Y movement range.

// Define the Y-position range (adjust as needed for your scene; typical screen coordinates are 0.0 (top) to 1.0 (bottom))
const minY = 0.1; // Minimum Y screen position for 'Test'
const maxY = 0.9; // Maximum Y screen position for 'Test'

// Helper function to update opacity and Y position
function updateTestImage() {
    print("Slider1:", script.Slider1);
    print("Slider2:", script.Slider2);
    print("Test:", script.Test);

    if (!script.Slider1 || !script.Slider2 || !script.Test) {
        print("❌ Missing one of the references!");
        return;
    }

    script.Test.opacity = script.Slider1.value;
    let newY = minY + (maxY - minY) * script.Slider2.value;
    let currentPos = script.Test.position;
    script.Test.position = new vec2(currentPos.x, newY);
}


// Listen for value changes on both sliders
if (script.Slider1 && script.Slider1.onValueChanged) {
    print("TES1T");
    script.Slider1.onValueChanged.add(function() {
        updateTestImage();
    });
}
if (script.Slider2 && script.Slider2.onValueChanged) {
    print("TEST2");
    script.Slider2.onValueChanged.add(function() {
        updateTestImage();
    });
}

// Optionally, initialize on load
updateTestImage();

} catch(e) {
  print("error in controller");
  print(e);
}
