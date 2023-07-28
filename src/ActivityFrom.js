import React, { useState } from 'react';
import { ButtonGroup, Button, TextField } from '@mui/material';
import { longShortTermOptions, growthOptions, riskOptions } from './options';

function ActivityForm() {
  const [longShortTerm, setLongShortTerm] = useState(null);
  const [growth, setGrowth] = useState(null);
  const [risk, setRisk] = useState(null);

  const handleLongShortTermClick = (option) => {
    setLongShortTerm(option);
  };

  const handleGrowthClick = (option) => {
    setGrowth(option);
  };

  const handleRiskClick = (option) => {
    setRisk(option);
  };

  return (
    <div>
      <h2>Activity Form</h2>

      <TextField
        id="activity"
        name="activity"
        label="Activity:"
        variant="outlined"
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

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}

export default ActivityForm;
