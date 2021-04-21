var items = ["one", "two", "three", "four", "five", "six"]

var currentindex = 0

function loadmore(){
    var maxresult = 1
    for(var i = 0; i < maxresult; i++){
        if(currentindex >= items.length){
            $("#lmbutton").hide()
            return
        }
        // $("#content").append("<div>"+items[i+currentindex]+"</div>")
        $("#content").append('<div class="img"> <div class="img_arrange"> <a href="#"><img src="#" width="300" height="300"></a> </div> <div class="img_arrange"> <a href="#"><img src="#" width="300" height="300"></a> </div> <div class="img_arrange"> <a href="#"><img src="#" width="300" height="300"></a> </div> </div>')
    }
    currentindex += maxresult
}

function scrollToBottom() {
    document.documentElement.scrollTop = document.body.scrollHeight;
}