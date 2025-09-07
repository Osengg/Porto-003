import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Calendar, Eye } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Platform e-commerce modern dengan fitur lengkap termasuk keranjang belanja, pembayaran online, dan sistem inventory yang real-time.",
      image: "bg-gradient-to-br from-emerald-400 to-teal-500",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      liveUrl: "https://ecommerce-demo.oseng.dev",
      githubUrl: "https://github.com/oseng/ecommerce-platform",
      featured: true,
      completed: "2024",
      stats: { users: "10K+", rating: "4.8/5", revenue: "Rp 5M+" }
    },
    {
      title: "Mobile Banking App",
      description: "Aplikasi perbankan mobile dengan keamanan tinggi, biometrik authentication, dan fitur manajemen keuangan personal.",
      image: "bg-gradient-to-br from-teal-400 to-green-500",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
      liveUrl: "https://banking-demo.oseng.dev",
      githubUrl: "https://github.com/oseng/mobile-banking",
      featured: true,
      completed: "2024",
      stats: { downloads: "50K+", rating: "4.9/5", security: "Bank Grade" }
    },
    {
      title: "Analytics Dashboard",
      description: "Dashboard analitik data real-time dengan visualisasi interaktif untuk monitoring bisnis dan pengambilan keputusan.",
      image: "bg-gradient-to-br from-green-400 to-lime-500",
      category: "Data Visualization",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      liveUrl: "https://analytics-demo.oseng.dev",
      githubUrl: "https://github.com/oseng/analytics-dashboard",
      featured: false,
      completed: "2023",
      stats: { charts: "50+", data: "Real-time", speed: "<1s" }
    },
    {
      title: "Social Media Platform",
      description: "Platform media sosial dengan fitur real-time chat, story sharing, dan algorithm recommendation yang canggih.",
      image: "bg-gradient-to-br from-lime-400 to-emerald-500",
      category: "Social Media",
      technologies: ["Next.js", "Socket.io", "GraphQL", "PostgreSQL"],
      liveUrl: "https://social-demo.oseng.dev",
      githubUrl: "https://github.com/oseng/social-platform",
      featured: false,
      completed: "2023",
      stats: { users: "25K+", messages: "1M+/day", features: "20+" }
    },
    {
      title: "Learning Management System",
      description: "Sistem manajemen pembelajaran untuk institusi pendidikan dengan course management, grading system, dan analytics.",
      image: "bg-gradient-to-br from-emerald-400 to-green-500",
      category: "Education",
      technologies: ["React", "Django", "MySQL", "WebRTC"],
      liveUrl: "https://lms-demo.oseng.dev",
      githubUrl: "https://github.com/oseng/lms-system",
      featured: false,
      completed: "2023",
      stats: { courses: "100+", students: "5K+", completion: "85%" }
    },
    {
      title: "Task Management App",
      description: "Aplikasi manajemen tugas tim dengan fitur collaboration, real-time updates, dan progress tracking.",
      image: "bg-gradient-to-br from-teal-400 to-lime-500",
      category: "Productivity",
      technologies: ["Angular", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://task-demo.oseng.dev",
      githubUrl: "https://github.com/oseng/task-manager",
      featured: false,
      completed: "2022",
      stats: { teams: "200+", tasks: "10K+", efficiency: "40%" }
    }
  ]

  const categories = ["All", "Web Development", "Mobile Development", "Data Visualization", "Social Media", "Education", "Productivity"]

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)
  const regularProjects = filteredProjects.filter(project => !project.featured)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <ExternalLink className="w-4 h-4" />
          <span>Proyek</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Karya & Proyek
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Koleksi proyek yang telah saya kerjakan menampilkan berbagai solusi digital inovatif untuk berbagai kebutuhan bisnis dan teknologi.
        </p>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Proyek Unggulan
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Beberapa proyek terbaik yang menampilkan kemampuan teknis dan kreativitas saya
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-white border-emerald-200 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className={`h-64 ${project.image} relative`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 shadow-lg">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Lihat Demo
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-emerald-100 text-emerald-700">
                    {project.category}
                  </Badge>
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span>{project.completed}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{project.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-emerald-600">{value}</div>
                      <div className="text-xs text-slate-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-emerald-200 text-emerald-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex space-x-4">
                  <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Semua Proyek
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Jelajahi proyek lainnya berdasarkan kategori
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg" 
                  : "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Regular Projects Grid */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, index) => (
            <Card key={index} className="bg-white border-teal-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className={`h-48 ${project.image} relative`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-teal-100 text-teal-700 text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" />
                    <span>{project.completed}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-teal-200 text-teal-700 text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="border-teal-200 text-teal-700 text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-teal-300 text-teal-700 hover:bg-teal-50 flex-1">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-500 hover:to-green-500 text-white flex-1">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Stats */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Statistik Proyek
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-emerald-100">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100K+</div>
              <div className="text-emerald-100">Pengguna Aktif</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-emerald-100">Klien Puas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-emerald-100">Uptime</div>
            </div>
          </div>
          
          <div className="mt-12">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              <Github className="w-5 h-5 mr-2" />
              Lihat Semua di GitHub
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}