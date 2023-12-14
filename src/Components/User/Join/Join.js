import React, { useState } from 'react';
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
import styles from './sass/Join.module.scss';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL as BASE, USER } from '../../../config/host-config';

const { daum } = window;

const Join = () => {
  const redirection = useNavigate();
  const API_BASE_URL = BASE + USER;

  // 상태변수로 회원가입 입력값 관리
  const [userValue, setUserValue] = useState({
    userName: '',
    password: '',
    email: '',
    address: '',
  });

  // 검증 메세지에 대한 상태변수 관리
  const [message, setMessage] = useState({
    userName: '',
    password: '',
    passwordCheck: '',
    email: '',
    address: '',
  });

  // 검증 완료 체크에 대한 상태변수를 관리
  const [correct, setCorrect] = useState({
    userName: undefined,
    password: undefined,
    passwordCheck: undefined,
    email: undefined,
    address: undefined,
  });

  const saveInputState = ({ key, inputValue, msg, flag }) => {
    // 메세지 세팅
    setMessage((prev) => {
      return { ...prev, [key]: msg }; // key 변수의 값을 프로퍼티 이름으로 활용
    });

    // 입력값 검증 상태 세팅
    setCorrect((prev) => {
      return { ...prev, [key]: flag };
    });

    // 입력값 세팅
    inputValue !== 'pass' &&
      setUserValue((prev) => {
        return { ...prev, [key]: inputValue };
      });
  };

  // 이름 입력창 체인지 이벤트 핸들러
  const nameHandler = (e) => {
    const nameRegex = /^[가-힣]{2,5}$/;
    const inputValue = e.target.value;

    // 입력값 검증
    let msg; // 검증 메세지를 저장할 변수
    let flag = false; // 입력값 검증 여부 체크 변수

    if (!inputValue) {
      msg = '유저 이름은 필수입니다.';
    } else if (!nameRegex.test(inputValue)) {
      msg = '2~5글자 사이의 한글로 작성하세요!';
    } else {
      msg = '사용 가능한 이름입니다.';
      flag = true;
    }

    // 객체 프로퍼티에서 세팅하는 변수의 이름과 키값이 동일한 경우에는
    // 콜론 생략이 가능
    saveInputState({
      key: 'userName',
      inputValue,
      msg,
      flag,
    });
  };

  // 이메일 중복 체크 서버 통신 함수
  const fetchDuplicateCheck = (email) => {
    let msg = '',
      flag = false;
    fetch(`${API_BASE_URL}/check?email=${email}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((json) => {
        console.log(json);
        if (json) {
          msg = '이메일이 중복되었습니다.';
        } else {
          msg = '사용 가능한 이메일 입니다.';
          flag = true;
        }

        saveInputState({
          key: 'email',
          inputValue: email,
          msg,
          flag,
        });
      })
      .catch((err) => {
        msg = '서버 통신이 원할하지 않습니다.';
        saveInputState({
          key: 'email',
          inputValue: email,
          msg,
          flag,
        });
      });
  };

  // 이메일 입력창 체인지 이벤트 핸들러
  const emailHandler = (e) => {
    const inputValue = e.target.value;
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    let msg;
    let flag = false;

    if (!inputValue) {
      msg = '이메일은 필수값 입니다';
    } else if (!emailRegex.test(inputValue)) {
      msg = '이메일 형식이 올바르지 않습니다.';
    } else {
      // 이메일 중복 체크
      fetchDuplicateCheck(inputValue);
      return;
    }

    saveInputState({
      key: 'email',
      inputValue,
      msg,
      flag,
    });
  };

  // 패스워드 입력창 체인지 이벤트 핸들러
  const passwordHandler = (e) => {
    // 패스워드가 변경됬다? -> 패스워드 확인란 비우고 시작하자
    setMessage({ ...message, passwordCheck: '' });
    setCorrect({ ...correct, passwordCheck: false });
    document.getElementById('passwordCheck').value = '';

    const inputValue = e.target.value;
    const pwRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;

    let msg = '';
    let flag = false;
    console.log(flag);
    console.log(inputValue);

    if (!inputValue) {
      msg = '비밀번호는 필수입니다.';
    } else if (!pwRegex.test(inputValue)) {
      msg = '8글자 이상의 영문, 숫자, 특수문자를 포함해 주세요.';
    } else {
      msg = '사용 가능한 비밀번호입니다.';
      flag = true;
    }

    saveInputState({
      key: 'password',
      inputValue,
      msg,
      flag,
    });
  };

  // 비밀번호 확인란 체인지 이벤트 핸들러
  const pwCheckHandler = (e) => {
    let msg = '';
    let flag = false;

    if (!e.target.value) {
      msg = '비밀번호 확인란은 필수입니다.';
    } else if (userValue.password !== e.target.value) {
      msg = '패스워드가 일치하지 않습니다.';
    } else {
      msg = '패스워드가 일치합니다.';
      flag = true;
    }

    saveInputState({
      key: 'passwordCheck',
      inputValue: 'pass',
      msg,
      flag,
    });
  };

  // 4개의 입력란이 모두 검증에 통과했는지 여부를 검사
  const isValid = () => {
    for (const key in correct) {
      const flag = correct[key];
      if (!flag) return false;
    }

    return true;
  };

  const joinHandler = (e) => {
    e.preventDefault();

    if (isValid()) {
    } else {
      alert('입력하지 않은 항목을 입력하세요');

      for (const key in correct) {
        const flag = correct[key];
        if (flag === undefined) {
          console.log(flag);
          setCorrect((prev) => {
            const c = {
              ...prev,
            };
            c[key] = false;
            return c;
          });
        }
      }
    }
  };

  const onClickAddress = (e) => {
    new daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        const roadAddr = data.roadAddress; // 도로명 주소 변수
        let extraRoadAddr = ''; // 참고 항목 변수

        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += `(${data.bname})`;
        }
        console.log(roadAddr, extraRoadAddr);
        saveInputState({
          key: 'address',
          inputValue: `${roadAddr} ${extraRoadAddr}`,
          msg: '',
          flag: true,
        });
      },
    }).open();
  };

  // 회원 가입 처리 서버 요청
  const infofetchHandler = async () => {
    console.log('회원가입 핸들러 작동');
    console.log(userValue);
    fetch(API_BASE_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userValue),
    }).then((res) => {
      if (res.status === 200) {
        alert('회원가입에 성공했습니다.');
        // 로그인 페이지로 리다이렉트
        // window.location.href = './login'; 바닐라
        redirection('/user/login');
      } else {
        alert('서버와의 통신이 원활하지 않습니다. 관리자에게 문의하세요.');
      }
    });
  };
  return (
    <Container className={styles['join-container']}>
      <Row>
        <Col>
          <Card className={styles['join-card']}>
            <CardBody className={styles['join-cardbody']}>
              <form
                noValidate
                onSubmit={joinHandler}
              >
                <p>*는 필수 입력 항목입니다.</p>
                <FormGroup className='pb-2 mr-sm-2 mb-sm-0'>
                  <Label
                    for='email'
                    className='mr-sm-2'
                  >
                    *이메일
                  </Label>
                  <Input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='이메일 주소'
                    autoFocus
                    required
                    onChange={emailHandler}
                    invalid={
                      correct.email === undefined ? undefined : !correct.email
                    }
                    valid={correct.email}
                  />
                  {correct.email || <span>{message.email}</span>}
                </FormGroup>
                <FormGroup className='pb-2 mr-sm-2 mb-sm-0'>
                  <Label
                    for='password'
                    className='mr-sm-2'
                  >
                    *비밀번호
                  </Label>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='비밀번호 (8글자 이상의 영문, 숫자, 특수문자를 포함)'
                    required
                    onChange={passwordHandler}
                    invalid={
                      correct.password === undefined
                        ? undefined
                        : !correct.password
                    }
                    valid={correct.password}
                  />
                  {correct.password || <span>{message.password}</span>}
                </FormGroup>
                <FormGroup className='pb-2 mr-sm-2 mb-sm-0'>
                  <Label
                    for='passwordCheck'
                    className='mr-sm-2'
                  >
                    *비밀번호 확인
                  </Label>
                  <Input
                    type='password'
                    id='passwordCheck'
                    placeholder='비밀번호 확인'
                    required
                    onChange={pwCheckHandler}
                    invalid={
                      correct.passwordCheck === undefined
                        ? undefined
                        : !correct.passwordCheck
                    }
                    valid={correct.passwordCheck}
                  />
                  <span>
                    {correct.passwordCheck || (
                      <span>{message.passwordCheck}</span>
                    )}
                  </span>
                </FormGroup>
                <FormGroup className='pb-2 mr-sm-2 mb-sm-0'>
                  <Label
                    for='email'
                    className='mr-sm-2'
                  >
                    *이름
                  </Label>
                  <Input
                    type='name'
                    name='name'
                    id='name'
                    placeholder='이름(2~5글자 사이의 한글)'
                    onChange={nameHandler}
                    invalid={
                      correct.userName === undefined
                        ? undefined
                        : !correct.userName
                    }
                    valid={correct.userName}
                  />
                  <span>
                    {correct.userName || <span>{message.userName}</span>}
                  </span>
                </FormGroup>
                <FormGroup className='pb-2 mr-sm-2 mb-sm-0'>
                  <Label
                    for='address'
                    className='mr-sm-2'
                  >
                    &nbsp;집 주소
                  </Label>
                  <Row>
                    <Col className='col-9'>
                      <Input
                        type='text'
                        name='address'
                        id='address'
                        readOnly
                        value={userValue.address}
                        invalid={
                          correct.address === undefined
                            ? undefined
                            : !correct.address
                        }
                        valid={correct.address}
                      />
                    </Col>
                    <Col className='col-3'>
                      <Button
                        type='button'
                        className={styles['join-button']}
                        onClick={onClickAddress}
                      >
                        주소입력
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>

                <Container>
                  <Row className={styles['join-rows']}>
                    <Col>
                      <Button
                        type='submit'
                        className={styles['join-button']}
                        style={{ width: '100%' }}
                        onClick={infofetchHandler}
                      >
                        회원가입
                      </Button>
                    </Col>
                  </Row>
                </Container>
                <button
                  type='button'
                  className={styles['link-button']}
                  onClick={() => redirection('/user/login')}
                >
                  이미 계정이 있습니까? 로그인 하세요.
                </button>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Join;
