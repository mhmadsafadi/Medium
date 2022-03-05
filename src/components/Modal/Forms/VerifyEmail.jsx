import React, { useCallback, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { verfiyCodeSchema } from "../../../utils/validation/yup";
import { verfiyEmail } from "../../../api/auth";

const VerifyEmail = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(verfiyCodeSchema),
  });

  const submitVerfiyCode = useCallback(async (submitData) => {
    const { data } = await verfiyEmail(submitData);
    console.log("data", data);
  }, [handleSubmit]);

  return (
    <div>
      <Form onSubmit={handleSubmit(submitVerfiyCode)}>
        <h3 className="form-title mb-5">Verify Email</h3>
        <Form.Group className="fg mb-4">
          <Controller
            name="verifyEmail"
            control={control}
            render={({ field }) => (
              <Form.Control
                type="text"
                placeholder="Enter your code"
                {...field}
              />
            )}
          />
          {errors.verifyEmail && (
            <Form.Text>{errors.verifyEmail.message}</Form.Text>
          )}
        </Form.Group>

        <Button variant="dark" type="submit" className="my-4">
          Verify Email
        </Button>
      </Form>
    </div>
  );
};

export default VerifyEmail;
