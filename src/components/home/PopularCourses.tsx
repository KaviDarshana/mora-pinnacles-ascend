
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PopularCourses() {
  const courses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      description: "A comprehensive introduction to the fundamentals of computer science and programming.",
      instructor: "Dr. Jane Smith",
      price: "$49.99",
      level: "Beginner",
      category: "Computer Science",
      image: "/public/placeholder.svg"
    },
    {
      id: 2,
      title: "Advanced Mathematics for Engineers",
      description: "Mathematical concepts and techniques essential for engineering studies.",
      instructor: "Prof. Michael Lee",
      price: "$59.99",
      level: "Intermediate",
      category: "Engineering",
      image: "/public/placeholder.svg"
    },
    {
      id: 3,
      title: "Principles of Economics",
      description: "Understanding the core principles of micro and macro economics in modern context.",
      instructor: "Dr. Sarah Johnson",
      price: "$44.99",
      level: "Beginner",
      category: "Economics",
      image: "/public/placeholder.svg"
    }
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
