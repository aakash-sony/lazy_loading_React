import React, { useEffect, useState } from 'react';

function Task2() {
    const number = 1;
    const [loading, setLoading] = useState(true);

    // Simulate loading with setTimeout
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after 5 seconds
        }, 5000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <div className="task-2">
            <table border="1" cellPadding="5" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Table</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 100 }, (_, i) => (
                        <tr key={i}>
                            <td>
                                {number} x {i + 1} = {number * (i + 1)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Task2;
