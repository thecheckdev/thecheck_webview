import React from 'react';
import { useQuestionDispatch } from "QuestionContext";

const Start = (props) => {
	const onStart = () => {
		props.getNextStep(1);
	}
	return (
		<div>
			<button type="button" onClick={onStart}>1분 맞춤메뉴 찾기</button>
			<button type="button">공유하기</button>
		</div>
	);
};

export default Start;