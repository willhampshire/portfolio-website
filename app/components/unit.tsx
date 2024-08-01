import React from 'react';

interface ProjectUnitProps {
    title: string;
    imageSrc: string;
    classNameImage?: string;
    description: React.ReactNode; // Changed to React.ReactNode to accept JSX
}

const ProjectUnit: React.FC<ProjectUnitProps> = ({ title, imageSrc, description, classNameImage }) => {
    return (
        <div className="border-t border-gray-500 pt-4">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 my-8">
                <div className="flex-shrink-0">
                    <img
                        className="md:image-project image-project"
                        src={imageSrc}
                        alt="Project Image"
                    />
                </div>
                <div className="flex-1">
                    <p>{description}</p> {/* Render description as React node */}
                </div>
            </div>
        </div>
    );
};

export default ProjectUnit;
