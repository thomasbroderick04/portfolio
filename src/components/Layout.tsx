import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUp } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const projectItems = [
  { label: "MindSpark", path: "/projects/mindspark" },
  { label: "Mould Man", path: "/projects/mould-man" },
  { label: "Project Three", path: "/projects/project-three" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-5 py-4">
          <Link to="/" className="text-lg font-bold tracking-tight text-foreground" onClick={() => setMobileOpen(false)}>
            Your Name
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 -mr-2 text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="px-5 pb-6 border-b border-border" aria-label="Main navigation">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="project-tag mb-2">Projects</p>
              <ul className="space-y-1">
                {projectItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-1.5 text-sm transition-colors ${
                        location.pathname === item.path
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 bottom-0 w-64 xl:w-72 border-r border-border bg-background z-40 px-8 py-10">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground mb-10">
          Your Name
        </Link>
        <nav className="flex-1" aria-label="Main navigation">
          <ul className="space-y-1 mb-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-1.5 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-border pt-6">
            <p className="project-tag mb-3">Projects</p>
            <ul className="space-y-1">
              {projectItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block py-1.5 text-sm transition-colors ${
                      location.pathname === item.path
                        ? "text-foreground font-medium bg-secondary rounded px-2 -mx-2"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <p className="text-xs text-muted-foreground mt-auto pt-6">
          Interaction Designer
        </p>
      </aside>

      {/* Main content */}
      <main
        className="lg:ml-64 xl:ml-72 min-h-screen pt-16 lg:pt-0"
        id="main-content"
        role="main"
      >
        {children}
      </main>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};

export default Layout;
