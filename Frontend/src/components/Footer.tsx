import { Heart, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-gray-200 pt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500 fill-current" />
          <span>for better cold emails</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Github className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Linkedin className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        <p className="w-2/3 mx-auto">
          © {currentYear} FlareMail — A product of{" "}
          <span className="font-semibold">PaprFlare</span>. <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};
