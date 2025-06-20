import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './section-heading';
import { FaLinkedin, FaCloud, FaLaptopCode, FaTrophy, FaMedal, FaCertificate, FaTimes, FaAward, FaGraduationCap, FaCode } from 'react-icons/fa';
import Image from 'next/image';

interface Certificate {
  title: string;
  organization: string;
  date: string;
  description: string;
  linkedinUrl: string;
  icon: React.ElementType;
  imageUrl: string;
}

const certificates: Certificate[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services (AWS)",
    date: "September 2024",
    description: "Completed comprehensive AWS Cloud Practitioner certification (CLF-C02), mastering cloud computing fundamentals, AWS services, pricing models, and security through 15 hours of dedicated learning.",
    linkedinUrl: "https://www.linkedin.com/posts/virat-kumar-b0b57024a_aws-cloudcomputing-awscertified-activity-7328494880404529152-JsE_",
    icon: FaCloud,
    imageUrl: "/certificates/aws-cloud-practitioner.png"
  },
  {
    title: "GDC Hackathon - First Prize",
    organization: "Google Development Club",
    date: "January 2024",
    description: "Led team Byte Bandits to victory in the Tech Trail event at GDC Hackathon, winning first place for our presentation on TensorFlow vs PyTorch.",
    linkedinUrl: "https://www.linkedin.com/posts/virat-kumar-b0b57024a_bytebandits-gdc2024-hackathonchampions-activity-7171567846794125313-ugCg",
    icon: FaTrophy,
    imageUrl: "/certificates/gdc-hackathon.png"
  },
  
  
  {
    title: "Google Cloud Advanced Milestone",
    organization: "Google Cloud",
    date: "March 2025",
    description: "Achieved advanced milestone in Google Cloud Arcade program, mastering complex cloud computing concepts and implementations.",
    linkedinUrl: "https://www.linkedin.com/posts/virat-kumar-b0b57024a_googlecloud-advancedmilestone-googlecloudarcade-activity-7327022335658545152-hlOZ",
    icon: FaAward,
    imageUrl: "/certificates/google-cloud-advanced.png"
  },
  {
    title: "AWS Cloud Workshop",
    organization: "AWS & St. Joseph's Group",
    date: "January 2024",
    description: "Completed comprehensive AWS cloud computing workshop, gaining practical experience in cloud services and architecture.",
    linkedinUrl: "https://www.linkedin.com/posts/virat-kumar-b0b57024a_aws-cloudcomputing-machinelearning-activity-7162692659956965376-xCDS",
    icon: FaCloud,
    imageUrl: "/certificates/aws-workshop.png"
  },

  
  
  {
    title: "DBMS Query Contest Gold Medal",
    organization: "Campus Competition",
    date: "February 2024",
    description: "Won Gold Medal 🥇 in the Database Management Systems (DBMS) Query Contest, demonstrating exceptional proficiency in SQL and database querying skills.",
    linkedinUrl: "https://www.linkedin.com/posts/virat-kumar-b0b57024a_dbms-sql-query-activity-7210525792311656448-B7Be",
    icon: FaTrophy,
    imageUrl: "/certificates/dbms-gold.png"
  },
  {
    title: "Google Cloud Arcade Program",
    organization: "Google Cloud",
    date: "February 2024",
    description: "Completed the Google Cloud Arcade Program, gaining hands-on experience with various Google Cloud services and solutions.",
    linkedinUrl: "https://www.linkedin.com/posts/virat-kumar-b0b57024a_googlecloud-qwiklabs-arcadeprogram-activity-7213601538307497986-Y9Zq",
    icon: FaCloud,
    imageUrl: "/certificates/google-cloud-arcade.png"
  },

  {
    title: "Google Cloud Innovator",
    organization: "Google Cloud",
    date: "March 2024",
    description: "Joined the Google Cloud Innovators program, exploring cutting-edge technologies and pushing the boundaries of what's possible in the cloud.",
    linkedinUrl: "https://www.linkedin.com/posts/virat-kumar-b0b57024a_google-cloud-innovator-google-developer-activity-7225556294424834049-K4LG",
    icon: FaCloud,
    imageUrl: "/certificates/google-cloud-innovator.png"
  },
  {
    title: "IBM Ideathon Anvesana at PES",
    organization: "PESShivmogga",
    date: "February 2025",
    description: "My team made it to the top , selected by IBM in the Ideathon Anvesana at PES University , Shivmogga! ",
    linkedinUrl: "https://www.linkedin.com/posts/virat-kumar-b0b57024a_ibminnovation-ideathon-pesitm-activity-7106337370328768512-y7Lp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2p2TsBCpRXz4_f7OWFNvCFoT3FOmhFsfQ",
    icon: FaCode,
    imageUrl: "/certificates/pes-anvesana.png"
  },
  
  
  {
    title: "LetsUpgrade Student Ambassador",
    organization: "LetsUpgrade",
    date: "October 2023",
    description: "Selected as Student Ambassador at LetsUpgrade, leading and mentoring peers in technology education and skill development.",
    linkedinUrl: "https://www.linkedin.com/posts/virat-kumar-b0b57024a_letsupgrade-studentambassador-edtech-activity-7269731798111121409-MwEM",
    icon: FaGraduationCap,
    imageUrl: "/certificates/letsupgrade-ambassador.png"
  },
  {
    title: "Ideathon at SRM Chennai",
    organization: "SRM Chennai",
    date: "March 2025",
    description: "I attended Ideathon 5.0 at SRM Chennai, where I got the opportunity to brainstorm, collaborate, and present innovative ideas.",
    linkedinUrl: "https://www.linkedin.com/posts/virat-kumar-b0b57024a_inceptrix2025-hackathon-techforgood-activity-7327211455424921600-kqxA",
    icon: FaCode,
    imageUrl: "/certificates/srm.png"
  },
  {
    title: "TechnoHacks Internship",
    organization: "TechnoHacks EduTech",
    date: "August 2023",
    description: "Completed internship program at TechnoHacks EduTech, gaining practical experience in software development and technology implementation.",
    linkedinUrl: "https://www.linkedin.com/posts/virat-kumar-b0b57024a_internship-careerstart-technohacksedutech-activity-7128412614077911040-aL6o",
    icon: FaLaptopCode,
    imageUrl: "/certificates/technohacks-internship.png"
  },
  
  {
    title: "Inceptrix 2025 Hackathon",
    organization: "Inceptrix",
    date: "March 2025",
    description: "Participated in Inceptrix 2025 hackathon, developing innovative solutions for real-world challenges using cutting-edge technologies.",
    linkedinUrl: "https://www.linkedin.com/posts/virat-kumar-b0b57024a_inceptrix2025-hackathon-techforgood-activity-7327211455424921600-kqxA",
    icon: FaCode,
    imageUrl: "/certificates/inceptrix-2025.png"
  },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-20 px-4">
      <SectionHeading 
        title="Certificates & Achievements" 
        subtitle="Showcasing my professional certifications and accomplishments"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[var(--color-background)] rounded-xl overflow-hidden group relative
                     transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                     border border-[var(--color-border)]"
          >
            {/* Certificate Image */}
            <div 
              className="relative w-full h-48 cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(cert.imageUrl)}
            >
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              {/* Title and Organization */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-border)] rounded-full">
                  <cert.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                    {cert.title}
                  </h3>
                  <p className="text-[var(--color-secondary)] text-sm">
                    {cert.organization} • {cert.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[var(--color-secondary)] text-sm mb-4">
                {cert.description}
              </p>

              {/* LinkedIn Link */}
              <a
                href={cert.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium
                         hover:gap-3 transition-all"
              >
                <FaLinkedin className="w-5 h-5" />
                <span>View on LinkedIn</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
  {selectedImage && (
    <>
      {/* Overlay background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedImage(null)}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 cursor-pointer"
      />

      {/* Centered modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="relative w-[90vw] h-[90vh] max-w-4xl max-h-[80vh]">
          <Image
            src={selectedImage}
            alt="Certificate"
            fill
            className="object-contain rounded-lg"
            quality={100}
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-[var(--color-background)] 
                     hover:bg-[var(--color-border)] transition-colors"
            aria-label="Close image view"
          >
            <FaTimes className="w-6 h-6 text-[var(--color-primary)]" />
          </button>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

    </section>
  );
};

export default Certificates; 