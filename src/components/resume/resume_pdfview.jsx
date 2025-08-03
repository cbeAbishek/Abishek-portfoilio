import { useState } from 'react';
import { resume } from '../../assets'; // Adjust the path as necessary

const ResumePDFView = () => {
    const [showHint, setShowHint] = useState(false);

    const pdfPath = resume; 

    const handleMouseEnter = () => {
        setShowHint(true);
    };

    const handleMouseLeave = () => {
        setShowHint(false);
    };

    const openPDF = () => {
        window.open(pdfPath, '_blank');
    };

    return (
        <div className="mt-28 max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                    src={pdfPath}
                    title="Resume Preview"
                    className="w-full h-96 md:h-[600px] border-0"
                />
            </div>
            
            <div className="flex justify-center mt-6">
                <div className="relative">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={openPDF}
                    >
                        View Full Resume
                    </button>
                    {showHint && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm py-2 px-3 rounded-md whitespace-nowrap z-10">
                            Click to open resume in new tab
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResumePDFView;