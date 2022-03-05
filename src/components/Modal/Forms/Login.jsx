import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../../utils/validation/yup";
import { login } from "../../../api/auth";
import "./style.css";

const Login = ({setIsLogin}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const submit = (data) => console.log(data);

  return (
    <div className="user-form">
      <Container>
        <h3 className="form-title">Log in with email</h3>
        <Form className="mt-5" onSubmit={handleSubmit(submit)}>
          <Form.Group className="fg mb-4">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Form.Control
                  type="email"
                  placeholder="Enter your email here"
                  {...field}
                />
              )}
            />
            {errors.email && (
              <Form.Text>{errors.email.message}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="fg mb-4">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...field}
                />
              )}
            />
            {errors.password && (
              <Form.Text>{errors.password.message}</Form.Text>
            )}
          </Form.Group>

          <Button
            disabled={Object.keys(errors).length > 0}
            variant="dark"
            type="submit"
            className="my-4 px-5"
          >
            Log In
          </Button>
        </Form>
        <span onClick={() => setIsLogin(false)} className="modal-link-2">
          <i className="bi bi-chevron-left"></i>
          {' '}
          All log in options
        </span>
      </Container>
    </div>
  );
};

export default Login;
