import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Linkedin, Mail, ArrowUp } from "lucide-react";

const primaryNav = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const projectItems = [
  { label: "MindSpark", path: "/projects/mindspark", year: "26" },
  { label: "Mould Man", path: "/projects/mould-man", year: "25" },
  { label: "Project Three", path: "/projects/project-three", year: "—" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    if (path === "/projects") return location.pathname === "/projects";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded text-sm"
      >
        Skip to content
      </a>

      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-5 py-4">
          <Link
            to="/"
            className="font-serif text-lg leading-none"
            onClick={() => setMobileOpen(false)}
          >
            Thomas Broderick
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
              {primaryNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-baseline gap-3 py-2 text-sm transition-colors ${
                      isActive(item.path) ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-muted-foreground">{item.num}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-border">
              <p className="project-tag mb-3">Projects</p>
              <ul className="space-y-1">
                {projectItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-baseline justify-between py-1.5 text-sm transition-colors ${
                        location.pathname === item.path
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">'{item.year}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 pt-5 border-t border-border flex gap-4">
              <a
                href="https://www.linkedin.com/in/thomas-broderick-22071253/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:thomas.broderick.work@gmail.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 bottom-0 w-72 xl:w-80 border-r border-border bg-sidebar z-40 px-10 py-12">
        {/* Identity block */}
        <div className="mb-10">
          <Link to="/" className="block group">
            <p className="project-tag mb-2">Portfolio · 2026</p>
            <h2 className="font-serif text-2xl leading-tight tracking-tight group-hover:text-accent transition-colors">
              Thomas
              <br />
              Broderick
            </h2>
          </Link>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            UX &amp; Interaction Designer
            <br />
            Limerick, Ireland
          </p>
        </div>

        {/* Primary nav */}
        <nav className="flex-1" aria-label="Main navigation">
          <ul className="space-y-1 mb-10">
            {primaryNav.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`group flex items-baseline gap-3 py-1.5 text-sm transition-colors ${
                    isActive(item.path)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className={`font-mono text-[10px] ${isActive(item.path) ? "text-accent" : "text-muted-foreground/70"}`}>
                    {item.num}
                  </span>
                  <span className="relative">
                    {item.label}
                    {isActive(item.path) && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent" aria-hidden />
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Project list */}
          <div className="border-t border-border pt-6">
            <p className="project-tag mb-4">Case Studies</p>
            <ul className="space-y-1.5">
              {projectItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-baseline justify-between gap-3 py-1 text-sm transition-colors ${
                      location.pathname === item.path
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10px] text-muted-foreground/70">'{item.year}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Footer block */}
        <div className="mt-auto pt-6 border-t border-border">
          <div className="flex items-center gap-4 mb-3">
            <a
              href="https://www.linkedin.com/in/thomas-broderick-22071253/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:thomas.broderick.work@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
          <p className="font-mono text-[10px] text-muted-foreground/70 uppercase tracking-widest">
            Available · Graduate &amp; Freelance
          </p>
        </div>
      </aside>

      {/* Main */}
      <main
        className="lg:ml-72 xl:ml-80 min-h-screen pt-16 lg:pt-0"
        id="main-content"
        role="main"
      >
        {children}
      </main>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-accent transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </div>
  );
};

export default Layout;
