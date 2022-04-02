function af(){
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date =  today.getDate();
    var data1 = `${year}年${month}月${date}日`;

    if(month > 3){
        var afday = new Date(year,3,1,0,0,0,0);
        var ms = today.getTime() - afday.getTime();
        var data2 = Math.floor(ms / (1000*24*60*60)) + 1;
    } else {
        var afday = new Date((year-1),3,1,0,0,0,0);
        var ms = today.getTime() - afday.getTime();
        var data2 = Math.floor(ms / (1000*24*60*60)) + 1;
    }


    var log = document.getElementById("today");
    log.innerHTML = data1;

    var AFslog = document.getElementById("AFx");
    AFslog.innerHTML = data2;
}