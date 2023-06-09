import { Box, Typography } from "@mui/material";
import MyWorkOuts from "./MyWorkouts";
import RentHome from "./RentHome";
export default function Projects({ id }: { id: string }) {
  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "62em",
          padding: "6em 2em",
          width: "100%",
          gap: "3em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "@media (max-width: 971px)": {
              justifyContent: "center",
              textAlign: "center",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "800",
                background: "linear-gradient(to right, #007FFF, #0059B2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PORTFOLIO
            </Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: "0.5em",
                fontWeight: "bold",
              }}
            >
              Each project is a unique piece of development 🧩
            </Typography>
          </Box>
          <div></div>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2em",
            "@media (max-width: 971px)": {
              justifyContent: "center",
            },
          }}
        >
          <MyWorkOuts />
          <RentHome />
        </Box>
      </Box>
    </Box>
  );
}
