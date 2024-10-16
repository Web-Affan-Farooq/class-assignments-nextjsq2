import React from 'react';
import "../styles/section-all.css";


const Section_1 = () => {
  const str = `Hello I'm Muhammad affan`;
  return (
    <div>
        <section className="section-all">
            <div className="content">
                <h1>{str}</h1>
                <h2>Student at GIAIC</h2>
                <br />
                <p>This is second assignment ...</p>
            </div>
        </section>
    </div>
  )
}

export default Section_1;