function ajax(opts){
    // 默认的配置
    return new Promise(function(resolve){
        // 异步操作
        const defalutOpt = {
            url: '',
            type: 'get',
            data: {},
            dataType: 'string',
            async: true //是否同步
        }
        // 做传入参数类型限制
        // 1.url是一个字符串
        // 2.type是一个字符串 而且只能传get和post
        // 3.data是一个对象
        // 4.dataType是一个字符串  而且只能传string(将响应原样返回) json(将响应json解析之后返回)
        // 5.async 是一个布尔值
        // 6.success是一个函数类型
        // 将用户传入配置和默认的配置合并
        const option = {...defalutOpt,...opts}
        const xhr = new XMLHttpRequest
        let str = ''
        for(let name in option.data){
            str+= `${name}=${option.data[name]}&`
        }
        str = str.slice(0,-1)
        // 用户传过来参数数据 是一个对象  {a:1,b:2}   转换成 'a=1&b=2'
        // 如果是get方式 参数拼接地址后面 ?a=1&b=2
        // 若果是post方式  参数  send('a=1&b=2')  xhr.setHttpHeader
        if(option.type.toLowerCase() === 'get'){
            xhr.open(option.type, `${option.url}?${str}`, option.async)
            xhr.send()
        }else{
            xhr.open(option.type,option.url, option.async)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('orgin','http://192.168.1.1')
         
            xhr.send(JSON.stringify(option.data))
        }
        xhr.onload =function(){
            let res = xhr.responseText
            if(option.dataType.toLowerCase() === 'json'){
                // 将json字符串转换成Js对象
                res = JSON.parse(res)
            }
            resolve(res)
        }
    })

}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if (r != null) return unescape(r[2]); return null;
}
function setCookie(name, value, { expires, path, domain, secure }) {

    var cookieStr =encodeURIComponent (name) + "=" +encodeURIComponent(value) ;
    if (expires) {
        cookieStr += ";expires=" + afterOfDate(expires);
    }
    if (path) {
        cookieStr += ";path=" + path;
    }
    if (domain) {
        cookieStr += ";domain=" + domain;
    }
    if (secure) {
        cookieStr += ";secure";
    }
   
    document.cookie = cookieStr;
}

//获取n天后的日期
function afterOfDate(n) {
    var d = new Date();
    var day = d.getDate();
    d.setDate(n + day);
    return d;
}


function getCookie(name) {
    var cookieStr = decodeURIComponent(document.cookie);
   
    var start = cookieStr.indexOf(name + "=");
    if (start == -1) {
        return null;
    } else {
        //查询从start位置开始遇到的第一个分号
        var end = cookieStr.indexOf(";", start);
        if (end == -1) {
            end = cookieStr.length;
        }

        //进行字符串提取
        var str = cookieStr.substring(start, end);
        var arr = str.split("=");
        return arr[1];
    }
}

function removeCookie(name) {
    document.cookie = encodeURIComponent(name) + "=;expires=" + new Date(0);
}
const goodsArray = $("ul").empty().children("li");
goodsArray.sort(function(a,b){
    var priceOld = $(a).data("price");//假设价格就设置的li上面
    var priceNew = $(b).data("price");
    if(priceOld>priceNew)return -1;
    if(priceOld<priceNew)return 1;
    return 0;
}).appendTo($("ul"));
const url="http://localhost:3000/"