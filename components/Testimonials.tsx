import React from "react";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    profileImage: "/Logo.svg", // Replace with actual image URL
    rating: 4,
    review:
      "Amazing experience! The service was excellent and the staff was friendly.",
  },
  {
    id: 2,
    name: "Jane Smith",
    profileImage: "/Logo.svg", // Replace with actual image URL
    rating: 5,
    review: "Best place I've ever been to! Highly recommended!",
  },
  {
    id: 3,
    name: "Joe Doe",
    profileImage: "/Logo.svg", // Replace with actual image URL
    rating: 4,
    review:
      "Amazing experience! The service was excellent and the staff was friendly.",
  },
  {
    id: 4,
    name: "Jay Smith",
    profileImage: "/Logo.svg", // Replace with actual image URL
    rating: 5,
    review: "Best place I've ever been to! Highly recommended!",
  },
];

// Helper component to display star rating
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div style={{ color: "#FFD700" }}>
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div style={styles.container}>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={testimonial.profileImage}
            alt={`${testimonial.name} profile`}
            style={styles.profileImage}
          />
          <h3 style={styles.name}>{testimonial.name}</h3>
          <StarRating rating={testimonial.rating} />
          <p style={styles.review}>{testimonial.review}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  profileImage: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  review: {
    fontSize: "16px",
    color: "#555",
  },
};

export default Testimonials;
