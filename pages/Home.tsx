import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT, SUMMARY, SKILLS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-10 md:py-20">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium tracking-wide">
            Software Engineer & Roboticist
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Hi, I'm <span className="text-blue-600">Zane Tsai</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            {SUMMARY}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/projects" className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-200">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/resume" className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:border-slate-400 transition-all hover:bg-slate-50">
              My Resume
            </Link>
          </div>
        </div>
        
        {/* Contact Card */}
        <div className="w-full md:w-auto">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 w-full md:w-80">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <div className="p-2 bg-slate-50 rounded-lg"><Mail className="w-4 h-4" /></div>
                <span className="text-sm truncate">{CONTACT.email}</span>
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <div className="p-2 bg-slate-50 rounded-lg"><Linkedin className="w-4 h-4" /></div>
                <span className="text-sm">LinkedIn Profile</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg"><Phone className="w-4 h-4" /></div>
                <span className="text-sm">{CONTACT.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg"><MapPin className="w-4 h-4" /></div>
                <span className="text-sm">{CONTACT.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="py-10 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Technical Proficiency</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-4 text-lg">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;