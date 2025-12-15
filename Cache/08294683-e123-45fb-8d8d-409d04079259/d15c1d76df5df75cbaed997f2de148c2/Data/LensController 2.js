// Main Controller
//
// Made with Easy Lens



try {

// Assumes 'script.testImage' references the image component whose opacity should be changed

/**
 * Sets the opacity (alpha) of the test image.
 * @param {float} value - The desired opacity from 0.0 (fully transparent) to 1.0 (fully opaque)
 */
function setTestImageOpacity(value) {
    // Clamp value between 0 and 1
    value = Math.max(0.0, Math.min(1.0, value));
    if (script.testImage && script.testImage.mainPass && script.testImage.mainPass.baseColor) {
        var color = script.testImage.mainPass.baseColor;
        // Create new vec4 with original RGB and new alpha
        script.testImage.mainPass.baseColor = new vec4(color.x, color.y, color.z, value);
    }
}

// Example usage: set image to 50% opacity
setTestImageOpacity(0.5);

} catch(e) {
  print("error in controller");
  print(e);
}
