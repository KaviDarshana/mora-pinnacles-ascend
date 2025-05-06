
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Tharindi Nanayakkara",
      role: "UOM BIT Student",
      content: "Mora Pinnacles has been a game-changer for my studies. The live sessions and course materials are exceptionally well-structured and engaging. I feel more confident in my subjects now! Proud to be the first baby shark of Mora Pinnacles Family!",
      avatar: "/public/Images/Tharindi.png"
    },
    {
      name: "Nethmi Nisansala",
      role: "UOM BIT Student",
      content: "The interactive learning approach and on-demand access to recordings helped me tremendously with complex subjects. Highly recommend!",
      avatar: "/public/Images/Nisansala.png"
    },
    {
      name: "Thaveesha Dilhara",
      role: "UOM BIT & IChem Student",
      content: "I love how the platform combines live instruction with comprehensive self-study resources. It's made a huge difference in my academic performance. Proud to be a baby shark of Mora Pinnacles Family!",
      avatar: "/public/Images/Thaveesha.png"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary font-serif mb-4">What Our Students Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from students who have transformed their learning journey with Mora Pinnacles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="rounded-full h-12 w-12"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
