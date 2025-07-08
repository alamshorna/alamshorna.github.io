import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function NotePage() {
  const { fileName } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/notes/${fileName}`)
      .then(res => res.text())
      .then(text => setContent(text));
  }, [fileName]);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default NotePage;