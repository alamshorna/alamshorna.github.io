import React from 'react';
import '../styles/Publications.css';

const publications = [
  {
    title: "CountsDiff: A diffusion model on the natural numbers for generation and imputation of count-based data",
    authors: ["R. Soatto", "A. Hoel", "G. Ren", "S. Alam", "S. Bates", "N. Daskalakis", "C. Uhler", "M. Skoularidou"],
    venue: "ICML",
    year: 2026,
    links: [
      { label: "paper", url: "https://openreview.net/forum?id=cvlPAWSeo3" },
      { label: "arXiv", url: "https://arxiv.org/abs/2604.03779" },
    ],
  },
  {
    title: "A comprehensive analysis of different types of databases reveals that CDH1 mRNA and E-cadherin protein are not downregulated in most carcinoma tissues and carcinoma cell lines",
    authors: ["B. Sicairos", "S. Alam", "Y. Du"],
    venue: "BMC Cancer",
    year: 2023,
    links: [
      { label: "paper", url: "https://doi.org/10.1186/s12885-023-10916-0" },
    ],
  },
  {
    title: "Therapeutic targeting of cancer stem cells in lung, head and neck, and bladder cancers",
    authors: ["S.E. Mudra", "P. Sadhukhan", "M.T. Ugurlu", "S. Alam", "M.O. Hoque"],
    venue: "Cancers",
    year: 2021,
    links: [
      { label: "paper", url: "https://doi.org/10.3390/cancers13205098" },
    ],
  },
];

function Publications() {
  return (
    <div className="notes-container">
      <h1>Publications</h1>

      {publications.map((pub, idx) => (
        <div key={idx} className="pub-entry">
          <div className="pub-title">{pub.title}</div>

          <div className="pub-authors">
            {pub.authors.map((author, i) => (
              <span key={i}>
                {author === "S. Alam" ? <strong>{author}</strong> : author}
                {i < pub.authors.length - 1 && ", "}
              </span>
            ))}
          </div>

          <div className="pub-meta">
            <em>{pub.venue}</em>, {pub.year}
            {pub.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                [{link.label}]
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Publications;