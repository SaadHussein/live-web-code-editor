function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "" + document.getElementById("cssCode").value + "";
  var jsCode = "" + document.getElementById("jsCode").value + "";
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  saveToLocaleStorage(htmlCode, cssCode, jsCode);
  frame.close();
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}

function saveToLocaleStorage(htmlCode, cssCode, jsCode) {
  localStorage.setItem("html", htmlCode);
  localStorage.setItem("css", cssCode);
  localStorage.setItem("js", jsCode);
}

function writeFromLocalStorage() {
  const frame =
    document.getElementById("preview-window").contentWindow.document;

  const myHtml = (document.getElementById("htmlCode").value =
    localStorage.getItem("html") || "<div>\n\n</div>");
  const myCss = (document.getElementById("cssCode").value =
    localStorage.getItem("css") || "<style>\n\n</style>");
  const myJs = (document.getElementById("jsCode").value =
    localStorage.getItem("js") || "<script>\n\n</script>");

  const myCode = myHtml + myCss + myJs;
  frame.open();
  frame.write(myCode);
  frame.close();
}

writeFromLocalStorage();
