import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Sections from './components/Sections';

const IndexPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/firstRPSData.csv');
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true });
      const rows = results.data.filter(row => row['Topic'] && row['Company/Brand Name'] && row['URL Link']);
      setData(rows);
    }

    fetchData();
  }, []);

  return (
    <><h1 className='text-center mt-8' >
      RPS Data
    </h1><div className='flex justify-center items-center  mt-10'>
        <table className="mt-10  mx-8">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Company/Brand Name</th>
              <th>URL Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className='  text-center'>
                <td className="border border-gray-400 p-2 ">{row['Topic']}</td>
                <td className="border border-gray-400 p-2  ">{row['Company/Brand Name']}</td>
                <td className="border border-gray-400 p-2  "><a href={row['URL Link']}>{row['URL Link']}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Sections />
      
      </>
  );
};

export default IndexPage;