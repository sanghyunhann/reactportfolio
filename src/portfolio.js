const header = {
  // all the properties are optional - can be left empty or deleted
  githomepage: 'http://localhost:3000/sanghyunhann',
  title: 'HSH',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'SangHyun Han',
  role: 'Back End Engineer',
  description:
    '안녕하세요, 저는 한상현입니다. 😀\n새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백 및 리뷰를 좋아합니다. \n현재 백엔드 개발자로 구직중입니다. 맡은 일에 자부심을 갖고 도전을 경험할 수 있는 회사에서 일하고 싶습니다.',
  resume: `${process.env.PUBLIC_URL}/resume.pdf`,
  social: {
    linkedin: 'https://vintage-quill-3fd.notion.site/5315385e4c71412b8d7ab9b7430cb745?pvs=4',
    github: 'https://github.com/sanghyunhann',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Easy Pick',
    description:
      '평소 아침에는 무엇을 입을지, 점심에는 무엇을 먹을지, 저녁에는 무엇을 볼지 고민하게 되는데, 이러한 고민을 해결해주는 웹 플랫폼 입니다.',
    stack: ['JAVA', 'SPRING BOOT', 'PYTHON', 'FLASK', 'HTML5', 'CSS3', 'JAVASCRIPT', 'JSP', 'MYSQL', 'MONGODB', 'VS CODE', 'GIT-HUB'],
    sourceCode: 'https://github.com/sanghyunhann/pirates_server',
  },
  {
    name: 'OEMarket',
    description:
      '오이마켓은 당근마켓을 벤치마킹 하여 중고 거래 서비스를 제공하는 플랫폼 입니다.',
    stack: ['JAVA', 'SPRING', 'HTML5', 'CSS3', 'JAVASCRIPT', 'JSP', 'XML', 'ORACLE SQL', 'APAACHE TOMCAT', 'ECLIPSE', 'GIT-HUB'],
    sourceCode: 'https://github.com/sanghyunhann/oeMarket',
  },
  {
    name: '은행고객 이탈 원인 및 고객 이탈 예측',
    description:
      '머신러닝을 이용한 이탈 고객 예측 프로젝트',
    stack: ['PYTHON', 'NUMPY', 'PANDAS', 'SKLEARN', 'MATPLOTLIB', 'SEABORN', 'VS CODE', 'GIT-HUB'],
    sourceCode: 'https://github.com/sanghyunhann/zb.MLproject',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JAVA',
  'PYTHON',
  'HTML5',
  'CSS3',
  'JAVASCRIPT',
  'JQUERY',
  'ORACL SQL',
  'MYSQL',
  'SPRING BOOT',
  'FLASK',
  'GITHUB',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gks7654@naver.com',
}

export { header, about, projects, skills, contact }
