import { FunctionComponent } from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../../Model/Product";
import { reducerType } from "../../Store/Store";

const InventoryIndex: FunctionComponent = () => {

    const {Order} = useSelector((state: reducerType) => state)
    const dispatch = useDispatch();

    console.log(Order)

    const handleClickAdd = () => {

        const product1 = new Product();
        product1.Id = "1";

        const product2 = new Product();
        product2.Id = "2";

        dispatch(
            {
                type: "@Order/AddProduct",
                payload: {
                    Products: [product1,product2]
                }
            })

    }

    return (
        <Container fluid style={{ minWidth: "1000px" }}>
            <Button className="m-1 btnMenu" variant="primary" onClick={handleClickAdd}>
                Add
            </Button>

        </Container>

    )
}

export default InventoryIndex;