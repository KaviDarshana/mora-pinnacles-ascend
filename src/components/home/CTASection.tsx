
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Reach New Academic Heights?</h2>
          <p className="text-xl mb-8">
            Join our community of dedicated students and experienced instructors today.
            Start your journey towards academic excellence with Mora Pinnacles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-secondary hover:bg-green-500 text-black font-semibold">
                Register Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-green-500 hover:bg-secondary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
