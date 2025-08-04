import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorState = ({ message, description }) => {
  return (
    <div className="error-state">
      <div className="error-icon">
        <AlertCircle size={48} />
      </div>
      <h3>{message}</h3>
      {description && <p className="error-description">{description}</p>}
    </div>
  );
};

export default ErrorState;