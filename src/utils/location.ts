
export const getTopLocation = (): string => {
    const splot = window.location.pathname.split("/");
    return splot[splot.length - 1];
} 
