# chart-lib
외부 라이브러리 모듈화
- 이유 : vuejs 관련 라이브러리가 없을 경우 일반 라이브러리를 결합하여야 함
- 종류 : 차트, 데이트 피커, 테이블, 스피너 

ref) state of js (js 사용 통계 사이트

진행과정
1. 차트 라이브러리 NPM 으로 설치 (npm i chart.js --save)
2. 설치한 라이브러리를 App.vue에 import
3. mounted() 에서 차트를 그림.
4. 차트를 컴포넌트화 
5. 컴포넌트의 플러그인화
6. 캄포넌트 통신을 이용한 차트 컴포넌트 기능결합

### ref
html
<div id="app"></div>
일반적인 js 접근방법 : document.querySelector('#app'); || document.getElementById('app');
jQuery : $('#app');

vue.js : this.$refs.app (<div ref="app"></div> 으로 표현해야한다.)
장점 : 컴포넌트 기반으로 개발하기에 적합하다. 

### 플러그인
컴포넌트 전체에서 사용하기 위함. (install 속성함수를 정의해야함.) 플러그인으로 모듈화
기본적으로 $_ 를 접두어로 사용한다. (ex : Vue.prototype.$_Chart this.$_Chart)
적용하려면 Vue.use로 사용

## Project setup
```
npm install
npm i chart.js --save
```

### Compiles and hot-reloads for development
```
cd chart-lib
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
