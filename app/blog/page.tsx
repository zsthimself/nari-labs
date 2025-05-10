"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";

const BlogPage = () => {
  // Blog post list
  const blogPosts = [
    {
      id: "dia-by-nari-labs-new-leader-in-ai-voice",
      title: "Dia by Nari Labs: The New Leader in AI Voice Technology",
      excerpt: "An in-depth look at how Dia, developed by two relatively inexperienced developers with no external funding, is redefining AI voice capabilities with superior emotional expression and non-verbal sound generation.",
      date: "May 15, 2024",
      imageUrl: "/blog/dia-nari-labs-voice.svg",
      category: "AI Voice Technology"
    },
    {
      id: "nari-labs-dia-1-6b-tts-model-review",
      title: "Nari Labs DIA-1.6B: A Revolutionary Open-Source TTS Model for Realistic Dialogues",
      excerpt: "An in-depth review of the newly released DIA-1.6B text-to-speech model from Nari Labs, designed for local use with impressive multi-speaker dialogue capabilities and non-verbal communication features.",
      date: "May 10, 2024",
      imageUrl: "/blog/nari-labs-dia-model.svg",
      category: "AI Technology"
    },
    {
      id: "dia-tts-model",
      title: "DIA: An Open-Source TTS Model Surpassing ElevenLabs",
      excerpt: "How a zero-funded open-source TTS model developed by two undergraduates outperforms ElevenLabs and Sesame in emotional tone, dialogue flow, and non-verbal realism.",
      date: "February 25, 2024",
      imageUrl: "/blog/dia-tts-model.svg", // Using our created SVG image
      category: "AI Technology"
    },
    // You can add other blog posts
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Nari Labs Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the latest advancements in AI voice synthesis, tutorials, and industry insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image 
                  src={post.imageUrl} 
                  alt={post.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback to placeholder when image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder-image.jpg";
                  }}
                />
                <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded">
                  {post.category}
                </span>
              </div>
              
              <div className="flex-1 p-5">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.id}`} className="inline-block">
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      
      <footer className="bg-gray-100 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Nari Labs. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage; 