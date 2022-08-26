import classes from './Submission.module.css';

const Submission = (props) => {
  console.info("props.children: ", props.children)
  if (props.children == ""){
    return <li className={classes.submission}>THE API CURRENTLY DOESNT WORK FOR REDDIT SUBMISSIONS THAT ARE LINKS</li>
  }
  return <li className={classes.submission}>{props.children}</li>
};

export default Submission;