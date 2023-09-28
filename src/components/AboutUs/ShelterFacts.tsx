import { Paper, Typography, Stack, useTheme } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import PetsIcon from "@mui/icons-material/Pets"

export default function ShelterFacts() {
  const theme = useTheme()
  return (
    <>
      <Paper elevation={0} sx={{ mt: 3, mb: 3, p: 4, background: theme.palette.background.default }}>
        <Typography fontWeight={600} variant="h6" sx={{ textAlign: "center", mb: 3 }}>
          За 1,5 года существования приюта, мы осчастливили более 150 кошечек!
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} sx={{ justifyContent: "space-evenly", gap: 2 }}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
            <div className="flex-column-center">
              <HomeIcon fontSize="large" />
              <Typography textAlign={"center"} variant="h6">
                Более 90 котиков нашли дом
              </Typography>
            </div>
          </Paper>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
            <div className="flex-column-center">
              <PetsIcon fontSize="large" />
              <Typography textAlign={"center"} variant="h6">
                Более 60 котиков ищут дом
              </Typography>
            </div>
          </Paper>
        </Stack>
      </Paper>
    </>
  )
}
