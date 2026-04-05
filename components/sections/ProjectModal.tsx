import Image from 'next/image';
import { Project } from '@/types';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    if (!project) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-[95vw] max-w-[95vw] md:w-[60vw] md:max-w-[60vw] max-h-[85vh] overflow-y-auto p-4 md:p-6 rounded-lg">
                <DialogHeader>
                    <DialogTitle className="text-xl md:text-2xl">{project.title}</DialogTitle>
                    <DialogDescription>{project.date}</DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    {project.thumbnail && (
                        <div className="relative w-full h-56 sm:h-72 md:h-96">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 95vw, 60vw"
                                className="object-contain rounded-lg bg-gray-50 dark:bg-gray-900"
                            />
                        </div>
                    )}

                    <div>
                        <h3 className="font-semibold mb-2">説明</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">使用技術</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-4">
                        {project.githubUrl && (
                            <Button asChild className="flex-1 md:flex-none">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="mr-2 h-4 w-4" />
                                    GitHub
                                </a>
                            </Button>
                        )}
                        {project.demoUrl && (
                            <Button variant="outline" asChild className="flex-1 md:flex-none">
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    {project.id === "behave-ui" ? "記事" : "デモ"}
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectModal;