import 'bootstrap-icons/font/bootstrap-icons.json'

function GoogleSigninButton({content, signinFunction}) {
    return (
        <button className='btn btn-primary' onClick={signinFunction}><i className="bi bi-google"> {content}</i></button>
    );
}

export default GoogleSigninButton;