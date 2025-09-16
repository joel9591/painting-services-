// "use client";
// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { ArrowRight, Send, Check } from "lucide-react";
// import emailjs from "@emailjs/browser";

// export default function Hero() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const formRef = useRef();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     services: [],
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const slides = [
//     "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//     "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//     "https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//     "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//   ];

//   const services = [
//     "House Painting",
//     "Deep Cleaning",
//     "Plumbing",
//     "Electrical Work",
//     "Furniture Work",
//     "False Ceiling",
//     "Other",
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const handleServiceSelect = (service) => {
//     setFormData((prev) => ({
//       ...prev,
//       services: prev.services.includes(service)
//         ? prev.services.filter((s) => s !== service)
//         : [...prev.services, service],
//     }));
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await emailjs.sendForm(
//         process.env.NEXT_PUBLIC_EmailJS_service_ID, // Replace with your EmailJS Service ID
//         process.env.NEXT_PUBLIC_EmailJS_template_ID, // Replace with your EmailJS template ID
//         formRef.current,
//         process.env.NEXT_PUBLIC_EmailJS_public_key // Replace with your EmailJS public key
//       );

//       setSubmitStatus("success");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         services: [],
//         message: "",
//       });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="relative text-white overflow-hidden">
//       {/* Background Carousel */}
//       <div className="absolute inset-0">
//         {slides.map((url, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//             style={{ backgroundImage: `url(${url})` }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 ">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-4">
//           {/* Left Text */}
//           <div
//             className={`space-y-5 transition-all duration-1000 transform ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-10 opacity-0"
//             }`}
//           >
//             <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug text-center  lg:text-left ">
//               Professional Home Services You Can Trust
//             </h1>
//             <p className="text-base md:text-lg text-blue-100 leading-relaxed">
//               From painting to plumbing, electrical work to deep cleaning, we
//               provide comprehensive home services with quality guaranteed.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3">
//               <Link
//                 href="/services"
//                 className="bg-white text-blue-700 hover:bg-blue-50 px-5 py-2.5 rounded-md font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
//               >
//                 <span>Our Services</span>
//                 <ArrowRight
//                   className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
//                   size={16}
//                 />
//               </Link>
//               <Link
//                 href="/contact"
//                 className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-700 px-5 py-2.5 rounded-md font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 text-center"
//               >
//                 Get a Free Quotation
//               </Link>
//             </div>
//           </div>

//           {/* Right Form */}
//           <div
//             className={`bg-white/5 backdrop-blur-sm rounded-lg p-2 shadow-xl transition-all duration-1000 delay-300 transform ${
//               isVisible
//                 ? "translate-x-0 lg:translate-x-8 opacity-100"
//                 : "translate-x-10 opacity-0"
//             }`}
//           >
//             <div className="bg-white/95 rounded-lg p-3 sm:p-4 text-gray-900 w-full max-w-sm mx-auto">
//               <h2 className="text-lg font-bold text-blue-700 mb-2">
//                 Request a Service
//               </h2>
//               <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
//                 <input
//                   type="hidden"
//                   name="services"
//                   value={formData.services.join(", ")}
//                 />

//                 {/* Name */}
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-[11px] font-medium text-gray-700 mb-0.5"
//                   >
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-2.5 py-1.5 border rounded-md text-xs focus:outline-none focus:ring-0 focus:shadow-sm"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-[11px] font-medium text-gray-700 mb-0.5"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-2.5 py-1.5 border rounded-md text-xs focus:outline-none focus:ring-0 focus:shadow-sm"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block text-[11px] font-medium text-gray-700 mb-0.5"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-2.5 py-1.5 border rounded-md text-xs focus:outline-none focus:ring-0 focus:shadow-sm"
//                     placeholder="9865845876"
//                   />
//                 </div>

//                 {/* Multi-Select Services */}
//                 <div>
//                   <label className="block text-[11px] font-medium text-gray-700 mb-0.5">
//                     Select Services
//                   </label>
//                   <div className="grid grid-cols-2 gap-1.5">
//                     {services.map((service) => (
//                       <button
//                         key={service}
//                         type="button"
//                         onClick={() => handleServiceSelect(service)}
//                         className={`flex items-center justify-between px-2.5 py-1.5 rounded-md border text-xs transition-all ${
//                           formData.services.includes(service)
//                             ? "bg-green-100 border-green-500 text-green-700"
//                             : "bg-white border-gray-300 hover:bg-gray-50"
//                         }`}
//                       >
//                         <span>{service}</span>
//                         {formData.services.includes(service) && (
//                           <Check size={14} className="text-green-600" />
//                         )}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-[11px] font-medium text-gray-700 mb-0.5"
//                   >
//                     Brief Description
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="2"
//                     className="w-full px-2.5 py-1.5 border rounded-md text-xs focus:outline-none focus:ring-0 focus:shadow-sm"
//                   ></textarea>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md font-semibold text-xs transition-all duration-300 transform ${
//                     isSubmitting
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105"
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="animate-spin h-3 w-3 border-b-2 border-white rounded-full"></div>
//                       Submitting...
//                     </>
//                   ) : (
//                     <>
//                       <Send size={14} />
//                       Submit
//                     </>
//                   )}
//                 </button>

//                 {/* Status Messages */}
//                 {submitStatus === "success" && (
//                   <div className="bg-green-50 border border-green-200 rounded-md p-1.5 text-green-700 text-xs mt-1">
//                     Thank you! Your request has been submitted.
//                   </div>
//                 )}
//                 {submitStatus === "error" && (
//                   <div className="bg-red-50 border border-red-200 rounded-md p-1.5 text-red-700 text-xs mt-1">
//                     Sorry, something went wrong. Please try again.
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Gradient Overlay */}
//       <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-blue-900 to-transparent"></div>
//     </section>
//   );
// }

// "use client";
// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { Clock, FileText, Hammer, Check, Send } from "lucide-react";
// import emailjs from "@emailjs/browser"; // if you are using emailjs

// export default function Hero() {
//   const slides = [
//     {
//       id: 1,
//       src: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//       alt: "Painting Service",
//     },
//     {
//       id: 2,
//       src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//       alt: "Cleaning Service",
//     },
//     {
//       id: 3,
//       src: "https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//       alt: "Electrical Service",
//     },
//     {
//       id: 4,
//       src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//       alt: "Furniture Service",
//     },
//   ];

//   const [current, setCurrent] = useState(0);

//   // carousel controls
//   const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   // form states
//   const formRef = useRef();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     services: [],
//     message: "",
//   });
//   const services = [
//     "House Painting",
//     "Deep Cleaning",
//     "Plumbing",
//     "Electrical Work",
//     "Furniture Work",
//     "False Ceiling",
//     "Other",
//   ];
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState("");
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // trigger animation once Hero loads
//     const timer = setTimeout(() => setIsVisible(true), 200);
//     return () => clearTimeout(timer);
//   }, []);

//   // handlers
//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleServiceSelect = (service) => {
//     setFormData((prev) => ({
//       ...prev,
//       services: prev.services.includes(service)
//         ? prev.services.filter((s) => s !== service)
//         : [...prev.services, service],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus("");

//     try {
//       await emailjs.sendForm(
//         process.env.NEXT_PUBLIC_EmailJS_service_ID, // Replace with your EmailJS Service ID
//         process.env.NEXT_PUBLIC_EmailJS_template_ID, // Replace with your EmailJS template ID
//         formRef.current,
//         process.env.NEXT_PUBLIC_EmailJS_public_key // Replace with your EmailJS public key
//       );

//       setSubmitStatus("success");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         services: [],
//         message: "",
//       });
//     } catch (error) {
//       console.error(error);
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="relative w-full bg-gray-100">
//       {/* Carousel */}
//       <div className="relative h-[250px] sm:h-[350px] lg:h-[450px] overflow-hidden">
//         <Image
//           src={slides[current].src}
//           alt={slides[current].alt}
//           fill
//           className="object-cover transition-all duration-700"
//         />

//         {/* Controls */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
//         >
//           ‹
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
//         >
//           ›
//         </button>

//         {/* Indicators */}
//         <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
//           {slides.map((_, i) => (
//             <div
//               key={i}
//               className={`w-2 h-2 rounded-full ${
//                 i === current ? "bg-white" : "bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Steps + Form */}
//       <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Left: Steps */}
//         <div className="space-y-6 sm:pt-12">
//           <div className="flex items-start gap-3">
//             <div className="bg-blue-100 p-3 rounded-lg">
//               <Clock className="text-blue-600" size={24} />
//             </div>
//             <div>
//               <h4 className="font-bold text-gray-900 text-lg">
//                 Site Visit in 24 Hours
//               </h4>
//               <p className="text-gray-600 text-sm">
//                 Our team will visit your site within a day for assessment.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start gap-3">
//             <div className="bg-green-100 p-3 rounded-lg">
//               <FileText className="text-green-600" size={24} />
//             </div>
//             <div>
//               <h4 className="font-bold text-gray-900 text-lg">
//                 Quotation in 24 Hours
//               </h4>
//               <p className="text-gray-600 text-sm">
//                 Get a transparent and fair quotation within 24 hours.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start gap-3">
//             <div className="bg-red-100 p-3 rounded-lg">
//               <Hammer className="text-red-600" size={24} />
//             </div>
//             <div>
//               <h4 className="font-bold text-gray-900 text-lg">
//                 Work Starts Instantly
//               </h4>
//               <p className="text-gray-600 text-sm">
//                 Once approved, our experts begin work without delay.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right: Form */}
//         <div
//           className={`bg-white/5 backdrop-blur-sm rounded-lg p-2 shadow-xl transition-all duration-1000 delay-300 transform ${
//             isVisible
//               ? "translate-x-0 lg:translate-x-8 opacity-100"
//               : "translate-x-10 opacity-0"
//           }`}
//         >
//           <div className="bg-white/95 rounded-lg p-3 sm:p-4 text-gray-900 w-full max-w-sm mx-auto">
//             <h2 className="text-lg font-bold text-blue-700 mb-2">
//               Request a Service
//             </h2>
//             <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
//               <input
//                 type="hidden"
//                 name="services"
//                 value={formData.services.join(", ")}
//               />

//               {/* Name */}
//               <div>
//                 <label className="block text-[11px] font-medium text-gray-700 mb-0.5">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-2.5 py-1.5 border rounded-md text-xs"
//                   placeholder="John Doe"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-[11px] font-medium text-gray-700 mb-0.5">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-2.5 py-1.5 border rounded-md text-xs"
//                   placeholder="john@example.com"
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="block text-[11px] font-medium text-gray-700 mb-0.5">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-2.5 py-1.5 border rounded-md text-xs"
//                   placeholder="9865845876"
//                 />
//               </div>

//               {/* Multi-Select Services */}
//               <div>
//                 <label className="block text-[11px] font-medium text-gray-700 mb-0.5">
//                   Select Services
//                 </label>
//                 <div className="grid grid-cols-2 gap-1.5">
//                   {services.map((service) => (
//                     <button
//                       key={service}
//                       type="button"
//                       onClick={() => handleServiceSelect(service)}
//                       className={`flex items-center justify-between px-2.5 py-1.5 rounded-md border text-xs transition-all ${
//                         formData.services.includes(service)
//                           ? "bg-green-100 border-green-500 text-green-700"
//                           : "bg-white border-gray-300 hover:bg-gray-50"
//                       }`}
//                     >
//                       <span>{service}</span>
//                       {formData.services.includes(service) && (
//                         <Check size={14} className="text-green-600" />
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-[11px] font-medium text-gray-700 mb-0.5">
//                   Brief Description
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="2"
//                   className="w-full px-2.5 py-1.5 border rounded-md text-xs"
//                 ></textarea>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md font-semibold text-xs transition-all duration-300 transform ${
//                   isSubmitting
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105"
//                 }`}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin h-3 w-3 border-b-2 border-white rounded-full"></div>
//                     Submitting...
//                   </>
//                 ) : (
//                   <>
//                     <Send size={14} />
//                     Submit
//                   </>
//                 )}
//               </button>

//               {/* Status */}
//               {submitStatus === "success" && (
//                 <div className="bg-green-50 border border-green-200 rounded-md p-1.5 text-green-700 text-xs mt-1">
//                   Thank you! Your request has been submitted.
//                 </div>
//               )}
//               {submitStatus === "error" && (
//                 <div className="bg-red-50 border border-red-200 rounded-md p-1.5 text-red-700 text-xs mt-1">
//                   Sorry, something went wrong. Please try again.
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { Clock, FileText, Paintbrush, Check, Send } from "lucide-react";
// import emailjs from "@emailjs/browser";

// export default function Hero() {
//   const slides = [
//     {
//       id: 1,
//       src: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//       alt: "Painting Service",
//     },
//     {
//       id: 2,
//       src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//       alt: "Cleaning Service",
//     },
//     {
//       id: 3,
//       src: "https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//       alt: "Electrical Service",
//     },
//     {
//       id: 4,
//       src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//       alt: "Furniture Service",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const formRef = useRef();

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   // Carousel controls
//   const nextSlide = () =>
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   // form states
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     services: [],
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState("");

//   const handleChange = (e) => {
//     if (e.target.name === "services") {
//       const selected = Array.from(
//         e.target.selectedOptions,
//         (option) => option.value
//       );
//       setFormData({ ...formData, services: selected });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus("");

//     try {
//       await emailjs.sendForm(
//         process.env.NEXT_PUBLIC_EmailJS_service_ID,
//         process.env.NEXT_PUBLIC_EmailJS_template_ID,
//         formRef.current,
//         process.env.NEXT_PUBLIC_EmailJS_public_key
//       );

//       setSubmitStatus("success");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         services: [],
//         message: "",
//       });
//     } catch (error) {
//       console.error(error);
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="relative w-full bg-gray-100">
//       {/* Carousel */}
//       <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] overflow-hidden">
//         <Image
//           src={slides[currentSlide].src}
//           alt={slides[currentSlide].alt}
//           fill
//           className="object-cover transition-all duration-700"
//         />

//         {/* Controls */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full text-xs"
//         >
//           ‹
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full text-xs"
//         >
//           ›
//         </button>

//         {/* Indicators */}
//         <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
//           {slides.map((_, i) => (
//             <div
//               key={i}
//               className={`w-2 h-2 rounded-full ${
//                 i === currentSlide ? "bg-white" : "bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Steps + Form */}
//       <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-32">
//         {/* Left: Steps */}
//         <div>
//           {/* Mobile: 3 in a row (icon + name only) */}
//           <div className="grid grid-cols-3 gap-4 lg:hidden">
//             <div className="flex flex-col items-center text-center bg-slate-400/10 p-4 rounded-lg">
//               <Clock className="text-blue-600" size={28} />
//               <span className="text-xs font-semibold mt-1">
//                 Site Visit in 24h
//               </span>
//             </div>
//             <div className="flex flex-col items-center text-center bg-slate-400/10 p-4 rounded-lg">
//               <FileText className="text-green-600" size={28} />
//               <span className="text-xs font-semibold mt-1">
//                 Quotation in 24h
//               </span>
//             </div>
//             <div className="flex flex-col items-center text-center bg-slate-400/10 p-4 rounded-lg">
//               <Paintbrush className="text-red-600" size={28} />
//               <span className="text-xs font-semibold mt-1">Work Starts</span>
//             </div>
//           </div>

//           {/* Desktop: 1 row, 3 columns (icon + title + desc) */}
//           <div className="hidden lg:grid lg:grid-cols-1 gap-6 mt-20">
//             <div className="flex items-start gap-3 bg-slate-400/10 p-4 rounded-lg">
//               <div className="bg-blue-100 p-3 rounded-lg">
//                 <Clock className="text-blue-600" size={24} />
//               </div>
//               <div>
//                 <h4 className="font-bold text-gray-900 text-lg">
//                   Site Visit in 24 Hours
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   Our team will visit your site within a day for assessment.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 bg-slate-400/10 p-4 rounded-lg">
//               <div className="bg-green-100 p-3 rounded-lg">
//                 <FileText className="text-green-600" size={24} />
//               </div>
//               <div>
//                 <h4 className="font-bold text-gray-900 text-lg">
//                   Quotation in 24 Hours
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   Get a transparent and fair quotation within 24 hours.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 bg-slate-400/10 p-4 rounded-lg">
//               <div className="bg-red-100 p-3 rounded-lg">
//                 <Paintbrush className="text-red-600" size={24} />
//               </div>
//               <div>
//                 <h4 className="font-bold text-gray-900 text-lg">
//                   Work Starts Instantly
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   Once approved, our experts begin work without delay.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right: Form */}
//         <div className="bg-white rounded-lg p-4 shadow-xl">
//           <h2 className="text-lg font-bold text-blue-700 mb-2">
//             Request a Service
//           </h2>
//           <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
//             <input
//               type="hidden"
//               name="services"
//               value={formData.services.join(", ")}
//             />

//             {/* Name */}
//             <div>
//               <label className="block text-[11px] font-medium text-gray-700 mb-0.5">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 required
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-2.5 py-1.5 border rounded-md text-xs"
//                 placeholder="John Doe"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-[11px] font-medium text-gray-700 mb-0.5">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-2.5 py-1.5 border rounded-md text-xs"
//                 placeholder="john@example.com"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-[11px] font-medium text-gray-700 mb-0.5">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-2.5 py-1.5 border rounded-md text-xs"
//                 placeholder="9865845876"
//               />
//             </div>

//             {/* Multi-Select Dropdown Services */}
//             <div>
//               <label className="block text-[11px] font-medium text-gray-700 mb-0.5">
//                 Select Services
//               </label>
//               <select
//                 name="services"
//                 multiple
//                 value={formData.services}
//                 placeholder="Select services"
//                 onChange={handleChange}
//                 className="w-full px-2.5 py-1.5 border rounded-md text-xs"
//               >
//                 <option value="House Painting">House Painting</option>
//                 <option value="Deep Cleaning">Deep Cleaning</option>
//                 <option value="Plumbing">Plumbing</option>
//                 <option value="Electrical Work">Electrical Work</option>
//                 <option value="Furniture Work">Furniture Work</option>
//                 <option value="False Ceiling">False Ceiling</option>
//                 <option value="Other">Other</option>
//               </select>
//               <p className="text-[10px] text-gray-500 mt-0.5">
//                 Hold Ctrl (Windows) / Cmd (Mac) to select multiple
//               </p>
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-[11px] font-medium text-gray-700 mb-0.5">
//                 Brief Description
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="2"
//                 className="w-full px-2.5 py-1.5 border rounded-md text-xs"
//               ></textarea>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md font-semibold text-xs transition-all duration-300 transform ${
//                 isSubmitting
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105"
//               }`}
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="animate-spin h-3 w-3 border-b-2 border-white rounded-full"></div>
//                   Submitting...
//                 </>
//               ) : (
//                 <>
//                   <Send size={14} />
//                   Submit
//                 </>
//               )}
//             </button>

//             {/* Status */}
//             {submitStatus === "success" && (
//               <div className="bg-green-50 border border-green-200 rounded-md p-1.5 text-green-700 text-xs mt-1">
//                 Thank you! Your request has been submitted.
//               </div>
//             )}
//             {submitStatus === "error" && (
//               <div className="bg-red-50 border border-red-200 rounded-md p-1.5 text-red-700 text-xs mt-1">
//                 Sorry, something went wrong. Please try again.
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Clock, FileText, Paintbrush, Send, ArrowRight } from "lucide-react";
// import emailjs from "@emailjs/browser";

