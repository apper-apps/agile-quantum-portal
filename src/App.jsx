import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import Header from "@/components/organisms/Header";
import Home from "@/components/pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-deep-black text-white">
      {/* Custom cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: typeof window !== "undefined" ? window.mouseX || 0 : 0,
          y: typeof window !== "undefined" ? window.mouseY || 0 : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Header navigation */}
      <Header />

      {/* Main content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        progressClassName="custom-toast-progress"
        closeButton={false}
        style={{ zIndex: 9999 }}
      />

      {/* Mouse tracking for custom cursor */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              window.mouseX = 0;
              window.mouseY = 0;
              document.addEventListener('mousemove', (e) => {
                window.mouseX = e.clientX;
                window.mouseY = e.clientY;
              });
            }
          `,
        }}
      />
    </div>
  );
}

export default App;