import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
function DetailPage() {
    // const { state } = useLocation();
    // console.log(state);
    const params = useParams();
    const { state } = useLocation();

    const {
        Review,
        productDetail,
        productName,
        productNumber,
        productPrice,
        productRating,
        productReview,
        productSize,
    } = state;

    console.log(params.productNumber);

    return (
        <ItemBox>
            <div>
                <h1>{productName}</h1> : {productNumber}
            </div>
        </ItemBox>
    );
}
export default DetailPage;

const ItemBox = styled.div`
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;
