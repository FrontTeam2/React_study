import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import useInputs from "../hooks/useInputs";
import productList from "../__mock__/products.json";

function DetailPage() {
    const params = useParams();
    const { productNumber } = params;
    const { products } = productList;

    const [product, setProduct] = useState();
    const [{ reviewer, review, rating }, onChange] = useInputs("");

    useEffect(() => {
        const productFind = products.find(
            (item) => item.productNumber === productNumber
        );
        setProduct(productFind);
    }, []);

    const onReviewWrite = () => {
        const newReview = {
            reviewer: reviewer,
            review: review,
            rating: rating,
        };
        setProduct((prev) => ({
            ...prev,
            Review: [...prev.Review, newReview],
        }));
    };

    return (
        <>
            {product && (
                <Product>
                    <h2>{product.productName}</h2>
                    <p>상품번호: {productNumber}</p>
                    <p>
                        가격: {Number(product.productPrice).toLocaleString()}원
                    </p>
                    <p>사이즈: {product.productSize}</p>
                    <p>평점: {product.productRating}</p>

                    <h2>리뷰</h2>
                    <ul>
                        {product.Review.map((item, index) => {
                            return (
                                <Review key={index}>
                                    <p>작성자:{item.reviewer}</p>
                                    <p>내용:{item.review}</p>
                                    <p>별점:{item.rating}</p>
                                </Review>
                            );
                        })}
                    </ul>
                    <h4>작성하기</h4>
                    <ReviewInput>
                        <input
                            onChange={onChange}
                            name="reviewer"
                            placeholder="작성자"
                        ></input>
                        <input
                            onChange={onChange}
                            name="review"
                            placeholder="내용"
                        ></input>
                        <input
                            onChange={onChange}
                            name="rating"
                            placeholder="별점"
                        ></input>
                        <button onClick={onReviewWrite}>작성</button>
                    </ReviewInput>
                </Product>
            )}
        </>
    );
}
export default DetailPage;

const Product = styled.div`
    margin: 0 auto;
`;
const Review = styled.li`
    display: flex;
    gap: 30px;
    justify-content: center;
`;

const ReviewInput = styled.div``;
