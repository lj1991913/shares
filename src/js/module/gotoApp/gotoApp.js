
module.exports = function(){
        var url_ios =  'lebao://action';
        var url_ios_download=  'https://itunes.apple.com/cn/app/%E4%B9%90%E5%AE%9D%E5%AE%B6%E9%95%BF%E7%89%88/id1164835115?mt=8';
        var url_android = 'lebao://action';
        var url_android_download = 'https://app.lebaoedu.com/upload/app/lebao_parents.apk';
        var bt=navigator.userAgent.toLowerCase();
        var loadTime,outTime;
        if (bt.match(/(android)\s+([\d.]+)/)){
            loadTime = new Date();
            window.location.href = url_android;
            setTimeout(function(){
                outTime = new Date()
                if(outTime - loadTime > 800){
                    location.href = url_android_download;
                }
            },1000);
        }else{
            loadTime = new Date();
            location.href = url_ios;
            setTimeout(function(){
                outTime = new Date()
                if(outTime - loadTime > 800){
                    window.location.href = url_ios_download;
                }           
            },1000);
        }
};