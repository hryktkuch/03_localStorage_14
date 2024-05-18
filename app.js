function ImageToBase64(img, mime_type) {
    // New Canvas
    var canvas = document.createElement('canvas');
    canvas.width  = img.width;
    canvas.height = img.height;
    // Draw Image
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    // To Base64
    return canvas.toDataURL(mime_type);
}

function Base64ToImage(base64img, callback) {
    var img = new Image();
    img.onload = function() {
        callback(img);
    };
    img.src = base64img;
}

$("#upload").on("change", function(e) {
    var file = e.target.files[0];
    reader = new FileReader();
    reader.onload = function(e) {
        $("#preview").attr("src", e.target.result);
        console.log(file);
    };
    reader.readAsDataURL(file);
});

$("#save").on("click", function() {
    var img = document.getElementById("preview");
    var b64=ImageToBase64(img, "image/jpeg");
    localStorage.setItem("samplekey", b64);
    console.log("saved");
});

$("#load").on("click", function() {
    var b64=localStorage.getItem("samplekey");
    Base64ToImage(b64, function(img) {
        document.getElementById("preview2").src = img.src;
    });
    console.log("loaded");
});