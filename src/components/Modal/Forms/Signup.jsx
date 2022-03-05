import React, { useCallback, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import VerifyEmail from "./VerifyEmail";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../../../utils/validation/yup";
import { signup } from "../../../api/auth";
import "./style.css";

const Signup = ({setIsSignup}) => {
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  console.log("serverError **", serverError);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  console.log("errors", errors);

  const submit = useCallback(
    async (submitData) => {
      setIsLoading(true);
      const { kind, error, data } = await signup(submitData);
      if (kind === "OK") {
        // route
        // loaclstoage
        // state dispacth
        console.log(data);
        setVerifyEmail(true);
      } else {
        setServerError(error);
      }
      setIsLoading(false);
    },
    [handleSubmit]
  );

  return (
    <div className="user-form">
      <Container>
        {!verifyEmail ? (
          <>
            <h3 className="form-title">Sign up with email</h3>
            <Form className="mt-5" onSubmit={handleSubmit(submit)}>
              <Form.Group className="fg mb-4">
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      {...field}
                    />
                  )}
                />
                {errors.firstName && (
                  <Form.Text>{errors.firstName.message}</Form.Text>
                )}
              </Form.Group>
              <Form.Group className="fg mb-4">
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      {...field}
                    />
                  )}
                />
                {errors.lastName && (
                  <Form.Text>{errors.lastName.message}</Form.Text>
                )}
              </Form.Group>
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
                {errors.email && <Form.Text>{errors.email.message}</Form.Text>}
                <p className="error">{serverError}</p>
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
                disabled={isLoading}
                variant="dark"
                type="submit"
                className="my-4 px-5"
              >
                {isLoading ? "loading..." : " Sign Up"}
              </Button>
            </Form>
            <span onClick={() => setIsSignup(false)} className="modal-link-2">
              <i className="bi bi-chevron-left"></i>
              {' '}
              All sign up options
            </span>
          </>
        ) : (
          <VerifyEmail />
        )}
      </Container>
    </div>
  );
};

export default Signup;
