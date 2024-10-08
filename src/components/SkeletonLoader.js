// src/components/SkeletonLoader.js
import React from 'react';
import './SkeletonLoader.css'; // Optional: You can add styles here for skeleton effect

const SkeletonLoader = () => {
    return (
        <div className="skeleton-loader">
            <table border="0" cellPadding="5" cellSpacing="0">
                <thead>
                    <tr>
                        <th>
                            <div className="skeleton-header" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 100 }, (_, index) => (
                        <tr key={index}>
                            <td>
                                <div className="skeleton-row" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SkeletonLoader;
