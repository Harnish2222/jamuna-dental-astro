import { GraduationCap, Stethoscope } from 'lucide-react';

interface TeamMember {
  photo: string;
  name: string;
  role: string;
  qualifications: string;
  bio: string;
}

interface TeamContent {
  badge?: string;
  heading_part1?: string;
  heading_part2?: string;
  description?: string;
  members?: TeamMember[];
}

export default function TeamSection({ content }: { content?: TeamContent }) {
  const members = content?.members || [];

  if (!members.length) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#F2F5F7] -skew-y-2 origin-top-left -z-10" />
      <div className="absolute -left-24 top-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-24 bottom-24 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-fade-up">
          <span className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full text-xs font-bold bg-primary text-white tracking-wide uppercase shadow-sm">
            {content?.badge || 'Our Experts'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {content?.heading_part1 || 'Meet Our '}
            <span className="text-primary">{content?.heading_part2 || 'Specialists'}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {content?.description || 'Our team of highly qualified and experienced dentists are dedicated to providing you with the best dental care possible.'}
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-8 max-w-[1200px] mx-auto">
          {/* First Row (3 items) */}
          {members.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.slice(0, 3).map((member, idx) => (
                <div 
                  key={idx} 
                  className={`group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 scroll-fade-up flex flex-col`}
                  style={{ animationDelay: `${(idx % 3) * 100}ms` }}
                >
                  
                  {/* Photo Area */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 flex-shrink-0">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow bg-white items-center text-center md:items-start md:text-left">
                    <div className="mb-5">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <div className="text-primary font-bold text-sm">
                        {member.role}
                      </div>
                    </div>

                    <div className="space-y-4">
                      
                      {member.qualifications && member.qualifications.trim() !== '' && (
                        <div className="flex items-start gap-3 text-sm text-gray-700">
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <GraduationCap className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                          </div>
                          <span className="leading-relaxed font-medium pt-1.5">{member.qualifications}</span>
                        </div>
                      )}
                      
                      {member.bio && member.bio.trim() !== '' && (
                        <div className="flex items-start gap-3 text-gray-500">
                          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100 mt-0.5 group-hover:bg-gray-100 transition-colors duration-300">
                            <Stethoscope className="w-4 h-4 text-gray-400" />
                          </div>
                          <p className="leading-relaxed text-sm italic pt-1.5 text-gray-600">"{member.bio}"</p>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Remaining Rows (up to 4 items per row) */}
          {members.length > 3 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {members.slice(3).map((member, idx) => (
                <div 
                  key={idx + 3} 
                  className={`group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 scroll-fade-up flex flex-col`}
                  style={{ animationDelay: `${(idx % 4) * 100}ms` }}
                >
                  
                  {/* Photo Area */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 flex-shrink-0">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow bg-white items-center text-center md:items-start md:text-left">
                    <div className="mb-5">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <div className="text-primary font-bold text-sm">
                        {member.role}
                      </div>
                    </div>

                    <div className="space-y-4">
                      
                      {member.qualifications && member.qualifications.trim() !== '' && (
                        <div className="flex items-start gap-3 text-sm text-gray-700">
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <GraduationCap className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                          </div>
                          <span className="leading-relaxed font-medium pt-1.5">{member.qualifications}</span>
                        </div>
                      )}
                      
                      {member.bio && member.bio.trim() !== '' && (
                        <div className="flex items-start gap-3 text-gray-500">
                          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100 mt-0.5 group-hover:bg-gray-100 transition-colors duration-300">
                            <Stethoscope className="w-4 h-4 text-gray-400" />
                          </div>
                          <p className="leading-relaxed text-sm italic pt-1.5 text-gray-600">"{member.bio}"</p>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
