import React, { useState } from 'react';
import CallLogFilter from './CallLogFilter';
import callLogsData from './calllogs.json';

const App = () => {
  const [callLogs, setCallLogs] = useState(callLogsData);

  return (
    <div className="app">
      <CallLogFilter callLogs={callLogsData} />
    </div>
  );
};

export default App;
