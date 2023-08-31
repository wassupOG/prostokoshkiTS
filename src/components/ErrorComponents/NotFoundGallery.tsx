import { Alert, AlertTitle, Typography } from "@mui/material"

export default function NotFoundGallery() {
  return (
    <Alert variant="filled" severity="error">
      <Typography variant="subtitle1">
        <AlertTitle>Упс!</AlertTitle>
        Таких кошечек <strong>не нашлось!</strong> Проверьте правильность ввода и фильтры.
      </Typography>
    </Alert>
  )
}
