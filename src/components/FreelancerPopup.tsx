import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import myPic from "@/assets/my_pic.jpeg";
import freelancerLogo from "@/assets/freelancer_logo.png";

const FreelancerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup immediately when website opens
    setIsOpen(true);
  }, []);

  const handleViewProfile = () => {
    window.open("https://www.freelancer.com/u/mubashir151214", "_blank");
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 max-w-[90vw] bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 transition-all duration-300 transform max-h-[600px]">
      <div className="relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
        >
          <span className="text-lg font-bold">×</span>
        </button>

        {/* Profile Image */}
        <div className="relative h-48">
          <img
            src={myPic}
            alt="My Profile"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          
          {/* Freelancer Logo Overlay */}
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
              <img
                src={freelancerLogo}
                alt="Freelancer"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 bg-white">
          <div className="mb-2">
            <h3 className="font-bold text-gray-900 mb-1">
              Check My Freelancer Profile
            </h3>
            <p className="text-xs text-gray-600 mb-2">
              View my portfolio and past work on Freelancer.com
            </p>
          </div>
          
          <Button
            onClick={handleViewProfile}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerPopup;