import { GitHub, Link } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function RentHome() {
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
      <Typography sx={{ fontWeight: "bold" }}>RENT HOME 🏠</Typography>
      <Typography
        sx={{
          color: "rgb(85, 85, 85)",
          fontWeight: "500",
          fontSize: "17px",
          textAlign: "center",
        }}
      >
        RentHome is a web application designed to
        <br /> simplify the process of renting and finding
        <br /> homes. It provides a user-friendly platform
        <br /> where agents can list rental properties, and <br />
        tenants can easily search available homes.
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
          Go
        </Typography>
        <Typography
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,.1)",
            fontWeight: "600",
            padding: "0.5em 1em",
          }}
        >
          PostgreSQL
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
          onClick={() =>
            window.open("https://github.com/sanamlimbu/renthome", "_blank")
          }
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
        >
          Live Demo <Link sx={{ marginLeft: "0.2em" }} />
        </Typography>
      </Box>
      <Typography></Typography>
    </Box>
  );
}
