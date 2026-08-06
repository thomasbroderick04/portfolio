import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUp, ChevronDown, Mail, Menu, X } from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";
import { projectCategories } from "@/data/projects";

const primaryNav = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const projectsMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProjectsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setProjectsOpen(false);
      }
    };

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (
        projectsMenuRef.current &&
        !projectsMenuRef.current.contains(event.target as Node)
      ) {
        setProjectsOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutsideClick);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const projectsActive = location.pathname.startsWith("/projects");

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="page-shell flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-base font-semibold tracking-tight"
            onClick={() => setMobileOpen(false)}
          >
            Thomas Broderick
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            <Link
              to="/"
              className={`text-sm transition-colors ${
                isActive("/")
                  ? "font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            <div
              ref={projectsMenuRef}
              className="relative"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link
                  to="/projects"
                  className={`text-sm transition-colors ${
                    projectsActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Projects
                </Link>
                <button
                  type="button"
                  className="rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Show project disciplines"
                  aria-expanded={projectsOpen}
                  aria-controls="project-disciplines-menu"
                  onClick={() => setProjectsOpen((open) => !open)}
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${projectsOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              {projectsOpen && (
                <div
                  id="project-disciplines-menu"
                  className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4"
                >
                  <div className="rounded-lg border border-border bg-card p-2 shadow-xl">
                    <Link
                      to="/projects"
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      All projects
                    </Link>
                    <div className="my-1 border-t border-border" />
                    {projectCategories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/projects/${category.slug}`}
                        className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {primaryNav.slice(1).map((item) => (
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
              href="https://www.linkedin.com/in/thomas-broderick-532674367/"
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
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="-mr-2 rounded p-2 text-foreground lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <nav
            id="mobile-navigation"
            className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background px-6 pb-8 pt-4 md:px-12 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  className={`block rounded-md px-2 py-2.5 text-sm transition-colors ${
                    location.pathname === "/"
                      ? "bg-secondary font-medium text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`block rounded-md px-2 py-2.5 text-sm transition-colors ${
                    location.pathname === "/projects"
                      ? "bg-secondary font-medium text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  All projects
                </Link>
              </li>
            </ul>

            <div className="mt-4 border-t border-border pt-4">
              <p className="px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Browse by discipline
              </p>
              <ul className="mt-2 space-y-1">
                {projectCategories.map((category) => {
                  const path = `/projects/${category.slug}`;
                  return (
                    <li key={category.slug}>
                      <Link
                        to={path}
                        className={`block rounded-md px-2 py-2.5 text-sm transition-colors ${
                          location.pathname === path
                            ? "bg-secondary font-medium text-foreground"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        {category.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <ul className="mt-4 space-y-1 border-t border-border pt-4">
              {primaryNav.slice(1).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block rounded-md px-2 py-2.5 text-sm transition-colors ${
                      isActive(item.path)
                        ? "bg-secondary font-medium text-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex gap-4 border-t border-border px-2 pt-5">
              <a
                href="https://www.linkedin.com/in/thomas-broderick-532674367/"
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
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-40 rounded-full bg-primary p-3 text-primary-foreground shadow-md transition-opacity hover:opacity-90 md:bottom-6 md:right-6"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </div>
  );
};

export default Layout;
