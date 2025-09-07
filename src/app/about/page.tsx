import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User, GraduationCap, Briefcase, Award, Heart, Code, Coffee, Users } from 'lucide-react'

export default function About() {
  const personalInfo = {
    name: "Oseng",
    title: "Full Stack Developer & UI/UX Designer",
    location: "Jakarta, Indonesia",
    experience: "5+ Tahun",
    email: "hello@oseng.dev",
    description: "Seseorang yang bersemangat dalam mengembangkan solusi digital yang inovatif dan estetis. Menggabungkan kreativitas dengan teknologi untuk menciptakan pengalaman digital yang luar biasa."
  }

  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "REST API"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "Figma", "Adobe XD", "VS Code", "Linux", "CI/CD"] },
    { category: "Design", items: ["UI/UX Design", "Responsive Design", "Wireframing", "Prototyping", "User Research", "Design Systems"] }
  ]

  const experience = [
    {
      company: "TechCorp Indonesia",
      position: "Senior Full Stack Developer",
      period: "2021 - Sekarang",
      description: "Mengembangkan platform e-commerce skala besar dengan teknologi modern dan arsitekktur microservices."
    },
    {
      company: "Digital Studio Pro",
      position: "Full Stack Developer",
      period: "2019 - 2021",
      description: "Bertanggung jawab atas pengembangan aplikasi web dan mobile untuk berbagai klien startup."
    },
    {
      company: "Creative Web Agency",
      position: "Frontend Developer",
      period: "2018 - 2019",
      description: "Mengfokuskan pada pengembangan frontend dengan fokus pada user experience dan performa."
    }
  ]

  const education = [
    {
      institution: "Universitas Indonesia",
      degree: "Sarjana Teknik Informatika",
      period: "2014 - 2018",
      description: "Lulusan cum laude dengan IPK 3.85/4.00"
    },
    {
      institution: "Coding Bootcamp",
      degree: "Full Stack Web Development",
      period: "2018",
      description: "Intensive coding bootcamp dengan fokus pada teknologi modern"
    }
  ]

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2022" },
    { name: "Google UX Design Professional", issuer: "Google", year: "2021" },
    { name: "React Developer Certification", issuer: "Meta", year: "2021" },
    { name: "Python for Data Science", issuer: "IBM", year: "2020" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <User className="w-4 h-4" />
          <span>Tentang Saya</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Kenali Saya Lebih Dekat
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.description}
        </p>
      </section>

      {/* Personal Info Card */}
      <section>
        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Informasi Pribadi</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Nama</p>
                      <p className="font-semibold text-slate-800">{personalInfo.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Posisi</p>
                      <p className="font-semibold text-slate-800">{personalInfo.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Lokasi</p>
                      <p className="font-semibold text-slate-800">{personalInfo.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-lime-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Pengalaman</p>
                      <p className="font-semibold text-slate-800">{personalInfo.experience}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Email</p>
                      <p className="font-semibold text-slate-800">{personalInfo.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                    <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                      <div className="w-40 h-40 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full flex items-center justify-center">
                        <Code className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Coffee className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Keahlian Teknis
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Berbagai teknologi dan tools yang saya kuasai untuk menghasilkan solusi digital berkualitas tinggi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="bg-white border-emerald-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    <Code className="w-4 h-4 text-emerald-600" />
                  </div>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Pengalaman Kerja
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Perjalanan karir saya dalam dunia pengembangan software dan desain
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <Card key={index} className="bg-white border-teal-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{exp.position}</h3>
                    <p className="text-emerald-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Education */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Pendidikan
            </h2>
          </div>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="bg-white border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800">{edu.degree}</h3>
                  <p className="text-emerald-600 font-medium">{edu.institution}</p>
                  <p className="text-sm text-slate-500 mb-2">{edu.period}</p>
                  <p className="text-slate-600 text-sm">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Sertifikasi
            </h2>
          </div>
          
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white border-lime-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">{cert.name}</h3>
                      <p className="text-emerald-600 font-medium text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-slate-500 bg-lime-100 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Filosofi Kerja Saya
          </h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Saya percaya bahwa teknologi harus menjadi alat untuk meningkatkan kualitas hidup manusia. 
            Setiap baris kode yang saya tulis bertujuan untuk menciptakan solusi yang tidak hanya fungsional, 
            tetapi juga memberikan pengalaman yang memuaskan bagi pengguna akhir.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Passion</h3>
              <p className="text-emerald-100 text-sm">Semangat dalam setiap proyek yang dikerjakan</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
              <p className="text-emerald-100 text-sm">Kualitas adalah prioritas utama</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-emerald-100 text-sm">Bekerja sama untuk mencapai hasil terbaik</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}