import * as Yup from 'yup';

const signupValidationSchema = Yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required("Required"),
});

export default signupValidationSchema;