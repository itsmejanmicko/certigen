import { Award } from "lucide-react";
import { constant } from "../../config/constant";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex justify-center items-center space-x-2 mb-4 md:mb-0">
              <Award className="h-6 w-6" />
              <span className="text-lg font-semibold">{constant.APP_NAME}</span>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} {constant.FOOTER.ALLRIGHTSERVER}
          </div>
        </div>
      </footer>
    );
  }
  