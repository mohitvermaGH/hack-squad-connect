
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <NavBar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-primary">
            Find Your Perfect Hackathon Team
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Connect with talented developers, designers, and innovators. Build something amazing together.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/search">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Find Teammates
              </Button>
            </Link>
            <Link to="/profile">
              <Button size="lg" variant="outline">
                Create Your Profile
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Create Your Profile",
                description: "List your skills, experience, and hackathon interests",
                icon: "👤",
              },
              {
                title: "Find Teammates",
                description: "Search and filter based on skills, location, and interests",
                icon: "🔍",
              },
              {
                title: "Connect & Build",
                description: "Message potential teammates and start building together",
                icon: "🚀",
              },
            ].map((step) => (
              <div key={step.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
