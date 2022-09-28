/* eslint-disable react/no-array-index-key */
import { AiFillStar } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { deleteReview } from "../../../../apis/place";
import { Dots } from "../../../../components";
import { useAppSelector } from "../../../../redux";
import { UserInfos } from "../../../../types";

export const SReviewList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  min-height: 200px;
  padding: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
`;

export const SUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > section {
    display: flex;
    align-items: center;
  }

  & > section > img {
    width: 45px;
    height: 45px;
    margin-right: 15px;
    border-radius: 50%;
    object-fit: cover;
  }

  & > section > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const SStars = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 2px;
    color: #ffc109;
  }

  & > p {
    display: flex;
    margin-left: 5px;
    color: #707070;
    padding-top: 2px;
    font-size: 12px;
  }
`;

export const SBody = styled.p`
  color: #434343;
  font-size: 16px;
  line-height: 30px;
`;

export const SDate = styled.p`
  font-size: 14px;
  color: #707070;
`;

interface Prop {
  storeId: string;
  reviewId: string;
  user: UserInfos;
  updatedAt: string;
  body: string;
  score: number;
}

const ReviewCard = ({
  reviewId,
  updatedAt,
  user,
  storeId,
  body,
  score,
}: Prop) => {
  const params = useParams();
  const { userInfos } = useAppSelector((state) => state.user);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteReview, {
    onSuccess: () => queryClient.invalidateQueries(["place", params.id]),
  });

  return (
    <SReviewList>
      <SUserInfo>
        <section>
          <img src={user.image} alt="profile" />
          <div>
            <span>{user.nickname}</span>
            <SStars>
              {[...Array(score)].map((_, index) => (
                <AiFillStar key={index} />
              ))}
              <p>{score.toFixed(1)}</p>
            </SStars>
          </div>
        </section>
        {user.userId === userInfos?.userId && (
          <Dots
            deleteModalTitle="리뷰를 삭제 하시겠습니까?"
            onDelete={() => mutate(reviewId)}
            onEdit={() => console.log("edit")}
          />
        )}
      </SUserInfo>
      <SBody>{body}</SBody>
      <SDate>{updatedAt.slice(0, 10)}</SDate>
    </SReviewList>
  );
};

export default ReviewCard;
