import React from 'react';

const Start = () => {
	const onStart = () => {
		console.log("시작!!!!");
	}
	return (
		<div>
			<button type="button" onClick={onStart}>1분 맞춤메뉴 찾기</button>
			<button type="button">공유하기</button>
		</div>
	);
};

export default Start;