import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import From3D from "../canvas/from";
import { SectionWrapper } from "../../hoc";
import { slideIn, fadeIn, textVariant } from "../../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_cb5sjem",
        "template_1g1klgm",

        {
          from_name: form.name,
          to_name: "Abishek",
          from_email: form.email,
          to_email: "agsabhishek1905@hmail.com",
          message: form.message,
        },
        "wWjuDHQkqX0uBUqCO"
      )
      .then(
        () => {
          setLoading(false);
          console.log("Email sent successfully!");
          setShowPopup(true);
          // alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative min-h-screen overflow-hidden rounded-xl bg-gray-900 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      {/* Floating Background Shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-yellow-500/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -15, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl"
      />

      {/* Header Section */}
      <motion.div
        variants={textVariant()}
        className="relative z-10 text-center pt-12 pb-8 px-4"
      >
        <p className="text-gray-400 text-[14px] sm:text-[16px] uppercase tracking-wider mb-4">
          Get in touch
        </p>
        <h2 className="text-white font-black text-[30px] sm:text-[40px] lg:text-[50px] mb-4 leading-tight">
          Contact<span className="text-blue-500">.</span>
        </h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-gray-300 text-[16px] sm:text-[18px] max-w-2xl mx-auto leading-relaxed"
        >
          Ready to bring your ideas to life? Let&apos;s discuss your project and create something amazing together.
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 xl:mt-12 flex xl:flex-row flex-col gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        
        {/* Contact Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 xl:flex-[0.65] relative"
        >
          {/* Form Background with Glass Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"></div>
          
          {/* Form Content */}
          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="text-white text-[24px] sm:text-[28px] font-bold mb-2">
                Leave A Note
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            {/* Social Links */}
            <motion.div
              variants={fadeIn("up", "spring", 0.3, 0.75)}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="https://www.linkedin.com/in/abishek2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 hover:border-blue-500/50 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>  
              <a
                href="https://wa.me/+919566372450"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 border border-green-500/30 hover:border-green-500/50 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                </svg>
                WhatsApp
              </a>
            </motion.div>

            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div
                variants={fadeIn("up", "spring", 0.4, 0.75)}
                className="group"
              >
                <label className="block text-white font-medium mb-3 group-focus-within:text-blue-400 transition-colors text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="w-full bg-gray-800/50 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-6 placeholder:text-gray-400 text-white rounded-xl outline-none border-2 border-gray-700/50 font-medium focus:border-blue-500 focus:bg-gray-800/70 transition-all duration-300 hover:bg-gray-800/60 hover:border-gray-600/50"
                  required
                />
              </motion.div>

              <motion.div
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                className="group"
              >
                <label className="block text-white font-medium mb-3 group-focus-within:text-blue-400 transition-colors text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className="w-full bg-gray-800/50 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-6 placeholder:text-gray-400 text-white rounded-xl outline-none border-2 border-gray-700/50 font-medium focus:border-blue-500 focus:bg-gray-800/70 transition-all duration-300 hover:bg-gray-800/60 hover:border-gray-600/50"
                  required
                />
              </motion.div>

              <motion.div
                variants={fadeIn("up", "spring", 0.6, 0.75)}
                className="group"
              >
                <label className="block text-white font-medium mb-3 group-focus-within:text-blue-400 transition-colors text-sm">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  className="w-full bg-gray-800/50 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-6 placeholder:text-gray-400 text-white rounded-xl outline-none border-2 border-gray-700/50 font-medium focus:border-blue-500 focus:bg-gray-800/70 transition-all duration-300 hover:bg-gray-800/60 hover:border-gray-600/50 resize-none"
                  required
                />
              </motion.div>

              <motion.button
                variants={fadeIn("up", "spring", 0.7, 0.75)}
                type="submit"
                disabled={loading}
                className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-3 sm:py-4 px-8 sm:px-12 rounded-xl outline-none text-white font-bold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* 3D Model Section */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1 xl:flex-[0.4] relative order-first xl:order-last"
        >
          {/* 3D Container Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl"></div>
          
          {/* Floating Elements around 3D model */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-4 right-4 w-8 h-8 border-2 border-blue-500/30 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-4 left-4 w-3 h-3 bg-purple-500/50 rounded-full"
          />
          <motion.div
            animate={{ 
              x: [0, 10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-2 w-2 h-8 bg-gradient-to-b from-pink-500/30 to-transparent rounded-full"
          />
          
          {/* 3D Model */}
          <div className="relative z-10 h-[300px] sm:h-[400px] lg:h-[600px] p-4">
            <From3D
              modelPath="./man/scene.gltf"
              height="100%"
              showControls={false}
              className="rounded-2xl overflow-hidden"
            />
          </div>
          
          {/* Interactive indicator */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full border border-white/20"
          >
            Interactive 3D
          </motion.div>
        </motion.div>
      </div>

      {/* Success Popup with enhanced styling */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl text-center max-w-md w-full mx-4 relative overflow-hidden"
          >
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center relative"
              >
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
                
                {/* Success ring animation */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border-4 border-green-400 rounded-full"
                />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
              >
                Message Sent!
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 mb-8 leading-relaxed"
              >
                Thank you! I will get back to you as soon as possible.
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setShowPopup(false)}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200"
              >
                Got it
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const ContactWithWrapper = SectionWrapper(Contact, "contact");
export default ContactWithWrapper;
