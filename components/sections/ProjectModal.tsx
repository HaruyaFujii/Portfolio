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
            <DialogContent className="max-w-[60vw] w-[60vw] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                    <DialogDescription>{project.date}</DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    {project.thumbnail && (
                        <div className="relative w-full h-96">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    )}

                    <div>
                        <h3 className="font-semibold mb-2">説明</h3>
                        <p className="text-gray-700">{project.description}</p>
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

                    <div className="flex gap-4 pt-4">
                        {project.githubUrl && (
                            <Button asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="mr-2 h-4 w-4" />
                                    GitHub
                                </a>
                            </Button>
                        )}
                        {project.demoUrl && (
                            <Button variant="outline" asChild>
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