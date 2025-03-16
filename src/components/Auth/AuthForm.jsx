import {useForm} from "react-hook-form";
import {LodinFormStyles} from "./AuthFormStyled"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(15).required(),
});


const AuthForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    });
    
    const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
    
    return (
        <LodinFormStyles onSubmit={handleSubmit(onSubmitHandler)}> 
            <input {...register("email")} placeholder="Email address" type="email" required />
            <p>{errors.email?.message}</p>
            <input {...register("password")} placeholder="Password" type="password" required />
            <p>{errors.password?.message}</p>
            <button type="submit">Log in</button>
        </LodinFormStyles>
    )
}

export default AuthForm