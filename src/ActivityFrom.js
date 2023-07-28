import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button, TextField } from '@mui/material';
import { longShortTermOptions, growthOptions, riskOptions } from './options';
import { useCookies } from 'react-cookie';

function ActivityForm() {
  const [activity, setActivity] = useState('');
  const [longShortTerm, setLongShortTerm] = useState(null);
  const [growth, setGrowth] = useState(null);
  const [risk, setRisk] = useState(null);
  const [activityData, setActivityData] = useState([]); // State to store the array of activity data
  const [cookies, setCookies] = useCookies(['activityData']);

  useEffect(() => {
    // Load the activityData array from cookies when the component mounts
    if (cookies.activityData) {
      setActivityData(cookies.activityData);
    }
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  const handleLongShortTermClick = (option) => {
    setLongShortTerm(option);
  };

  const handleGrowthClick = (option) => {
    setGrowth(option);
  };

  const handleRiskClick = (option) => {
    setRisk(option);
  };

  const handleSubmit = () => {
    // Create a new activity entry object
    const newActivityEntry = {
      activity,
      longShortTerm,
      growth,
      risk,
    };

    // Add the new activity entry to the activityData array
    const updatedActivityData = [...activityData, newActivityEntry];

    // Save the updated activityData array in cookies
    setCookies('activityData', updatedActivityData, { path: '/' });

    // Clear the form inputs after submission
    setActivity('');
    setLongShortTerm(null);
    setGrowth(null);
    setRisk(null);

    // Update the local state to reflect the changes
    setActivityData(updatedActivityData);
  };
  console.log(activityData)

  return (
    <div>
      <h2>Activity Form</h2>

      <TextField
        id="activity"
        name="activity"
        label="Activity:"
        variant="outlined"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        required
      />
      <br />
      <br />

      <ButtonGroup>
        {longShortTermOptions.map((option) => (
          <Button
            key={option.value}
            variant={
              longShortTerm && longShortTerm.value === option.value
                ? 'contained'
                : 'outlined'
            }
            onClick={() => handleLongShortTermClick(option)}
          >
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
      <br />
      <br />

      <ButtonGroup>
        {growthOptions.map((option) => (
          <Button
            key={option.value}
            variant={
              growth && growth.value === option.value ? 'contained' : 'outlined'
            }
            onClick={() => handleGrowthClick(option)}
          >
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
      <br />
      <br />

      <ButtonGroup>
        {riskOptions.map((option) => (
          <Button
            key={option.value}
            variant={risk && risk.value === option.value ? 'contained' : 'outlined'}
            onClick={() => handleRiskClick(option)}
          >
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
      <br />
      <br />

      <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>

      <h2>Activity Entries</h2>
      <ul>
        {activityData.map((entry, index) => (
          <li key={index}>
            Activity: {entry.activity}, Long/Short Term: {entry.longShortTerm.label}, 
            Growth: {entry.growth.label}, Risk: {entry.risk.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityForm;
