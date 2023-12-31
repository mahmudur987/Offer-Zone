import Layout from "@components/layout/layout-two";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import ShopsSingleDetails from "@components/shops/shops-single-details";
import DownloadApps from "@components/common/download-apps";

export default function ShopDetailsPage() {
  return (
    <>
      <ShopsSingleDetails />
      <DownloadApps />
    </>
  );
}

ShopDetailsPage.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
  };
};
