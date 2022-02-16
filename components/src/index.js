import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    comment="I agree too"
                    src={Faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00PM"
                    comment="I agree, very nice!"
                    src={Faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 1:00AM"
                    comment="Nice blog post!"
                    src={Faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
