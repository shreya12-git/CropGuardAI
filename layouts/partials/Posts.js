import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }) => {
  const { blog_folder, summary_length } = config.settings;
  return (
    <section className="section">
      <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        This is weather page
      </h2>
    </section>
  );
};

export default Posts;
