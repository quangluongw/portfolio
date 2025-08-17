"use client";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../image/logo.png";
import { Button } from "./ui/button";
export function Header() {
  const pathname = usePathname();
  const pathSegment = pathname.split("/")[1] || "/";
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const toggleTheme = () => {
  const nextIsDark = !isDark;
  setIsDark(nextIsDark);
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

  const navItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Liên hệ", href: "/contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-[60] w-full transition-all duration-300 py-3 px-5 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex h-16 items-center justify-between">
        <Image src={logo} alt="Lương Thành Quang" width={50} />
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <Button
                variant="ghost"
                className={`text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 px-4 py-2 rounded-lg text-xl ${
                  pathSegment === item.href && "text-yellow-500"
                }`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10 rounded-lg hover:bg-primary/10 hover:scale-110 transition-all duration-300 "
          >
            {isDark ? (
              <Sun
                className=" text-yellow-500"
                style={{ width: "20px", height: "20px" }}
              />
            ) : (
              <Moon
                className=" text-blue-500"
                style={{ width: "20px", height: "20px" }}
              />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-10 w-10 rounded-lg hover:bg-primary/10 hover:scale-110 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden border-t bg-background/95 backdrop-blur-xl transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className=" px-4 py-4 space-y-2">
          {navItems.map((item, index) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => scrollToSection(item.href)}
              className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 "
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
