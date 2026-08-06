interface MetaItem {
  label: string;
  value: string;
}

const ProjectMeta = ({ items }: { items: MetaItem[] }) => {
  return (
    <dl className="my-10 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-6 gap-y-5 border-y border-border py-6">
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <dt className="project-tag mb-1">{item.label}</dt>
          <dd className="break-words text-sm font-medium leading-snug text-foreground">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default ProjectMeta;
