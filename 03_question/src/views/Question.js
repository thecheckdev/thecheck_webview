import React from "react";
import { useQuestionNowStep } from "QuestionContext";
import Start from "components/Start";
import QuestionStep from "components/QuestionStep";

const Question = () => {
	const nowStep = useQuestionNowStep();
	console.log(nowStep);
	// console.log(nowStep.current);
	return (
		<div>
			{nowStep === -1 && <Start/>}
			<QuestionStep step={nowStep}/>
		</div>
	);
};

export default Question;