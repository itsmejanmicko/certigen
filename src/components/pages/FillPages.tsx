import React, { useState } from 'react';
import Certificate from './Certificate';

export default function FillupPage() {
  const [formData, setFormData] = useState({
    name: '',
    signature: '',
  });

  const [showCertificate, setShowCertificate] = useState(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowCertificate(true);
  };
  const position = [
    "Software Engineering",
    "Data & AI",
    "Cloud & Infrastructure",
    "Sales & Marketing",
    "Product Management",
    "Hardware Engineering",
    "Human Resources",
    "Finance",
    "Legal & Corporate Affairs",
    "Customer Success",
    "Operations & Supply Chain"
  ];
  const randomIndex = Math.floor(Math.random() * 10)
const title = position[randomIndex]
  
  
  const date = new Date();
  const oneYear = new Date();
  oneYear.setFullYear(oneYear.getFullYear() + 1);
  const seriesID = Math.floor(Math.random()*1000);
  const issueDate = date.toLocaleDateString();
  const expiredDate = oneYear.toLocaleDateString();
  const certifId = Date.now();




  return (
    <div className="max-w-2xl mx-auto p-8">
      {!showCertificate ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div> 

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Signature
            </label>
            <input
              type="text"
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
          >
            Generate Certificate
          </button>
        </form>
      ) : (
        <Certificate
          name={formData.name}
          seriesId={seriesID}
          issueDate={issueDate}
          expirationDate={expiredDate}
          certificationId={certifId}
          signature={formData.signature}
          title={title}
        />
      )}
    </div>
  );
}
