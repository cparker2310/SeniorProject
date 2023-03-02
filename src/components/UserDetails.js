const UserDetails= ({ user }) => {
    return (
        <div className="user-details">
            <h4>{user.name}</h4>
            <p><strong>Email: </strong>{user.email}</p>
        </div>
    )
}

export default UserDetails
