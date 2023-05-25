import React from 'react';
import { useNavigate } from 'react-router-dom';
import Guide from '../../components/Guide/Guide';


export default function Module() {

  const modules = ['Cash Flow 101', 'Choosing Team 101', 'Customer Retention 101', 'Product Development 101' ];
  const navigate = useNavigate();

  return (
    <>
    <div>
      <h1 className='title'>Select Your Module</h1>
      <div onClick={() => navigate('/guide')}>
        {modules.map((module, index) => (
          <p className='text' key={index}>{module}</p>
        ))}
      </div>
  
      </div>
    
    </>
  )
}
