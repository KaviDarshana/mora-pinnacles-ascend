
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PopularCourses() {
  const courses = [
    {
      id: 1,
      title: "Communication Skills Development",
      description: "A comprehensive introduction to the fundamentals of English Language and Communication.",
      instructor: "Mr. Kavindu Darshana",
      price: "LKR 1,500",
      level: "Beginner",
      category: "Semester 01",
      image: "/public/Images/Communication Skills and Development.jpg"
    },
    {
      id: 2,
      title: "Mathematics and Statistics for IT",
      description: "Mathematical concepts and techniques essential for IT studies.",
      instructor: "Mr. Kavindu Darshana",
      price: "LKR 1,500",
      level: "Beginner",
      category: "Semester 01",
      image: "/public/Images/Mathematics and Statistics for IT.jpg"
    },
    {
      id: 3,
      title: "Web Design",
      description: "Understanding the core principles of front-end web development.",
      instructor: "Mr. Kavindu Darshana",
      price: "LKR 1,500",
      level: "Beginner",
      category: "Semester 01",
      image: "/public/Images/Web Design.avif"
    },
    {
      id: 4,
      title: "Fundamentals of Programming",
      description: "Introduction to programming concepts and Python.",
      instructor: "Mr. Imesh Kavinda",
      price: "LKR 1,500",
      level: "Beginner",
      category: "Semester 01",
      image: "/public/Images/Fundamentals of Programming.avif"
    },
    {
      id: 5,
      title: "Computer Systems",
      description: "Understanding the architecture and components of computer systems.",
      instructor: "Mr. Imesh Kavinda",
      price: "LKR 1,500",
      level: "Beginner",
      category: "Semester 01",
      image: "/public/Images/Computer Systems.avif"
    },
    {
      id: 6,
      title: "ICT Skills and Applications",
      description: "Developing essential ICT skills for academic and professional success.",
      instructor: "Mr. Imesh Kavinda",
      price: "LKR 1,500",
      level: "Beginner",
      category: "Semester 01",
      image: "/public/Images/ICT Skills and Applications.jpg"
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-primary font-serif mb-2">Popular Courses</h2>
            <p className="text-lg text-gray-600">
              Discover our most sought-after courses
            </p>
          </div>
          <Link to="/courses" className="mt-4 md:mt-0">
            <Button variant="outline">View All Courses</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-secondary/10 text-secondary-foreground border-secondary">
                    {course.category}
                  </Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  Instructor: {course.instructor}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-2">{course.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="font-semibold text-primary">{course.price}</span>
                <Link to={`/courses/${course.id}`}>
                  <Button>Enroll Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