// export default function Hero() {
//   const slides = [
//     {
//       id: 1,
//       src: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//       alt: "Painting Service",
//     },
//     {
//       id: 2,
//       src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//       alt: "Cleaning Service",
//     },
//     {
//       id: 3,
//       src: "https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//       alt: "Electrical Service",
//     },
//     {
//       id: 4,
//       src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//       alt: "Furniture Service",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const formRef = useRef();

//   // Auto slide
//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   // form states
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     services: [],
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState("");

//   const handleServiceToggle = (service) => {
//     setFormData((prev) => {
//       if (prev.services.includes(service)) {
//         return {
//           ...prev,
//           services: prev.services.filter((s) => s !== service),
//         };
//       } else {
//         return { ...prev, services: [...prev.services, service] };
//       }
//     });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus("");

//     try {
//       await emailjs.sendForm(
//         process.env.NEXT_PUBLIC_EmailJS_service_ID,
//         process.env.NEXT_PUBLIC_EmailJS_template_ID,
//         formRef.current,
//         process.env.NEXT_PUBLIC_EmailJS_public_key
//       );

//       setSubmitStatus("success");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         services: [],
//         message: "",
//       });
//     } catch (error) {
//       console.error(error);
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const servicesOptions = [
//     "House Painting",
//     "Deep Cleaning",
//     "Plumbing",
//     "Electrical Work",
//     "Furniture Work",
//     "False Ceiling",
//     "Other",
//   ];

//   return (
//     <section className="relative w-full bg-gray-100">
//       {/* Carousel */}
//       <div className="relative h-[300px] sm:h-[400px] lg:h-screen overflow-hidden">
//         <Image
//           src={slides[currentSlide].src}
//           alt={slides[currentSlide].alt}
//           fill
//           className="object-cover transition-all duration-700"
//         />
//         <div className="absolute inset-0 bg-black/40" />

//         {/* Carousel Text */}
//         <div
//           className={`absolute inset-0 flex flex-col justify-center lg:justify-end items-center lg:items-start px-4 sm:px-8 pb-6 lg:pb-16 text-white space-y-3 sm:space-y-4 transition-all duration-1000 ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
//           }`}
//         >
//           {/* Mobile: minimal */}
//           <h1 className="text-xl sm:text-2xl font-bold text-center lg:hidden">
//             Professional Home Services
//           </h1>

//           {/* Desktop: full text */}
//           <div className="hidden lg:block max-w-xl">
//             <h1 className="text-3xl lg:text-4xl font-bold leading-snug">
//               Professional Home Services You Can Trust
//             </h1>
//             <p className="text-sm lg:text-base text-blue-100 mt-2">
//               From painting to plumbing, electrical work to deep cleaning, we
//               provide comprehensive home services with quality guaranteed.
//             </p>
//             <div className="flex gap-3 mt-4">
//               <Link
//                 href="/services"
//                 className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
//               >
//                 <span>Our Services</span>
//                 <ArrowRight
//                   className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
//                   size={16}
//                 />
//               </Link>
//               <Link
//                 href="/contact"
//                 className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-700 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 transform hover:scale-105"
//               >
//                 Get a Free Quotation
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Indicators */}
//         <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
//           {slides.map((_, i) => (
//             <div
//               key={i}
//               className={`w-2 h-2 rounded-full ${
//                 i === currentSlide ? "bg-white" : "bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Steps + Form */}
//       <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
//         {/* Left: Steps */}
//         <div>
//           {/* Mobile: compact */}
//           <div className="grid grid-cols-3 gap-4 lg:hidden">
//             <div className="flex flex-col items-center text-center bg-slate-400/10 p-4 rounded-lg">
//               <Clock className="text-blue-600" size={28} />
//               <span className="text-xs font-semibold mt-1">Site Visit</span>
//             </div>
//             <div className="flex flex-col items-center text-center bg-slate-400/10 p-4 rounded-lg">
//               <FileText className="text-green-600" size={28} />
//               <span className="text-xs font-semibold mt-1">Quotation</span>
//             </div>
//             <div className="flex flex-col items-center text-center bg-slate-400/10 p-4 rounded-lg">
//               <Paintbrush className="text-red-600" size={28} />
//               <span className="text-xs font-semibold mt-1">Work Start</span>
//             </div>
//           </div>

