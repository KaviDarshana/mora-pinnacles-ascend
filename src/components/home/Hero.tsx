
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('/public/mountain-bg.svg')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center mb-6">
            <img 
              src="/lovable-uploads/342f2bf0-8e38-401f-b4b4-99a4b8e2507a.png" 
              alt="Mora Pinnacles Logo" 
              className="h-20 md:h-28 w-auto mr-4" 
            />
            <h1 className="text-3xl md:text-5xl font-bold font-serif">
              Mora Pinnacles
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-serif mb-6">
            Reaching Heights, Always Together
          </p>
          <p className="text-lg mb-8 max-w-2xl">
            Supporting undergraduate students with live classes, recordings, study materials, and an engaging learning community. Your journey to academic success starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-black font-semibold">
                Register Now
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-white bg-blue-600 text-white hover:bg-white/20">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
