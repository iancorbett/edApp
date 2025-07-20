import React from "react";

export const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-red-50 to-red-100 py-12 px-4 sm:px-6 border-2 border-black rounded-md shadow-xl">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          About EdApp
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
        This prototype is part of a larger project aimed at streamlining student behavior and intervention data collection for schools. 
        Built from scratch as a capstone collaboration between an educator and a software engineer, this early version demonstrates 
        key user functionality and lays the groundwork for scalable development. Features Implemented So Far: • Clean, teacher-friendly 
        login system • Streamlined student observation entry form • Functional user interface with minimalist design • Local database 
        etup (undergoing optimization for future cloud scalability) Planned Features: • Multi-school database architecture 
        (multi-tenant support) • Benchmark tracking (Fall/Winter/Spring performance views) • Tiered intervention tools 
        (CICO, contracts, ABC data, etc.) • Admin oversight dashboard (assign access, triage flagged data) • Role-based access 
        (teachers vs. admin views) • Visual data dashboards (student and class-level trends) • Needs Review workflow 
        (flags for admin follow-up) • AI-assisted tagging and alert system • Student reflection / self-monitoring portal 
        • Exportable data for SPED/504/MTSS documentation Built for: • Special education teams • General ed teachers collecting 
        Tier 1 data • Admins managing MTSS or CI3T frameworks • Schools seeking better insight with less paperwork
        </p>
      </div>
    </section>
  );
};
