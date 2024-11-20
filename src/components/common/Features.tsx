import { CheckCircle, Layout, Users } from "lucide-react";
import FeatureCard from "../helper/FeatureCard";
import { constant } from "../../config/constant";

export default function Features() {
    return (
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{constant.FEATURES.KEYFEATURES}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Layout className="h-12 w-12 text-blue-600" />}
              title={constant.FEATURES.FEATURES1.TITLE}
              description={constant.FEATURES.FEATURES1.DESCRIPTION}
            />
            <FeatureCard
              icon={<Users className="h-12 w-12 text-blue-600" />}
              title={constant.FEATURES.FEATURES2.TITLE}
              description={constant.FEATURES.FEATURES2.DESCRIPTION}
            />
            <FeatureCard
              icon={<CheckCircle className="h-12 w-12 text-blue-600" />}
              title={constant.FEATURES.FEATURES3.TITLE}
              description={constant.FEATURES.FEATURES3.DESCRIPTION}
            />
          </div>
        </div>
      </section>
    );
  }
  