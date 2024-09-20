import BannerBankContaDigital from "../../components/Banner/Bank/ContaDigital";
import BannerBankPrincipal from "../../components/Banner/Bank/Principal";
import FooterBank from "../../components/Footer/Bank";
import { useEffect } from "react";

const Bank = () => {
  useEffect(() => {
    const scrollToBannerPrincipal = () => {
      const element = document.getElementById("banner--b--principal");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("load", scrollToBannerPrincipal);

    return () => {
      window.removeEventListener("load", scrollToBannerPrincipal);
    };
  }, []);
  return (
    <>
      <main className="main">
        <div>
          <BannerBankPrincipal />
          <BannerBankContaDigital />
        </div>
      </main>
      <FooterBank />
    </>
  );
};

export default Bank;
