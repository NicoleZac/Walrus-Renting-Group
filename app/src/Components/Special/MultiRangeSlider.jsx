import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./MultiRangeSlider.css";
import propertyList from "../propertyList";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const minPossible = 0;
  const maxPossible = 4000;
  const minValRef = useRef(min !== undefined ? min : minPossible);
  const maxValRef = useRef(max !== undefined ? max : maxPossible);
  const [minVal, setMinVal] = useState(min !== undefined ? min : minPossible);
  const [maxVal, setMaxVal] = useState(max !== undefined ? max : maxPossible);
  const range = useRef(null);

  // Bar Graph
  const [values, setValues] = useState([]);
  const highestValue = Math.max(...values);

  useEffect(() => {
    const totalMax = 4000;
    const numPartitions = 15;
    const partitionSize = totalMax / numPartitions;

    const pivotCounts = Array.from({ length: numPartitions }, (_, index) => ({
      min: index * partitionSize,
      max: (index + 1) * partitionSize,
      count: 0,
    }));

    propertyList.forEach((item) => {
      for (const range of pivotCounts) {
        if (item.rent >= range.min && item.rent < range.max) {
          range.count++;
          break; // Stop checking partitions once a match is found
        }
      }
    });

    setValues(pivotCounts.map((x) => x.count));
  }, []);

  // Convert to percentage
  const getPercent = useCallback(
    (value) =>
      Math.round(((value - minPossible) / (maxPossible - minPossible)) * 100),
    [minPossible, maxPossible]
  );

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div>
      <div className="bar-parent">
        <div className="bar-container">
          {values.map((value, index) => (
            <div
              key={index}
              className="bar-div"
              style={{
                height: `${(value / highestValue) * 100}px`,
              }}
            >
              {/* You can add content or leave it empty */}
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <input
          type="range"
          min={minPossible}
          max={maxPossible}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > maxPossible - 100 && "5" }}
        />
        <input
          type="range"
          min={minPossible}
          max={maxPossible}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="thumb thumb--right"
        />
        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
