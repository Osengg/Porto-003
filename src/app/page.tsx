import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Code, Palette, Users, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-teal-100/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span>Portfolio Profesional</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Selamat Datang di
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Oseng
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Seseorang yang bersemangat dalam mengembangkan solusi digital yang inovatif dan estetis. 
              Menggabungkan kreativitas dengan teknologi untuk menciptakan pengalaman digital yang luar biasa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Lihat Portofolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-8 py-3 text-lg font-medium transition-all duration-300">
                Hubungi Saya
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Keahlian Utama
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Berbagai keahlian yang saya kuasai untuk membantu mewujudkan ide digital Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white border-emerald-200 hover:shadow-lg transition-all duration-300 hover:border-emerald-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Web Development</h3>
              <p className="text-slate-600 text-sm">Frontend & Backend development dengan teknologi modern</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-teal-200 hover:shadow-lg transition-all duration-300 hover:border-teal-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">UI/UX Design</h3>
              <p className="text-slate-600 text-sm">Desain interface yang intuitif dan pengalaman pengguna yang optimal</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200 hover:shadow-lg transition-all duration-300 hover:border-green-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Team Collaboration</h3>
              <p className="text-slate-600 text-sm">Bekerja sama dalam tim untuk mencapai hasil terbaik</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-lime-200 hover:shadow-lg transition-all duration-300 hover:border-lime-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-lime-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Problem Solving</h3>
              <p className="text-slate-600 text-sm">Menyelesaikan tantangan teknis dengan solusi inovatif</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Proyek Terbaru
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Beberapa karya terbaru yang telah saya kerjakan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-500"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">E-Commerce Platform</h3>
              <p className="text-slate-600 mb-4">Platform e-commerce modern dengan fitur lengkap dan performa optimal</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">MongoDB</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-teal-400 to-green-500"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Mobile Banking App</h3>
              <p className="text-slate-600 mb-4">Aplikasi perbankan mobile dengan keamanan tinggi dan user experience intuitif</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm">TypeScript</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-green-400 to-lime-500"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Dashboard Analytics</h3>
              <p className="text-slate-600 mb-4">Dashboard analitik data real-time dengan visualisasi yang menarik</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm">D3.js</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Python</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-8 py-3 text-lg font-medium transition-all duration-300">
            Lihat Semua Proyek
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Saya siap membantu mewujudkan visi digital Anda menjadi kenyataan
          </p>
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            Mulai Proyek Baru
          </Button>
        </div>
      </section>
    </div>
  )
}