
import { useState } from "react";
import {
  Calendar,
  Book,
  User,
  Bell,
  BarChart2,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Search,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();
  
  // Automatically close sidebar on mobile
  if (isMobile && sidebarOpen) {
    setSidebarOpen(false);
  }

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const courses = [
    {
      id: 1,
      title: "Introduction to Mathematics",
      progress: 75,
      lessons: 12,
      completedLessons: 9,
      nextLesson: "Data Structures",
      instructor: "Dr. Jane Smith",
      nextSession: "Tomorrow, 10:00 AM",
    },
    {
      id: 2,
      title: "Mathematics and Statistics for IT",
      progress: 40,
      lessons: 15,
      completedLessons: 6,
      nextLesson: "Algebra Basics",
      instructor: "Mr. Kavindu Darshana",
      nextSession: "Today, 8:00 PM",
    },
    {
      id: 3,
      title: "Web Design",
      progress: 20,
      lessons: 10,
      completedLessons: 2,
      nextLesson: "JavaScript Basics",
      instructor: "Mr. Kavindu Darshana",
      nextSession: "Saturday, 11:00 AM",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Live Session: Tenses and Grammar",
      course: "Communication Skills Development",
      date: "May 10, 2025",
      time: "10:00 AM",
      important: true,
    },
    {
      id: 2,
      title: "Assignment Due: Web Form Design",
      course: "Web Design",
      date: "May 5, 2025",
      time: "11:59 PM",
      important: false,
    },
    {
      id: 3,
      title: "Quiz: Calculus Fundamentals",
      course: "Advanced Mathematics for Engineers",
      date: "May 7, 2025",
      time: "2:00 PM",
      important: true,
    },
  ];

  const notifications = [
    {
      id: 1,
      title: "New assignment available",
      message: "Economic Models assignment has been posted",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 2,
      title: "Upcoming live session",
      message: "Data Structures session tomorrow at 10:00 AM",
      time: "3 hours ago",
      read: false,
    },
    {
      id: 3,
      title: "Assignment feedback",
      message: "Your Programming Basics assignment has been graded",
      time: "Yesterday",
      read: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 md:hidden">
        <div className="px-4 py-3 flex justify-between items-center">
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/342f2bf0-8e38-401f-b4b4-99a4b8e2507a.png" 
              alt="Mora Pinnacles Logo" 
              className="h-8 w-auto" 
            />
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-1 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/public/placeholder.svg" alt="User" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`bg-primary text-white fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 md:relative md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar header */}
            <div className="px-4 py-5 flex justify-between items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/342f2bf0-8e38-401f-b4b4-99a4b8e2507a.png" 
                  alt="Mora Pinnacles Logo" 
                  className="h-10 w-auto mr-2" 
                />
                <span className="text-lg font-serif font-semibold">Mora Pinnacles</span>
              </Link>
              <button onClick={closeSidebar} className="md:hidden">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* User info */}
            <div className="px-6 py-4">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src="/public/placeholder.svg" alt="User" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Smith</div>
                  <div className="text-sm text-white/70">Student</div>
                </div>
              </div>
            </div>
            
            {/* Nav links */}
            <nav className="flex-1 px-2 py-4 space-y-1">
              <Link
                to="/dashboard"
                className="flex items-center px-4 py-3 text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
              >
                <BarChart2 className="h-5 w-5 mr-3" />
                Dashboard
              </Link>
              <Link
                to="/courses"
                className="flex items-center px-4 py-3 text-white/80 hover:text-white hover:bg-primary-600 rounded-md transition-colors"
              >
                <Book className="h-5 w-5 mr-3" />
                My Courses
              </Link>
              <Link
                to="/calendar"
                className="flex items-center px-4 py-3 text-white/80 hover:text-white hover:bg-primary-600 rounded-md transition-colors"
              >
                <Calendar className="h-5 w-5 mr-3" />
                Calendar
              </Link>
              <Link
                to="/assignments"
                className="flex items-center px-4 py-3 text-white/80 hover:text-white hover:bg-primary-600 rounded-md transition-colors"
              >
                <FileText className="h-5 w-5 mr-3" />
                Assignments
              </Link>
              <Link
                to="/profile"
                className="flex items-center px-4 py-3 text-white/80 hover:text-white hover:bg-primary-600 rounded-md transition-colors"
              >
                <User className="h-5 w-5 mr-3" />
                Profile
              </Link>
            </nav>
            
            {/* Logout button */}
            <div className="p-4 border-t border-primary-600">
              <Button
                variant="outline"
                className="w-full justify-start border-white/20 hover:border-white/40 text-white hover:text-white hover:bg-primary-600"
              >
                <LogOut className="h-5 w-5 mr-3" />
                Logout
              </Button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {/* Desktop header */}
          <header className="bg-white border-b border-gray-200 hidden md:block">
            <div className="px-6 py-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-serif font-semibold text-primary">Dashboard</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <Input 
                    className="pl-9 w-64" 
                    placeholder="Search..." 
                  />
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {notifications.filter(n => !n.read).length}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel className="flex justify-between">
                      <span>Notifications</span>
                      <Button variant="link" size="sm" className="h-auto p-0">
                        Mark all as read
                      </Button>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {notifications.map((notification) => (
                      <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4 focus:bg-gray-100">
                        <div className="flex justify-between w-full">
                          <span className="font-medium">{notification.title}</span>
                          {!notification.read && <Badge variant="outline" className="bg-primary/10 text-primary border-primary text-xs">New</Badge>}
                        </div>
                        <span className="text-gray-600 text-sm mt-1">{notification.message}</span>
                        <span className="text-gray-400 text-xs mt-2">{notification.time}</span>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="justify-center font-medium text-primary">
                      View all notifications
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-2 p-1 rounded-full">
                      <Avatar>
                        <AvatarImage src="/public/placeholder.svg" alt="User" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <span className="text-gray-700 font-medium">John Smith</span>
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Dashboard content */}
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold font-serif mb-2">Welcome back, John!</h2>
              <p className="text-gray-600">
                Here's what's happening with your courses today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Current Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">3</div>
                  <p className="text-sm text-gray-500 mt-1">Active enrollments</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Assignments Due</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-500">2</div>
                  <p className="text-sm text-gray-500 mt-1">Due this week</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Overall Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-500">45%</div>
                  <Progress value={45} className="mt-2" />
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Courses</CardTitle>
                    <CardDescription>Track your progress and continue learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {courses.map((course) => (
                        <div key={course.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg">{course.title}</h3>
                            <Badge variant="outline">
                              {course.completedLessons}/{course.lessons} lessons
                            </Badge>
                          </div>
                          
                          <div className="mb-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} />
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500">Next Lesson</p>
                              <p className="font-medium">{course.nextLesson}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Next Live Session</p>
                              <p className="font-medium">{course.nextSession}</p>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex justify-end">
                            <Button>Continue Learning</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Schedule for the next 7 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex items-start">
                          <div className="bg-primary/10 text-primary p-2 rounded-md mr-4 text-center min-w-[50px]">
                            <div className="text-xs">
                              {event.date.split(", ")[1]}
                            </div>
                            <div className="font-semibold">
                              {event.date.split(", ")[0]}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h4 className="font-medium">{event.title}</h4>
                              {event.important && (
                                <Badge className="ml-2 bg-red-500 hover:bg-red-600">
                                  Important
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">
                              {event.course}
                            </p>
                            <p className="text-sm">
                              {event.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="link" className="mt-4 w-full">
                      View Full Calendar
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Leaderboard</CardTitle>
                    <CardDescription>Top performing students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-yellow-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2 text-xs font-bold">
                            1
                          </div>
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src="/public/placeholder.svg" alt="User" />
                            <AvatarFallback>EJ</AvatarFallback>
                          </Avatar>
                          <div>Emma Johnson</div>
                        </div>
                        <div className="font-semibold">98%</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-gray-300 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2 text-xs font-bold">
                            2
                          </div>
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src="/public/placeholder.svg" alt="User" />
                            <AvatarFallback>TS</AvatarFallback>
                          </Avatar>
                          <div>Tyler Smith</div>
                        </div>
                        <div className="font-semibold">95%</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-orange-400 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2 text-xs font-bold">
                            3
                          </div>
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src="/public/placeholder.svg" alt="User" />
                            <AvatarFallback>AP</AvatarFallback>
                          </Avatar>
                          <div>Tharindi Nanayakkara</div>
                        </div>
                        <div className="font-semibold">92%</div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-primary/5 p-2 rounded">
                        <div className="flex items-center">
                          <div className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center mr-2 text-xs font-bold">
                            8
                          </div>
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src="/public/placeholder.svg" alt="User" />
                            <AvatarFallback>JS</AvatarFallback>
                          </Avatar>
                          <div>You</div>
                        </div>
                        <div className="font-semibold">83%</div>
                      </div>
                    </div>
                    <Button variant="link" className="mt-4 w-full">
                      View Full Leaderboard
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
