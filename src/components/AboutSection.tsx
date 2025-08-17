"use client";
import {
  faCss3,
  faFigma,
  faGithub,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Award, Coffee, Heart, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
export function AboutSection() {
  const skills = [
    {
      name: "React/Next.js",
      icon: faReact,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "TypeScript",
      icon: faCode,
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Node.js",
      icon: faNodeJs,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Github",
      icon: faGithub,
      color: "from-gray-600 to-gray-400",
    },
    {
      name: "CSS",
      icon: faCss3,
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "Figma",
      icon: faFigma,
      color: "from-purple-600 to-purple-400",
    },
  ];

  const experiences = [
    {
      title: "Fresher Frontend Developer",
      company: "CodeFram",
      period: "2025 - Hiện tại",
      description:
        "Phát triển ứng dụng web với ReactJs, TypeScript và Next.js. Tối ưu hiệu suất và trải nghiệm người dùng.",
      icon: "🚀",
    },
    {
      title: "Freelancer Frontend Developer",
      company: "",
      period: "2024 - 2025",
      description: "Xây dựng website và ứng dụng web. Làm việc với React",
      icon: "💻",
    },
  ];

  const stats = [
    {
      number: "5+",
      label: "Dự án hoàn thành",
      icon: Award,
      color: "text-blue-500",
    },
    {
      number: "5+",
      label: "Bài viết blog",
      icon: Coffee,
      color: "text-purple-500",
    },
    {
      number: "5+",
      label: "Tháng kinh nghiệm",
      icon: Users,
      color: "text-green-500",
    },
    {
      number: "5+",
      label: "Khách hàng hài lòng",
      icon: Heart,
      color: "text-red-500",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      <div className=" px-4 relative ">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6 ">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Về tôi
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Tôi là một developer đam mê công nghệ với hơn 5 tháng kinh nghiệm
              trong việc tạo ra những ứng dụng web hiện đại. Tôi yêu thích học
              hỏi công nghệ mới và chia sẻ kiến thức thông qua blog cá nhân.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/80 "
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div
                      className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <h4 className="text-3xl lg:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 ">
            {/* Skills */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Kỹ năng chuyên môn</h3>
                <p className="text-muted-foreground text-lg">
                  Những công nghệ và tools tôi sử dụng hàng ngày để tạo ra các
                  sản phẩm tuyệt vời.
                </p>
              </div>

              <div className="space-y-8 grid grid-cols-2">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group space-y-3 co"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            {/* <Icon className="h-5 w-5 text-white" /> */}
                            <FontAwesomeIcon
                              icon={Icon}
                              className="text-white text-xl"
                            />
                          </div>
                          <span className="font-medium text-lg">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Kinh nghiệm làm việc</h3>
                <p className="text-muted-foreground text-lg">
                  Hành trình phát triển sự nghiệp và những dự án tôi đã tham
                  gia.
                </p>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/80"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          {exp.icon}
                        </div>
                        <div className="space-y-3 flex-1">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                              {exp.title}
                            </h4>
                            <div className="flex items-center justify-between">
                              <p className="text-primary font-medium">
                                {exp.company}
                              </p>
                              <Badge
                                variant="outline"
                                className="border-primary/20 text-primary"
                              >
                                {exp.period}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Touch */}
          <Card className="border-0  via-card to-accent/5 overflow-hidden ">
            <CardContent className="p-12 text-center space-y-6">
              <Avatar className="w-24 h-24 mx-auto border-4 border-primary/20 shadow-xl">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold">
                  Đam mê và triết lý làm việc
                </h4>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Code không chỉ là công việc, mà là nghệ thuật. Tôi tin rằng
                  công nghệ có thể thay đổi thế giới, và mỗi dòng code chúng ta
                  viết đều có thể tạo ra tác động tích cực đến cuộc sống của mọi
                  người.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {["Sáng tạo", "Chất lượng", "Học hỏi", "Chia sẻ"].map(
                  (value) => (
                    <Badge
                      key={value}
                      className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {value}
                    </Badge>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
