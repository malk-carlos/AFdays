function af(){
    var today = new Date();
    var todays = today.toString().split(" ")
    console.log(today)
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date =  today.getDate();
    var data1 = `${todays[0]}, ${todays[1]} ${date.toString().padStart(2, "0")}, ${year}`;

    if(date == 1 && month == 4){
        var afday = new Date((year-1),3,1,0,0,0,0);
        var ms = today.getTime() - afday.getTime();
        var data2 = Math.floor(ms / (1000*24*60*60)) + 1;

        // 表示する日付をランダム設定する処理
        const WD = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        const Mon = ["Jan","Feb","Mar","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        var afWD = WD[Math.floor(Math.random() * 7)];
        var afyear = Math.floor(Math.random() * 12345);
        var afmonth = Mon[Math.floor(Math.random() * 11)];
        var afdate =  Math.floor(Math.random() * 100);
        var data1 = `${afWD}, ${afmonth} ${afdate}, ${afyear}`;
        var data2 = "エイプリルフールではありません"
    } else if(month > 3){
        var afday = new Date(year,3,1,0,0,0,0);
        var ms = today.getTime() - afday.getTime();
        var data2 = `エイプリルフール${Math.floor(ms / (1000*24*60*60)) + 1}日目です`;
    } else {
        var afday = new Date((year-1),3,1,0,0,0,0);
        var ms = today.getTime() - afday.getTime();
        var data2 = `エイプリルフール${Math.floor(ms / (1000*24*60*60)) + 1}日目です`;
    }

    // 背景変更 (デバッグ用)
    // $("body").css("background-image",`url("img/${todays[1].toLowerCase()}.png?raw=true")`)

    // 各月の背景が準備でき次第コメントアウトを解除
    $("body").css("background-image",`url("https://github.com/malk-carlos/AFdays/blob/main/img/${todays[1].toLowerCase()}.png?raw=true")`)

    var log = document.getElementById("today");
    log.innerHTML = data1;

    var AFslog = document.getElementById("AFx");
    AFslog.innerHTML = data2;
}

af()

function af_change(){
    var inp = document.getElementById("ind").value
    var today = new Date(inp)
    console.log(inp)

    if(inp.match(/[0-9]+.[0-9]+.[0-9]+/)){
        document.getElementById("error").style.display = "none";

        var todays = today.toString().split(" ")
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var date =  today.getDate();
        var data1 = `${todays[0]}, ${todays[1]} ${date.toString().padStart(2, "0")}, ${year}`;

        if(date == 1 && month == 4){
            var afday = new Date((year-1),3,1,0,0,0,0);
            var ms = today.getTime() - afday.getTime();
            var data2 = Math.floor(ms / (1000*24*60*60)) + 1;

            // 表示する日付をランダム設定する処理
            const WD = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
            const Mon = ["Jan","Feb","Mar","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
            var afWD = WD[Math.floor(Math.random() * 7)];
            var afyear = Math.floor(Math.random() * 12345);
            var afmonth = Mon[Math.floor(Math.random() * 11)];
            var afdate =  Math.floor(Math.random() * 100);
            var data1 = `${afWD}, ${afmonth} ${afdate}, ${afyear}`;
            var data2 = `エイプリルフールではありません`;
        } else if(month > 3){
            var afday = new Date(year,3,1,0,0,0,0);
            var ms = today.getTime() - afday.getTime();
            var data2 = Math.floor(ms / (1000*24*60*60)) + 1;
            var data2 = `エイプリルフール${Math.floor(ms / (1000*24*60*60)) + 1}日目です`;
        } else {
            var afday = new Date((year-1),3,1,0,0,0,0);
            var ms = today.getTime() - afday.getTime();
            var data2 = Math.floor(ms / (1000*24*60*60)) + 1;
            var data2 = `エイプリルフール${Math.floor(ms / (1000*24*60*60)) + 1}日目です`;
        }

        // 背景変更 (デバッグ用)
        // $("body").css("background-image",`url("img/${todays[1].toLowerCase()}.png?raw=true")`)

        // 各月の背景が準備でき次第コメントアウトを解除
        $("body").css("background-image",`url("https://github.com/malk-carlos/AFdays/blob/main/img/${todays[1].toLowerCase()}.png?raw=true")`)


        var log = document.getElementById("today");
        log.innerHTML = data1;

        var AFslog = document.getElementById("AFx");
        AFslog.innerHTML = data2;
    } else {
        document.getElementById("error").style.display = "unset";
    }
}
