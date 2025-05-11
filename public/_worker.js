export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 服务静态资源
    if (url.pathname.startsWith('/_next/') || 
        url.pathname.startsWith('/static/') || 
        url.pathname.includes('.')) {
      return env.ASSETS.fetch(request);
    }
    
    // 处理API请求
    if (url.pathname.startsWith('/api/')) {
      // 处理API请求
      return env.ASSETS.fetch(request);
    }
    
    // 所有其他路由返回Next.js应用程序
    return env.ASSETS.fetch(`${url.origin}/index.html`, request);
  }
} 