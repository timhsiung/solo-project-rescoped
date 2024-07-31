import React from 'react';

const jobs = ['Facebook', 'Amazon', 'Netflix', 'Google'];
const jobList = jobs.map((job, i) => <li key={'job_' + i}>{job}</li>);

const JobCreator = () => {
  return (
    <div className='job-creator-container'>
      <h1>Jobs Creator Render</h1>
      <ul>{jobList}</ul>
    </div>
  );
};

export default JobCreator;
