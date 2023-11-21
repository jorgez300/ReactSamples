import { FunctionComponent, useState } from "react";
import { Button, Offcanvas, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "../../Store/Store";



const Menu: FunctionComponent = () => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("Inventory");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navegar = useNavigate();


    const { User } = useSelector((state: reducerType) => state)
    const dispatch = useDispatch();

    console.log(User)

    const handleClickInventory = () => {
        setTitle("Inventory");
        setShow(false);
        navegar("/Inventory");
    }
    const handleClickCart = () => {
        setTitle("Cart");
        setShow(false);
        navegar("/Cart");
    }

    const handleClickLogin = () => {

        dispatch(
            {
                type: "@User/Login",
                payload: {
                    Id: "jgonzalez",
                    Name: "Jorge Gonzalez"
                }
            })

    }

    const handleClickLogout = () => {

        dispatch(
            {
                type: "@User/Logout",
                payload: {
                    Id: undefined,
                    Name: undefined
                }
            })

    }

    const LoginSection = () => {

        if (User.Id === undefined) {
            return (
                <>
                    <Button className="m-1 btnMenu" variant="primary" onClick={handleClickLogin}>
                        Login
                    </Button>
                </>
            )
        }
        else {
            return (
                <>
                    <div>
                        <h3>Bienvenido</h3>
                        <h3>{User.Name}</h3>
                        <Button className="m-1 btnMenu" variant="primary" onClick={handleClickLogout}>
                            Logout
                        </Button>
                    </div>
                </>
            )
        }



    }

    return (
        <>
            <Button className="m-1 btnMenu" variant="secondary" onClick={handleShow}>
                Menu
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Store Online - {title}</Offcanvas.Title>


                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        <ListGroup.Item className="MenuItem" onClick={handleClickInventory}>Inventory</ListGroup.Item>
                        <ListGroup.Item className="MenuItem" onClick={handleClickCart}>Cart</ListGroup.Item>
                    </ListGroup>
                    {LoginSection()}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Menu;