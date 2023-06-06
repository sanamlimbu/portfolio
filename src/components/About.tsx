import { Box, Typography } from "@mui/material";
import Laptop from "../assets/laptop.webp";

export default function About({ id }: { id: string }) {
  return (
    <Box
      id={id}
      sx={{
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "62em",
          padding: "6em 2em 6em 2em",
          width: "100%",
          "@media (max-width: 1024px)": {
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            gap: "2em",
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <img
            src={Laptop}
            height={"350px"}
            width={"410px"}
            style={{
              borderRadius: "16px",
            }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "800",
              background: "linear-gradient(to right, #007FFF, #0059B2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ABOUT ME
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: "0.5em",
              marginBottom: "0.5em",
              fontWeight: "bold",
            }}
          >
            A Full Stack Software Developer
            <br /> based in Perth, Australia 📍
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            I am a Software Developer with a demonstrated history
            <br />
            of delivering high-quality web applications. I have a solid
            <br /> technical background and a proven ability to take on
            <br /> complex projects with skills in various technologies,
            <br /> including ReactJS, TypeScript, Go, PostgreSQL, Docker,
            <br /> and AWS.
          </Typography>
          <Typography sx={{ fontSize: "18px", marginTop: "1em" }}>
            I am known for my ability to adapt to new environments,
            <br /> learn new technologies, and work effectively with <br />
            teams to produce scalable, maintainable software solutions.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
