export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;
    
    // 静态资源处理
    if (
      pathname.startsWith('/_next/') || 
      pathname.startsWith('/static/') || 
      pathname.startsWith('/assets/') ||
      pathname.endsWith('.js') ||
      pathname.endsWith('.css') ||
      pathname.endsWith('.json') ||
      pathname.endsWith('.ico') ||
      pathname.endsWith('.svg') ||
      pathname.endsWith('.png') ||
      pathname.endsWith('.jpg') ||
      pathname.endsWith('.jpeg') ||
      pathname.endsWith('.gif')
    ) {
      return env.ASSETS.fetch(request);
    }
    
    // 特殊文件
    if (
      pathname === '/favicon.ico' ||
      pathname === '/robots.txt' ||
      pathname === '/sitemap.xml' ||
      pathname === '/manifest.json'
    ) {
      return env.ASSETS.fetch(request);
    }
    
    // API路由处理
    if (pathname.startsWith('/api/')) {
      return env.ASSETS.fetch(request);
    }
    
    // 博客文章路由
    if (pathname.startsWith('/blog/')) {
      return env.ASSETS.fetch(`${url.origin}/index.html`, request);
    }
    
    // 根路径
    if (pathname === '/') {
      return env.ASSETS.fetch(`${url.origin}/index.html`, request);
    }
    
    // 其他所有路由返回index.html
    return env.ASSETS.fetch(`${url.origin}/index.html`, request);
  }
} 