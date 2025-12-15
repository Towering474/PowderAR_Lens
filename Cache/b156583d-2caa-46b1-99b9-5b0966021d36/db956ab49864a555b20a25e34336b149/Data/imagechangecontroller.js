//@input Component.Image image

// Update function that others can call
script.api.updateImage = function(opacityValue, zValue) {
    if (!script.image) {
        print("⚠️ No image assigned to ImageController.js");
        return;
    }

    // --- Opacity ---
    script.image.mainPass.baseColor.a = opacityValue; // value between 0 and 1

    // --- Z position ---
    var t = script.image.getSceneObject().getTransform();
    var pos = t.getLocalPosition();
    pos.z = zValue; // for example, 0 to 10, or whatever range you like
    t.setLocalPosition(pos);

    print("Image updated → opacity:", opacityValue, " | Z:", zValue);
};
