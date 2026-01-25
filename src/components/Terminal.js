import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function Terminal({ children }) {
  return (
    <div className="terminal-frame">
      <div className="terminal-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      {children}
    </div>
  );
}
