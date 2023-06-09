import {
  Box,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import AWS from "../assets/aws.svg";
import CSS from "../assets/css.svg";
import GitHub from "../assets/github.svg";
import Go from "../assets/go.svg";
import HTML from "../assets/html.svg";
import JavaScript from "../assets/javascript.svg";
import LinkedIn from "../assets/linkedin.svg";
import Postgres from "../assets/postgres.svg";
import React from "../assets/react.svg";
import Sanam from "../assets/sanam.jpg";
import TypeScript from "../assets/typescript.svg";
import Waving from "../assets/waving.png";
export default function Home({ id }: { id: string }) {
  const matches = useMediaQuery("(max-width:900px)");
  return (
    <Box
      id={id}
      sx={{
        backgroundColor: "#f9f9f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "62em",
          width: "100%",
          "@media (max-width: 500px)": {
            padding: "2em 2em",
          },
          "@media (max-width: 1024px)": {
            padding: "6em 2em 2em 2em!important",
          },
          "@media (max-width: 1281px)": {
            padding: "8em 2em 14em 2em!important",
          },
          padding: "16em 2em 14em 2em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "4em",
            flexWrap: "wrap-reverse",
            "@media (max-width: 978px)": {
              textAlign: "center",
              justifyContent: "center",
            },
          }}
        >
          <Box>
            <Typography variant={matches ? "h3" : "h2"} fontWeight="bold">
              {" "}
              Full Stack Software
              <br />
              Developer{" "}
              {matches ? (
                <img
                  src={Waving}
                  height={"40em"}
                  style={{
                    position: "absolute",
                    marginLeft: "0.2em",
                  }}
                />
              ) : (
                <img
                  src={Waving}
                  height={"70em"}
                  style={{
                    position: "absolute",
                    marginLeft: "0.2em",
                  }}
                />
              )}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "1em",
                color: "rgb(85, 85, 85)",
              }}
            >
              Hi, I'm Sanam Limbu. A passionate Software Developer <br /> based
              in Perth, Australia. 📍
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "1em",
                color: "rgb(85, 85, 85)",
              }}
            >
              Aside from software engineering, I enjoy going to the gym, <br />{" "}
              and watching Manchester United playing soccer.
            </Typography>
            <Typography
              sx={{
                marginTop: "1em",
              }}
            >
              <IconButton
                target="_new"
                rel="noopener noreferrer"
                href={`https://www.linkedin.com/in/sanam-limbu/`}
                sx={{
                  padding: "0",
                  "&:hover": {
                    background: "none",
                  },
                  marginRight: "0.5em",
                }}
              >
                <img src={LinkedIn} height={"42"} />
              </IconButton>
              <IconButton
                target="_new"
                rel="noopener noreferrer"
                href={`https://github.com/sanamlimbu`}
                sx={{
                  padding: "0",
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                <img src={GitHub} height={"42"} />
              </IconButton>
            </Typography>
          </Box>
          <AmoebaBorderBox></AmoebaBorderBox>
        </Box>
        <Box>
          <Box
            sx={{
              marginBottom: "1em",
              marginTop: "3em",
              "@media (max-width: 900px)": {
                textAlign: "center",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Tech Stack
            </Typography>
            <Divider />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "1em",
              flexWrap: "wrap",
              marginBottom: "1em",
              "@media (max-width: 900px)": {
                justifyContent: "center",
              },
            }}
          >
            <ImageContainer>
              <StyledImg src={HTML} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={CSS} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={JavaScript} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={React} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={Go} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={TypeScript} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={Postgres} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={AWS} />
            </ImageContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const AmoebaBorderBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${Sanam})`,
  width: "22rem",
  height: "22rem",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  border: "3px solid $black-shade",

  "@media (max-width: 500px)": {
    width: "16rem!important",
    height: "16rem!important",
  },

  "@media (max-width: 768px)": {
    width: "18rem",
    height: "18rem",
  },

  "@media (max-width: 1024px)": {
    width: "20rem",
    height: "20rem",
  },

  animation: "morph 8s ease-in-out infinite",
  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
  position: "relative",
  transition: "all 1s ease-in-out",

  "@keyframes morph": {
    "0%": {
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    },
    "50%": {
      borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
    },
    "100%": {
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    },
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  height: "2em",
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  width: "fit-content",
  height: "fit-content",
  backgroundColor: "white",
  borderRadius: "50%",
  padding: "1em",
  boxShadow: "0 0 10px rgba(0,0,0,.09)",
}));
