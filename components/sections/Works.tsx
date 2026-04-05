"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectModal from './ProjectModal';
import { projects } from '@/data/projects';
import { Project } from '@/types';

const Works = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);

    // Client-side sorting to avoid hydration mismatch
    const [sortedProjects, setSortedProjects] = useState<Project[]>(projects);

    React.useEffect(() => {
        const sorted = [...projects].sort((a, b) => {
            // Simple string comparison for date
            return b.date.localeCompare(a.date);
        });
        setSortedProjects(sorted);
    }, []);

    const handleProjectSelect = (project: Project, index: number) => {
        setSelectedProject(project);
        setSelectedIndex(index);
    };

    const handleNext = () => {
        const nextIndex = selectedIndex + 1;
        if (nextIndex < sortedProjects.length) {
            setSelectedIndex(nextIndex);
            setSelectedProject(sortedProjects[nextIndex]);
        }
    };

    const handlePrevious = () => {
        const prevIndex = selectedIndex - 1;
        if (prevIndex >= 0) {
            setSelectedIndex(prevIndex);
            setSelectedProject(sortedProjects[prevIndex]);
        }
    };

    const handleClose = () => {
        setSelectedProject(null);
        setSelectedIndex(-1);
    };

    return (
        <section className="bg-gray-50 py-16" id="works">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-12 text-gray-900">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sortedProjects.map((project, index) => (
                        <Card
                            key={project.id}
                            className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
                            onClick={() => handleProjectSelect(project, index)}
                        >
                            {project.thumbnail && (
                                <div className="relative w-full h-48">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                                <CardDescription className="text-sm">{project.date}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="text-gray-700 text-sm line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.slice(0, 3).map((tag, index) => (
                                        <Badge key={index} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <Badge variant="secondary" className="text-xs">+{project.tags.length - 3}</Badge>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={selectedProject !== null}
                onClose={handleClose}
                currentIndex={selectedIndex >= 0 ? selectedIndex : 0}
                totalProjects={sortedProjects.length}
                onNext={handleNext}
                onPrevious={handlePrevious}
            />
        </section>
    );
};

export default Works;