import { Award } from "lucide-react";
import { constant } from "../../config/constant";

export default function Navbar() {
    return (
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Award className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">{constant.APP_NAME}</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              {constant.NAVBAR.FEATURES}
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">
            {constant.NAVBAR.HOWITWORKS}
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
            {constant.NAVBAR.PRICING}
            </a>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          {constant.NAVBAR.GETSTARTED}
          </button>
        </nav>
      </header>
    );
  }
  