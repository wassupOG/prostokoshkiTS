import { Typography } from "@mui/material"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

export default function Citation() {
  return (
    <>
      <div className="flex-column-all-center">
        <Typography textAlign={"center"} variant="h6">
          <FormatQuoteIcon />
          Если у вас есть кошка, вы возвращаетесь не в дом, а домой
          <FormatQuoteIcon />
          <div>
            <strong>- Пэм Браун</strong>
          </div>
        </Typography>
      </div>
    </>
  )
}
