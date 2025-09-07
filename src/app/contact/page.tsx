'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Github,
  Linkedin,
  Twitter,
  Globe,
  Briefcase,
  Heart
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@oseng.dev',
      description: 'Respon dalam 24 jam kerja'
    },
    {
      icon: Phone,
      title: 'Telepon',
      value: '+62 812-3456-7890',
      description: 'Senin - Jumat, 09:00 - 18:00 WIB'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      value: 'Jakarta, Indonesia',
      description: 'Siap untuk remote atau onsite'
    },
    {
      icon: Clock,
      title: 'Jam Kerja',
      value: '09:00 - 18:00 WIB',
      description: 'Senin - Jumat (GMT+7)'
    }
  ]

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: 'https://github.com/Osengg', color: 'bg-gray-800 hover:bg-gray-700' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/oseeng183/', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/oseng', color: 'bg-sky-500 hover:bg-sky-600' },
    { icon: Globe, name: 'Portfolio', url: 'https://oseng.dev', color: 'bg-emerald-600 hover:bg-emerald-700' }
  ]

  const services = [
    { title: 'Web Development', icon: Briefcase, description: 'Pengembangan website modern dan responsif' },
    { title: 'UI/UX Design', icon: Heart, description: 'Desain interface yang intuitif dan menarik' },
    { title: 'Consulting', icon: MessageCircle, description: 'Konsultasi teknis dan arsitektur sistem' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Pesan berhasil dikirim! Saya akan segera menghubungi Anda.')
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <MessageCircle className="w-4 h-4" />
          <span>Hubungi Saya</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Mari Berkolaborasi
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Saya selalu terbuka untuk diskusi tentang proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda.
        </p>
      </section>

      {/* Contact Form */}
      <section className="grid lg:grid-cols-2 gap-12">
        <Card className="bg-white border-emerald-200 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Kirim Pesan</h2>
            <p className="text-slate-600 mb-8">
              Isi formulir di bawah ini dan saya akan segera menghubungi Anda dalam waktu 24 jam.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Nama Lengkap
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400/20"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400/20"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subjek
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400/20"
                  placeholder="Diskusi Proyek Baru"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400/20"
                  placeholder="Ceritakan tentang proyek Anda..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Mengirim...
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Pesan
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Details */}
          <Card className="bg-white border-teal-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">{info.title}</h3>
                        <p className="text-emerald-600 font-medium">{info.value}</p>
                        <p className="text-sm text-slate-500">{info.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-white border-green-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Media Sosial</h2>
              <p className="text-slate-600 mb-6">
                Ikuti saya di media sosial untuk update terbaru dan diskusi teknis
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-3 rounded-lg ${social.color} text-white hover:shadow-lg transition-all duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Layanan yang Tersedia
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Berbagai layanan yang dapat saya bantu untuk mewujudkan visi digital Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="bg-white border-lime-200 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-200 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Pertanyaan Umum
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Berapa estimasi waktu untuk proyek website?
              </h3>
              <p className="text-slate-600">
                Waktu estimasi tergantung kompleksitas proyek. Website sederhana membutuhkan 2-4 minggu, 
                sedangkan aplikasi kompleks membutuhkan 2-6 bulan.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Apakah Anda menerima proyek freelance?
              </h3>
              <p className="text-slate-600">
                Ya, saya selalu terbuka untuk proyek freelance baik jangka pendek maupun jangka panjang. 
                Hubungi saya untuk diskusi lebih detail.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Teknologi apa yang Anda kuasai?
              </h3>
              <p className="text-slate-600">
                Saya menguasai berbagai teknologi termasuk React, Vue.js, Node.js, Python, dan tools modern lainnya. 
                Lihat halaman "Tentang" untuk daftar lengkap.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Bagaimana proses kerja Anda?
              </h3>
              <p className="text-slate-600">
                Proes kerja meliputi konsultasi, perencanaan, desain, pengembangan, testing, dan deployment. 
                Komunikasi terbuka di setiap tahap.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Mari diskusikan ide Anda dan wujudkan visi digital menjadi kenyataan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              <Mail className="w-5 h-5 mr-2" />
              Kirim Email
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-3 text-lg font-medium transition-all duration-300">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Sekarang
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}