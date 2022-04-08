import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginFormModel } from "../Interfaces/Login.form.model";
import { store } from "../store/store";
import { setUserAction } from "../store/userSettings.actions";



export function Login() {

    const [hasError, setHasError] = useState(false);
    const [formInputs, setFormInputs] = useState<LoginFormModel>({} as LoginFormModel);

    let location = useLocation();
    let navigate = useNavigate();

    let from = (location as any).state?.from?.pathname || "/";


    const onButtonSend = (e: any) => {
        setHasError(false);

        fetch(`${"http://localhost:3001"}/users?email=${formInputs.email}`).then(res => res.json()).then(jRes => {
            if (jRes && jRes.length == 1 && jRes[0].password === formInputs.password) {
                store.dispatch({
                    type: setUserAction,
                    payload: formInputs
                });
                navigate(from, { replace: true });
            } else {
                setHasError(true);
            }
        });
    }

    return (<Container className="mt-4">
        <Form>
            <Form.Group className="form-outline mb-4">
                <Form.Control type="email" onChange={e => setFormInputs({
                    ...formInputs,
                    email: e.target.value
                })} />
                <Form.Label>Email address</Form.Label>
            </Form.Group>

            <Form.Group className="form-outline mb-4">
                <Form.Control type="password" onChange={e => setFormInputs({
                    ...formInputs,
                    password: e.target.value
                })} />
                <Form.Label>Password</Form.Label>
            </Form.Group>

            <Form.Group className="row mb-4">
                <div className="col d-flex justify-content-center">
                    <Form.Check type="checkbox" label="Remember me" />
                </div>
                <div className="col">
                    <a href="#!">Forgot password?</a>
                </div>
            </Form.Group>

            <Button variant="primary" onClick={onButtonSend}>Sign in</Button>

            {hasError ? <Alert variant={"danger"}>פרטים שגויים</Alert> : null}
            {/*div class="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
            <p>or sign up with:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"></i>
            </button>
    </div>*/}
        </Form>
    </Container>)
}