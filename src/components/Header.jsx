function Header() {
    var bgPrimary = "bg-primary";
    var isHeading = true;
    var myStyle = { color: "red", border: "2px solid black", fontSize: 20 }
    return (
        <div className={2 < 3 ? "bg-primary" : "bg-secondary"}>
            <h2 style={myStyle}>Header</h2>
        </div>
    )
}
export default Header;