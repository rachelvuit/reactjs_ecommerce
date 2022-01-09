import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255,255,255,0.5), 
            rgba(255,255,255,0.5)
        ), 
        url("https://static.wixstatic.com/media/45d10e_b42e7d17f04f4ef4814ef47d845905bf~mv2_d_3081_2187_s_2.jpg/v1/fill/w_1896,h_968,al_c,q_85,usm_0.66_1.00_0.01/45d10e_b42e7d17f04f4ef4814ef47d845905bf~mv2_d_3081_2187_s_2.webp")
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
    ${mobile({width: "75%"})};
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
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    justify-content: center;
    align-items: center;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover{
        opacity: 0.8;
    }
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;


const Login = () => {
    return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login;