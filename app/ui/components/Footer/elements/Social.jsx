import React from "react";
import style from "../../../../../public/styles/footer.module.css";
import { icons } from "@/app/lib/dataFooter";
import Icon from "@/app/ui/reusable/Icon";
import CustomLink from "@/app/ui/reusable/CustomLink";

const Social = () => {
  const social = icons;
  return (
    <section className={style.section_footer}>
      {social.map((item) => (
        <React.Fragment key={item.id}>
          <abbr title={item.abbr}>
            <CustomLink
              href={item.href ? item.href : item.mailto}
              target="_blank"
            >
              <Icon src={item.src} width={21} height={21} alt={item.alt} />
            </CustomLink>
          </abbr>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Social;
