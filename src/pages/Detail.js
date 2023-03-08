import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

function DetailPage() {
    const params = useParams();
    console.log(params);
    const { state } = useLocation();
    console.log(state);
    const [product, setProduct] = useState(state);
    console.log(product);
    const {
        Review,
        productDetail,
        productName,
        productNumber,
        productPrice,
        productRating,
        productReview,
        productSize,
    } = product;

    console.log(params.productNumber);

    return (
        /* 
            상세 페이지는 자유롭게 꾸미시면 됩니다.
            아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
            미리 콘솔에 찍어두었습니다.
        */
        /*
            단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
        */
        <div>{params.productNumber}</div>
    );
}
export default DetailPage;
