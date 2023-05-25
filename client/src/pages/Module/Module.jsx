import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { BASE_API_URL } from "../../helper";
import axios from 'axios';



export default function Module() {

  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  const [questionData, setQuestionData] =useState(null);


	useEffect(() => {
		axios.get(`${BASE_API_URL}`).then((res)=> {
			setQuestionData(res.data);
      setLoading(false);
		})
		.catch((error) => {
            console.error(error);
          });
	},[]);

	console.log(questionData);

  if (loading) {
    return (
      <div >
        <h1>Loading.....</h1>
      </div>
    );
  }

  console.log(questionData);

  return (
    <>
    <div>
      <h1 className='title'>Select Your Module</h1>
       {questionData.map((data, index) => (
        <div onClick={() => navigate(`${data.id}`)}>
        <p id={data.id} className="text">{data.name}</p>
        </div>
       ))}
      </div>
      
    </>
  )
}
