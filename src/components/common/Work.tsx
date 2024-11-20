import { constant } from "../../config/constant";
import StepCard from "../helper/StepCard";

export default function Work() {
    return (
      <section id="how-it-works" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{constant.HOWITWORKS.WORKS}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              title={constant.HOWITWORKS.CARD1.TITLE}
              description={constant.HOWITWORKS.CARD1.DESCRIPTION}
            />
            <StepCard
              number={2}
              title={constant.HOWITWORKS.CARD2.TITLE}
              description={constant.HOWITWORKS.CARD2.DESCRIPTION}
            />
            <StepCard
              number={3}
              title={constant.HOWITWORKS.CARD3.TITLE}
              description={constant.HOWITWORKS.CARD3.DESCRIPTION}
            />
          </div>
        </div>
      </section>
    );
  }
  