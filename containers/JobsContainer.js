import React from 'react';
import JobCreator from '../components/JobCreator';

// working ->>>>>>>
// const JobsContainer = () => {
//   return (
//     <div className='jobs-container'>
//       <h1>Jobs Container</h1>
//       <JobCreator />
//     </div>
//   );
// };

const JobsContainer = ({ iteration, deleteIteration }) => {
  return (
    <div className='job-container'>
      {iteration.map((jobContainer, index) => (
        <div key={index} className='jobcreator-cont'>
          <h2>Iteration no:{jobContainer.iteration}</h2>
          <button
            className='inner-button'
            onClick={() => deleteIteration(index)}
          >
            Delete
          </button>
          <JobCreator />
        </div>
      ))}
    </div>
  );
};

// const JobsContainer = () => {
//   // State to manage the list of JobCreator components
//   const [jobCreators, setJobCreators] = useState([]);

//   // Function to add a new JobCreator component to the list
//   const addJobCreator = () => {
//     setJobCreators([...jobCreators, <JobCreator key={jobCreators.length} />]);
//   };

//   return (

//   <div className='job-container'>
//   {job.map((jobCard, index) => (
//     <div key={index} className='job-box'>
//       <h2>{jobCard.job}</h2>

//       <p>Submission Date: {date}</p>
//       <p>Days Since Submission: {fromDate}</p>
//       <p>Responses: {jobCard.submissions}</p>
//       <button className='inner-button' onClick={() => addResponses(index)}>
//         + Add Response
//       </button>
//       <button className='inner-button' onClick={() => deleteJob(index)}>
//         Delete Job
//       </button>
//     </div>
//   ))}
// </div>
//   )
// };

export default JobsContainer;
