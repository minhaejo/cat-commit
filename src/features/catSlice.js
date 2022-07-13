import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 catList :[],
 catCount:0
}
//여기서 관리해야 하는 상태 목록

//제일 먼저 형이 집어주면 좋겠는 부분:export const selectCat = state => state.cats.catList 이부분은 캣 스테이트의 배열을
//나타낸다. 또한 app.js에서 useSelector안에 selectCat을 할당하면 스테이트의 값을 사용할수있다.
//하지만 여러컴포넌트에서 계속 꺼내서 쓸 수 있는 코드인가? 그렇게 원래 사용하는 것인가? 아니면 하나만 사용해서 props로 전달해야하는건가?


//favorites
//favorites(즉 하트를 눌러 저장시키고 싶은 요소) 배열을 상태관리해야함 .
 //favorites 에서 쉽지 않았던이유 : 기존 배열에 넣는것은 쉬웠다 하지만 app.js파일에서 favorites(라는 useState)를 많이 사용하는데 
 //구조가 순식간에 깨져버리는게 어려웠고 []...favorites,mainCat] 이런 형식의 코드들의 작성이 많았기에 쉽지않았다.

//count
//카운트 이것도 똑같다 . export const selectCat = state => state.cats.catList 한것처럼 이니셜 스테이트의 값 중에 catCount를
// export const catCount = state =>state.cats.catCount 로 다시 한 번 새로운 useSelector(catCount)로 넘겼어야 하는건가?

 ////fetch

//fetch로 받아와서 메인 캣 이미지를 업데이트 할 것이다 .
 //첫번째 메인이미지는 url로 우리가 정적으로 때려박은 이미지 url이있다. 그렇다면 mainCatImg에 대한걸 이니셜 스테이트에 넣어두고
 //그 이니셜스테이트의 메인캣을 fetch로 받아온 url로 교체하는 리듀서가 필요한것인가? 
//ChangeCatImg 라는 리듀서가 있다면 그안에 고양이 api를 사용하는 fetch코드가 필요했던건가?
 
//느낀점:
//리덕스의 기본적인 흐름과 데이터를 받아오는 과정은 부족하지만 아쉬운대로 조금씩 사용할만큼의 개념은 잡혔다
//무슨 상태를 관리해야하는지도 생각하게됐다.
//아무래도 useSelector의 재사용 범위? 그리고 state의 특정 값을 받아올땐 계속 아래와같이 해야하는지의 대한 개념이 부족하다
//export const selectCat = state => state.cats.catList 



const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
      saveFavoriteCat:(state,action)=>{
          state.catList.push(action.payload)
          console.log(state.catList)
      },
      saveTitleCount:(state)=>{
       state.catCount =  state.catCount +1
       console.log(state.catCount)
      }
  }
});

export const {saveFavoriteCat,saveTitleCount} = catSlice.actions
export const selectCat = state => state.cats.catList
console.log(selectCat)

export default catSlice.reducer