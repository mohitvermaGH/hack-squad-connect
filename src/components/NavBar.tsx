
import { Button } from "@/components/ui/button";
import { UserPlus, Search, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          HackSquad Connect
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/search">
            <Button variant="ghost">
              <Search className="h-5 w-5 mr-2" />
              Find Teammates
            </Button>
          </Link>
          <Link to="/messages">
            <Button variant="ghost">
              <MessageSquare className="h-5 w-5 mr-2" />
              Messages
            </Button>
          </Link>
          <Link to="/profile">
            <Button>
              <UserPlus className="h-5 w-5 mr-2" />
              Create Profile
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
