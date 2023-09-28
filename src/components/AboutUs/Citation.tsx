import { Paper, Typography } from "@mui/material"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

export default function Citation() {
  return (
    <>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3, mt: 3 }}>
        <Typography textAlign={"center"} variant="h6">
          <FormatQuoteIcon />
          Если у вас есть кошка, вы возвращаетесь не в дом, а домой
          <FormatQuoteIcon />
          <div>- Пэм Браун</div>
        </Typography>
      </Paper>
    </>
  )
}
