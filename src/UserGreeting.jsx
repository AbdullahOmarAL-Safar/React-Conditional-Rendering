
function UserGreeting(props){
return(props.isLoggedIn? <h2 className="welcom-message">Welcome {props.userName} </h2> : 
                         <h2 className="Login-Promt">Please Log in To Continue</h2>);
}

export default UserGreeting;