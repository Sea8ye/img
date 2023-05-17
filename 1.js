const xhr = new XMLHttpRequest();
xhr.onload = function(){
 document.getElementById("demo").innerHTML= alert(this.responseText);
};
xhr.open('GET', 'https://www.trip.com/restapi/soa2/10098/GetOrderWithBM.json',true);
xhr.withCredentials= true;
xhr.send();