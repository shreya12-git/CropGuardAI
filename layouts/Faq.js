import { markdownify } from "@lib/utils/textConverter";

function Faq({ data }) {
  const { frontmatter } = data;
  return (
    <section className="section">
      <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        This is chatbot page
      </h2>
    </section>
  );
}

export default Faq;
