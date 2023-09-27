import { useState } from "react"
import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { photoArray } from "../../routes/AboutUs"

interface CarouselProps {
  array: photoArray[]
}

export default function Carousel({ array }: CarouselProps) {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = array.length - 1
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  return (
    <>
      <Box>
        <MobileStepper
          variant="dots"
          steps={maxSteps + 1}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 300 }}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps}>
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
            </Button>
          }
        />

        <Box
          component="img"
          sx={{
            maxHeight: 400,
            display: "block",
            maxWidth: 300,
            overflow: "hidden",
            objectFit: "cover",
          }}
          src={array[activeStep].path}
          alt={array[activeStep].label}
        />

        <Paper
          square
          elevation={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: 300,
            minHeight: 50,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            p: 1,
          }}>
          <Typography>{array[activeStep].label}</Typography>
        </Paper>
      </Box>
    </>
  )
}
