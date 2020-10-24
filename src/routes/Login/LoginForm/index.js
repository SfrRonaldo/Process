import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";

export default function LoginForm() {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      <Container maxWidth="sm">
        <Formik
          initialValues={{
            username: "rtunque",
            password: "Password123",
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().max(255).required("Usuario es requerido"),
            password: Yup.string().max(255).required("Contraseña es requerida"),
          })}
          onSubmit={() => {
            navigate("/app/home", { replace: true });
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box mb={3}>
                <Typography color="textPrimary" variant="h2">
                  Iniciar Sesión
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  Inicie sesión para ingresar a la plataforma
                </Typography>
              </Box>
              <TextField
                error={Boolean(touched.username && errors.username)}
                fullWidth
                helperText={touched.username && errors.username}
                label="Usuario"
                margin="normal"
                name="username"
                onBlur={handleBlur}
                onChange={handleChange}
                type="username"
                value={values.username}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Contraseña"
                margin="normal"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />
              <Box my={2}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Iniciar Sesión
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Container>
    </Box>
  );
}
