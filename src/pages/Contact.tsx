import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <article className="container-wide">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent" aria-hidden />
            <p className="project-tag">Contact · 04</p>
          </div>

          <h1 className="mb-10 max-w-4xl">
            Let&rsquo;s talk about UX, accessibility, or research-led design.
          </h1>

          <p className="lead max-w-2xl mb-16">
            I&rsquo;m open to graduate UX roles, internships, freelance work,
            and collaborations — particularly in healthcare, civic tech,
            accessibility-focused product work, or anywhere thoughtful design
            genuinely matters.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-16 max-w-3xl">
            <a
              href="mailto:thomas.broderick.work@gmail.com"
              className="group p-6 border border-border hover:border-accent transition-colors flex items-start gap-4 bg-card"
            >
              <Mail size={20} className="mt-1 text-accent shrink-0" />
              <div className="flex-1">
                <p className="project-tag mb-1">Email</p>
                <p className="text-sm font-medium group-hover:text-accent transition-colors">
                  thomas.broderick.work@gmail.com
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Best for project enquiries and detailed conversations.
                </p>
              </div>
              <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/thomas-broderick-22071253/"
              target="_blank"
              rel="noreferrer noopener"
              className="group p-6 border border-border hover:border-accent transition-colors flex items-start gap-4 bg-card"
            >
              <Linkedin size={20} className="mt-1 text-accent shrink-0" />
              <div className="flex-1">
                <p className="project-tag mb-1">LinkedIn</p>
                <p className="text-sm font-medium group-hover:text-accent transition-colors">
                  in/thomas-broderick
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  For professional connections and recruitment.
                </p>
              </div>
              <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          <div className="section-divider pt-10 grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="project-tag mb-2">Based in</p>
              <p>Limerick, Ireland</p>
              <p className="text-muted-foreground">Open to remote &amp; relocation</p>
            </div>
            <div>
              <p className="project-tag mb-2">Available for</p>
              <p>Graduate UX roles</p>
              <p>Internships · Freelance</p>
            </div>
            <div>
              <p className="project-tag mb-2">Response</p>
              <p>Within 48 hours</p>
              <p className="text-muted-foreground">Mon–Fri</p>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Contact;
