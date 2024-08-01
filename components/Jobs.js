import React from 'react';

const Jobs = ({
  job,
  deleteJob,
  date,
  fromDate,
  addResponse,
  addResponseCount,
}) => {
  const addResponses = (index) => {
    addResponse(index);
    addResponseCount();
  };

  console.log('jobs:', job);

  return (
    <div className='job-container'>
      {job.map((jobCard, index) => (
        <div key={index} className='job-box'>
          <h2>{jobCard.job}</h2>

          <p>Submission Date: {date}</p>
          <p>Days Since Submission: {fromDate}</p>
          <p>Responses: {jobCard.submissions}</p>
          <button className='inner-button' onClick={() => addResponses(index)}>
            + Add Response
          </button>
          <button className='inner-button' onClick={() => deleteJob(index)}>
            Delete Job
          </button>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
