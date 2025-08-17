import { Separator } from '@/components/ui/separator';
import React from 'react';

const Footer = () => {
    return (
      <footer className="border-t pt-8 ">
        <div className="flex items-center ">
          <div className="flex items-center gap-4 text-muted-foreground">
            <Separator className="w-16" />
            <span className="text-lg font-medium whitespace-nowrap">
              Cảm ơn bạn đã đọc
            </span>
            <Separator className="w-16" />
          </div>
        </div>
      </footer>
    );
};

export default Footer;