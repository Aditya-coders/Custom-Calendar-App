// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import './ParticipatingData.css'; // Add custom styles if needed

// // const ParticipatingData = () => {
// //   const [participations, setParticipations] = useState([]);
// //   const [errorMessage, setErrorMessage] = useState('');

// //   // Fetch data from the backend
// //   useEffect(() => {
// //     axios
// //       .get('http://localhost:5000/api/participations')
// //       .then((response) => {
// //         setParticipations(response.data);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching participation data:', error);
// //         setErrorMessage('Error fetching data. Please try again later.');
// //       });
// //   }, []);

// //   return (
// //     <div className="participating-data-container">
// //       <h1>Participation Data</h1>
// //       {errorMessage && <p className="error-message">{errorMessage}</p>}
// //       {participations.length > 0 ? (
// //         <table className="participations-table">
// //           <thead>
// //             <tr>
// //               <th>Name</th>
// //               <th>Email</th>
// //               <th>Phone</th>
// //               <th>Event</th>
// //               <th>Course</th>
// //               <th>Branch</th>
// //               <th>Activity</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {participations.map((participant, index) => (
// //               <tr key={index}>
// //                 <td>{participant.name}</td>
// //                 <td>{participant.email}</td>
// //                 <td>{participant.phone}</td>
// //                 <td>{participant.event}</td>
// //                 <td>{participant.course}</td>
// //                 <td>{participant.branch}</td>
// //                 <td>{participant.activity}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       ) : (
// //         <p>No participation data available.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default ParticipatingData;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import './ParticipatingData.css';

// const ParticipatingData = () => {
//   const [participations, setParticipations] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   // Fetch data from the backend
//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/api/participations')
//       .then((response) => {
//         setParticipations(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching participation data:', error);
//         setErrorMessage('Error fetching data. Please try again later.');
//       });
//   }, []);

//   // Export data as PDF
//   const exportToPDF = () => {
//     const doc = new jsPDF();
//     const tableColumn = [
//       'Name',
//       'Email',
//       'Phone',
//       'Event',
//       'Course',
//       'Branch',
//       'Activity',
//     ];
//     const tableRows = participations.map((participant) => [
//       participant.name,
//       participant.email,
//       participant.phone,
//       participant.event,
//       participant.course,
//       participant.branch,
//       participant.activity,
//     ]);

//     doc.text('Participation Data', 14, 20);
//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 30,
//     });

//     doc.save('Participation_Data.pdf');
//   };

//   return (
//     <div className="participating-data-container">
//       <h1>Participation Data</h1>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       {participations.length > 0 ? (
//         <>
//           <table className="participations-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Event</th>
//                 <th>Course</th>
//                 <th>Branch</th>
//                 <th>Activity</th>
//               </tr>
//             </thead>
//             <tbody>
//               {participations.map((participant, index) => (
//                 <tr key={index}>
//                   <td>{participant.name}</td>
//                   <td>{participant.email}</td>
//                   <td>{participant.phone}</td>
//                   <td>{participant.event}</td>
//                   <td>{participant.course}</td>
//                   <td>{participant.branch}</td>
//                   <td>{participant.activity}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <button className="export-button" onClick={exportToPDF}>
//             Export as PDF
//           </button>
//         </>
//       ) : (
//         <p>No participation data available.</p>
//       )}
//     </div>
//   );
// };

// export default ParticipatingData;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './ParticipatingData.css';

const ParticipatingData = () => {
  const [participations, setParticipations] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [downloadLimit, setDownloadLimit] = useState(0);

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/participations')
      .then((response) => {
        setParticipations(response.data);
      })
      .catch((error) => {
        console.error('Error fetching participation data:', error);
        setErrorMessage('Error fetching data. Please try again later.');
      });
  }, []);

  // Export data as PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = [
      'Name',
      'Email',
      'Phone',
      'Event',
      'Course',
      'Branch',
      'Activity',
    ];

    // Apply the limit if provided
    const tableRows = participations
      .slice(0, downloadLimit > 0 ? downloadLimit : participations.length)
      .map((participant) => [
        participant.name || '-',
        participant.email || '-',
        participant.phone || '-',
        participant.event || '-',
        participant.course || '-',
        participant.branch || '-',
        participant.activity || '-',
      ]);

    // Add title
    doc.setFontSize(18);
    doc.text('Participation Data', 14, 15);

    // Add subtitle
    doc.setFontSize(12);
    doc.text(
      `Showing ${tableRows.length} record(s) out of ${participations.length} total.`,
      14,
      22
    );

    // Add table with autoTable plugin
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30, // Start table below the title
      theme: 'grid', // Table styling theme
      headStyles: {
        fillColor: [22, 160, 133], // Header background color (teal)
        textColor: [255, 255, 255], // Header text color (white)
        fontSize: 10, // Header font size
      },
      bodyStyles: {
        fontSize: 9, // Body font size
        textColor: [50, 50, 50], // Body text color
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240], // Alternate row color (light gray)
      },
      margin: { top: 30, left: 14, right: 14 }, // Margins
    });

    // Save the PDF file
    doc.save('Participation_Data.pdf');
  };

  return (
    <div className="participating-data-container">
      <h1>Participation Data</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {participations.length > 0 ? (
        <>
          <div className="download-options">
            <label htmlFor="downloadLimit">
              Number of records to download:
            </label>
            <input
              type="number"
              id="downloadLimit"
              value={downloadLimit}
              onChange={(e) => setDownloadLimit(Number(e.target.value))}
              min="0"
              max={participations.length}
              placeholder={`Max: ${participations.length}`}
            />
          </div>
          <table className="participations-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Event</th>
                <th>Course</th>
                <th>Branch</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {participations.map((participant, index) => (
                <tr key={index}>
                  <td>{participant.name}</td>
                  <td>{participant.email}</td>
                  <td>{participant.phone}</td>
                  <td>{participant.event}</td>
                  <td>{participant.course}</td>
                  <td>{participant.branch}</td>
                  <td>{participant.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="export-button" onClick={exportToPDF}>
            Export as PDF
          </button>
        </>
      ) : (
        <p>No participation data available.</p>
      )}
    </div>
  );
};

export default ParticipatingData;
