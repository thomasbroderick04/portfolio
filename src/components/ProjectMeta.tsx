interface MetaItem {
  label: string;
  value: string;
}

const ProjectMeta = ({ items }: { items: MetaItem[] }) => {
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 my-10 py-6 border-y border-border">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="project-tag mb-1">{item.label}</dt>
          <dd className="text-sm font-medium leading-snug text-foreground">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default ProjectMeta;
