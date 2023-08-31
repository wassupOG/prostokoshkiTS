import { Alert, AlertTitle, Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <>
      <div className="flex-column-center">
        <img className="not-found-img mb-20" src="/images/not_found.jpg" alt="Ошибка: ничего не найдено!" />
      </div>
      <Alert variant="filled" severity="error">
        <Typography variant="subtitle1">
          <AlertTitle>Упс!</AlertTitle>
          Такой страницы <strong>не нашлось!</strong> Проверьте правильность ссылки.
        </Typography>
      </Alert>
    </>
  );
}
