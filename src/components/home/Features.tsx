
import { Book, Video, MessageSquare, FileText } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Live Classes",
      description: "Attend live sessions via Google Meet with real-time interaction with instructors."
    },
    {
      icon: <Book className="h-10 w-10 text-primary" />,
      title: "Recorded Sessions",
      description: "Access recordings of all classes for review at your own pace."
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Study Materials",
      description: "Download comprehensive notes, assignments, and practice materials."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Community Forum",
      description: "Engage with peers and instructors to discuss topics and clear doubts."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary font-serif mb-4">Why Choose Mora Pinnacles?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive learning platform is designed specifically to support undergraduate students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
