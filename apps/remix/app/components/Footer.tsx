import { Link } from "@remix-run/react";
import Twitter from "./icons/Twitter";
import Github from "./icons/GitHub";
import { MailIcon } from "icons";
import Coffee from "./icons/Coffee";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="text-white w-full mt-auto flex flex-col items-center justify-between px-5 pt-16 mb-10 md:px-10 mx-auto sm:flex-row">
      <Link to="/" className="text-xl font-black leading-none select-none logo">
        Temp Email
      </Link>
      <Link
        className="mt-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"
        to="/"
        target="_blank">
        {" "}
        © 2024 Power by Yesmore
      </Link>
      <div className="flex items-center gap-3 mt-3 md:hidden text-sm text-gray-300">
        <Link to="/about">{t("About")}</Link>
        <Link to="/privacy">{t("Privacy")}</Link>
      </div>
      <div className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">

      </div>
    </div>
  );
}
