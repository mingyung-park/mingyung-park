import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `# PARK MIN GYUNG

<div align=center> 
  <a href="mailto:m11ngyung3@gmail.com">
    <img src="https://img.shields.io/badge/m11ngyung3@gmail.com-EA4335?&logo=Gmail&logoColor=white&link=m11ngyung3@gmail.com"/>
  </a>
  <a href="https://he-kate1130.tistory.com/">
    <img src="https://img.shields.io/badge/KATE.log-000000?&logo=Tistory&logoColor=white"/>
  </a>
</div> 

## Education
🏫 이화여자대학교 **Computer Science & Engineering(B.S.)**  

CourseWork

    Data structures
    Algorithm
    Machine Learning
    Computer Vision ...

🏫 이화여자대학교 **Scranton Honors Program - Society and Justice(B.A.)**  

CourseWork

    Formal Logics
    Critical Thinking & Discussion
    Academic Writing
    고등 연구 ...

## 📕 Latest Blog Posts
`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }
});

(async () => {
    try {
        // 피드 목록
        const feed = await parser.parseURL('https://he-kate1130.tistory.com/rss');
        
        text += `<ul>`;
        
        // 최신 10개의 글의 제목과 링크를 추가
        const latestPosts = feed.items.slice(0, 10); // 글이 10개 미만일 때도 안전하게 처리
        latestPosts.forEach(({ title, link }, index) => {
            console.log(`${index + 1}번째 게시물: ${title}`);
            text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
        });
        
        text += `</ul>`;
        
        // text_2 추가하기
        text += `
<br/>

## Current Projects

**❗Computer Vision Study**

    - Currently taking CS231N: Convolutional Neural Networks for Visual Recognition.



<br/>

## Recent Projects

**❗Honors Thesis(독립 연구)**

**Enhancing Logical Equivalence of Natural Language to First-Order Logic Translation with Self-Consistency Prompting**  

    Conducted research on translating natural language (NL) into first-order logic (FOL) 
    using Self-Consistency Prompting. 

    Improved translation Logical Equivalence by combining Self-Consistency Prompting 
    with LLM self selection process. 
    The study demonstrated significant performance enhancements compared to Chain of Thought Prompting, 
    evaluated using SentenceBLEU and Logical Equivalence Score.

<br/>

**❗AI 감정 그림일기 서비스**  
***[FairyTairy Repository](https://github.com/mingyung-park/Fairy-Taiary)***  

    일기 속 소중한 순간과 감정을 유화 그림으로 담아내는 AI 그림일기 서비스
    
    Contributed to Capstone design projects with responsibilities including:
    - server setup (AWS EC2, GCP VM, NGINX)
    - database management (AWS S3, RDS)
    - AI model serving (Flask)
    - API development (Django Rest Framework)
    - Contributing with React Native, Next Js
    - GitActions and Vercel for deployment

<br/>

**❗Machine Learning**  
***[JARVIS Repository](https://github.com/ZERO-black/2023-2ML-Team-JARVIS)***  

    Website Fingerprinting Attack on Tor Network 
    using both closed-world and open-world packet data.

<br/>

---

## 💪 Platforms & Languages

![CPP](https://img.shields.io/badge/C++-00599C.svg?&logo=c%2B%2B&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB.svg?&logo=Python&logoColor=white)
![Java](https://img.shields.io/badge/Java-007396.svg?&logo=OpenJDK&logoColor=white)

![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?&logo=MySQL&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688.svg?&logo=FastAPI&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20.svg?&logo=Django&logoColor=white)

`;

        // README.md 파일 생성
        writeFileSync('README.md', text, 'utf8');
        console.log('업데이트 완료');
    } catch (error) {
        console.error('오류 발생:', error.message);
    }
})();
