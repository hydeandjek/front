/*
    개발 과정에서 API_KEY, DB관련 정보 등 외부로 노출되면 안되는 값들이 있는데,
    .env 파일을 통해 내부적으로만 사용할 수 있게 설정할 수 있다. (.env -> 환경변수 설정을 위한 파일)
    .env 파일 내의 값을 읽어올 때는 [process.env.지정한 이름] 을 통해 값을 불러올 수 있다.

    React 환경에서 .env 내의 데이터를 읽어올 때는 반드시 REACT_APP_를 붙여 주셔야 합니다.
*/

const CLIENT_ID = process.env.REACT_APP_NAVER_REST_API_KEY;
const REDIRECT_URL = process.env.REACT_APP_NAVER_REDIRECT_URL;

console.log(CLIENT_ID, REDIRECT_URL);

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code&state=test`;
