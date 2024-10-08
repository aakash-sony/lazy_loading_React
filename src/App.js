import React, { Suspense, lazy, useState, useEffect } from 'react';
import './App.css';
import Task1 from './components/Task1';
import SkeletonLoader from './components/SkeletonLoader';

// Lazy load Task2
const Task2 = lazy(() => import('./components/Task2'));

function App() {
  const [showTask2, setShowTask2] = useState(false);

  useEffect(() => {
    // Simulate a 5-second delay before showing Task2
    const timer = setTimeout(() => {
      setShowTask2(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <h1>Loading Components</h1>
      <Task1 />
      {showTask2 ? (
        <Suspense fallback={<div><SkeletonLoader /></div>}>
          <Task2 />
        </Suspense>
      ) : (
        <div><SkeletonLoader /></div>
      )}
    </div>
  );
}

export default App;
