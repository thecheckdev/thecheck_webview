import { createContext } from "react";

export type Question = {
	result : 0,
	menu : [{
		1: {
			name: "닭발",
			score: 0,
		}
	},{
		2:{
			name: "함박스테이크",
			score: 0,
		}
	},{
		3:{
			name: "족발",
			score: 0,
		}
	},{
		4:{
			name: "제육볶음",
			score: 0,
		}
	},{
		5:{
			name: "찜닭",
			score: 0,
		}
	},{
		6:{
			name: "뼈해장국",
			score: 0,
		}
	},{
		7:{
			name: "돈가스",
			score: 0,
		}
	}],
	question: [
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
			done:false,
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
			done:false,
		},
		{
			step : 3,
			q : "자신의 요리 실력을 평가하자면?",
			a : {
				a1 : ["step3 대답1", "1,2,7"],
				a2 : ["step3 대답2", "3,6"],
				a3 : ["step3 대답3", "4"],
				a4 : ["step3 대답4", "5"],
			},
			done:false,
		},
		{
			step : 4,
			q : "내가 맞춤 메뉴를 찾는 이유는 ____ 때문이다!",
			a : {
				a1 : ["step4 대답1", 0],
				a2 : ["step4 대답2", 0],
				a3 : ["step4 대답3", 0],
				a4 : ["step4 대답4", 0],
			},
			done:false,
		},
		{
			step : 5,
			q : "마진율은 어느 정도가 적당하다고 생각하나요?",
			a : {
				a1 : ["step5 대답1", 0],
				a2 : ["step5 대답2", 0],
				a3 : ["step5 대답3", 0],
				a4 : ["step5 대답4", 0],
			},
			done:false,
		},
		{
			step : 6,
			q : "판매하고 싶은 메뉴의 적정 판매 가격대는?",
			a : {
				a1 : ["step6 대답1", 0],
				a2 : ["step6 대답2", 0],
				a3 : ["step6 대답3", 0],
				a4 : ["step6 대답4", 0],
			},
			done:false,
		},
		{
			step : 7,
			q : "메뉴 선택에서 가장 중요하다고 생각하는 점은?",
			a : {
				a1 : ["step7 대답1", 0],
				a2 : ["step7 대답2", 0],
				a3 : ["step7 대답3", 0],
				a4 : ["step7 대답4", 0],
			},
			done:false,
		},
	]
}
export type Question = User[];

const UserContext = createContext<Users | []>([]);

export default Context;