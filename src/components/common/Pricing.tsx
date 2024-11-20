import { CheckCircle } from "lucide-react";
import { PRICING_TEXT } from "../helper/Pricing";
import { constant } from "../../config/constant";

export default function Pricing() {
    return (
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{constant.PRICING.SIMPLEPRICING}</h2>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-center mb-4">{constant.PRICING.PROPLAN}</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">{constant.PRICING.PRICE}</span>
                <span className="text-gray-600">{constant.PRICING.MONTH}</span>
              </div>

              {PRICING_TEXT.map((item)=>(
                 <ul className="space-y-2 mb-6">
                 <li className="flex items-center">
                   <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                   <span>{item}</span>
                 </li>
               </ul>
              ))}
             
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              {constant.PRICING.STARTED}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  