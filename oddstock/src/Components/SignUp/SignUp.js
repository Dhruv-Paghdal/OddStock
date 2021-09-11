import './SignUp.css';

import {React,useState} from 'react';
import { Card, Form, Button,FormControl, Container } from 'react-bootstrap';
import ShowChartIcon from '@material-ui/icons/ShowChart';

function SignUp() {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    
    let nameChange=(event)=>{
        name=event.target.value;
        setName(name)
    }

    let emailChange=(event)=>{
        email=event.target.value;
        setEmail(email)
    }

    let passwordChange=(event)=>{
        password=event.target.value;
        setPassword(password)
    }
    return (
        <>
            <Container className="my-3 mainContainer">
                <Card className="card">
                    <ShowChartIcon style={{ color: "#0179ff", fontSize: "45px" }} />
                    <Card.Body>
                        <Form>
                            <h2>Sign Up</h2>
                            <h6 style={{color:"#a9aaad"}}>Experience our premium feature</h6>
                            <hr />
                            <h5 className="mb-2">Name*</h5>
                            <FormControl onChange={nameChange} className="mb-4" style={{ borderRadius: "25px" }} type="email" placeholder="Name" required />
                            <h5 className="mb-2">Email*</h5>
                            <FormControl onChange={emailChange} className="mb-4" style={{ borderRadius: "25px" }} type="email" placeholder="oddstock@market.com" required />
                            <h5 className="mb-2">Password*</h5>
                            <FormControl onChange={passwordChange} className="mb-4" style={{ borderRadius: "25px" }} type="password" placeholder="Min. 5 Char" required />
                            <Button className="mb-4" style={{ borderRadius: "25px" }}>Sign Up</Button>
                            <h6>Already have an account? <span style={{ color: "#0179ff" }}> Sign in. </span></h6>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default SignUp
