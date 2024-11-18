interface IFigure {
    theme: "azul" | "branca" | "laranja";
}
declare const Figure: ({ theme }: IFigure) => import("react/jsx-runtime").JSX.Element;
export default Figure;