//           {/* Desktop */}
//           <div className="hidden lg:grid lg:grid-cols-1 gap-6 sm:mt-24">
//             <div className="flex items-start gap-3 bg-slate-400/10 p-4 rounded-lg">
//               <Clock className="text-blue-600" size={24} />
//               <div>
//                 <h4 className="font-bold text-gray-900 text-lg">
//                   Site Visit in 24 Hours
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   Our team will visit your site within a day for assessment.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 bg-slate-400/10 p-4 rounded-lg">
//               <FileText className="text-green-600" size={24} />
//               <div>
//                 <h4 className="font-bold text-gray-900 text-lg">
//                   Quotation in 24 Hours
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   Get a transparent and fair quotation within 24 hours.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 bg-slate-400/10 p-4 rounded-lg">
//               <Paintbrush className="text-red-600" size={24} />
//               <div>
//                 <h4 className="font-bold text-gray-900 text-lg">
//                   Work Starts Instantly
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   Once approved, our experts begin work without delay.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right: Form */}
//         <div className="bg-white rounded-lg p-4 shadow-xl">
//           <h2 className="text-lg font-bold text-blue-700 mb-2">
//             Request a Service
//           </h2>
//           <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
//             <input
//               type="hidden"
//               name="services"
//               value={formData.services.join(", ")}
//             />

