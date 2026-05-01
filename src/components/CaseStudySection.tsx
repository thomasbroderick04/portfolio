interface CaseStudySectionProps {
  title: string;
  num?: string;
  children: React.ReactNode;
  id?: string;
}

const CaseStudySection = ({ title, num, children, id }: CaseStudySectionProps) => {
  return (
    <section id={id} className="case-study-section section-divider">
      <div className="grid md:grid-cols-12 gap-6 md:gap-10">
        <div className="md:col-span-3">
          <div className="md:sticky md:top-12">
            {num && <p className="font-mono text-xs text-accent mb-2">{num}</p>}
            <h2 className="case-study-heading mb-0">{title}</h2>
          </div>
        </div>
        <div className="md:col-span-9 space-y-5 text-base md:text-[17px] leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
