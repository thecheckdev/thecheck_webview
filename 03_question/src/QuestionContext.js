import React, { useReducer, createContext, useContext, useRef } from "react";


const InitialQuestion = {
	result : "",
	menu : [{
		r0: {
			name: "제로",
			score: 100,
		},
		r1: {
			name: "닭발",
			score: 0,
		}
	},{
		r2:{
			name: "함박스테이크",
			score: 0,
		}
	},{
		r3:{
			name: "족발",
			score: 0,
		}
	},{
		r4:{
			name: "제육볶음",
			score: 0,
		}
	},{
		r5:{
			name: "찜닭",
			score: 0,
		}
	},{
		r6:{
			name: "뼈해장국",
			score: 0,
		}
	},{
		r7:{
			name: "돈가스",
			score: 0,
		}
	}],
	questionList: [
		{
			step : 1,
			q : "요식업 사업장을 운영 중인가요?",
			a : [
				{
					a1 : ["step1 대답1", 0],
					a2 : ["step1 대답2", 0],
					a3 : ["step1 대답3", 0],
					a4 : ["step1 대답4", 0],
				}
			],
			result:"",
		},
		{
			step : 2,
			q : "어떤 업종을 운영 중인가요?",
			a : {
				a1 : ["step2 대답1", 0],
				a2 : ["step2 대답2", 0],
				a3 : ["step2 대답3", 0],
				a4 : ["step2 대답4", 0],
			},
			result:"",
		},
		{
			step : 3,
			q : "자신의 요리 실력을 평가하자면?",
			a : {
				a1 : ["step3 대답1", "r1,r2,r7"],
				a2 : ["step3 대답2", "r3,r6"],
				a3 : ["step3 대답3", "r4"],
				a4 : ["step3 대답4", "r5"],
			},
			result:"",
		},
		{
			step : 4,
			q : "내가 맞춤 메뉴를 찾는 이유는 ____ 때문이다!",
			a : {
				a1 : ["step4 대답1", "r6"],
				a2 : ["step4 대답2", "r3,r5"],
				a3 : ["step4 대답3", "r2,r4"],
				a4 : ["step4 대답4", "r1,r7"],
			},
			result:"",
		},
		{
			step : 5,
			q : "마진율은 어느 정도가 적당하다고 생각하나요?",
			a : {
				a1 : ["step5 대답1", "r0"],
				a2 : ["step5 대답2", "r2"],
				a3 : ["step5 대답3", "r1,r3,r7"],
				a4 : ["step5 대답4", "r4,r5,r6"],
			},
			result:"",
		},
		{
			step : 6,
			q : "판매하고 싶은 메뉴의 적정 판매 가격대는?",
			a : {
				a1 : ["step6 대답1", "r2,r6,r7"],
				a2 : ["step6 대답2", "r3"],
				a3 : ["step6 대답3", "r1"],
				a4 : ["step6 대답4", "r4"],
				a5 : ["step6 대답4", "r5"],
			},
			result:"",
		},
		{
			step : 7,
			q : "메뉴 선택에서 가장 중요하다고 생각하는 점은?",
			a : {
				a1 : ["step7 대답1", "r3,r7"],
				a2 : ["step7 대답2", "r2,r4"],
				a3 : ["step7 대답3", "r1,r5"],
				a4 : ["step7 대답4", "r6"],
			},
			result:"",
		},
	]
}

const nowStep = -1;

function QuestionReducer(state, action) {
	switch (action.type) {
	case "SELLECT":
		return state.concat(action.todo);
	default:
		throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const QuestionStateContext = createContext();
const QuestionDispatchContext = createContext();
const QuestionNowStepContext = createContext();

export function QuestionProvider({ children }) {
	const [state, dispatch] = useReducer(QuestionReducer, InitialQuestion);

	return (
	<QuestionStateContext.Provider value={state}>
		<QuestionDispatchContext.Provider value={dispatch}>
			<QuestionNowStepContext.Provider value={nowStep}>
				{children}
			</QuestionNowStepContext.Provider>
		</QuestionDispatchContext.Provider>
	</QuestionStateContext.Provider>
	);
}

export function useQuestionState() {
  const context = useContext(QuestionStateContext);
  if (!context) {
    throw new Error("Cannot find QuestionProvider");
  }
  return context;
}

export function useQuestionDispatch() {
  const context = useContext(QuestionDispatchContext);
  if (!context) {
    throw new Error("Cannot find QuestionProvider");
  }
  return context;
}

export function useQuestionNowStep() {
	const context = useContext(QuestionNowStepContext);
	if (!context) {
		throw new Error("Cannot find QuestionProvider");
	}
	return context;
}
