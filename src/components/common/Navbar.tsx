import { Award } from "lucide-react";
import { constant } from "../../config/constant";

export default function Navbar() {
    return (
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-center items-center">
          <div className="flex items-center justify-center">
            <Award className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">{constant.APP_NAME}</span>
          </div>
    
        </nav>
      </header>
    );
  }
  