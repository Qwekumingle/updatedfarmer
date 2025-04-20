import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, MapPin, Recycle, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function RecyclingPage() {
  // Sample recycling centers data
  const recyclingCenters = [
    {
      id: 1,
      name: "Green Valley Recycling Center",
      address: "123 Eco Lane, Green Valley, CA 94530",
      distance: "2.3 miles",
      materials: ["Organic Waste", "Plastic", "Cardboard"],
      image: "/placeholder.svg?height=200&width=300&text=Green+Valley",
    },
    {
      id: 2,
      name: "Riverside Agricultural Waste Facility",
      address: "456 Farm Road, Riverside, CA 94531",
      distance: "5.1 miles",
      materials: ["Organic Waste", "Compost", "Fertilizer"],
      image: "/placeholder.svg?height=200&width=300&text=Riverside",
    },
    {
      id: 3,
      name: "Sunnyvale Composting Center",
      address: "789 Compost Way, Sunnyvale, CA 94532",
      distance: "7.8 miles",
      materials: ["Organic Waste", "Food Waste", "Garden Waste"],
      image: "/placeholder.svg?height=200&width=300&text=Sunnyvale",
    },
    {
      id: 4,
      name: "Oakridge Farm Waste Collection",
      address: "101 Oak Street, Oakridge, CA 94533",
      distance: "10.2 miles",
      materials: ["Organic Waste", "Plastic", "Metal"],
      image: "/placeholder.svg?height=200&width=300&text=Oakridge",
    },
  ]

  // Sample recycling statistics
  const recyclingStats = [
    { label: "Tons of Waste Recycled", value: "1,250", icon: Recycle },
    { label: "Active Collection Centers", value: "48", icon: MapPin },
    { label: "Participating Farmers", value: "320", icon: Truck },
    { label: "Recycling Programs", value: "15", icon: CheckCircle },
  ]

  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Composting Workshop",
      date: "July 15, 2023",
      location: "Green Valley Recycling Center",
      image: "/placeholder.svg?height=200&width=300&text=Composting+Workshop",
    },
    {
      id: 2,
      title: "Agricultural Waste Management Seminar",
      date: "July 22, 2023",
      location: "FarmConnect Headquarters",
      image: "/placeholder.svg?height=200&width=300&text=Waste+Management",
    },
    {
      id: 3,
      title: "Sustainable Packaging Solutions",
      date: "August 5, 2023",
      location: "Riverside Agricultural Waste Facility",
      image: "/placeholder.svg?height=200&width=300&text=Sustainable+Packaging",
    },
  ]

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
            <Link href="/recycling" className="text-sm font-medium text-emerald-600 border-b-2 border-emerald-600 pb-1">
              Recycling
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
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
        <section className="relative bg-emerald-600 text-white py-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000&text=Recycling')] bg-no-repeat bg-cover opacity-20 mix-blend-overlay"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Agricultural Waste Recycling</h1>
              <p className="text-xl text-emerald-50 mb-8">
                Join our initiative to reduce agricultural waste, promote sustainability, and create a circular economy
                in farming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#find-centers">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                    Find Recycling Centers
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {recyclingStats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our recycling program makes it easy for farmers to reduce waste and contribute to a more sustainable
                agricultural system.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Schedule a Pickup</h3>
                <p className="text-gray-600">
                  Use our app or website to schedule a pickup of your agricultural waste. We'll come to your farm at a
                  time that's convenient for you.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">We Collect & Sort</h3>
                <p className="text-gray-600">
                  Our team collects your waste and sorts it at our processing centers. We separate organic matter,
                  plastics, metals, and other materials.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Waste Becomes Resource</h3>
                <p className="text-gray-600">
                  We transform your waste into valuable resources like compost, animal feed, and renewable energy,
                  completing the circular economy.
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link href="/recycling/learn-more">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Learn More About Our Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Map */}
        <section id="find-centers" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Find Recycling Centers</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Locate agricultural waste recycling centers near you. Drop off your waste or schedule a pickup.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=1200&text=Interactive+Map"
                  alt="Recycling Centers Map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <p className="text-white text-xl font-bold">Interactive Map Coming Soon</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input type="text" placeholder="Enter your location" className="flex-1" />
                <Button className="bg-emerald-600 hover:bg-emerald-700">Find Centers</Button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recyclingCenters.map((center) => (
                <div key={center.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-40">
                    <Image src={center.image || "/placeholder.svg"} alt={center.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{center.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                      <span className="truncate">{center.address}</span>
                    </div>
                    <p className="text-sm text-emerald-600 mb-2">{center.distance} away</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {center.materials.map((material, index) => (
                        <Badge key={index} variant="outline" className="bg-emerald-50">
                          {material}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/recycling/centers/${center.id}`}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/recycling/centers">
                <Button variant="link" className="text-emerald-600">
                  View All Centers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Upcoming Events</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Join us for workshops, seminars, and community events focused on agricultural waste management and
                sustainability.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <div className="relative h-48">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-sm text-emerald-600 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.date}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                    <Link href={`/recycling/events/${event.id}`}>
                      <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
                        Register
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/recycling/events">
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View All Events
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Join Our Recycling Initiative</h2>
            <p className="max-w-2xl mx-auto text-emerald-50 mb-8">
              Whether you're a farmer looking to reduce waste or a buyer interested in supporting sustainable
              agriculture, there's a place for you in our recycling program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup?type=farmer">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                  Register as a Farmer
                </Button>
              </Link>
              <Link href="/recycling/partner">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-emerald-700 hover:border-white"
                >
                  Become a Recycling Partner
                </Button>
              </Link>
            </div>
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
