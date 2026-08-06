import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="page-shell flex min-h-[calc(100vh-4rem)] items-center py-16">
        <div className="container-content text-center">
          <p className="project-tag mb-4">Error 404</p>
          <h1>Page not found</h1>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            The page may have moved, or the address may be incomplete.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Return home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
