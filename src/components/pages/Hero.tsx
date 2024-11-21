import { useNavigate } from "react-router-dom";
import { constant } from "../../config/constant";

export function Hero() {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/filluppage')
  }
    return (
      <section className="bg-gradient-to-b from-white to-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {constant.HERO.TITLE}
          </h1>
          <p className="text-xl text-gray-600 mb-1">
            {constant.HERO.DESCRIPTION}
          </p>
          <p className="text-sm text-red-600 mb-8">
            {constant.HERO.NOTE}
          </p>
          <div className="flex justify-center space-x-4">
            <button onClick={handleClick} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            {constant.HERO.START}
            </button>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors">
            {constant.HERO.DEMO}
            </button>
          </div>
        </div>
      </section>
    );
  }
  