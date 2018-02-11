function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'product-payload.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    }
    xobj.send(null);
}

loadJSON(function(response) {
    var jsonresponse = JSON.parse(response);
    var productdata = jsonresponse.products;
    
    var forsale = function(number) {
      var div = document.createElement("div");
      div.setAttribute("class", "productbox col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-5");
      document.getElementById("productset").appendChild(div);
      var innerdiv = document.createElement("div");
      var img = document.createElement("img");
      var productname = document.createElement("div");
      var price = document.createElement("div");
      var cart = document.createElement("input");
      innerdiv.setAttribute("class", "innerbox");
      innerdiv.setAttribute("id", "product" + number);
      img.setAttribute("src", "images/" + productdata[number].filename);
      img.setAttribute("class", "itemphoto");
      productname.setAttribute("class", "itemname");
      price.setAttribute("class", "itemprice");
      cart.setAttribute("class", "addtocart");
      cart.setAttribute("type", "submit");
      cart.setAttribute("value", "Add to cart");
      div.appendChild(innerdiv);
      innerdiv.appendChild(img);
      innerdiv.appendChild(productname);
      productname.innerHTML= productdata[number].name;
      innerdiv.appendChild(price);
      price.innerHTML="$" + (productdata[number].price/100).toFixed(2);
      innerdiv.appendChild(cart);
    }
    
    var loadup = function() {
      for (var z = 0; z < productdata.length; z++) {
        forsale(z);
      }
    }
    
    loadup();
});