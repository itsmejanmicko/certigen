export default function FeatureCard({ icon, title, description }:{title:string, description:string, icon:string| JSX.Element}) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }