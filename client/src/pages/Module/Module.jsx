import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Guide from '../../components/Guide/Guide';
import { BASE_API_URL } from "../../helper";
import axios from 'axios';



export default function Module() {

  const modules = ['Cash Flow 101', 'Choosing Team 101', 'Customer Retention 101', 'Product Development 101' ];
  const navigate = useNavigate();
  const [questionData, setQuestionData] =useState(null);
  const { id } = useParams();



	useEffect(() => {
		axios.get(`${BASE_API_URL}/questions/${id}`).then((res)=> {
			setQuestionData(res.data);
		})
		.catch((error) => {
            console.error(error);
          });
	},[id]);

	console.log(questionData);
  console.log(id);

  return (
    <>
    <div>
      <h1 className='title'>Select Your Module</h1>
      <div onClick={() => navigate(`/questions/${id}`)}>
        {modules.map((module, index) => (
          <p className='text' key={index}>{module}</p>
        ))}
      </div>
  
      </div>
    
    </>
  )
}
