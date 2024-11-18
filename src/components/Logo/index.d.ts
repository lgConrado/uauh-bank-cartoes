interface ILogo {
    variant: "bank" | "cartoes";
    theme: "azul" | "azul-claro" | "branca";
}
declare const Logo: ({ variant, theme }: ILogo) => import("react/jsx-runtime").JSX.Element | undefined;
export default Logo;
