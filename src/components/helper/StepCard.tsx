export default function StepCard({ number, title, description } :{number:number, title:string, description:string}) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  