import { Mail } from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <article className="container-content">
          <p className="project-tag mb-4">Contact</p>
          <h1 className="mb-6">Contact Information</h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-6xl">
            I am open to graduate UX roles, internships, and collaborations,
            particularly in customer experience technology,
            accessibility-focused product design, and interaction design that
            makes complex systems easier for people to use.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-4xl">
            I am especially interested in work that improves how people navigate
            digital products, service journeys, and support experiences across
            different contexts.
          </p>

          <div className="space-y-3 mb-12">
            <a
              href="mailto:tommybroderick@outlook.com"
              className="flex items-center gap-4 px-5 py-4 bg-secondary rounded-md hover:bg-border/60 transition-colors"
            >
              <Mail size={20} className="text-muted-foreground shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">
                  tommybroderick@outlook.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/thomas-broderick-532674367/
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-4 px-5 py-4 bg-secondary rounded-md hover:bg-border/60 transition-colors"
            >
              <LinkedInIcon size={20} className="text-[#0A66C2] shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium">in/thomas-b-532674367</p>
              </div>
            </a>
          </div>

          <div className="section-divider pt-6 text-sm text-muted-foreground">
            <p>Open to remote &amp; relocation</p>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Contact;
