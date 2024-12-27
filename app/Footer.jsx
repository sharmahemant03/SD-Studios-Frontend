import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        <div style={styles.section}>
          <h4 style={styles.heading}>SD-Studios</h4>
          <p style={styles.text} className="text-gray-600">Your Website Vision<br/>Our Expert Creation</p>
        </div>


        <div style={styles.section}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/terms" style={styles.link}>Terms of Service</a></li>
            <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
          </ul>
        </div>


        <div style={styles.section}>
          <h4 style={styles.heading}>Connect</h4>
          <p style={styles.text} className="text-gray-600">Follow us on:</p>
          <div style={styles.socials}>
            <a href="https://x.com/goyal_litesh"   target="_blank"
  rel="noopener noreferrer" style={styles.link}>Twitter</a>
            <a href="https://linkedin.com/in/reachout-hemant"   target="_blank"
  rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
          </div>
        </div>
      </div>
      <p style={styles.copy} className="text-gray-600">&copy; 2024 SD-Studios. All rights reserved.</p>
    </footer>
  );
};


const styles = {
  footer: {
    backgroundColor: "#f8f9fa",
    padding: "20px 10px",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  section: {
    flex: 1,
    minWidth: "200px",
    margin: "10px 0",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#000000",


  },
  text: {
    fontSize: "14px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    textDecoration: "none",
    fontSize: "14px",
    color: "#007bff",
    display: "block",
    margin: "5px 0",
  },
  socials: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  copy: {
    marginTop: "20px",
    fontSize: "12px",
  },
};

export default Footer;
