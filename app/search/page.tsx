'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

// 添加静态导出配置
export const dynamic = "force-static";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(searchQuery);
  const [results, setResults] = useState<any[]>([]);
  
  // 当组件加载或搜索参数变化时获取搜索结果
  useEffect(() => {
    if (searchQuery) {
      // 这里可以实现实际的搜索逻辑
      // 目前只是一个模拟结果的示例
      setResults([
        { id: 1, title: 'Dia AI 语音模型介绍', url: '/blog/dia-tts-model' },
        { id: 2, title: 'Nari Labs 新发布的AI语音技术', url: '/blog/dia-by-nari-labs-new-leader-in-ai-voice' },
        { id: 3, title: 'Dia 1.6B TTS 模型评测', url: '/blog/nari-labs-dia-1-6b-tts-model-review' },
      ]);
    }
  }, [searchQuery]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    }
  };

  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <Link href="/" className="flex items-center mb-6 text-sm text-gray-500 hover:text-gray-900 transition-colors">
        <ChevronLeft className="w-4 h-4 mr-1" />
        返回首页
      </Link>
      
      <h1 className="text-3xl font-bold mb-6">搜索结果</h1>
      
      <form onSubmit={handleSearch} className="mb-8 flex gap-2">
        <Input
          type="text"
          placeholder="搜索Naridiai AI相关内容..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">搜索</Button>
      </form>
      
      <div className="space-y-6">
        {searchQuery ? (
          <>
            <p className="text-gray-500">
              搜索"{searchQuery}" - 找到 {results.length} 个结果
            </p>
            
            {results.map((result) => (
              <div key={result.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <Link href={result.url}>
                  <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:underline">
                    {result.title}
                  </h2>
                  <p className="text-sm text-gray-500">{result.url}</p>
                </Link>
              </div>
            ))}
          </>
        ) : (
          <p className="text-center text-gray-500">请输入搜索关键词</p>
        )}
      </div>
    </div>
  );
} 