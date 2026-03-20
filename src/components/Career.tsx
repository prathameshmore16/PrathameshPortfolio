import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span></span>
          <br />
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* MCA */}
<div className="career-info-box">
  <div className="career-info-in">
    <div className="career-role">
      <h4>Master of Computer Application</h4>
      <h5>MET Institute of Computer Science, Mumbai</h5>
    </div>
    <h3>2024 - 2026</h3>
  </div>
  <p>
    Currently pursuing MCA with focus on Full Stack Development and Machine Learning.
  </p>
</div>

{/* BCA */}
<div className="career-info-box">
  <div className="career-info-in">
    <div className="career-role">
      <h4>Bachelor of Computer Application</h4>
      <h5>MES Abasaheb Garware College of Commerce, Pune (SPPU)</h5>
    </div>
    <h3>2020 - 2024</h3>
  </div>
  <p>
    Graduated with CGPA 7.48/10. Built strong foundation in programming, web development, and databases.
  </p>
</div>

{/* HSC */}
<div className="career-info-box">
  <div className="career-info-in">
    <div className="career-role">
      <h4>HSC</h4>
      <h5>Voluntary Junior College, Shahada (Maharashtra State Board)</h5>
    </div>
    <h3>2018 - 2019</h3>
  </div>
  <p>Completed Higher Secondary with 61.23%.</p>
</div>

{/* SSC */}
<div className="career-info-box">
  <div className="career-info-in">
    <div className="career-role">
      <h4>SSC</h4>
      <h5>Shet. V.K. Shah Vidyamandir, Shahada (Maharashtra Board)</h5>
    </div>
    <h3>2016 - 2017</h3>
  </div>
  <p>Completed Secondary School with 79.20%.</p>
</div>

        </div>
      </div>
    </div>
  );
};

export default Career;