import React, {BaseSyntheticEvent, useState} from "react";
import styled from "styled-components";
import {mobile} from "../response";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import * as actions from "../../../store/action";
import {useDispatch, useSelector} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import Spinner from "../../spinner/spinner";
import {useHistory, Redirect} from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
interface FormInputs {
    passwords: string;
    email: string
}
const LoginUser = () => {
    let dispatch = useDispatch();
    let titleSignUp = useSelector((state: any) => state.login.titleSignup);
    let statusSignUp = useSelector((state: any) => state.login.StatusSignup);
    let history = useHistory();
    const [value, setValue] = useState({
        email: '',
        passwords: '',
    }) as any;
    const {register, formState: {errors}, handleSubmit} = useForm<FormInputs>({
        criteriaMode: "all"
    });
    const changeValue = (event: any) => {
        setValue({...value, [event.target.name]: event.target.value});
    }
    const notify = (titlePost: String) => toast(titlePost);
    let redirect = null;
    let isLoginUser = useSelector((state: any) => state.login.isLoginUser);
    const clickValue = async (data: BaseSyntheticEvent<object, any, any> | undefined) => {
        let action = actions.loginAppUser(value.email,value.passwords);
        await dispatch(action);
        await notify(titleSignUp);
    }
    if(isLoginUser)
    {
        redirect = <Redirect  to="/user" />
    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form onSubmit={handleSubmit((data: any) => clickValue(data))}>
                    <Input placeholder="email"
                           type="email"
                           {...register("email", {
                               required: "This is required.",
                               maxLength: {
                                   value: 30,
                                   message: "This input exceed maxLength."
                               }
                           })}
                           onChange={(event) => changeValue(event)}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({messages}) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                            ))
                        }
                    />
                    <Input     placeholder="Mật Khẩu"
                               type="password"
                               {...register("passwords", {
                                   required: "This is required.",
                                   maxLength: {
                                       value: 10,
                                       message: "This input exceed maxLength."
                                   }
                               })}
                               onChange={(event) => changeValue(event)}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="passwords"
                        render={({messages}) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                            ))
                        }
                    />
                    <Button>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
            <>
                {statusSignUp && <ToastContainer/>}
                {statusSignUp && <Spinner />}
            </>
            {redirect}
        </Container>
    );
};

export default LoginUser;
