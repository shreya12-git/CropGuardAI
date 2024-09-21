import Link from "next/link";
import Cta from "./components/Cta";

function Pricing({ data }) {
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;
  return (
    <section className="section">
    <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      This is disease detector page
    </h2>
  </section>
  );
}

export default Pricing;
