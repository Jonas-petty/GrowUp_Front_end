import 'bootstrap-icons/font/bootstrap-icons.json'

function GoogleSigninButton({SignIn, content}) {
    return (
        <button onClick={SignIn}><i class="bi bi-google"> {content}</i></button>
    );
}

export default GoogleSigninButton;