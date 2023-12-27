import React, { useContext } from 'react';
import { KAKAO_AUTH_URL } from '../../../config/kakao-config';
import { NAVER_AUTH_URL } from '../../../config/naver-config';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import styles from './sass/Login.module.scss';
import { useNavigate } from 'react-router';
import { API_BASE_URL as BASE, USER } from '../../../config/host-config';
import AuthContext from '../../../utils/AuthContext';
import ChatContext from '../../../utils/ChatContext';

const Login = () => {
  const redirection = useNavigate();

  const API_BASE_URL = BASE + USER;
  const { isLoggedIn, onLogin } = useContext(AuthContext);
  const { setIsOpen: setIsOpenChat } = useContext(ChatContext);

  const fetchLogin = async () => {
    // 이메일, 비밀번호 입력 태그 얻어오기
    const $email = document.getElementById('email');
    const $password = document.getElementById('password');

    // await는 async로 선언된 함수에서만 사용이 가능합니다.
    // await는 프로미스 객체가 처리될 때까지 기다립니다.
    // 프로미스 객체의 반환값을 바로 활용할 수 있도록 도와줍니다.
    // then()을 활용하는 것보다 가독성이 좋고, 쓰기도 쉽습니다.
    const res = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: $email.value,
        password: $password.value,
      }),
    });

    if (res.status === 400) {
      const text = await res.text();
      alert(text);
      return;
    }

    const data = await res.json();
    console.log(data);

    const { token, userName, email, address, role, userId } = data; // 서버에서 온 json 읽기

    // Context Api
    onLogin(token, userName, address, role, userId);
    setIsOpenChat(false);

    // 홈으로 리다이렉트
    redirection('/');
  };

  const loginHandler = (e) => {
    e.preventDefault();

    // 서버에 로그인 요청 전송
    fetchLogin();
  };

  const onClickJoin = () => {
    redirection('/user/join');
  };

  return (
    <>
      {true && (
        <Container className={styles['login-container']}>
          <Row>
            <Col>
              <Card className={styles['login-card']}>
                <CardBody className={styles['login-cardbody']}>
                  <form
                    noValidate
                    onSubmit={loginHandler}
                  >
                    <FormGroup className='pb-2 mr-sm-2 mb-sm-0'>
                      <Label
                        for='email'
                        className='mr-sm-2'
                      >
                        이메일
                      </Label>
                      <Input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='이메일 주소를 입력하세요'
                      />
                    </FormGroup>
                    <FormGroup className='pb-2 mr-sm-2 mb-sm-0'>
                      <Label
                        for='password'
                        className='mr-sm-2'
                      >
                        비밀번호
                      </Label>
                      <Input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='비밀번호를 입력하세요'
                      />
                    </FormGroup>

                    <Container>
                      <Row className={styles['login-rows']}>
                        <Col>
                          <Button
                            type='submit'
                            className={styles['login-button']}
                            style={{ width: '100%' }}
                          >
                            로그인
                          </Button>
                        </Col>
                      </Row>
                      <Row className={styles['login-rows']}>
                        <Col>
                          <Button
                            type='submit'
                            color='secondary'
                            style={{ width: '100%' }}
                            onClick={onClickJoin}
                          >
                            회원가입
                          </Button>
                        </Col>
                      </Row>
                      <Row className={styles['login-rows']}>
                        <Col>
                          <a href={KAKAO_AUTH_URL}>
                            <img
                              style={{ width: '100%' }}
                              src={require('../../../assets/img/kakao_login_medium_wide.png')}
                              alt='카카오 로그인'
                            />
                          </a>
                        </Col>
                        <Col>
                          <a href={NAVER_AUTH_URL}>
                            <img
                              style={{ width: '100%' }}
                              src={require('../../../assets/img/naver_login.png')}
                              alt='카카오 로그인'
                            />
                          </a>
                        </Col>
                      </Row>
                      <Row className={styles['login-rows']}></Row>
                    </Container>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
      {/* <CustomSnackBar open={isLoggedIn} /> */}
    </>
  );
};

export default Login;
