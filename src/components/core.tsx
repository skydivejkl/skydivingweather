import styled from "@emotion/styled";

import * as colors from "../colors";

export const GUST_LIMIT = 8;
export const GUST_LIMIT_B = 11;

export const View = styled("div")({
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    flexShrink: 0,
    alignContent: "flex-start",
    minWidth: 0,
    fontSize: 12,
    fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
});

export const Title = styled(View)({
    color: "black",
    fontSize: 25,
});

export const Sep = styled(View)({
    width: 15,
    height: 15,
});

export const Note = styled(View)(
    {
        marginTop: 2,
        fontWeight: "bold",
        textDecoration: "none",
    },
    {
        warning: {
            color: colors.darkBlue,
        },
        important: {
            textAlign: "center",
            padding: 5,
            backgroundColor: "red",
            color: "yellow",
        },
    },
);
