import React from 'react';

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="filter" style={styles.filter}>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => onTitleChange(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={(e) => onRatingChange(e.target.value)}
        style={styles.input}
        min="0"
        max="10"
      />
    </div>
  );
};

const styles = {
  filter: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
};

export default Filter;
