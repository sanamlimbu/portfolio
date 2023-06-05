import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AWS from "../assets/aws.svg";
import Go from "../assets/go.svg";
import JavaScript from "../assets/javascript.svg";
import Postgres from "../assets/postgres.svg";
import React from "../assets/react.svg";
import Sanam from "../assets/sanam.jpg";
import TypeScript from "../assets/typescript.svg";
import Waving from "../assets/waving.png";

export default function Home({ id }: { id: string }) {
  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        marginTop: "4em",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          // maxWidth: "107rem",
          padding: "4em",
          gap: "4em",
          flexWrap: "wrap-reverse",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ position: "relative" }}
          >
            {" "}
            Full Stack Software
            <br />
            Developer{" "}
            <img
              src={Waving}
              height={"70em"}
              style={{
                position: "absolute",
              }}
            />
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              marginTop: "1em",
            }}
          >
            Hi, I'm Sanam Limbu. A passionate Software Developer <br /> based in
            Perth, Australia. 📍
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              marginTop: "1em",
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
              <LinkedIn
                fontSize="large"
                color="inherit"
                sx={{
                  color: "text.primary",
                  " &:hover": {
                    color: "rgb(10, 123, 245)",
                  },
                }}
              />
            </IconButton>
            <IconButton
              target="_new"
              rel="noopener noreferrer"
              href={`https://github.com/sanamlimbu`}
              sx={{
                padding: "0",
              }}
            >
              <GitHub
                fontSize="large"
                sx={{
                  color: "text.primary",
                  " &:hover": {
                    color: "rgb(10, 123, 245)",
                  },
                }}
              />
            </IconButton>
          </Typography>
        </Box>
        <AmoebaBorderBox></AmoebaBorderBox>
      </Box>
      <Box>
        <Typography>
          <span>Tech Stack</span>
          <Divider />
        </Typography>
        <Box sx={{ display: "flex", gap: "1em" }}>
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
  );
}

const AmoebaBorderBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${Sanam})`,
  width: "25rem",
  height: "25rem",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  border: "3px solid $black-shade",

  "@media (max-width: 500px)": {
    width: "22rem",
    height: "22rem",
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

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "fit-content",
  height: "fit-content",
  backgroundColor: "white",
  borderRadius: "50%",
  padding: "1em",
  boxShadow: "0 0 10px rgba(0,0,0,.09)",
}));
