function loadData(data) {
  if (data == "btn1") {
    document.getElementById("para").innerHTML =
      "<center><h4 >Disposable Caps</h4>  <table ><tr><th>Size</th><th>Prizes</th></tr><tr><td>M</td>       <td>   3200</td></tr></table></center><br><br><br><br><br>";

    document.getElementById("img").src = "images/caps.jpg";
  } else if (data == "btn2") {
    document.getElementById("para").innerHTML =
      " <center><h4>Apron</h4>  <table ><tr><th>Size</th><th>Prizes</th></tr><tr><td>M</td>       <td>   3200</td></tr></table></center><br><br><br><br><br><br><br><br><br>";

    document.getElementById("img").src = "images/apron.jpeg";
  } else if (data == "btn3") {
    document.getElementById("para").innerHTML =
      "<center><h4>Serviate</h4>  <table ><tr><th>Size</th><th>Prizes</th></tr><tr><td>M</td>       <td>   3200</td></tr></table></center><br><br><br>";

    document.getElementById("img").src = "images/serviate.jpeg";
  } else if (data == "btn4") {
    document.getElementById("para").innerHTML =
      "<center><h4>Boots</h4>  <table ><tr><th>Size</th><th>Prizes</th></tr><tr><td>M</td>       <td>   3200</td></tr></table></center><br><br><br><br><br><br>";

    document.getElementById("img").src = "images/boot2.jpg";
  } else {
    alert("Invalid");
  }
}

function priceForloop() {
  var l = [
    "Gloves =Rs 180/=",
    "Mask =Rs 40/=",
    "Rubber 1kg Bands=Rs 1500/=",
    "Apron =Rs 8/=",
  ];
  var i,
    len,
    list = 0;

  for (
    i = 0,
      len = l.length,
      list = "<center>List of Average prices of products</br><br><br></center>";
    i < len;
    i++
  ) {
    list += l[i] + "<br/>";
  }

  document.getElementById("para").innerHTML =
    "<center>" + list + "</center><br><br><br><br>";
  douement.getElementById("img").src = "#";
}

// function prdouctForInLoop() {
//   //document.write(

//   var phone = [];
//   var list = 0;

//   phone["g1"] = "Rs 1000/=";
//   phone["g2"] = "Rs 500/=";
//   phone["g3"] = "Rs 1500/=";
//   phone["g4"] = "Rs 2500/=";
//   phone["g5"] = "Rs 100/=";
//   phone["g6"] = "Rs 800/=";
//   phone["g7"] = "Rs 8000/=";
//   phone["g8"] = "Rs 9000/=";
//   Phone["g9"] = "Rs 1800/=";
//   phone["g10"] = "Rs 100/=";
//   phone["g11"] = "Rs 360/=";

//   list += "List of Average prices (using For in Loop)" + "<br/>";

//   for (var item in phone) {
//     list += item + ":" + phone[item] + "<br/>";
//   }
//   document.getElementById("para").innerHTML = list;

//   document.getElementById("img").src = "images1/huwaie.png";
// }

// function priceHigher() {
//   var phone = [];
//   var HighPrice = 0;

//   Phone["Iphone XS"] = 1000;
//   phone["Apple iphone XR"] = 500;
//   Phone["iphone 8"] = 1500;
//   phone["Iphone x"] = 2500;
//   phone["Nova 5"] = 100;
//   phone["Nova 5 pro"] = 800;
//   phone["P 30 lite"] = 8000;
//   phone["Z 5 Pro"] = 9000;
//   phone["K9"] = 1800;
//   phone["K8 plus"] = 100;
//   phone["3.1 Plus"] = 360;

//   HighPrice += "List of high cost mobile phone " + "<br/>";

//   for (var item in phone) {
//     if (phone[item] > 1000) {
//       HighPrice += item + ":" + phone[item] + "<br/>";
//     }
//   }

//   document.getElementById("para").innerHTML = HighPrice;

//   document.getElementById("img").src = "images1/huwaie.png";
// }

// function priceHigher() {
//   var phone = [];
//   var HighPrice = 0;

//   Phone["Iphone XS"] = 1000;
//   phone["Apple iphone XR"] = 500;
//   Phone["iphone 8"] = 1500;
//   phone["Iphone x"] = 2500;
//   phone["Nova 5"] = 100;
//   phone["Nova 5 pro"] = 800;
//   phone["P 30 lite"] = 8000;
//   phone["Z 5 Pro"] = 9000;
//   phone["K9"] = 1800;
//   phone["K8 plus"] = 100;
//   phone["3.1 Plus"] = 360;

//   HighPrice += "List of high cost mobile phone " + "<br/>";

//   for (var item in phone) {
//     if (phone[item] > 1000) {
//       HighPrice += item + ":" + phone[item] + "<br/>";
//     }
//   }

//   document.getElementById("para").innerHTML = HighPrice;

//   document.getElementById("img").src = "images1/huwaie.png";
// }

// function priceHigher() {
//   var phone = [];
//   var HighPrice = 0;

//   Phone["Iphone XS"] = 1000;
//   phone["Apple iphone XR"] = 500;
//   Phone["iphone 8"] = 1500;
//   phone["Iphone x"] = 2500;
//   phone["Nova 5"] = 100;
//   phone["Nova 5 pro"] = 800;
//   phone["P 30 lite"] = 8000;
//   phone["Z 5 Pro"] = 9000;
//   phone["K9"] = 1800;
//   phone["K8 plus"] = 100;
//   phone["3.1 Plus"] = 360;

//   HighPrice += "List of high cost mobile phone " + "<br/>";

//   for (var item in phone) {
//     if (phone[item] > 1000) {
//       HighPrice += item + ":" + phone[item] + "<br/>";
//     }
//   }

//   document.getElementById("para").innerHTML = HighPrice;

//   document.getElementById("img").src = "images1/huwaie.png";
// }

// function priceLower() {
//   var phone = [];
//   var priceLower = 0;

//   Phone["Iphone XS"] = 1000;
//   phone["Apple iphone XR"] = 500;
//   Phone["iphone 8"] = 1500;
//   phone["Iphone x"] = 2500;
//   phone["Nova 5"] = 100;
//   phone["Nova 5 pro"] = 800;
//   phone["P 30 lite"] = 8000;
//   phone["Z 5 Pro"] = 9000;
//   phone["K9"] = 1800;
//   phone["K8 plus"] = 100;
//   phone["3.1 Plus"] = 360;

//   priceLower += "List of high cost mobile phone " + "<br/>";

//   for (var item in phone) {
//     if (phone[item] > 1000) {
//       priceLower += item + ":" + phone[item] + "<br/>";
//     }
//   }

//   document.getElementById("para").innerHTML = priceLower;

//   document.getElementById("img").src = "images1/huwaie.png";
// }
