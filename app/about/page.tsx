import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Heart, Leaf, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="FarmConnect Logo"
              width={32}
              height={32}
              className="rounded-md bg-emerald-600 p-1"
            />
            <span className="text-xl font-bold text-emerald-700">FarmConnect</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/marketplace"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Marketplace
            </Link>
            <Link
              href="/recycling"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Recycling
            </Link>
            <Link href="/about" className="text-sm font-medium text-emerald-600 border-b-2 border-emerald-600 pb-1">
              About Us
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-emerald-700">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-emerald-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Our Mission</h1>
              <p className="text-xl text-gray-600 mb-8">
                At FarmConnect, we're on a mission to transform agriculture by connecting farmers directly with buyers
                while promoting sustainable practices and reducing waste.
              </p>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=FarmConnect+Team"
                  alt="FarmConnect Team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  FarmConnect was founded in 2020 by a group of agricultural enthusiasts and tech innovators who saw the
                  need for a more efficient and sustainable food system.
                </p>
                <p className="text-gray-600 mb-4">
                  What began as a small pilot project connecting 10 local farmers with neighborhood buyers has grown
                  into a thriving platform serving thousands of users across the country.
                </p>
                <p className="text-gray-600">
                  Our journey has been guided by a simple principle: creating technology that serves people and the
                  planet. By connecting farmers directly with buyers, we eliminate unnecessary middlemen, reduce food
                  miles, and ensure fresher produce reaches consumers.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -z-10 top-0 left-0 w-3/4 h-3/4 bg-emerald-100 rounded-lg transform -translate-x-4 -translate-y-4"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Our+Journey"
                  alt="Our Journey"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Values</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do at FarmConnect.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We prioritize environmentally friendly practices and waste reduction in all aspects of our business.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-600">
                  We believe in building strong connections between farmers, buyers, and local communities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We're committed to connecting buyers with the highest quality, freshest produce available.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-gray-600">
                  We believe in honest, clear communication about where food comes from and how it's produced.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Meet Our Team</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                The passionate individuals behind FarmConnect.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Co-Founder & CEO",
                  bio: "Former organic farmer with 15 years of experience in sustainable agriculture.",
                },
                {
                  name: "Michael Chen",
                  role: "Co-Founder & CTO",
                  bio: "Tech innovator with a passion for using technology to solve real-world problems.",
                },
                {
                  name: "Aisha Patel",
                  role: "Head of Sustainability",
                  bio: "Environmental scientist specializing in agricultural waste management and recycling.",
                },
                {
                  name: "Carlos Rodriguez",
                  role: "Head of Farmer Relations",
                  bio: "Third-generation farmer dedicated to supporting agricultural communities.",
                },
                {
                  name: "Emma Wilson",
                  role: "Head of Marketing",
                  bio: "Digital marketing expert with a background in promoting sustainable businesses.",
                },
                {
                  name: "David Kim",
                  role: "Head of Product",
                  bio: "Product designer focused on creating intuitive, accessible user experiences.",
                },
              ].map((member, index) => (
                <div key={index} className="bg-emerald-50 rounded-lg overflow-hidden shadow-md">
                  <div className="h-64 bg-emerald-200 relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=${member.name.split(" ")[0]}`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-emerald-600 mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 bg-emerald-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Join Our Mission</h2>
            <p className="max-w-2xl mx-auto text-emerald-50 mb-8">
              Whether you're a farmer, a buyer, or simply passionate about sustainable agriculture, there's a place for
              you in the FarmConnect community.
            </p>
            <Link href="/signup">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="FarmConnect Logo"
                  width={32}
                  height={32}
                  className="rounded-md bg-emerald-600 p-1"
                />
                <span className="text-xl font-bold text-white">FarmConnect</span>
              </Link>
              <p className="text-gray-400">Connecting farmers and buyers while promoting sustainable agriculture.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/marketplace" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/recycling" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Recycling
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Stay updated with our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-emerald-500 w-full"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FarmConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
