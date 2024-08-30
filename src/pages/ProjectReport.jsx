import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ProjectReport = () => {
  const generatePdf = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set fonts and add content to the PDF
    doc.setFontSize(22);
    doc.text("Importance of Web Development", 20, 30);

    doc.setFontSize(12);
    doc.text(
      "Web development is essential in the modern digital world. It involves creating and maintaining websites and web applications, which are crucial for businesses and individuals to interact and provide services online. Understanding web development helps in building robust, user-friendly, and efficient web platforms.",
      20,
      50,
      { maxWidth: 170 } // Wrap text within a specific width
    );

    // Add a border (rectangle)
    doc.setLineWidth(0.5);
    doc.rect(15, 15, 180, 260); // x, y, width, height

    // Add headings with styling
    doc.setFontSize(18);
    doc.text("Introduction", 20, 70);
    doc.setFontSize(12);
    doc.text(
      "Web development is crucial in the modern digital landscape. It involves the creation and maintenance of websites and web applications that facilitate user interaction and provide valuable services.",
      20,
      80,
      { maxWidth: 170 }
    );

    doc.setFontSize(18);
    doc.text("Key Components of Web Development", 20, 100);
    doc.setFontSize(12);
    doc.text(
      "1. Frontend Development: Focuses on the visual and interactive aspects of a website or application. Technologies include HTML, CSS, and JavaScript.\n2. Backend Development: Handles server-side operations, database interactions, and application logic. Technologies include Node.js, Python, PHP, and databases like MySQL and MongoDB.\n3. Full-Stack Development: Combines both frontend and backend development, requiring knowledge of both areas to build complete web applications.\n4. Modern Frameworks and Tools: Utilizes frameworks like React, Angular, and Vue.js for efficient development and better user experiences.",
      20,
      110,
      { maxWidth: 170 }
    );

    doc.setFontSize(18);
    doc.text("Industry Trends", 20, 140);
    doc.setFontSize(12);
    doc.text(
      "1. Mobile-First Design: Designing websites to be mobile-friendly is essential.\n2. Progressive Web Apps (PWAs): PWAs offer an app-like experience on the web.\n3. Web Security: Implementing security measures to protect user data.\n4. AI and Machine Learning Integration: Leveraging AI and ML for enhanced user experiences.",
      20,
      150,
      { maxWidth: 170 }
    );

    doc.setFontSize(18);
    doc.text("Conclusion", 20, 180);
    doc.setFontSize(12);
    doc.text(
      "The importance of web development continues to grow as technology advances. Staying updated with the latest trends and technologies is crucial for success in this field.",
      20,
      190,
      { maxWidth: 170 }
    );

    // Save the PDF
    doc.save("importance-of-web-development.pdf");
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 max-padd-container py-20 border-4">
        <h1 className="text-4xl font-bold mb-8">
          Importance of Web Development
        </h1>
        <p className="text-lg mb-6 text-center max-w-2xl">
          Web development is essential in the modern digital world. It involves
          creating and maintaining websites and web applications, which are
          crucial for businesses and individuals to interact and provide
          services online. Understanding web development helps in building
          robust, user-friendly, and efficient web platforms.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg mb-6 text-center max-w-2xl">
          Web development is crucial in the modern digital landscape. It
          involves the creation and maintenance of websites and web applications
          that facilitate user interaction and provide valuable services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          Key Components of Web Development
        </h2>
        <ul className="list-disc list-inside mb-6 text-center max-w-2xl">
          <li>
            <strong>Frontend Development:</strong> Focuses on the visual and
            interactive aspects of a website or application. Technologies
            include HTML, CSS, and JavaScript.
          </li>
          <li>
            <strong>Backend Development:</strong> Handles server-side
            operations, database interactions, and application logic.
            Technologies include Node.js, Python, PHP, and databases like MySQL
            and MongoDB.
          </li>
          <li>
            <strong>Full-Stack Development:</strong> Combines both frontend and
            backend development, requiring knowledge of both areas to build
            complete web applications.
          </li>
          <li>
            <strong>Modern Frameworks and Tools:</strong> Utilizes frameworks
            like React, Angular, and Vue.js for efficient development and better
            user experiences.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Industry Trends</h2>
        <ul className="list-disc list-inside mb-6 text-center max-w-2xl">
          <li>
            <strong>Mobile-First Design:</strong> Designing websites to be
            mobile-friendly is essential.
          </li>
          <li>
            <strong>Progressive Web Apps (PWAs):</strong> PWAs offer an app-like
            experience on the web.
          </li>
          <li>
            <strong>Web Security:</strong> Implementing security measures to
            protect user data.
          </li>
          <li>
            <strong>AI and Machine Learning Integration:</strong> Leveraging AI
            and ML for enhanced user experiences.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg mb-6 text-center max-w-2xl">
          The importance of web development continues to grow as technology
          advances. Staying updated with the latest trends and technologies is
          crucial for success in this field.
        </p>
        <button
          onClick={generatePdf}
          className="bg-black text-white px-6 py-3 rounded-lg "
        >
          Download Report
        </button>
      </div>
    </div>
  );
};

export default ProjectReport;
