
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search } from "lucide-react";

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  const courses = [
    {
      id: 1,
      title: "Communication Skills Development",
      description: "A comprehensive introduction to the fundamentals of English Language and Communication.",
      instructor: "Mr. Kavindu Darshana",
      price: "LKR 1,500",
      level: "Beginner",
      category: "Semester 01",
      image: "/public/Images/Communication Skills and Development.png"
    },
    {
      id: 2,
      title: "Mathematics and Statistics for IT",
      description: "Mathematical concepts and techniques essential for IT studies.",
      instructor: "Mr. Kavindu Darshana",
      price: "LKR 1,500",
      level: "Beginner",
      category: "Semester 01",
      image: "/public/Images/Mathematics and Statistics for IT.png"
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
      title: "Organic Chemistry Fundamentals",
      description: "Explore the structure, properties, and reactions of organic compounds.",
      instructor: "Prof. David Wilson",
      price: "$54.99",
      level: "Intermediate",
      category: "Chemistry",
      image: "/public/placeholder.svg"
    },
    {
      id: 5,
      title: "Introduction to Psychology",
      description: "Explore the human mind, behavior, and the factors that influence them.",
      instructor: "Dr. Emily Chen",
      price: "$39.99",
      level: "Beginner",
      category: "Psychology",
      image: "/public/placeholder.svg"
    },
    {
      id: 6,
      title: "Database Systems",
      description: "Learn about database design, implementation, and management.",
      instructor: "Prof. Robert Miller",
      price: "$64.99",
      level: "Advanced",
      category: "Computer Science",
      image: "/public/placeholder.svg"
    }
  ];

  // Filter courses based on search term and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "" || course.category === categoryFilter;
    const matchesLevel = levelFilter === "" || course.level === levelFilter;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Get unique categories and levels for filters
  const categories = Array.from(new Set(courses.map(course => course.category)));
  const levels = Array.from(new Set(courses.map(course => course.level)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-primary/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4">
              Course Catalog
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Browse our comprehensive selection of courses designed to enhance your academic journey.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-4">Filters</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                      Search
                    </label>
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <Input
                        id="search"
                        className="pl-9"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-categories">All Categories</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                      Level
                    </label>
                    <Select value={levelFilter} onValueChange={setLevelFilter}>
                      <SelectTrigger id="level">
                        <SelectValue placeholder="All Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-levels">All Levels</SelectItem>
                        {levels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSearchTerm("");
                      setCategoryFilter("");
                      setLevelFilter("");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Course listings */}
            <div className="lg:col-span-3">
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
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
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No courses found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setCategoryFilter("");
                      setLevelFilter("");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoursesPage;
