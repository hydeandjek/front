import React from 'react';
import './BoardList.scss';
import { getLoginUserInfo } from '../../../utils/AuthContext';

const BoardList = ({ name, title, src, url, date, content, count, flag }) => {
  const {role} = getLoginUserInfo();

  function truncateContent(text, maxWidth) {
    const maxCharactersPerLine = Math.floor(maxWidth / 4);
    const maxLines = 5;
  
    let formattedText = '';
    let currentLine = 1;
  
    for (let i = 0; i < text.length; i++) {
      formattedText += text[i];
  
      // 한 줄에 최대 글자 수에 도달하면 다음 줄로 넘어감
      if (formattedText.length % maxCharactersPerLine === 0) {
        formattedText += '\n';
        currentLine++;
      }
  
      // 넓이를 초과하는 경우 다음 줄로 넘어감
      if (formattedText.length > maxWidth) {
        formattedText = formattedText.slice(0, formattedText.lastIndexOf('\n'));
        break;
      }
    }
  
    // 5번째 줄의 내용에 "..."을 추가하고 그 뒤의 내용을 제거
    const lines = formattedText.split('\n');
    if (lines.length >= maxLines) {
      const lastLineIndex = maxLines - 1;
      const lastLine = lines[lastLineIndex];
      const truncatedLine = lastLine.slice(0, maxCharactersPerLine - 3) + '...';
      lines[lastLineIndex] = truncatedLine;
      lines.splice(lastLineIndex + 1); // 마지막 줄 이후의 내용 제거
    }
  
    return lines.join('\n');
  }

  function truncateTitle(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "..";
    } else {
      return str;
    }
  }

  const handleRedirect = () => {
    if (role === "ADMIN") {
      window.location.href = '/board/donation/approval/' + url;
    } else {
      window.location.href = '/board/donation/' + url;
    }
  };

  let flagImg;
  
  if (flag === 'APPROVE') {
    flagImg = 'https://cdn.discordapp.com/attachments/1179983459821813860/1192271640348864672/image0.png?ex=65a8787e&is=6596037e&hm=446bd20489c766f0c90373ddc57ca3527c7200f6aaa49f556a720518885f3a1c&';
  } else if (flag === 'REJECT') {
    flagImg = 'https://cdn.discordapp.com/attachments/1179983459821813860/1192271753976741948/image2.png?ex=65a87899&is=65960399&hm=26cfe19da86b27587f14bb1382f93002b7012ea90568f039d76134a7f37d16b2&';
  } else if (flag === 'HOLD') {
    flagImg = 'https://cdn.discordapp.com/attachments/1179983459821813860/1192271676386324480/image1.png?ex=65a87886&is=65960386&hm=c7012c2b8c72f7725a2d53b5f02088cec42d22333dfd2d2da60a971917e121c2&';
  }

  return (
    <div className='boardContent'>
      <a href={'/board/donation/' + url} onClick={handleRedirect}>
        <img src={src} className='boardContentImg'/>
          {flag && (
          <p style={{ paddingLeft: '7px' }}>
            <p>
              <img src={flagImg} className='flagImage'/>
              {truncateTitle(title, 10)}
            </p>
            <span>댓글 {count}</span>
          </p>
          )}
          {!flag && (
          <p>
            <p>
              {truncateTitle(title, 12)}
            </p>
            <span>댓글 {count}</span>
        </p>
          )}
        <p>{truncateContent(content, 250)}</p>
        <p>
          <span>{name}</span>
          <span>{date}</span>
        </p>
      </a>
    </div>
  );
};

export default BoardList;
