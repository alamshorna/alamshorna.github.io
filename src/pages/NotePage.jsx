import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function NotePage() {
  const { fileName } = useParams();
  const [content, setContent] = useState('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setContent('');
    setNotFound(false);

    fetch(`${process.env.PUBLIC_URL}/notes/${fileName}`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then((text) => {
        if (text.trim().startsWith('<!DOCTYPE')) throw new Error('Not found');
        setContent(text);
      })
      .catch(() => setNotFound(true));
  }, [fileName]);

  if (notFound) {
    return (
      <div className="notes-container">
        <p>working on uploading this! :)</p>
      </div>
    );
  }

  return (
    <div className="notes-container">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default NotePage;