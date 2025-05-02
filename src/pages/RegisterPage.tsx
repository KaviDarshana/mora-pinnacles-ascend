
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RegisterForm } from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="md:w-1/2 p-8">
              <RegisterForm />
            </div>
            
            <div className="md:w-1/2 bg-primary p-8 flex flex-col justify-center">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white font-serif mb-4">Join Mora Pinnacles</h2>
                <p className="text-white/90 mb-6">
                  Create an account to access world-class undergraduate courses, live sessions, and learning resources.
                </p>
                <div className="hidden md:block">
                  <img 
                    src="/lovable-uploads/342f2bf0-8e38-401f-b4b4-99a4b8e2507a.png" 
                    alt="Mora Pinnacles Logo" 
                    className="max-w-[200px] mx-auto md:mx-0" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RegisterPage;
