import React, { useState } from 'react';
import Spinner from './Spinner';
import './App.css';
import './Button.css';

function App() {
  const [code, setCode] = useState('');
  const [zipFile, setZipFile] = useState(null);
  const [spinner, setSpinner] = useState(false);

  const parseCode = async () => {

    setSpinner(true);

    try {
      const response = await fetch('http://localhost:3001/generate-tests', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: code,
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch coverage data: ${response.status} ${response.statusText}`);
      }

      const data = await response.blob();
      console.log('Received ZIP file:', data);

      setZipFile(data);

      setSpinner(false);

    } catch (error) {
      console.error('Error parsing code:', error.message);
    }
  };
  
  const ReloadPage=()=>{
    window.location.reload();
  }

  const downloadReport = () => {
    if (zipFile) {
      const blob = new Blob([zipFile], { type: 'application/zip' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'coverage-report.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="App">
      <h1>Code Test Case Generator & Coverage</h1>
      <p>Paste Your Code Here!</p>
      <button className="ReloadBtn" onClick={ReloadPage}>Refresh</button>
      <textarea required = {true}
        rows={35}
        cols={100}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <br /> <br />
      <button class="btn" onClick={parseCode}> Submit Code </button>
      {
        spinner && (
          <Spinner/>
        )
      }

      {zipFile && (
        <div>
          <h2>Code Coverage Report</h2>
          <p>Download the coverage report:</p>
          <button class="btn" onClick={downloadReport}>Download Report</button>
        </div>
      )}
    </div>
  );
}

export default App;
