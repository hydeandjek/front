import React from 'react';
import { KAKAO_AUTH_URL } from '../../config/kakao-config';
import { NAVER_AUTH_URL } from '../../config/naver-config';
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
import styles from './Login.module.scss';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoggedin, setLoggedin] = React.useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
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
                        for='exampleEmail'
                        className='mr-sm-2'
                      >
                        이메일
                      </Label>
                      <Input
                        type='email'
                        name='email'
                        id='exampleEmail'
                        placeholder='이메일 주소를 입력하세요'
                        onChange={(ev) => setUsername(ev.currentTarget.value)}
                      />
                    </FormGroup>
                    <FormGroup className='pb-2 mr-sm-2 mb-sm-0'>
                      <Label
                        for='examplePassword'
                        className='mr-sm-2'
                      >
                        비밀번호
                      </Label>
                      <Input
                        type='password'
                        name='password'
                        id='examplePassword'
                        placeholder='비밀번호를 입력하세요'
                        onChange={(ev) => setPassword(ev.currentTarget.value)}
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
                              src={require('../../assets/img/kakao_login_medium_wide.png')}
                              alt='카카오 로그인'
                            />
                          </a>
                        </Col>
                        <Col>
                          <a href={NAVER_AUTH_URL}>
                            <img
                              style={{ width: '100%' }}
                              src={require('../../assets/img/naver_login.png')}
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
