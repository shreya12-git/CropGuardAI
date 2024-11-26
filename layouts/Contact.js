"use client";
import { useState } from 'react';
import jsPDF from 'jspdf';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import html2canvas from 'html2canvas';

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;

  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);

  const genAI = new GoogleGenerativeAI('AIzaSyDhS-sLkY4100M7jJ5nNODNfBUemLq85uo');
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const prompt = `
      Given the following soil and environmental parameters:
      - Nitrogen: ${formData.get('nitrogen')}
      - Phosphorus: ${formData.get('phosphorus')}
      - Potassium: ${formData.get('potassium')}
      - Temperature: ${formData.get('temperature')}
      - Humidity: ${formData.get('humidity')}
      - pH: ${formData.get('ph')}
      - Rainfall: ${formData.get('rainfall')}
  
      Generate a detailed Crop Suitability Report that includes:
      1. Overall Assessment
      2. Suitable Crops with explanations
      3. Unsuitable Crops with reasons
      4. Challenges and Considerations
      5. Conclusion
    `;

    try {
      const result = await model.generateContent(prompt);
      const reportText = result.response.text();
      setReport(reportText);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to generate the crop suitability report. Please try again.');
    }
  };

  const downloadPDF = async () => {
    const doc = new jsPDF();
    const reportElement = document.getElementById('report-content');
  
    // Convert the report to a canvas using html2canvas
    const canvas = await html2canvas(reportElement);
    const imgData = canvas.toDataURL('image/png');
  
    const imgWidth = 190; // Adjust this for margins
    const pageHeight = doc.internal.pageSize.height;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
  
    let position = 0;
  
    // Add image to PDF with pagination
    while (heightLeft >= 0) {
      doc.addImage(imgData, 'PNG', 9, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      position -= pageHeight;
  
      if (heightLeft >= 0) {
        doc.addPage();
      }
    }
  
    doc.save('crop-suitability-report.pdf');
  };
  
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-2xl font-normal mb-6">{title}</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 lg:w-7/12">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                className="form-input w-full rounded text-center p-2 border border-gray-300"
                name="nitrogen"
                type="text"
                placeholder="Nitrogen"
                required
              />
              <input
                className="form-input w-full rounded text-center p-2 border border-gray-300"
                name="phosphorus"
                type="text"
                placeholder="Phosphorus"
                required
              />
              <input
                className="form-input w-full rounded text-center p-2 border border-gray-300"
                name="potassium"
                type="text"
                placeholder="Potassium"
                required
              />
              <input
                className="form-input w-full rounded text-center p-2 border border-gray-300"
                name="temperature"
                type="text"
                placeholder="Temperature"
                required
              />
              <input
                className="form-input w-full rounded text-center p-2 border border-gray-300"
                name="humidity"
                type="text"
                placeholder="Humidity"
                required
              />
              <input
                className="form-input w-full rounded text-center p-2 border border-gray-300"
                name="ph"
                type="text"
                placeholder="pH"
                required
              />
              <input
                className="form-input w-full rounded text-center p-2 border border-gray-300"
                name="rainfall"
                type="text"
                placeholder="Rainfall"
                required
              />
              <div className="flex justify-center mt-4">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                  Generate Report
                </button>
              </div>
            </form>

            {report && (
              <div id="report-content" className="bg-gray-100 p-6 mt-6 rounded shadow">
                <h3 className="text-xl font-semibold mb-4">Crop Suitability Report</h3>
                <ReactMarkdown className="whitespace-pre-wrap">{report}</ReactMarkdown>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={downloadPDF}
                    className="bg-green-500 text-white py-2 px-4 rounded"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="text-red-500 mt-4">
                <p>{error}</p>
              </div>
            )}
          </div>
          <div className="content md:w-1/3 lg:w-5/12 md:ml-8">
            <h4 className="text-lg font-semibold">{info.title}</h4>
            <p className="mt-4">{info.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
