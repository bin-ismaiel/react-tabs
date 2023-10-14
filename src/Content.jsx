import { v4 as uuidv4 } from "uuid";
export default function Content({ title, dates, duties, company }) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{company}</p>
      <p>{dates}</p>
      {console.log(duties)}
      {duties.map((duty) => {
        return <p key={uuidv4()}>=&gt;{duty}</p>;
      })}
    </section>
  );
}
