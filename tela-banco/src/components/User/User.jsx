

export default function User({user}) {
    
    return(
        <>
            <img src={user.photo} />
            <h3>{user.name}</h3>
        </>
    )
}