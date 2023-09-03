# Stillsteal_Ecommerce_project--React_Django
- 웹사이트 링크  : https://stillsteal.netlify.app
- 백엔드(API) : https://vyckd353.pythonanywhere.com/api/

- 만든이 : 박영환(John Park)
- 주요 도구 : React(프론트엔드), Django(백엔드, restframework)
- CSS : Tailwind Css, Css Modules
- 보조 도구 : Html, ContextApi, MySql, PhotoShop
- 아이디어 여부 : 아이디어 75%, 클론 25% (어떻게 인터넷 쇼핑사이트가 구성되있는지 여러 사이트 참고)
- 번들러 도구 : Webpack
- 설명 : 이것은 제가 연습을 위해 만든 인터넷 쇼핑 웹 사이트입니다, 따지고보면 클론은 아니지만, 무엇을 구현하면 좋을지 참고하기 위해 몇몇 사이트를 참고하긴 했습니다.

- 어려웠던점 및 해결책 :
1. 카트 기능을 구현하는 동안, "로컬 스토리지"가 필요하다는 것을 깨달았았고, 처음 써보는 거라 그때는 좀 힘들었습니다.
특히 페이지 새로 고침 할 때마다, 스토리지 데이터들이 삭제되었습니다, 오류를 확인해보니 "[]"안에 오타가 있었기 때문입니다, 그러나 현재는 로컬스토리지를 사용하는데 더욱 익숙해 질 수 있었습니다.
2. 웹 사이트의 핵심 기능보다 있는지도 티 안나는 미묘한 기능에 더 많은 코드가 요구될때, 여러 번 구현을 해야 할지 말지 고민 하였습니다. 
하지만 저는 예를 들면 "디테일 페이지로 이동했다가 다시 카테고리 페이지로 돌아가면, 전에 지정해둔 '정렬 기준', '페이지당 표시할 게시물 수', '페이네이션' 등 모든 상태를 기억하며 다시 되돌아가는것" 과 같은 작업들을 결국 구현 하였습니다.
그래서 그런지 솔직히 코드는 많이 복잡해졌지만, 이로인해 흔한 투두리스트 같은 사이트가 아니라 좋은 퀄리티의 사이트를 만들기를 원했습니다.

- 고쳐야 하거나 개선이 필요한 점 : 클린코드로 바꾸기, 알아보기 쉬운 영어주석, 카드를 사용한 실시간 페이기능, JWT-token (JWT-token에 대해 더 공부할 필요가 있음)
- 로그인 필수 ? : 반드시 필요하진 않음 (그러나 회원가입, 로그인 기능은 있음)
- 프로젝트 이름 이유 : 제가 이 사이트를 "stillsteal"이라고 이름을 지은 이유는, "여전히" 라는 의미의 "still"과, 우리가 가성비 좋은 제품들을 볼 때마다, 영어로 "that's steal!" 이라고 말하곤 하는데 그것의 "steal"을 합쳐서 
항상 싸다는 것을 강조하기위해 "stillsteal"이라 이름을 짓게 되었습니다.

- 주석 언어 : 영어
- 만든 기간 : 2022년 11월 4일 ~ 11월 15일
- 디버깅 기간 : 2022년 11월 16일 ~ 11월 18일 (클린코드, 오류 점검, 커스텀 훅, 주석)
- 처음 깃허브 올린날 : 2022년 11월 18일
- 배포한 날 : 2022년 11월 22일
- 배포 도구 : Netlify(프론트엔드), Pythonanywhere(백엔드)

# Functions
- 반응형 웹 사이트
- 로그인, 로그아웃, 회원 가입 (로그인없이 장바구니 사용가능)
- JWT를 사용하여 토큰을 갱신
- 네비게이션 바, 네비게이션 사이드 바
- 카트에 추가, 제거 (로그인 -> 백엔드 서버 / 비로그인 -> 로컬 스토리지)
- 검색
- 과거 검색기록(로컬 스토리지)과 삭제
- 상품 디테일, 체크아웃 메뉴, 카트 메뉴 안 에서 카트보기
- 페이지네이션
- 페이지 당 표시 할 포스트 수
- 아래 1, 2, 3 목록들에 따라 동시에 정렬 되도록
- 1 카테고리 별 정렬
- 2 가격 낮은 순, 가격 높은 순, 이름 오름차 순, 이름 내림차 순, 평점 별로 정렬
- 3 특정 가격 이하만 정렬
- 상품 디테일
- 체크아웃 (페이기능은 아직 없음)
- 이미지 애니메이션 및 디자인 (Home-product, AboutUs, sidebar 안에)
- 이미지 스프라이트 처리(AboutUs)
- 데이터 발견 할때까지 로딩 스피너 (데이터 없어도)

# 샘플 사진

- 상품
![products](https://user-images.githubusercontent.com/106279616/202816996-f3fbcef0-a825-4caf-9ed4-2f23246af5af.jpg)

- 상품 디테일
![productsDetail](https://user-images.githubusercontent.com/106279616/202817066-06a0eb33-4c0f-48b6-8a51-4785cfc3276b.jpg)

- 카트
![Cart](https://user-images.githubusercontent.com/106279616/202817073-01c09c47-7e73-436d-a6e2-cefcea5af410.jpg)

- 백엔드 Django admin, API, MYSQL

![장고 어드민](https://user-images.githubusercontent.com/106279616/202817473-196059a0-9989-4470-89cc-8b7e1db7c439.jpg)

![장고어드민, restframework, mysql](https://user-images.githubusercontent.com/106279616/202817483-ed6cde7d-e580-4e51-bceb-3360eb941d9c.jpg)


# 샘플 비디오
모든 페이지의 동영상 퀄리티가 나빠 보이지만, 실제 모습은 위의 사진들과 같습니다,
그리고 또한 비디오 레코더가 켜질 때마다 버퍼링과 끈김현상이 자주 발생하기 때문에 버퍼링과 끈김 현상은 부디 신경쓰지 마시고,
기능에만 신경 써주시기 바랍니다.

<h3> 1. 카테고리 별로 정렬, 페이지네이션: </h3>
<video src="https://user-images.githubusercontent.com/106279616/203090869-de93ff39-b4e7-4a51-a479-5baded54638d.mp4"></video>

<h3> 2. 가격별, 이름별, 평점별 정렬 및 가격 제한 아래로 정렬: </h3>
<video src="https://user-images.githubusercontent.com/106279616/203091737-eb973947-a08d-481b-b28a-c23f714a63c5.mp4"></video>

<h3> 3. 검색, 과거 검색기록: </h3>
<video src="https://user-images.githubusercontent.com/106279616/203092189-8ffa67d9-c679-4923-b394-2ebfee7545b5.mp4"></video>

<h3> 4. 로그인 시 카트목록 및 재 로그인시 카트목록 재 소환: </h3>
<video src="https://user-images.githubusercontent.com/106279616/203092673-ad37e5ef-29c1-4e80-b6de-21fbb021b325.mp4"></video>

<h3> 5. 로그인 없이 카트목록, 체크아웃: </h3>
<video src="https://user-images.githubusercontent.com/106279616/203092735-60519df0-070f-44be-960a-fb977508b317.mp4"></video>

<h3> 6. 반응형 웹 사이트: </h3>
<video src="https://user-images.githubusercontent.com/106279616/203093064-d76e9253-0e54-4650-b1d6-9c87c563aa78.mp4"></video>


