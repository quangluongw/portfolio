"use client";
import { ArrowDown, Code2, Github, Mail, Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import TypingEffect from "./ui/typing-effect";

export function Hero() {
  const skills = ["React", "TypeScript", "Node.js", "UI/UX", "Frontend"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 " />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-lg animate-pulse delay-500" />

      <div className=" px-4 pt-24 mx-auto relative">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="space-y-8">
            <div className="relative">
              <Avatar className="w-40 h-40 mx-auto border-4 border-primary/10 shadow-2xl ring-4 ring-background">
                <AvatarImage src="" alt="Profile" />
                <AvatarFallback className="text-2xl">
                  Lương Thành Quang
                </AvatarFallback>
              </Avatar>
              <h1 className="mt-6 flex items-center gap-4 text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                Xin chào, tôi là
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  <TypingEffect text={"Quang"} />
                </span>
              </h1>
              {/* Floating code icon */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Code2 className="h-6 w-6" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"></h1>
                <div className="text-2xl md:text-3xl text-muted-foreground font-medium">
                  <span className="inline-block">Full-stack Developer</span>
                  <span className="mx-3 text-primary">•</span>
                  <span className="inline-block">Creative Blogger</span>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Tôi tạo ra những ứng dụng web hiện đại và chia sẻ kiến thức qua
                những bài viết chất lượng. Đam mê công nghệ và luôn học hỏi.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Button
                size="lg"
                className="min-w-[220px] h-12 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-md"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Khám phá Blog
              </Button>

              <div className="flex items-center gap-3">
                <Link href={"https://github.com/quangluongw"}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:quang20042204@gmail.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="tel: 0949699222">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Phone className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-16">
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce hover:scale-110 transition-transform duration-300 rounded-full"
              onClick={() => scrollToSection("#blog")}
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
