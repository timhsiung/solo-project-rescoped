import React, { useState } from 'react';
import Jobs from './Jobs';

const JobCreator = () => {
  const [jobList, setJobList] = useState([]);
  const [formInput, setFormInput] = useState('');
  const [responseCount, setResponseCount] = useState(0);
  const [totalJobs, setTotalJobs] = useState(0);

  // data example
  // const [text, setText] = useState('');
  // const addText = (data) => {
  //   setText(data);
  // };

  //in child
  /*
  <form> text box, submit button</form>
  from that text box, you get form.value
  onClick = addText(form.value)
  */

  const addResponseCount = () => {
    setResponseCount(responseCount + 1);
  };

  const addTotalJobs = () => {
    setTotalJobs(totalJobs + 1);
  };

  const deleteResponseCount = (num) => {
    setResponseCount(responseCount - num);
  };

  const deleteTotalJobs = () => {
    setTotalJobs(totalJobs - 1);
  };

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let currentDate = `${month}/${day}`;
  let totalDays = 365;
  let daysMonth = 30.436875;
  let daysSince = Math.floor((month * daysMonth + day) / totalDays);

  const handleInputChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleFormSubmit = (e, currentDate) => {
    e.preventDefault(); // prevent default form submission functionality
    if (formInput) {
      setJobList((prevList) => [
        ...prevList,
        { job: formInput, submissions: 0, date: currentDate },
      ]);
      addTotalJobs();
      setFormInput(''); // clears input field
    }
  };

  const handleDeleteJob = (index) => {
    setJobList((prevList) => {
      const updatedList = [];
      deleteResponseCount(prevList[index].submissions);
      for (let i = 0; i < prevList.length; i++) {
        if (prevList[i] !== prevList[index]) {
          updatedList.push(prevList[i]);
        }
      }
      deleteTotalJobs();
      return updatedList;
    });
  };

  const handleAddResponse = (index) => {
    setJobList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index] = {
        ...updatedList[index],
        submissions: updatedList[index].submissions + 1,
      };
      return updatedList;
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='jobs-container'>
        <h2>Total Responses: {responseCount}</h2>
        <h2>Total Jobs: {totalJobs}</h2>
        <h2>Success Rate: {Math.floor((responseCount / totalJobs) * 100)}%</h2>
        <input
          type='text'
          value={formInput}
          onChange={handleInputChange}
          placeholder='Enter job description'
        />
        <button type='submit'>Add Application</button>
        <Jobs
          job={jobList}
          deleteJob={handleDeleteJob}
          addResponse={handleAddResponse}
          addResponseCount={addResponseCount}
          addTotalJobs={addTotalJobs}
          date={currentDate}
          fromDate={daysSince}
        />
      </div>
    </form>
  );
};

export default JobCreator;
