import logo_cartoes_azul from "../../assets/cartoes/logo-azul-cartoes.svg";
import logo_cartoes_branca from "../../assets/cartoes/logo-branca-cartoes.svg";
import logo_bank from "../../assets/bank/logo-azul-bank.svg";
import logo_bank_escuro from "../../assets/bank/logo-azul-escuro-bank.svg";

interface ILogo {
  variant: "bank" | "cartoes";
  theme: "azul" | "azul-claro" | "branca";
}

const Logo = ({ variant, theme }: ILogo) => {
  switch (variant) {
    case "bank":
      switch (theme) {
        case "azul":
          return (
            <img className="logo" src={logo_bank_escuro} alt="Logo Uauh Bank" />
          );
        case "azul-claro":
          return <img className="logo" src={logo_bank} alt="Logo Uauh Bank" />;
      }
      return <></>;
    case "cartoes":
      switch (theme) {
        case "azul":
          return (
            <img
              className="logo"
              src={logo_cartoes_azul}
              alt="Logo Uauh Cartões"
            />
          );
        case "branca":
          return (
            <img
              className="logo"
              src={logo_cartoes_branca}
              alt="Logo Uauh Cartões"
            />
          );
      }
  }
};

export default Logo;
