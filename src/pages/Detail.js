import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useInputs from '../hooks/useInputs';
import productList from '../__mock__/products.json';
import { useEffect, useState } from 'react';

function DetailPage() {
    const params = useParams();
    const { productNumber } = params;
    const { products } = productList;
    const [product, setProduct] = useState();

    useEffect(() => {
        const product = products.find(
            (item) => item.productNumber === productNumber
        );
        setProduct(product);
    }, []);

    const [isReview, setIsReview] = useState(false);
    const [{ reviewer, review, rating }, onChange] = useInputs('');

    const onClickIsReview = () => {
        setIsReview(!isReview);
    };

    const onClickCancelReview = () => {
        setIsReview(false);
    };

    const onClickUpdateReview = () => {
        const newReview = {
            reviewer: reviewer,
            review: review,
            rating: rating,
        };

        if (window.confirm('작성하시겠습니까?')) {
            setProduct((prev) => ({
                ...prev,
                Review: [...prev.Review, newReview],
            }));

            setIsReview(false);
        }
    };
    return (
        <>
            {product && (
                <ItemBox>
                    <ItemName>
                        <h1>{product.productName}</h1>
                        <span>: {product.productNumber}</span>
                    </ItemName>
                    <h3>가격 : {product.productPrice}</h3>
                    <h5>평점 : {product.productRating}/5</h5>
                    <h2>리뷰{product.Review.length}</h2>
                    <ItemReview>
                        {product.Review.map((item) => {
                            return (
                                <>
                                    <ul>
                                        <li>
                                            <span>
                                                작성자 : {item.reviewer}
                                            </span>
                                            <span>리뷰 : {item.review}</span>
                                            <span>점수 : {item.rating}</span>
                                        </li>
                                    </ul>
                                </>
                            );
                        })}
                    </ItemReview>
                    {isReview && (
                        <ItemInputReview>
                            <input
                                placeholder="작성자"
                                onChange={onChange}
                                name="reviewer"
                            />
                            <input
                                placeholder="리뷰 입력"
                                onChange={onChange}
                                name="review"
                            />
                            <input
                                placeholder="점수 입력"
                                onChange={onChange}
                                name="rating"
                            />
                            <button onClick={onClickUpdateReview}>
                                작성완료
                            </button>
                            <button onClick={onClickCancelReview}>
                                작성취소
                            </button>
                        </ItemInputReview>
                    )}
                    {!isReview && (
                        <button onClick={onClickIsReview}>리뷰 작성하기</button>
                    )}
                </ItemBox>
            )}
        </>
    );
}
export default DetailPage;

const ItemBox = styled.div`
    width: 800px;
    margin: 0 auto;
    display: flex;
    align-items: baseline;

    flex-direction: column;
`;

const ItemName = styled.div`
    display: flex;
    align-items: baseline;
    gap: 16px;
`;

const ItemReview = styled.div`
    text-align: left;
    li {
        display: flex;
        gap: 20px;
        align-items: baseline;
    }
    span {
        margin-right: 15px;
        width: 200px;
    }
`;

const ItemInputReview = styled.div`
    display: flex;
`;
