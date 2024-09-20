import NotFound from "@layouts/404";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import Faq from "@layouts/Faq";
import Pricing from "@layouts/Pricing";
import SeoMeta from "@layouts/SeoMeta";
import LoginSignUp from "@layouts/LoginSignUp";  // Import your LoginSignUp component
import { getRegularPage, getSinglePage } from "@lib/contentParser";
import SignUpPage from "@layouts/SignUpPage";


// for all regular pages
const RegularPages = async ({ params }) => {
  const { regular } = params;
  const regularPageData = await getRegularPage(regular);
  const { title, meta_title, description, image, noindex, canonical, layout } =
    regularPageData.frontmatter;
  const { content } = regularPageData;

  return (
    <>
      <SeoMeta
        title={title}
        description={description ? description : content.slice(0, 120)}
        meta_title={meta_title}
        image={image}
        noindex={noindex}
        canonical={canonical}
      />
      {layout === "404" ? (
        <NotFound data={regularPageData} />
      ) : layout === "contact" ? (
        <Contact data={regularPageData} />
      ) : layout === "pricing" ? (
        <Pricing data={regularPageData} />
      ) : layout === "faq" ? (
        <Faq data={regularPageData} />
      ) : layout === "loginsignup" ? (  // Add the new condition for loginsignup layout
      
           <LoginSignUp/> 
        
        // Use the LoginSignUp component
      ) : layout==="signup"?
      (
        <SignUpPage></SignUpPage>
      )
      : (
        <Default data={regularPageData} />
      )}
    </>
  );
};

export default RegularPages;
