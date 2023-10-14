export default function Sidebar({ jobs, selectTab }) {
  return (
    <aside>
      {jobs.map((item, idx) => {
        return (
          <button
            key={item.id}
            onClick={() => {
              selectTab(idx);
            }}
          >
            {item.company}
          </button>
        );
      })}
    </aside>
  );
}
