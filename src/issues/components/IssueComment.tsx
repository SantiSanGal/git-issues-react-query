import { FC } from "react";
import ReactMarkdown from "react-markdown"
import { Issue } from "../interfaces";

interface Props {
  issue: Issue;
}

export const IssueComment: FC<Props> = ({ issue }) => {
  return (
    <div className="col-12">
        <div className="card border-white mt-2">
            <div className="card-header bg-dark">
                <img src="https://avatars.githubusercontent.com/u/1933404?v=4" alt="User Avatar" className="avatar" />
                <span className="mx-2">{ issue.user.login } commented</span>
            </div>
            <div className="card-issue text-dark">
                <ReactMarkdown>{ issue.body } </ReactMarkdown>
            </div>
        </div>
    </div>
  )
}
