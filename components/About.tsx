import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.restaurantName}>Little Lemon</h1>
        <h2 style={styles.location}>Chicago</h2>
        <p style={styles.description}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="/Mario and Adrian A.jpg" // Replace with your actual image URL
          alt="Restaurant"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // 50% text, 50% image
    alignItems: "center",
    padding: "20px",
    gap: "20px",
  },
  textContainer: {
    maxWidth: "600px",
  },
  restaurantName: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  location: {
    fontSize: "1.5rem",
    color: "gray",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%", // Responsive image
    height: "auto",
    borderRadius: "10px",
  },
};

export default About;
