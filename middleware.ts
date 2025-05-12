import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 判断是否为生产环境
const isProd = process.env.NODE_ENV === 'production';

export function middleware(request: NextRequest) {
  // 在开发环境中，直接返回，不执行中间件逻辑
  if (!isProd) {
    return NextResponse.next();
  }

  // 获取请求URL
  const url = request.nextUrl.clone();
  
  // 检查是否已经存在重定向循环迹象
  const redirectCount = request.headers.get('x-redirect-count') || '0';
  const count = parseInt(redirectCount, 10);
  
  // 如果重定向次数过多，直接返回而不进行重定向
  if (count > 5) {
    return NextResponse.next();
  }
  
  // 创建响应对象
  const response = NextResponse.next();
  
  // 设置或增加重定向计数
  response.headers.set('x-redirect-count', (count + 1).toString());
  
  return response;
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}; 