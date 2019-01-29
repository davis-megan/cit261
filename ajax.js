function json() {
    var url = "data.json";
    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {


        // readyState == 4 means request received and ready
        // status == 200 means request is OK
        if (this.readyState == 4 && this.status == 200) {

            // Parses JSON data
            var data = JSON.parse(this.responseText);

            document.getElementById("gem").innerHTML = data.gem;
            document.getElementById("color").innerHTML = data.color;
        }
    }

    // open(method, file location, async == true)
    http.open("GET", url, true);
    
    // sends request to server if "GET" is used
    http.send();
}