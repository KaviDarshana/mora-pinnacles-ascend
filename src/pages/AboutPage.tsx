
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold font-serif mb-6">About Mora Pinnacles</h1>
              <p className="text-xl">Reaching Heights, Always Together</p>
            </div>
          </div>
        </section>

        {/* Mission section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary font-serif mb-4">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                At Mora Pinnacles, our mission is to provide accessible, high-quality education that empowers undergraduate students to reach their full academic potential. We believe in creating a supportive learning environment where students can thrive and excel in their studies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We are committed to delivering comprehensive educational resources through a blend of live interactive sessions, recorded lessons, and supplementary materials that cater to diverse learning styles and needs.
              </p>
              <p className="text-lg text-gray-700">
                Our platform is designed to bridge the gap between traditional classroom learning and the flexibility of online education, ensuring that every student has the tools they need to succeed in their academic journey.
              </p>
            </div>
          </div>
        </section>

        {/* Values section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary font-serif mb-4">Our Values</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-xl text-primary mb-3">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for excellence in all aspects of our educational offerings, from content creation to delivery and student support.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-xl text-primary mb-3">Accessibility</h3>
                  <p className="text-gray-700">
                    We believe quality education should be accessible to all students, regardless of their location or circumstances.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-xl text-primary mb-3">Community</h3>
                  <p className="text-gray-700">
                    We foster a collaborative learning environment where students and educators support each other in reaching academic goals.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-xl text-primary mb-3">Innovation</h3>
                  <p className="text-gray-700">
                    We continuously innovate our teaching methods and platform features to enhance the learning experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary font-serif mb-4">Our Team</h2>
                <p className="text-lg text-gray-700">
                  Meet the dedicated professionals behind Mora Pinnacles
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="mb-4">
                    <img
                      src="/public/placeholder.svg"
                      alt="Team Member"
                      className="w-40 h-40 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Dr. James Wilson</h3>
                  <p className="text-gray-600">Founder & Academic Director</p>
                </div>
                
                <div className="text-center">
                  <div className="mb-4">
                    <img
                      src="/public/placeholder.svg"
                      alt="Team Member"
                      className="w-40 h-40 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Prof. Lisa Chen</h3>
                  <p className="text-gray-600">Head of Course Development</p>
                </div>
                
                <div className="text-center">
                  <div className="mb-4">
                    <img
                      src="/public/placeholder.svg"
                      alt="Team Member"
                      className="w-40 h-40 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Michael Thompson</h3>
                  <p className="text-gray-600">Student Experience Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
