interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

const CaseStudySection = ({ title, children, id }: CaseStudySectionProps) => {
  return (
    <section id={id} className="case-study-section section-divider">
      <h2 className="case-study-heading">{title}</h2>
      <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
};

export default CaseStudySection;
