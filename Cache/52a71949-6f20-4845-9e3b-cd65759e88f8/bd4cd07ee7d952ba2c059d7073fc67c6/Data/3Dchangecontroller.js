//@input Component.MeshVisual meshVisual

// Update function that others can call
script.updateMesh = function(opacityValue, zValue) {
    if (!script.meshVisual) {
        print("⚠️ No MeshVisual assigned to script");
        return;
    }

    var meshObj = script.meshVisual.getSceneObject();
    var material = script.meshVisual.mainMaterial;

    // --- Opacity ---
    if (opacityValue != -1) {
        if (material && material.mainPass && material.mainPass.baseColor) {
            var color = material.mainPass.baseColor;
            // Keep RGB, change alpha
            material.mainPass.baseColor = new vec4(color.x, color.y, color.z, opacityValue);
            print("Mesh updated → opacity:" + opacityValue);
        } else {
            print("⚠️ Material does not support baseColor alpha. Use PBR or Unlit material with transparency enabled.");
        }
    }

    // --- Z position ---
    if (zValue != -1) {
        var t = meshObj.getTransform();
        var pos = t.getLocalPosition();
        print("BEFORE Mesh updated → Z:" + pos);
        
        pos.z = 0 + zValue * 5; // scale movement like your original
        t.setLocalPosition(pos);

        print("Mesh updated → Z:" + t.getLocalPosition());
    }
};