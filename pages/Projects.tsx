import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { X, ExternalLink, ChevronRight, Tag, PlayCircle, Calendar, Image as ImageIcon } from 'lucide-react';
import { ProjectItem } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="py-10 animate-in fade-in duration-500 relative">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Projects</h1>
        <p className="text-slate-500">Highlights of my technical work in robotics and software.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">{project.subtitle}</div>
                <div className="flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-full">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1 whitespace-pre-line">
                {project.description.split('\n')[0]}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-50">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                   <span className="text-xs bg-slate-50 text-slate-400 px-2 py-1 rounded">+ more</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md p-4 border-b border-slate-100 flex justify-between items-center">
               <div className="pr-4">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">{selectedProject.subtitle} ({selectedProject.year})</div>
                  <h2 className="text-xl font-bold text-slate-800 truncate">{selectedProject.title}</h2>
               </div>
               <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-800"
               >
                 <X className="w-6 h-6" />
               </button>
            </div>
            
            <div className="p-6 sm:p-8 space-y-8">
               {/* Main Image */}
               <img 
                 src={selectedProject.imageUrl} 
                 alt={selectedProject.title} 
                 className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-md"
               />
               
               {/* Tags */}
               <div className="flex flex-wrap gap-2">
                 {selectedProject.tags.map(tag => (
                   <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                     <Tag className="w-3 h-3" /> {tag}
                   </span>
                 ))}
               </div>

               {/* Description */}
               <div className="prose prose-slate max-w-none">
                 <h3 className="text-lg font-semibold text-slate-900 mb-2">Overview</h3>
                 <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                   {selectedProject.description}
                 </p>

                 {/* External Links */}
                 {selectedProject.links && selectedProject.links.length > 0 && (
                   <div className="mt-4 flex flex-wrap gap-3">
                     {selectedProject.links.map((link, idx) => (
                       <a 
                         key={idx}
                         href={link.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition-colors border border-slate-200 font-medium text-sm"
                       >
                         <ExternalLink className="w-4 h-4" />
                         {link.label}
                       </a>
                     ))}
                   </div>
                 )}
               </div>
               
               {/* Media (Videos/GIFs) */}
               {selectedProject.media && selectedProject.media.length > 0 && (
                 <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <PlayCircle className="w-5 h-5 text-red-500" />
                      Demo & Media
                    </h3>
                    <div className="grid grid-cols-1 gap-6">
                      {selectedProject.media.map((mediaItem, idx) => (
                        <div key={idx} className="space-y-2">
                          {mediaItem.type === 'youtube' ? (
                            <div className="aspect-video w-full bg-slate-900 rounded-xl overflow-hidden shadow-lg relative">
                              <iframe 
                                width="100%" 
                                height="100%" 
                                src={`https://www.youtube.com/embed/${mediaItem.url}?origin=${window.location.origin}&rel=0`} 
                                title={mediaItem.caption || "Project Video"} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                              ></iframe>
                            </div>
                          ) : (
                            <div className="w-full bg-slate-100 rounded-xl overflow-hidden shadow-lg border border-slate-200">
                              <img 
                                src={mediaItem.url} 
                                alt={mediaItem.caption || "Project Demo"} 
                                className="w-full h-auto max-h-[500px] object-contain"
                              />
                            </div>
                          )}
                          
                          {mediaItem.caption && (
                            <p className="text-sm text-slate-500 font-medium ml-1 flex items-center gap-1">
                               {mediaItem.type === 'image' ? <ImageIcon className="w-3 h-3" /> : <PlayCircle className="w-3 h-3" />}
                               {mediaItem.caption}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                 </div>
               )}

               {/* Key Contributions */}
               {selectedProject.details && selectedProject.details.length > 0 && (
                 <div>
                   <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Contributions</h3>
                   <ul className="space-y-3">
                     {selectedProject.details.map((detail, idx) => (
                       <li key={idx} className="flex items-start gap-3 text-slate-600">
                         <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                         <span>{detail}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               )}
            </div>
          </div>
          {/* Close detail on click outside */}
          <div className="absolute inset-0 -z-10" onClick={() => setSelectedProject(null)}></div>
        </div>
      )}
    </div>
  );
};

export default Projects;