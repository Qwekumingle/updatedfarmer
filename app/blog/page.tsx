import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Search, Tag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  // Sample blog post data
  const featuredPost = {
    id: 1,
    title: "The Future of Sustainable Farming: Trends to Watch in 2023",
    excerpt:
      "Discover the emerging technologies and practices that are transforming sustainable agriculture and how farmers can adapt to stay ahead.",
    image: "/placeholder.svg?height=600&width=1200&text=Sustainable+Farming",
    date: "June 15, 2023",
    author: "Sarah Johnson",
    readTime: "8 min read",
    tags: ["Sustainability", "Technology", "Farming"],
  }

  const recentPosts = [
    {
      id: 2,
      title: "5 Ways to Reduce Agricultural Waste on Your Farm",
      excerpt: "Practical strategies for minimizing waste and maximizing efficiency in your farming operations.",
      image: "/placeholder.svg?height=300&width=500&text=Reduce+Waste",
      date: "June 10, 2023",
      author: "Carlos Rodriguez",
      readTime: "6 min read",
      tags: ["Waste Reduction", "Efficiency", "Sustainability"],
    },
    {
      id: 3,
      title: "Farm-to-Table: Building Direct Relationships with Restaurants",
      excerpt: "How farmers can establish and maintain profitable partnerships with local restaurants and chefs.",
      image: "/placeholder.svg?height=300&width=500&text=Farm+to+Table",
      date: "June 5, 2023",
      author: "Emma Wilson",
      readTime: "5 min read",
      tags: ["Marketing", "Restaurants", "Local Food"],
    },
    {
      id: 4,
      title: "Organic Certification: Is It Worth It for Small Farmers?",
      excerpt:
        "A comprehensive look at the costs, benefits, and alternatives to organic certification for small-scale producers.",
      image: "/placeholder.svg?height=300&width=500&text=Organic+Certification",
      date: "May 28, 2023",
      author: "Michael Chen",
      readTime: "7 min read",
      tags: ["Organic", "Certification", "Small Farms"],
    },
    {
      id: 5,
      title: "Seasonal Eating: Why It Matters for Consumers and Farmers",
      excerpt:
        "The environmental, economic, and health benefits of eating with the seasons and supporting local agriculture.",
      image: "/placeholder.svg?height=300&width=500&text=Seasonal+Eating",
      date: "May 20, 2023",
      author: "Aisha Patel",
      readTime: "4 min read",
      tags: ["Seasonal", "Nutrition", "Local Food"],
    },
  ]

  const categories = [
    { name: "Sustainable Farming", count: 24 },
    { name: "Organic Practices", count: 18 },
    { name: "Farm Technology", count: 15 },
    { name: "Marketing Tips", count: 12 },
    { name: "Waste Recycling", count: 10 },
    { name: "Community Building", count: 8 },
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
            <Link
              href="/recycling"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Recycling
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
              About Us
            </Link>
            <Link href="/blog" className="text-sm font-medium text-emerald-600 border-b-2 border-emerald-600 pb-1">
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
        {/* Blog Header */}
        <section className="bg-emerald-50 py-12">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">FarmConnect Blog</h1>
              <p className="text-xl text-gray-600">
                Insights, tips, and stories from the world of sustainable agriculture
              </p>
            </div>
          </div>
        </section>

        {/* Search and Categories */}
        <section className="py-8 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input type="search" placeholder="Search articles..." className="pl-10" />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 4).map((category, index) => (
                  <Link key={index} href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Badge variant="outline" className="bg-white hover:bg-emerald-50 cursor-pointer">
                      {category.name} ({category.count})
                    </Badge>
                  </Link>
                ))}
                <Link href="/blog/categories">
                  <Badge variant="outline" className="bg-white hover:bg-emerald-50 cursor-pointer">
                    More...
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <Badge key={index} className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={`/blog/${featuredPost.id}`}>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-emerald-600 hover:text-emerald-700 text-sm font-medium inline-flex items-center"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/blog/archive">
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white border rounded-lg p-4 text-center hover:border-emerald-600 hover:shadow-md transition-all"
                >
                  <Tag className="h-6 w-6 mx-auto mb-2 text-emerald-600" />
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} articles</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-emerald-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-emerald-50 mb-6">
                Get the latest articles, tips, and insights on sustainable farming delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input type="email" placeholder="Your email address" className="bg-white text-gray-900" />
                <Button className="bg-emerald-800 hover:bg-emerald-900 text-white">Subscribe</Button>
              </div>
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
