import React, {useState} from "react";
import Start from "components/Start";
import QuestionStep from "components/StepContent";

const initialQuestion =[{
		id : "r0",
		name: "제로",
		score: 100,
	},{
		id : "r1",
		name: "닭발",
		score: 0,
	},{
		id : "r2",
		name: "함박스테이크",
		score: 0,
	},{
		id : "r3",
		name: "족발",
		score: 0,
	},{
		id : "r4",
		name: "제육볶음",
		score: 0,
	},{
		id : "r5",
		name: "찜닭",
		score: 0,
	},{
		id : "r6",
		name: "뼈해장국",
		score: 0,
	},{
		id : "r7",
		name: "돈가스",
		score: 0,
}];

const Question = () => {
	const [step, setStep] = useState(0);
	const getNextStep = (data) => {
		setStep(data);
	}
	return (
		<>
			<h1>==={step}===</h1>
			{step > 0 ? <QuestionStep getNextStep={getNextStep}/> : <Start getNextStep={getNextStep}/>}
		</>
	);
};

export default Question;