//             {/* Name */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700 mb-0.5">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 required
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md text-sm"
//                 placeholder="John Doe"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700 mb-0.5">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md text-sm"
//                 placeholder="john@example.com"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700 mb-0.5">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md text-sm"
//                 placeholder="9865845876"
//               />
//             </div>

//             {/* Services (checkbox grid) */}
//             {/* <div>
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Select Services
//               </label>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
//                 {servicesOptions.map((service) => (
//                   <label
//                     key={service}
//                     className="flex items-center gap-2 border rounded-md px-2 py-1.5 text-xs cursor-pointer hover:bg-blue-50"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={formData.services.includes(service)}
//                       onChange={() => handleServiceToggle(service)}
//                       className="w-3.5 h-3.5"
//                     />
//                     {service}
//                   </label>
//                 ))}
//               </div>
//             </div> */}
//             <div>
//               <label className="block text-[11px] font-medium text-gray-700 mb-0.5">
//                 Select Services
//               </label>
//               <div className="grid grid-cols-2 gap-1.5">
//                 {servicesOptions.map((service) => (
//                   <button
//                     key={service}
//                     type="button"
//                     onClick={() => handleServiceSelect(service)}
//                     className={`flex items-center justify-between px-2.5 py-1.5 rounded-md border text-xs transition-all ${
//                       formData.services.includes(service)
//                         ? "bg-green-100 border-green-500 text-green-700"
//                         : "bg-white border-gray-300 hover:bg-gray-50"
//                     }`}
//                   >
//                     <span>{service}</span>
//                     {formData.services.includes(service) && (
//                       <Check size={14} className="text-green-600" />
//                     )}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700 mb-0.5">
//                 Brief Description
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="3"
//                 className="w-full px-3 py-2 border rounded-md text-sm"
//               ></textarea>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md font-semibold text-sm transition-all duration-300 transform ${
//                 isSubmitting
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105"
//               }`}
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="animate-spin h-4 w-4 border-b-2 border-white rounded-full"></div>
//                   Submitting...
//                 </>
//               ) : (
//                 <>
//                   <Send size={16} />
//                   Submit
//                 </>
//               )}
//             </button>

