import React, { useState } from 'react';
import './CallLogFilter.css';

const CallLogFilter = ({ callLogs }) => {
  const [filters, setFilters] = useState({
    callType: '',
    callerName: '',
    receiverName: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const applyFilters = () => {
    const filteredLogs = callLogs.filter((log) => {
      return (
        (filters.callType === '' || log.callType === filters.callType) &&
        (filters.callerName === '' || log.callerName.toLowerCase().includes(filters.callerName.toLowerCase())) &&
        (filters.receiverName === '' || log.receiverName.toLowerCase().includes(filters.receiverName.toLowerCase()))
      );
    });

    return filteredLogs;
  };

  const filteredLogs = applyFilters();

  return (
    <div className="filter-container">
      <div>
        <label>Call Type:</label>
        <select name="callType" value={filters.callType} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="incoming">Incoming</option>
          <option value="outgoing">Outgoing</option>
        </select>
      </div>
      <div>
        <label>Caller's Name:</label>
        <input
          type="text"
          name="callerName"
          value={filters.callerName}
          onChange={handleFilterChange}
        />
      </div>
      <div>
        <label>Receiver's Name:</label>
        <input
          type="text"
          name="receiverName"
          value={filters.receiverName}
          onChange={handleFilterChange}
        />
      </div>

      {/* Add a button to apply the filters */}
      <button onClick={applyFilters}>Filter Logs</button>

      {/* Display the filtered logs */}
      <ul>
        {filteredLogs.map((log) => (
          <li key={log.id}>
            {log.callerName} called {log.receiverName} - {log.callType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CallLogFilter;
