//@input Component.Image image

// Update function that others can call
script.updateImage = function(opacityValue, zValue) {
    if (!script.image) {
        print("⚠️ No image assigned to ImageController.js");
        return;
    }

    // --- Opacity ---
    if (opacityValue != -1) {
        script.image.mainPass.baseColor.a = opacityValue; // value between 0 and 1
        print("Image updated → opacity:" + opacityValue);
    }

    // --- Z position ---
        if (zValue != -1) {
        var t = script.image.getSceneObject().getTransform();
        var pos = t.getLocalPosition();
        pos.z = zValue * 10; // for example, 0 to 10, or whatever range you like
        t.setLocalPosition(pos);
        print("Image updated → Z:" + zValue);
        print("Image updated → Z:" + t.getLocalPosition);
    }

};
