import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
function DetailPage() {
    const params = useParams();
    console.log(params);
    console.log(params.productNumber);

    // const { state } = useLocation();
    const [product, setProduct] = useState({});
    // console.log(state);
    // console.log(product)

    // useEffect(() => {
    //     fetch(`http://localhost:3000/state/detail/${params.productNumber}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setProduct(data);
    //         });
    // }, []);
    console.log(product);

    // const {
    //     productName,
    //     productPrice,
    //     productNumber,
    //     productSize,
    //     productRating,
    //     productReview,
    //     Review,
    //     productDetail,
    // } = product;

    return <Product>{params.productNumber}</Product>;
}
export default DetailPage;

const Product = styled.div``;
