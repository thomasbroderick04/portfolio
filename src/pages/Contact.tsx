import { Mail } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <article className="container-content">
          <p className="project-tag mb-4">Contact</p>
          <h1 className="mb-6">Let's connect</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
            I'm open to opportunities in interaction design, UX, and accessible 
            digital product work. Whether you'd like to discuss a project, 
            collaboration, or just say hello — I'd love to hear from you.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-3 px-6 py-4 bg-secondary rounded-sm text-foreground hover:bg-border transition-colors"
            >
              <Mail size={20} />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">your.email@example.com</p>
              </div>
            </a>
          </div>

          <div className="mt-12 pt-8 section-divider">
            <p className="text-sm text-muted-foreground">
              Based in Ireland · Available for graduate roles and freelance work
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Contact;
