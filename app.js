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
    var date = new Date();
    var y=date.getFullYear();
    var m=date.getMonth()+1;
    var d=date.getDate();
    //console.log(d.getDate());
    var datalist={y,m,d,b64};
    localStorage.setItem(localStorage.length, JSON.stringify(datalist));
    console.log("saved");
    console.log(datalist[0]);
});

var correct;

$("#start").on("click", function() {
    var r=Math.floor(Math.random()*localStorage.length);
    console.log(r);
    let datalist=JSON.parse(localStorage.getItem(r));
    //console.log(datalist[0]);
    console.log(datalist.y);
    console.log(datalist.m);
    console.log(datalist.d);
    var date=new Date(datalist.y,datalist.m,datalist.d);
    console.log(date);
    var b64=datalist.b64;
    Base64ToImage(b64, function(img) {
        document.getElementById("quiz").src = img.src;
    });
    //$("#date").html(datalist.y+" "+datalist.m+" "+datalist.d);
    correct=Math.floor(Math.random()*3);
    if (correct==0) {
        $("#button0").text(datalist.y+"/"+datalist.m+"/"+(datalist.d));
        $("#button1").text(datalist.y+"/"+datalist.m+"/"+(datalist.d+1));
        $("#button2").text(datalist.y+"/"+datalist.m+"/"+(datalist.d+2));
    } else if (correct==1) {
        $("#button0").text(datalist.y+"/"+datalist.m+"/"+(datalist.d-1));
        $("#button1").text(datalist.y+"/"+datalist.m+"/"+(datalist.d));
        $("#button2").text(datalist.y+"/"+datalist.m+"/"+(datalist.d+1));
    } else {
        $("#button0").text(datalist.y+"/"+datalist.m+"/"+(datalist.d-2));
        $("#button1").text(datalist.y+"/"+datalist.m+"/"+(datalist.d-1));
        $("#button2").text(datalist.y+"/"+datalist.m+"/"+(datalist.d));
    }
    console.log("loaded");
    $("#seigo").text("正解／不正解はここに表示");
});

$("#button0").on("click", function() {
    if (correct==0) {
        $("#seigo").text("正解");
    } else {
        $("#seigo").text("不正解");
    }
});
$("#button1").on("click", function() {
    if (correct==1) {
        $("#seigo").text("正解");
    } else {
        $("#seigo").text("不正解");
    }
});
$("#button2").on("click", function() {
    if (correct==2) {
        $("#seigo").text("正解");
    } else {
        $("#seigo").text("不正解");
    }
});