import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@myblog.com",
      link: "mailto:hello@myblog.com"
    },
    {
      icon: Phone,
      title: "Điện thoại",
      value: "+84 123 456 789",
      link: "tel:+84123456789"
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      value: "Hà Nội, Việt Nam",
      link: "#"
    }
  ];

  return (
    <section id="contact" className=" px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl">
            Liên hệ với tôi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Có ý tưởng dự án thú vị? Muốn hợp tác? Hoặc chỉ đơn giản muốn nói xin chào? 
            Hãy liên hệ với tôi!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl">Thông tin liên hệ</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{info.title}</p>
                      <a
                        href={info.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Gửi tin nhắn</CardTitle>
                <CardDescription>
                  Điền thông tin bên dưới và tôi sẽ phản hồi sớm nhất có thể.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ tên</Label>
                    <Input id="name" placeholder="Nhập họ tên của bạn" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Nhập email của bạn" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Chủ đề</Label>
                  <Input id="subject" placeholder="Chủ đề tin nhắn" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Tin nhắn</Label>
                  <Textarea
                    id="message"
                    placeholder="Nội dung tin nhắn của bạn..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Gửi tin nhắn
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}