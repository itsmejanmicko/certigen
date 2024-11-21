
import html2pdf from 'html2pdf.js';
import googlelogo from '../../assets/img/google.png';

export default function Certificate({
  name,
  seriesId,
  issueDate,
  expirationDate,
  certificationId,
  signature,
  title,
}: {
  name: string;
  seriesId: number;
  issueDate: string;
  expirationDate: string;
  certificationId: number;
  signature: string;
  title: string;
}) {
  const handleDownloadPDF = () => {
    const element = document.getElementById('certificate');
    const options = {
      filename: 'certificate.pdf',
      html2canvas: { scale: 4 }, 
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };
    html2pdf(element, options);
  };

  return (
    <div>
      <div
        id="certificate"
        className="max-w-2xl mx-auto border-4 border-blue-300 p-8 rounded-lg shadow-lg"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Google</h1>
          <p className="mt-2 text-lg text-gray-600">This acknowledges that</p>
          <h2 className="mt-4 text-3xl font-semibold text-gray-800">{name}</h2>
          <p className="mt-2 text-lg text-gray-600">
            has successfully completed all the requirements to be recognized as a
          </p>
          <h4 className="mt-2 text-xl font-semibold text-gray-800">{title}</h4>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Series ID: {seriesId}</p>
            <p className="text-sm text-gray-600">Issue Date: {issueDate}</p>
            <p className="text-sm text-gray-600">Expiration Date: {expirationDate}</p>
            <p className="text-sm text-gray-600">Certification ID: {certificationId}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">{signature}</p>
          </div>
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xs text-gray-600">
              <img src={googlelogo} alt="logo" />
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={handleDownloadPDF}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Download PDF
      </button>
    </div>
  );
}
