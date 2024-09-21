import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded text-center"
                  name="nitrogen"
                  type="text"
                  placeholder="Nitrogen"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded text-center"
                  name="phosphorus"
                  type="text"
                  placeholder="Phosphorus"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded text-center"
                  name="potassium"
                  type="text"
                  placeholder="Potassium"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded text-center"
                  name="temperature"
                  type="text"
                  placeholder="Temperature"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded text-center"
                  name="humidity"
                  type="text"
                  placeholder="Humidity"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded text-center"
                  name="ph"
                  type="text"
                  placeholder="Ph"
                  required
                />
              </div>
              <div className="mb-3" >
                <input
                  className="form-input w-full rounded text-center"
                  name="rainfall"
                  type="text"
                  placeholder="Rainfall"
                  required
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button type="submit" className="btn btn-primary">
                  Predict
                </button>
              </div>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {/* {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
