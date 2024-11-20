import { Award } from "lucide-react";
import { constant } from "../../config/constant";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Award className="h-6 w-6" />
              <span className="text-lg font-semibold">{constant.APP_NAME}</span>
            </div>
            <nav className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">{constant.FOOTER.PRIVACY}</a>
              <a href="#" className="hover:text-gray-300">{constant.FOOTER.TERMS}</a>
              <a href="#" className="hover:text-gray-300">{constant.FOOTER.CONTACT}</a>
            </nav>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} {constant.FOOTER.ALLRIGHTSERVER}
          </div>
        </div>
      </footer>
    );
  }
  