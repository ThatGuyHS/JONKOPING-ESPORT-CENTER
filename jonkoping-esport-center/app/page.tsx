import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Tv, Video, MapPin } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between max-w-7xl mx-auto w-full">
        <Link className="flex items-center justify-center" href="#">
          <Gamepad2 className="h-6 w-6 mr-2" />
          <span className="font-bold">Jönköping Esport Center</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#location">
            Location
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#floor-plan">
            Floor Plan
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Jönköping Esport Center
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Your premier destination for esports training, bootcamps, and media production in the heart of Jönköping.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Book Now</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="/studio.jpg"
                      alt="Bootcamp Room"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    <Gamepad2 className="h-6 w-6" />
                    Bootcamp Rooms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  State-of-the-art bootcamp rooms designed for intensive team training sessions and strategy development.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="/studio.jpg"
                      alt="Training Venue"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    <Tv className="h-6 w-6" />
                    Training Venue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Cutting-edge esports training facility equipped with top-tier gaming setups and practice areas.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="/studio.jpg"
                      alt="Media Production Studio"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-6 w-6" />
                    Media Production
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Full-service media production capabilities for creating professional esports content and broadcasts.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="location" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Find Us in Jönköping City Center
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Conveniently located in the heart of Jönköping, our center is easily accessible to all esports enthusiasts.
                </p>
              </div>
              <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8489.931108080597!2d14.158248687225341!3d57.78288059888731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465a6df17fd5050d%3A0x2600fef3ea9a7f0!2zSsO2bmvDtnBpbmcgQ2l0eSBDZW50ZXI!5e0!3m2!1sen!2sse!4v1685544533619!5m2!1sen!2sse"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Framgången 1</span>
              </div>
            </div>
          </div>
        </section>
        <section id="floor-plan" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Venue Floor Plan
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our state-of-the-art facilities designed for optimal esports performance and production.
                </p>
              </div>
              <div className="w-full max-w-3xl">
                <svg viewBox="0 0 800 600" className="w-full h-auto">
                  <rect x="0" y="0" width="800" height="600" fill="#f3f4f6" />
                  <rect x="50" y="50" width="300" height="200" fill="#d1d5db" stroke="#4b5563" strokeWidth="2" />
                  <text x="200" y="150" textAnchor="middle" fill="#4b5563" fontSize="24">Bootcamp Room 1</text>
                  <rect x="50" y="300" width="300" height="200" fill="#d1d5db" stroke="#4b5563" strokeWidth="2" />
                  <text x="200" y="400" textAnchor="middle" fill="#4b5563" fontSize="24">Bootcamp Room 2</text>
                  <rect x="400" y="50" width="350" height="450" fill="#d1d5db" stroke="#4b5563" strokeWidth="2" />
                  <text x="575" y="275" textAnchor="middle" fill="#4b5563" fontSize="24">Training Venue</text>
                  <rect x="50" y="550" width="700" height="30" fill="#d1d5db" stroke="#4b5563" strokeWidth="2" />
                  <text x="400" y="570" textAnchor="middle" fill="#4b5563" fontSize="18">Media Production Studio</text>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Level Up Your Game?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Book our facilities now and experience the future of esports training and production.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" asChild>
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">© 2023 Jönköping Esport Center. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              info@jonkopingesportcenter.se
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              +46 123 456 789
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Östra Storgatan 123, 553 21 Jönköping
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}