function ajax(mrthod,url,data,success,error){

    var xhr = null;

    function createXHR(){
        
        if(XMLHttpRequest()){
            xhr = new XMLHttpRequest();
            createXHR = function(){
                return XMLHttpRequest();  //直接返回一个懒函数，这样不必在往下走
            }
        }else{
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
            createXHR = function(){
                return new ActiveXObject("Microsoft.XMLHTTP");                 
            }
        }
        return xhr;
    }

    createXHR();

    if (method == 'get' && data) {
        url += '?' + data;
    }
    
    xhr.open(method,url,true);
    if (method == 'get') {
        xhr.send();
    } else {
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
    xhr.onreadystatechange = function() {
        
        if ( xhr.readyState == 4 && xhr.status == 200 ) {
            success && success(xhr.responseText);
        } else {
            error(xhr.status);
        }
        
    }

}