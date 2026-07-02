import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, ArrowUp } from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";

const primaryNav = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const projectItems = [
  { label: "MindSpark", path: "/projects/mindspark" },
  { label: "MouldMan", path: "/projects/mould-man" },
  { label: "Project Three", path: "/projects/project-three" },
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

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    if (path === "/projects") {
      return location.pathname === "/projects";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground focus:rounded"
      >
        Skip to content
      </a>

      <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-16">
          <Link
            to="/"
            className="text-base font-semibold tracking-tight"
            onClick={() => setMobileOpen(false)}
          >
            Thomas Broderick
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  isActive(item.path)
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="https://www.linkedin.com/in/thomas-b-532674367/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedInIcon size={17} />
            </a>

            <a
              href="mailto:tommybroderick@outlook.com"
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={17} />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="-mr-2 p-2 text-foreground lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <nav
            className="border-b border-border px-6 pb-6"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              {primaryNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 text-sm transition-colors ${
                      isActive(item.path)
                        ? "font-medium text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 border-t border-border pt-4">
              <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                Projects
              </p>

              <ul className="space-y-1">
                {projectItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-1.5 text-sm transition-colors ${
                        location.pathname === item.path
                          ? "font-medium text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex gap-4 border-t border-border pt-4">
              <a
                href="https://www.linkedin.com/in/thomas-b-532674367/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedInIcon size={18} />
              </a>

              <a
                href="mailto:tommybroderick@outlook.com"
                aria-label="Email"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail size={18} />
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="min-h-screen pt-16" id="main-content" role="main">
        {children}
      </main>

      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed right-6 bottom-6 z-50 rounded-full bg-primary p-3 text-primary-foreground shadow-md transition-opacity hover:opacity-90"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </div>
  );
};

export default Layout;
