import React, { useState } from 'react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import formww from '../../assets/Hospitalization_preauthorization_form.pdf';
import stamp from '../../assets/images/stamp.png';
import { time } from 'echarts';

const ClaimForm = () => {

  const [modifiedPdfUrl, setModifiedPdfUrl] = useState(null);
  const [formData, setFormData] = useState({
    patientName: 'Maimoon Idris',
    gender: 'Male',
    age: '30',
    month: '04',
    dateOfBirth: '26/04/2001',
    mobileNo: '0712345678',
    memberNumber: 'JI98002',
    scheme: 'Ganze',
    employerName: 'Kenya Teachers',
    relationToInsured: 'Self',
    hospitalName: 'Malindi hospital',
    dateofAdmission: '26/04/2021',
    timeofAdmission: '10:00',
    emergency: 'Daycase',
    complaints: 'headache',
    clinicalFindings: 'headache',
    durationofSymptoms: '1 day',
    provisionalDiagnosis: 'malaria',
    pastHistory: 'none',
    admissionReason: 'Excessive bleeding,Broken limbs',
    diagnosisDate: '30/10/2024',
    proposedLineofTreatment: 'Investigative care',
    investigationBaseline: 'none',
    investigationBaselineDescription: 'none',
    surgeryName: 'none',
    surgeryDetails: 'none',
    accident: 'none',
    accidentDetails: 'none',
    accidentDate: '01/01/2024',
    accidentAlcohol: 'none',
    maternity: 'G',
    maternityLength: 'none',
    chronicIllness: 'none',
    physicianName: 'Dr. John Doe',
    physicianCharges: '12,000 kshs',
    surgeonName: 'Dr. Jane Doe',
    surgeonCharges: '12,000 kshs',
    anaesthetistName: 'Dr. Jane Doe',
    anaesthetistCharges: '12,000 kshs',
    EstimatedTreatmentCost: '36,000 kshs',
    estimatedLengthofStay: '3 days',
    PatientInsuredName: 'myles Karagi',
    PatientInsuredSignature: 'myles Karagi',
    IntermediaryName: 'Taff Gitonga',
    intermediaryCode: 'INT001',
    consentName: 'myles Karagi',
    consentSignature: 'jbndfvjb ',
    consentDate: '26/04/2024',
    doctorName: 'Dr. Tallman Kamau',
    doctorSignature: 'TallmanKamau',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  async function modifyPdf() {
    try {
      const existingPdfBytes = await fetch(formww).then(res => res.arrayBuffer());

      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const zapfDingbatsFont = await pdfDoc.embedFont(StandardFonts.ZapfDingbats);

      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const secondPage = pages[1];
      const thirdPage = pages[2];

      const imageUrl = stamp;
      const imageBytes = await fetch(imageUrl).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.arrayBuffer();
      });

      const image = await pdfDoc.embedPng(imageBytes);
      const imageDims = image.scale(0.4);

      thirdPage.drawImage(image, {
        x: 380,
        y: 0,
        width: imageDims.width,
        height: imageDims.height,
      });

      firstPage.drawText(formData.patientName.toUpperCase(), {
        x: 110,
        y: 567,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      const checkmark = '✓';
      if (formData.gender === 'Male') {
        firstPage.drawText(checkmark, {
          x: 97,
          y: 546,
          size: 9,
          font: zapfDingbatsFont,
          color: rgb(0, 0, 0),
        });
      } else if (formData.gender === 'Female') {
        firstPage.drawText(checkmark, {
          x: 169,
          y: 546,
          size: 9,
          font: zapfDingbatsFont,
          color: rgb(0, 0, 0),
        });
      }

      firstPage.drawText(formData.age, {
        x: 355,
        y: 548,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(formData.month, {
        x: 455,
        y: 548,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(formData.dateOfBirth, {
        x: 128,
        y: 522,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(formData.mobileNo, {
        x: 270,
        y: 522,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(formData.memberNumber, {
        x: 445,
        y: 522,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(formData.scheme.toUpperCase(), {
        x: 95,
        y: 499,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(formData.employerName.toUpperCase(), {
        x: 140,
        y: 475,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      if (formData.relationToInsured === 'Self') {
        firstPage.drawText(checkmark, {
          x: 171,
          y: 455,
          size: 9,
          font: zapfDingbatsFont,
          color: rgb(0, 0, 0),
        });
      } else if (formData.relationToInsured === 'Spouse') {
        firstPage.drawText(checkmark, {
          x: 244,
          y: 455,
          size: 9,
          font: zapfDingbatsFont,
          color: rgb(0, 0, 0),
        });
      } else if (formData.relationToInsured === 'Child') {
        firstPage.drawText(checkmark, {
          x: 315,
          y: 455,
          size: 9,
          font: zapfDingbatsFont,
          color: rgb(0, 0, 0),
        });
      }

      firstPage.drawText(formData.hospitalName.toUpperCase(), {
        x: 135,
        y: 408,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(formData.dateofAdmission.toUpperCase(), {
        x: 155,
        y: 384,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(formData.timeofAdmission.toUpperCase(), {
        x: 335,
        y: 384,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      if (formData.emergency === 'Emergency') {
        firstPage.drawText(checkmark, {
          x: 277,
          y: 362,
          size: 9,
          font: zapfDingbatsFont,
          color: rgb(0, 0, 0),
        });
      } else if (formData.emergency === 'Planned') {
        firstPage.drawText(checkmark, {
          x: 349,
          y: 362,
          size: 9,
          font: zapfDingbatsFont,
          color: rgb(0, 0, 0),
        });
      } else if (formData.emergency === 'Daycase') {
        firstPage.drawText(checkmark, {
          x: 410,
          y: 362,
          size: 9,
          font: zapfDingbatsFont,
          color: rgb(0, 0, 0),
        });
      }
      firstPage.drawText(formData.complaints.toUpperCase(), {
        x: 135,
        y: 338,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(formData.clinicalFindings.toUpperCase(), {
        x: 145,
        y: 314,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(formData.durationofSymptoms.toUpperCase(), {
        x: 170,
        y: 294,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(formData.provisionalDiagnosis.toUpperCase(), {
        x: 165,
        y: 268,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(formData.pastHistory.toUpperCase(), {
        x: 195,
        y: 245,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(formData.admissionReason.toUpperCase(), {
        x: 40,
        y: 207,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(formData.diagnosisDate.toUpperCase(), {
        x: 120,
        y: 187,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      if (formData.proposedLineofTreatment === 'Medical management') {
        firstPage.drawText(checkmark, {
          x: 38,
          y: 157,
          size: 9,
          font: zapfDingbatsFont,
          color: rgb(0, 0, 0),
        });
      } else if (formData.proposedLineofTreatment === 'Surgical management') {
        firstPage.drawText(checkmark, {
          x: 153,
          y: 157,
          size: 9,
          font: zapfDingbatsFont,
          color: rgb(0, 0, 0),
        });
      } else if (formData.proposedLineofTreatment === 'Intensive care') {
        firstPage.drawText(checkmark, {
          x: 259,
          y: 156,
          size: 9,
          font: zapfDingbatsFont,
          color: rgb(0, 0, 0),
        });
      } else if (formData.proposedLineofTreatment === 'Investigative care') {
        firstPage.drawText(checkmark, {
          x: 332,
          y: 156,
          size: 9,
          font: zapfDingbatsFont,
          color: rgb(0, 0, 0),
        });
      }
      firstPage.drawText(formData.investigationBaseline.toUpperCase(), {
        x: 40,
        y: 106,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(formData.investigationBaselineDescription.toUpperCase(), {
        x: 40,
        y: 69,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(formData.surgeryName.toUpperCase(), {
        x: 165,
        y: 36,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });


      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setModifiedPdfUrl(url);
    } catch (error) {
      console.error('Error modifying PDF:', error);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Jubilee Claim Form PDF Modifier</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="patientName" className="block text-sm font-medium mb-1">
            Patient Name:
          </label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            className="w-full border rounded px-2 py-1"
            value={formData.patientName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Gender:</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleInputChange}
                className="form-radio"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleInputChange}
                className="form-radio"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium mb-1">
            Age:
          </label>
          <input
            type="text"
            id="age"
            name="age"
            className="w-full border rounded px-2 py-1"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button
        onClick={modifyPdf}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        Generate PDF
      </button>
      {modifiedPdfUrl && (
        <div>
          <a
            href={modifiedPdfUrl}
            download="modified_jubilee_claim_form.pdf"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Download Modified PDF
          </a>
        </div>
      )}
    </div>
  )
}

export default ClaimForm
