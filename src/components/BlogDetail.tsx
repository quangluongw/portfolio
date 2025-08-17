import {
  ArrowLeft,
  Bookmark,
  Calendar,
  Clock,
  Facebook,
  Heart,
  Link,
  Linkedin,
  MessageCircle,
  Share2,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
}

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
  relatedPosts: BlogPost[];
}

export function BlogDetail({ post, onBack, relatedPosts }: BlogDetailProps) {
  const shareUrl = `https://myblog.com/blog/${post.id}`;

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(post.title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      copy: shareUrl,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(shareUrl);
      return;
    }

    window.open(
      urls[platform as keyof typeof urls],
      "_blank",
      "width=600,height=400"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className=" px-4 py-4">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại blog
          </Button>

          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground">
            <span
              className="hover:text-foreground cursor-pointer"
              onClick={onBack}
            >
              Blog
            </span>
            <span className="mx-2">/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>
        </div>
      </div>

      <div className=" px-4 py-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Article Header */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground">{post.description}</p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={post.author.avatar}
                    alt={post.author.name}
                  />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Thích
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Lưu
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Chia sẻ
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Tags */}
              <div className="pt-6">
                <h3 className="mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Author Bio */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={post.author.avatar}
                        alt={post.author.name}
                      />
                      <AvatarFallback>
                        {post.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="mb-2">Về tác giả: {post.author.name}</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        {post.author.bio}
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Theo dõi
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Nhắn tin
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-6">Bình luận (5)</h3>

                  {/* Comment Form */}
                  <div className="space-y-4 mb-6">
                    <textarea
                      placeholder="Viết bình luận của bạn..."
                      className="w-full min-h-[100px] p-3 border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="flex justify-end">
                      <Button>Gửi bình luận</Button>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Comments List */}
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={`https://images.unsplash.com/photo-150700321116${i}?w=100&h=100&fit=crop&crop=face`}
                          />
                          <AvatarFallback>U{i}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">
                              Người dùng {i}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              2 giờ trước
                            </span>
                          </div>
                          <p className="text-sm">
                            Bài viết rất hay và chi tiết! Cảm ơn tác giả đã chia
                            sẻ những kiến thức bổ ích.
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <button className="hover:text-foreground">
                              Thích
                            </button>
                            <button className="hover:text-foreground">
                              Trả lời
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Share Buttons */}
              <Card>
                <CardContent className="p-4">
                  <h4 className="mb-3">Chia sẻ bài viết</h4>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => handleShare("facebook")}
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => handleShare("twitter")}
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => handleShare("linkedin")}
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => handleShare("copy")}
                    >
                      <Link className="h-4 w-4 mr-2" />
                      Copy Link
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card>
                <CardContent className="p-4">
                  <h4 className="mb-3">Mục lục</h4>
                  <nav className="space-y-2 text-sm">
                    <a
                      href="#introduction"
                      className="block text-muted-foreground hover:text-foreground"
                    >
                      1. Giới thiệu
                    </a>
                    <a
                      href="#overview"
                      className="block text-muted-foreground hover:text-foreground"
                    >
                      2. Tổng quan
                    </a>
                    <a
                      href="#implementation"
                      className="block text-muted-foreground hover:text-foreground"
                    >
                      3. Triển khai
                    </a>
                    <a
                      href="#best-practices"
                      className="block text-muted-foreground hover:text-foreground"
                    >
                      4. Best Practices
                    </a>
                    <a
                      href="#conclusion"
                      className="block text-muted-foreground hover:text-foreground"
                    >
                      5. Kết luận
                    </a>
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="space-y-6">
              <Separator />
              <h2 className="text-2xl">Bài viết liên quan</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.slice(0, 3).map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {relatedPost.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="line-clamp-2">{relatedPost.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {relatedPost.date}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
