import React, { useState, useEffect } from 'react';
import { DropdownContainer, Label, Select, Option } from './StyledDropdown';

interface DropdownProps {
  label: string;
  options: string[];
  value: string; // Add value prop to manage the selected value externally
  onChange: (value: string) => void;
}

const DropdownComponent: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  // Use useEffect to update the selected value when it changes externally
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange(newValue !== '' ? newValue : ''); // Only propagate non-empty values
  };

  return (
    <DropdownContainer>
      <Label>Select {label}:</Label>
      <Select value={selectedValue} onChange={handleChange}>
        <Option value="">Select {label}</Option>
        {options.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </DropdownContainer>
  );
};

export default DropdownComponent;
