import { setFirstNameAction } from "../store/userSettings.actions"
import { store } from "../store/store"

const About = () => {

    store.dispatch({
        type: setFirstNameAction,
        payload: {
            firstName: 'the name from the input'
        }
    });

    return (
        <div>About</div>
    )
}

export default About