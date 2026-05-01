interface MetaItem {
  label: string;
  value: string;
}

interface ProjectMetaProps {
  items: MetaItem[];
}

const ProjectMeta = ({ items }: ProjectMetaProps) => {
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 my-12 py-8 border-y border-border">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="project-tag mb-1.5">{item.label}</dt>
          <dd className="text-sm font-medium leading-snug">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default ProjectMeta;
