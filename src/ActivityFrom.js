import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button, TextField } from '@mui/material';
import { useCookies } from 'react-cookie';

import { longShortTermOptions, growthOptions, riskOptions } from './options';

function ActivityForm() {
  const [activity, setActivity] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({
    longShortTerm: null,
    growth: null,
    risk: null,
  });
  const [activityData, setActivityData] = useState([]); // State to store the array of activity data
  const [cookies, setCookies] = useCookies(['activityData']);

  useEffect(() => {
    // Load the activityData array from cookies when the component mounts
    if (cookies.activityData) {
      setActivityData(cookies.activityData);
    }
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  const options = {
    longShortTerm: longShortTermOptions,
    growth: growthOptions,
    risk: riskOptions,
  };

  const handleOptionClick = (optionType, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [optionType]: option }));
  };

  const handleSubmit = () => {
    // Check if any of the values are null (none)
    if (activity === '' || Object.values(selectedOptions).some((option) => option === null)) {
      alert('Please fill in all the fields.');
      return; // If any value is none, do not save the entry and return early
    }

    // Create a new activity entry object
    const newActivityEntry = {
      activity,
      ...selectedOptions,
    };

    // Add the new activity entry to the activityData array
    const updatedActivityData = [...activityData, newActivityEntry];

    // Save the updated activityData array in cookies
    setCookies('activityData', updatedActivityData, { path: '/' });

    // Clear the form inputs after submission
    setActivity('');
    setSelectedOptions({
      longShortTerm: null,
      growth: null,
      risk: null,
    });

    // Update the local state to reflect the changes
    setActivityData(updatedActivityData);
  };

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

      {Object.keys(options).map((optionType) => (
        <React.Fragment key={optionType}>
          <ButtonGroup >
            {options[optionType].map((option) => (
              <Button
                key={option.value}
                variant={
                  selectedOptions[optionType] && selectedOptions[optionType].value === option.value
                    ? 'contained'
                    : 'outlined'
                }
                onClick={() => handleOptionClick(optionType, option)}
              >
                {option.label}
              </Button>
            ))}
          </ButtonGroup>
          <br />
          <br />
        </React.Fragment>
      ))}

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
