import { Github, Heart, Mail, Phone } from "lucide-react";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Trang chủ", href: "home" },
    { name: "Blog", href: "blog" },
    { name: "Giới thiệu", href: "about" },
    { name: "Liên hệ", href: "contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "#", icon: Github },
    { name: "Email", href: "mailto:quang20042204@gmail.com", icon: Mail },
    { name: "Phone", href: "tel:0949699222", icon: Phone },
  ];

  const categories = [
    "React",
    "TypeScript",
    "JavaScript",
    "CSS",
    "Node.js",
    "UI/UX",
    "NextJs"
  ];

  return (
    <footer className="bg-card border-t ">
      <div className=" px-4 py-12">
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl text-primary">MyBlog</h3>
              <p className="text-sm text-muted-foreground">
                Blog cá nhân chia sẻ kiến thức về lập trình, thiết kế và công
                nghệ.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-medium">Liên kết nhanh</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h4 className="font-medium">Chủ đề</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge key={category} variant="outline" className="text-xs">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-medium">Theo dõi blog</h4>
              <p className="text-sm text-muted-foreground">
                Đăng ký để nhận thông báo về bài viết mới.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="w-full px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Quang</p>
            <div className="flex items-center gap-1">
              <span>Được tạo với</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>bằng Next & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
