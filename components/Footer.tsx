import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo Section */}
      <div className="flex justify-center items-center">
        <img src="/Logo.svg" alt="Restaurant Logo" className="w-24 h-auto" />
      </div>

      {/* Doormat Navigation */}
      <div>
        <h3 className="font-bold text-lg mb-4">Doormat Navigation</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-600 hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black">
              Reservations
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black">
              Order Online
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black">
              Login
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="font-bold text-lg mb-4">Contact</h3>
        <p className="text-gray-600">Address: 123 Main St, Chicago</p>
        <p className="text-gray-600">Phone: (555) 555-5555</p>
        <p className="text-gray-600">Email: info@restaurant.com</p>
      </div>

      {/* Social Media Links */}
      <div>
        <h3 className="font-bold text-lg mb-4">Social Media Links</h3>
        <p className="text-gray-600">Facebook</p>
        <p className="text-gray-600">Instagram</p>
        <p className="text-gray-600">Twitter</p>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <footer style={styles.footer}>
//       <div style={styles.logoContainer}>
//         <img
//           src="https://via.placeholder.com/100" // Replace with your logo image
//           alt="Restaurant Logo"
//           style={styles.logo}
//         />
//       </div>
//       <div style={styles.navContainer}>
//         <h3>Doormat Navigation</h3>
//         <ul style={styles.navList}>
//           <li>Home</li>
//           <li>About</li>
//           <li>Menu</li>
//           <li>Reservations</li>
//           <li>Order Online</li>
//           <li>Login</li>
//         </ul>
//       </div>
//       <div style={styles.contactContainer}>
//         <h3>Contact</h3>
//         <p>Address: 123 Main St, Chicago</p>
//         <p>Phone: (555) 555-5555</p>
//         <p>Email: info@restaurant.com</p>
//       </div>
//       <div style={styles.socialMediaContainer}>
//         <h3>Social Media Links</h3>
//         <p>Facebook</p>
//         <p>Instagram</p>
//         <p>Twitter</p>
//       </div>
//     </footer>
//   );
// };

// const styles = {
//   footer: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr 1fr 1fr", // 4 equally spaced sections
//     padding: "20px",
//     backgroundColor: "#f8f8f8",
//     gap: "20px",
//   },
//   logoContainer: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   logo: {
//     maxWidth: "100px",
//     height: "auto",
//   },
//   navContainer: {
//     textAlign: "left",
//   },
//   navList: {
//     listStyleType: "none",
//     padding: 0,
//   },
//   contactContainer: {
//     textAlign: "left",
//   },
//   socialMediaContainer: {
//     textAlign: "left",
//   },
// };

// export default Footer;
