import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";
import { siteSettings } from "@settings/site-settings";
import { useCompanyData } from "@framework/companyData/getCompanydata";

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  href = siteSettings.logo.href,
  ...props
}) => {
  const { data } = useCompanyData();
  return (
    <Link
      href={href}
      className={cn("inline-flex focus:outline-none", className)}
      {...props}
    >
      <Image
        src={data ? data.com_logo : siteSettings.logo.url}
        alt={siteSettings.logo.alt}
        height={siteSettings.logo.height}
        width={siteSettings.logo.width}
        layout="fixed"
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
