interface MenuProps {
    ime: string;
}





const Menu = (props: MenuProps) => {
    return (
        <>
            <h1>{props.ime}</h1>
            <br></br>
        </>

    )
}




export default Menu;