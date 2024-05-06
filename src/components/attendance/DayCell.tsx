import React, { useState, useRef, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import styled from 'styled-components';

const DayCellContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const DayCellValue = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #fff;
`;

const DayCellInput = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

interface DayCellEditableProps {
  initialValue: '1' | '0' | '-';
  onUpdate: (newValue: '1' | '0' | '-') => void;
}

const DayCellEditable: React.FC<DayCellEditableProps> = ({
  initialValue,
  onUpdate,
}) => {
  const [value, setValue] = useState<'1' | '0' | '-'>(initialValue);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle outside clicks to close dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value as '1' | '0' | '-';
    setValue(newValue);
    onUpdate(newValue);
    setIsDropdownVisible(false); // Close dropdown after selection
  };

  return (
    <DayCellContainer
      ref={containerRef}
      onClick={() => setIsDropdownVisible(true)}
    >
      {isDropdownVisible ? (
        <DayCellInput value={value} onChange={handleChange}>
          <option value="1">✔</option>
          <option value="0">✖</option>
          <option value="-">-</option>
        </DayCellInput>
      ) : (
        <DayCellValue>
          {value === '1' ? (
            <FaCheck style={{ color: 'darkgreen' }} />
          ) : value === '0' ? (
            <IoCloseSharp style={{ color: 'darkred' }} />
          ) : (
            '-'
          )}
        </DayCellValue>
      )}
    </DayCellContainer>
  );
};

export default DayCellEditable;
