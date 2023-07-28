import React, { useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';

function ActivityForm() {
  const [longShortTerm, setLongShortTerm] = useState(null);
  const [growth, setGrowth] = useState(null);
  const [risk, setRisk] = useState(null);

  const handleLongShortTermClick = (option) => {
    setLongShortTerm(longShortTerm === option.value ? null : option.value);
  };

  const handleGrowthClick = (option) => {
    setGrowth(growth === option.value ? null : option.value);
  };

  const handleRiskClick = (option) => {
    setRisk(risk === option.value ? null : option.value);
  };

  const longShortTermOptions = [
    { value: 'longTerm', label: 'Long Term' },
    { value: 'shortTerm', label: 'Short Term' }
  ];

  const growthOptions = [
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' }
  ];

  const riskOptions = [
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' }
  ];

  return (
    <div>
      <h2>Activity Form</h2>

      <label htmlFor="activity">Activity:</label>
      <input type="text" id="activity" name="activity" required />
      <br />

      <label>Long term/Short term:</label>
      <ButtonGroup>
        {longShortTermOptions.map((option) => (
          <Button
            key={option.value}
            variant={longShortTerm.value === option.value ? 'contained' : 'outlined'}
            onClick={() => handleLongShortTermClick(option)}
          >
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
      <br />

      <label>Growth:</label>
      <ButtonGroup>
        {growthOptions.map((option) => (
          <Button
            key={option.value}
            variant={growth.value === option.value ? 'contained' : 'outlined'}
            onClick={() => handleGrowthClick(option)}
          >
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
      <br />

      <label>Risk:</label>
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

      <button type="submit">Submit</button>
    </div>
  );
}

export default ActivityForm;
