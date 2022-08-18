import classes from "./DeleteTask.module.css";
import useHttp from "../../hooks/useHttp";

const DeleteTask = (props) => {
  // Getting an error for useHttp saying it isn't iterable
  // const [error, isLoading, sendRequest] = useHttp();

  const buttonHandler = (event) => {
    console.log(props.tId);
  };
  //   sendRequest({
  //     url: "https://star-wars-5f10e-default-rtdb.firebaseio.com/tasks.json",
  //     method: "DELETE",
  //     body: "",
  //   });
  // };

  return (
    <div className={classes.div}>
      <button className={classes.button} onClick={buttonHandler}>
        X
      </button>
    </div>
  );
};

export default DeleteTask;
