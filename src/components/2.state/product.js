import styled from 'styled-components';
import DetailPage from '../../pages/Detail';
function ProductCard({ onNavigate, products }) {
    const {
        Review,
        productDetail,
        productName,
        productNumber,
        productPrice,
        productRating,
        productReview,
        productSize,
    } = products;
    return (
        <>
            <S.Item onClick={() => onNavigate(products)}>
                <h4>{productName}</h4>
                <p>상품번호: {productNumber}</p>
                <p>
                    가격:{' '}
                    {productPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                </p>
                <p>사이즈: {productSize}</p>
                <p>평점: {productRating}</p>
                <p>리뷰: {productReview}</p>
            </S.Item>
        </>
    );
}
export default ProductCard;

const Item = styled.li`
    border: 1px solid #000;
    cursor: pointer;
    width: 300px;
    margin: 16px auto;
`;

const S = {
    Item,
};
