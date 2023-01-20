import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email()
    .required("Please enter your email.")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email is not valid!"
    ),
  password: Yup.string()
    .required("Please enter your password.")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character."
    )
});
