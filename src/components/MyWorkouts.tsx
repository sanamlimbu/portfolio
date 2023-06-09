import { GitHub, Link } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function MyWorkOuts() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "24px",
        boxShadow: "0 0 10px rgba(0,0,0,.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2em",
        gap: "2em",
        "@media (max-width: 920px)": {
          flexDirection: "column",
          textAlign: "center",
        },
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>MY WORKOUTS 🏋️‍♀️</Typography>
      <Typography
        sx={{
          color: "rgb(85, 85, 85)",
          fontWeight: "500",
          fontSize: "17px",
          textAlign: "center",
        }}
      >
        My Workouts is a web application designed
        <br /> to help you track and manage your workout
        <br />
        routines. This app allows you to record and
        <br /> monitor your workouts, providing valuable <br />
        insights into your progress over.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1em",
        }}
      >
        <Typography
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,.1)",
            fontWeight: "600",
            padding: "0.5em 1em",
          }}
        >
          React
        </Typography>
        <Typography
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,.1)",
            fontWeight: "600",
            padding: "0.5em 1em",
          }}
        >
          Firebase
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <Typography
          fontWeight="bold"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
              color: "#137efb",
            },
          }}
          onClick={() => {
            window.open("https://github.com/sanamlimbu/my-workouts", "_blank");
          }}
        >
          Code <GitHub sx={{ marginLeft: "0.2em", marginRight: "1em" }} />
        </Typography>
        <Typography
          fontWeight="bold"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
              color: "#137efb",
            },
          }}
          onClick={() => window.open("https://gym.limbu.dev", "_blank")}
        >
          Live Demo <Link sx={{ marginLeft: "0.2em" }} />
        </Typography>
      </Box>
      <Typography></Typography>
    </Box>
  );
}
