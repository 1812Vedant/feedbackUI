import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //Calculate ratings ave
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, ""); //it make it to one decimal place and replace it there is .0 to nothing

  console.log(average);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4 className="feedback.length">
        Average Rating: {isNaN(average) ? 0 : average}
      </h4>
    </div>
  );
}

export default FeedbackStats;
