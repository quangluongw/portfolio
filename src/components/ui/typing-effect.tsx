"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number; // Tốc độ đánh máy tính bằng mili giây cho mỗi ký tự
  deleteSpeed?: number; // Tốc độ xóa tính bằng mili giây cho mỗi ký tự
  pauseDuration?: number; // Thời gian tạm dừng sau khi đánh máy hoặc xóa xong
}

type Phase =
  | "typing"
  | "pausing_after_typing"
  | "deleting"
  | "pausing_after_deleting";

export default function TypingEffect({
  text,
  speed = 150,
  deleteSpeed = 150, // Mặc định xóa nhanh hơn
  pauseDuration = 1500, // Mặc định tạm dừng 1.5 giây
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (phase) {
      case "typing":
        if (charIndex < text.length) {
          timeout = setTimeout(() => {
            setDisplayedText(text.substring(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          }, speed);
        } else {
          // Đã đánh máy xong, chuyển sang tạm dừng
          setPhase("pausing_after_typing");
        }
        break;

      case "pausing_after_typing":
        timeout = setTimeout(() => {
          setPhase("deleting");
        }, pauseDuration);
        break;

      case "deleting":
        if (charIndex > 0) {
          timeout = setTimeout(() => {
            setDisplayedText(text.substring(0, charIndex - 1));
            setCharIndex((prev) => prev - 1);
          }, deleteSpeed);
        } else {
          // Đã xóa xong, chuyển sang tạm dừng
          setPhase("pausing_after_deleting");
        }
        break;

      case "pausing_after_deleting":
        timeout = setTimeout(() => {
          setPhase("typing");
          // charIndex đã là 0, sẵn sàng để đánh máy lại
        }, pauseDuration);
        break;
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phase, text, speed, deleteSpeed, pauseDuration]);

  return (
    <div className=" font-bold text-gray-800 dark:text-gray-200">
      {displayedText}
      {(phase === "typing" || phase === "pausing_after_typing") && (
        <span className="animate-blink">|</span>
      )}
    </div>
  );
}
