//@input Component.Image image
//@input Component.Transform position

// Update function that others can call
script.updateImage = function(opacityValue, zValue) {
    if (!script.image) {
        print("⚠️ No image assigned to ImageController.js");
        return;
    }

    // --- Opacity ---
    if (opacityValue != -1) {
        if (script.image && script.image.mainPass && script.image.mainPass.baseColor) {
            var color = script.image.mainPass.baseColor;
            // Create new vec4 with original RGB and new alpha
            script.image.mainPass.baseColor = new vec4(color.x, color.y, color.z, opacityValue);
            print("Image updated → opacity:" + opacityValue);
        }
    }

    // --- Z position ---
    if (zValue != -1) {
        if (script.image && script.image.mainPass && script.image.mainPass.baseColor) {
            var t = script.image.getSceneObject().getTransform();
            var pos = t.getLocalPosition();
            print("BEFORE Image updated → Z:" + t.getLocalPosition());
            pos.z = 5 + zValue * 10; // for example, 0 to 10, or whatever range you like
            t.setLocalPosition(pos);
            print("Image updated → Z:" + t.getLocalPosition());
        }
    }
    
};
