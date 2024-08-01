import React from 'react';

interface ProjectUnitProps {
    title: string;
    imageSrc: string;
    classNameImage?: string;
    classNameText?: string;
    description: React.ReactNode; // Changed to React.ReactNode to accept JSX
}

const ProjectUnit: React.FC<ProjectUnitProps> = ({ title, imageSrc, description, classNameImage, classNameText }) => {
    return (
        <div className="border-t border-gray-500 pt-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 my-8">
                <div className="flex-shrink-0">
                    <img
                        className={`${classNameImage} md:image-project image-project`}
                        src={imageSrc}
                        alt="Project Image"
                    />
                </div>
                <div className="flex-1">
                    <p className={`${classNameText}`}>{description}</p> {/* Render description as React node */}
                </div>
            </div>
        </div>
    );
};

export default ProjectUnit;