//             {/* Status */}
//             {submitStatus === "success" && (
//               <div className="bg-green-50 border border-green-200 rounded-md p-2 text-green-700 text-xs mt-1">
//                 Thank you! Your request has been submitted.
//               </div>
//             )}
//             {submitStatus === "error" && (
//               <div className="bg-red-50 border border-red-200 rounded-md p-2 text-red-700 text-xs mt-1">
//                 Sorry, something went wrong. Please try again.
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, FileText, Paintbrush, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import ServiceForm from "./ServiceForm";

export default function Hero() {
  const slides = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
      alt: "Painting Service",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
      alt: "Cleaning Service",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
      alt: "Electrical Service",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
      alt: "Furniture Service",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef();

  // Auto slide
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EmailJS_service_ID,
        process.env.NEXT_PUBLIC_EmailJS_template_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EmailJS_public_key
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        services: [],
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const servicesOptions = [
    "House Painting",
    "Deep Cleaning",
    "Plumbing",
    "Electrical Work",
    "Furniture Work",
    "False Ceiling",
    "Other",
  ];

  return (
    <section className="relative w-full bg-gray-100">
      {/* Carousel */}
      <div className="relative h-[220px] sm:h-[320px] lg:h-screen overflow-hidden">
        <Image
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          fill
          className="object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Carousel Text */}
        <div
          className={`absolute inset-0 flex flex-col justify-center lg:justify-end items-center lg:items-start px-4 sm:px-8 pb-6 lg:pb-16 text-white space-y-3 sm:space-y-4 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <h1 className="text-xl sm:text-2xl font-bold text-center lg:hidden">
            Professional Home Services
          </h1>

          {/* Desktop text */}
          <div className="hidden lg:block max-w-xl">
            <h1 className="text-3xl lg:text-4xl font-bold leading-snug">
              Professional Home Services You Can Trust
            </h1>
            <p className="text-sm lg:text-base text-blue-100 mt-2">
              From painting to plumbing, electrical work to deep cleaning, we
              provide comprehensive home services with quality guaranteed.
            </p>
            <div className="flex gap-3 mt-4">
              <Link
                href="/services"
                className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <span>Our Services</span>
                <ArrowRight
                  className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  size={16}
                />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-700 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 transform hover:scale-105"
              >
                Get a Free Quotation
              </Link>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Steps + Form */}
      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
        {/* Steps */}
        <div>
          <div className="grid grid-cols-3 gap-4 lg:hidden">
            <div className="flex flex-col items-center text-center bg-slate-400/10 p-4 rounded-lg">
              <Clock className="text-blue-600" size={28} />
              <span className="text-xs font-semibold mt-1">Site Visit</span>
            </div>
            <div className="flex flex-col items-center text-center bg-slate-400/10 p-4 rounded-lg">
              <FileText className="text-green-600" size={28} />
              <span className="text-xs font-semibold mt-1">Quotation</span>
            </div>
            <div className="flex flex-col items-center text-center bg-slate-400/10 p-4 rounded-lg">
              <Paintbrush className="text-red-600" size={28} />
              <span className="text-xs font-semibold mt-1">Work Start</span>
            </div>
          </div>

          {/* Desktop steps */}
          <div className="hidden lg:grid lg:grid-cols-1 gap-6 sm:mt-24">
            <div className="flex items-start gap-3 bg-slate-400/10 p-4 rounded-lg">
              <Clock className="text-blue-600" size={24} />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  Site Visit in 24 Hours
                </h4>
                <p className="text-gray-600 text-sm">
                  Our team will visit your site within a day for assessment.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-400/10 p-4 rounded-lg">
              <FileText className="text-green-600" size={24} />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  Quotation in 24 Hours
                </h4>
                <p className="text-gray-600 text-sm">
                  Get a transparent and fair quotation within 24 hours.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-400/10 p-4 rounded-lg">
              <Paintbrush className="text-red-600" size={24} />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  Work Starts Instantly
                </h4>
                <p className="text-gray-600 text-sm">
                  Once approved, our experts begin work without delay.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 mb-2 pl-2">
            Request a Service
          </h2>
          <ServiceForm />
        </div>
      </div>
    </section>
  );
}
