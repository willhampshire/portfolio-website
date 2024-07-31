import Image from 'next/image';
import React from 'react';

interface ProjectUnitProps {
    title: string;
    imageSrc: string;
    classNameImage?: string;
    description: React.ReactNode; // Changed to React.ReactNode to accept JSX
}

const ProjectUnit: React.FC<ProjectUnitProps> = ({ title, imageSrc, description,
                                                     classNameImage }) => {
    return (
        <div className="border-t border-gray-500 pt-4">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <div className="flex items-start space-x-4 my-8">
                <div className="flex-shrink-0">
                    <img className={classNameImage}
                        src={imageSrc}
                        alt="Project Image"
                        width="200"
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
