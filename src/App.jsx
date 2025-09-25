import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"

function App() {
  const { scrollY } = useScroll();
  const heroTextScale = useTransform(scrollY, [0, 300], [1, 100]); // text scales from 1 → 1.3

  return (
    <div className="font-sans scroll-smooth relative h-screen overflow-x-hidden">
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full z-10 overflow-hidden">
          <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: -1, // ensures content appears above the video
          }}
        >
          <source src={`${import.meta.env.BASE_URL}JustCoding.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-sm shadow z-50 flex justify-between p-4">
        <h1 className="text-xl font-bold text-black/90">My Portfolio</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:underline text-black/80">About</a>
          <a href="#projects" className="hover:underline text-black/80">Projects</a>
          <a href="#contact" className="hover:underline text-black/80">Contact</a>
        </div>
      </nav>

      {/* Container that fades left side into video */}
      <div
        className="relative z-10"
        style={{
          maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        }}
      >
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center text-white text-center px-4 relative bg-gradient-to-b from-blue-500/60 to-black/60">
          <motion.h2
            className="text-5xl font-bold drop-shadow-lg max-w-lg"
            style={{ scale: heroTextScale }}
          >
            Hi, I’m calmano14 (bruh_awesome)👋
          </motion.h2>
          <motion.p
            className="mt-4 text-lg drop-shadow-md"
            style={{ scale: heroTextScale }}
          >
            I'm a developer building cool games and coding, I also make websites and apps.
          </motion.p>
          <Button className="mt-6" asChild>
            <a href="#projects">View My Work</a>
          </Button>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center items-center p-10 text-white text-center relative bg-gradient-to-b from-black/60 to-red-600/40"
        >
          <h2 className="text-3xl font-bold mb-4 drop-shadow-md">About Me</h2>
          <p className="max-w-2xl">
            I am a passionate and experienced software developer specializing in Roblox game development, web development, and app creation. Over the years, I have honed my skills in crafting engaging, interactive, and technically robust experiences that delight users and push creative boundaries.

In the Roblox ecosystem, I focus on building immersive games with dynamic mechanics, seamless multiplayer interactions, and polished user interfaces. My expertise spans scripting complex systems using Roblox Lua, implementing UI/UX best practices, and optimizing performance for smooth gameplay experiences. I enjoy tackling challenging problems like creating inventory systems, NPC behaviors, and multiplayer functionality, all while maintaining clean, maintainable code.

Beyond Roblox, I design and develop websites and applications that are intuitive, responsive, and visually appealing. I am experienced with modern web technologies including React, Tailwind CSS, and Flask, allowing me to deliver full-stack solutions that are both scalable and efficient. Whether it’s building interactive portfolios, dynamic dashboards, or custom apps, I aim to combine functionality with a sleek, user-centered design.

My career is driven by a love for technology and creativity, constantly pushing me to learn new tools, explore innovative solutions, and deliver products that leave a lasting impression. I thrive in environments where I can solve problems, implement creative ideas, and make complex systems accessible and enjoyable for users.
          </p>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen p-10 text-white text-center relative bg-gradient-to-b from-red-600/40 to-yellow-600/80"
        >
          <h2 className="text-3xl font-bold mb-10 drop-shadow-md">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/60 backdrop-blur-sm w-full max-w-sm">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-black">Evolution Tycoon</h3>
                <p className="mt-2 text-black break-words whitespace-normal">
                  Evolution Tycoon is a Roblox survival tycoon game set on a remote island. Players must gather and manage resources to survive, grow their base, and thrive in a challenging environment. Strategic planning, resource management, and careful progression are key to success.
                </p>
                <Button asChild className="mt-4">
                  <a href="https://github.com/Sir-STAWWOOOPIID/EvolutionTycoon">View on GitHub</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm w-full max-w-sm">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-black">Demonic Battlegrounds</h3>
                <p className="mt-2 text-black">Demonic Battlegrounds is a fast-paced, open-round PvP game on Roblox where players fight to survive, collect upgrades, and dominate the battlefield. Compete against others in a chaotic free-for-all environment and prove your skills!</p>
                <Button asChild className="mt-4">
                  <a href="https://github.com/Sir-STAWWOOOPIID/Demonic-Battlegrounds">View on GitHub</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm w-full max-w-sm">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-black">Task Tracker</h3>
                <p className="mt-2 text-black">This Legal Ops App is a task tracker that can help you keep track of what you need to do, designed for school use.</p>
                <Button asChild className="mt-4">
                  <a href="https://github.com/Sir-STAWWOOOPIID/LegalOpsApp">View on GitHub</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center p-10 text-white text-center relative bg-gradient-to-b from-yellow-600/80 to-black-600/80"
        >
          <h2 className="text-3xl font-bold mb-4 drop-shadow-md">Contact</h2>
          <p>Email: <a href="mailto:calmano0214@egmail.com" className="text-blue-400">calmano0214@gmail.com</a></p>
        </section>
      </div>
    </div>
  )
}

export default App
