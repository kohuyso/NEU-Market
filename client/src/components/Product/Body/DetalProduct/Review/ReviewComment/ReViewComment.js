import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Rating from "@mui/material/Rating";

let rattingComments = [
  {
    commentId: 1,
    author: "Viet Thang dzai",
    point: 5,
    cmt: "Very good",
    time: "19/10/2022",
    replyComments: [],
    avatar:
      "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/300820180_561882479045120_2189115776500816783_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=_2jTZq5i_mkAX-wK4d2&tn=5B416pR1tGC3ZQgE&_nc_ht=scontent.fhan14-2.fna&oh=00_AfCHFnhGAscixggW3anST6NxmPP4TNHpXZZtg7Gi8t5AEg&oe=6398760A",
    s: "https://www.facebook.com/NITC.NEU/photos/pb.100064956511449.-2207520000./561882482378453/?type=3",
  },
  {
    commentId: 2,
    author: "Viet Thang hoi dzai",
    point: 4,
    cmt: "good",
    time: "29/10/2022",
    avatar:
      "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/300820180_561882479045120_2189115776500816783_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=_2jTZq5i_mkAX-wK4d2&tn=5B416pR1tGC3ZQgE&_nc_ht=scontent.fhan14-2.fna&oh=00_AfCHFnhGAscixggW3anST6NxmPP4TNHpXZZtg7Gi8t5AEg&oe=6398760A",
    s: "https://www.facebook.com/NITC.NEU/photos/pb.100064956511449.-2207520000./561882482378453/?type=3",
    replyComments: [
      {
        commentId: 3,
        author: "Viet Thang dzai",
        point: 5,
        cmt: "5 sao di b ei",
        time: "29/10/2022",
        avatar:
          "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/300820180_561882479045120_2189115776500816783_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=_2jTZq5i_mkAX-wK4d2&tn=5B416pR1tGC3ZQgE&_nc_ht=scontent.fhan14-2.fna&oh=00_AfCHFnhGAscixggW3anST6NxmPP4TNHpXZZtg7Gi8t5AEg&oe=6398760A",
        s: "https://www.facebook.com/NITC.NEU/photos/pb.100064956511449.-2207520000./561882482378453/?type=3",
      },
    ],
  },
];

const ReviewComment = () => (
  <div
    style={{
      padding: "2rem 3rem",
      border: "1px solid #c4cdd5",
      paddingBottom: "3rem",
    }}
  >
    <Comment.Group>
      {rattingComments.map((rattingComment) => (
        <div style={{ marginBottom: "2.5rem" }}>
          <Comment>
            <Comment.Avatar src={rattingComment.avatar} />
            <Comment.Content>
              <Comment.Author as="a">{rattingComment.author}</Comment.Author>
              <Comment.Metadata>
                <div>{rattingComment.time}</div>
              </Comment.Metadata>
              <Comment.Text>
                <Rating
                  name="half-rating-read"
                  defaultValue={rattingComment.point}
                  precision={0.5}
                  readOnly
                />
              </Comment.Text>
              <div style={{ marginTop: "-10px" }}>
                <Comment.Text>
                  <p>{rattingComment.cmt}</p>
                </Comment.Text>
              </div>
            </Comment.Content>
          </Comment>
        </div>
      ))}
    </Comment.Group>
  </div>
);

export default ReviewComment;
