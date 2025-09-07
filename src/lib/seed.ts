import { db } from './db'

async function main() {
  // Add sample projects
  await db.project.createMany({
    data: [
      {
        title: "E-Commerce Platform",
        description: "Platform e-commerce modern dengan fitur lengkap termasuk keranjang belanja, pembayaran online, dan sistem inventory yang real-time.",
        image: "bg-gradient-to-br from-emerald-400 to-teal-500",
        category: "Web Development",
        technologies: "React, Node.js, MongoDB, Stripe, Redis",
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
        technologies: "React Native, Firebase, TypeScript, Redux",
        liveUrl: "https://banking-demo.oseng.dev",
        githubUrl: "https://github.com/oseng/mobile-banking",
        featured: true,
        completed: "2024",
        stats: { downloads: "50K+", rating: "4.9/5", security: "Bank Grade" }
      }
    ]
  })

  // Add sample skills
  await db.skill.createMany({
    data: [
      { category: "Frontend", name: "React", description: "Modern React development with hooks and context" },
      { category: "Frontend", name: "Vue.js", description: "Progressive JavaScript framework" },
      { category: "Backend", name: "Node.js", description: "JavaScript runtime for server-side development" },
      { category: "Backend", name: "Python", description: "Versatile programming language for web development" }
    ]
  })

  // Add sample experience
  await db.experience.createMany({
    data: [
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
      }
    ]
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })