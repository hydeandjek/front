import React from 'react';
import './BoardList.scss';

const BoardList = ({ name, title, src, url, date, content, count }) => {

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


  return (
    <div className='boardContent'>
      <a href={url}>
        <img src={src} />
        <p>
          {truncateTitle(title, 9)}
          <span>댓글 {count}</span>
        </p>
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
