import Section from "../UI/Section";
import Submission from "./Submission";
import classes from "./Submissions.module.css";

const Submissions = (props) => {
  let submissionList = <h2>No Submissions found. Start adding some!</h2>;
  console.info("Props: ", props)
  if (props.items.length > 0) {
    submissionList = (
      <ul>
        {props.items.map((submission) => (
          <Submission key={submission.id}>
            {submission.text}
          </Submission>
        ))}
      </ul>
    );
  }

  let content = submissionList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = "Loading submissions...";
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Submissions;
