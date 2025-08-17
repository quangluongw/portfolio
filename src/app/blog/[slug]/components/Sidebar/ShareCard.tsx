"use client";

import { Copy, Facebook, Share2 } from "lucide-react";

const ShareCard = () => {
  const openCenteredPopup = (
    url: string,
    title: string,
    width: number,
    height: number
  ) => {
    const dualScreenLeft = window.screenLeft ?? window.screenX ?? 0;
    const dualScreenTop = window.screenTop ?? window.screenY ?? 0;

    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth || screen.width;
    const viewportHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      screen.height;

    const left = dualScreenLeft + (viewportWidth - width) / 2;
    const top = dualScreenTop + (viewportHeight - height) / 2;

    const features = `scrollbars=yes,width=${width},height=${height},top=${top},left=${left},noopener,noreferrer`;
    const newWindow = window.open(url, title, features);
    if (newWindow) newWindow.focus();
  };

  const handleShare = async (provider: "facebook" | "copy") => {
    if (provider === "facebook") {
      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`;
      openCenteredPopup(shareUrl, "facebook-share", 600, 500);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Đã sao chép liên kết");
    }
  };
  return (
    <div className="shadow-lg border-1 rounded-md backdrop-blur-sm">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Share2 className="w-5 h-5 " />
          <h3 className="text-lg font-semibold">Chia sẻ bài viết</h3>
        </div>

        <div className="space-y-3">
          <button
            className="flex items-center w-full justify-start gap-3 hover:text-blue-700 cursor-pointer"
            onClick={() => handleShare("facebook")}
          >
            <Facebook className="w-4 h-4" />
            Chia sẻ trên Facebook
          </button>

          <button
            className="flex items-center w-full justify-start gap-3 hover:text-green-700 cursor-pointer"
            onClick={() => handleShare("copy")}
          >
            <Copy className="w-4 h-4" />
            Sao chép liên kết
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareCard;
