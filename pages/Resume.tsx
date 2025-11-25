import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin, ExternalLink, Link2 } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 animate-in slide-in-from-bottom-4 duration-700 px-4 md:px-0">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Experience & Education</h1>
        <p className="text-slate-500">A timeline of my professional career and academic background.</p>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12 pb-10">
        {EXPERIENCE.map((item, index) => (
          <div key={item.id} className="relative pl-8 md:pl-16 group">
            {/* Timeline Dot */}
            <div 
              className={`absolute -left-[9px] top-2 w-5 h-5 rounded-full border-4 border-white shadow-sm transition-all duration-300 
                ${item.type === 'work' 
                  ? 'bg-blue-600 group-hover:bg-blue-500 group-hover:scale-110' 
                  : 'bg-emerald-500 group-hover:bg-emerald-400 group-hover:scale-110'
                }`}
            ></div>
            
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
              {/* Date Column - Increased size */}
              <div className="md:w-48 flex-shrink-0 pt-1">
                <div className="flex items-center gap-2 text-xl font-bold text-slate-700 mb-2 group-hover:text-blue-600 transition-colors">
                  <Calendar className="w-5 h-5 text-slate-400" />
                  {item.period}
                </div>
                <div className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wide
                  ${item.type === 'work' ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'}`}>
                  {item.type}
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col mb-4">
                  
                  {/* Header: Role + Location */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight whitespace-pre-line">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium whitespace-nowrap flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-lg">
                    {/* Company Link */}
                    {item.companyUrl ? (
                      <a 
                        href={item.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1.5"
                      >
                        {item.company}
                        <ExternalLink className="w-4 h-4 opacity-50" />
                      </a>
                    ) : (
                      <span className="font-semibold text-slate-700">{item.company}</span>
                    )}

                    {/* APRILab Link */}
                    {item.labName && item.labUrl && (
                      <div className="flex items-center gap-2 text-slate-400">
                        <a 
                          href={item.labUrl}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                        >
                           <Link2 className="w-4 h-4" />
                           {item.labName}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center border-t border-slate-200 pt-8">
         <a href="/metadata.json" download className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-blue-600 transition-colors">
            Download Resume Data (JSON)
         </a>
      </div>
    </div>
  );
};

export default Resume;