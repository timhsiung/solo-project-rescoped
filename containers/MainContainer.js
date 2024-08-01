import React, { useState } from 'react';
import JobsContainer from './JobsContainer';

// const MainContainer = () => {
//   return (
//     <div className='main-container'>
//       <h1>Main Container</h1>
//       <JobsContainer />
//     </div>
//   );
// };

const MainContainer = () => {
  const [iterationList, setIterationList] = useState([]);
  const [iterationCount, setIterationCount] = useState(0);

  const handleAddIteration = () => {
    setIterationList((prevList) => [
      ...prevList,
      { iteration: iterationCount + 1 },
    ]);
    setIterationCount((prevCount) => prevCount + 1);
  };

  const handleDeleteIteration = (index) => {
    setIterationList((prevList) => {
      const updatedList = [];
      for (let i = 0; i < prevList.length; i++) {
        if (prevList[i] !== prevList[index]) {
          updatedList.push(prevList[i]);
        }
      }
      return updatedList;
    });
  };

  return (
    <div className='job-container'>
      <h1>Job Application Tracker</h1>
      <button className='inner-button' onClick={handleAddIteration}>
        + Add Iteration
      </button>
      <JobsContainer
        iteration={iterationList}
        deleteIteration={handleDeleteIteration}
      />
    </div>
  );
};

export default MainContainer;
