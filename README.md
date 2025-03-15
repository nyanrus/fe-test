# Web-2 FE-template

Vite 프론트 템플릿입니다.
현재는 HTML, CSS, JS/TS 가능합니다.
React 필요하시면 말씀해 주세요.

모르시는 내용 있으시면, chatgpt에 물어봐 주시고, 그래도 이해가 안될 때 물어봐 주세요. 친절하게 답하겠습니다.


## 개발 처음 세팅

윈도우 전제로 적었어요.
다른 운영체제를 사용하신다면, 말씀해 주세요.

1. Node.js의 설치 관리 도구인 Volta를 설치해요

Node.js를 설치합니다.
이미 설치되어 있으면 스킵해 주세요.

이 명령어는, [https://docs.volta.sh/guide/getting-started](https://docs.volta.sh/guide/getting-started) 에서 가지고 왔어요.

```sh
winget install Volta.Volta
```

2. volta로 Node.js를 설치합니다.

```sh
volta install node
```

Node.js가 설치되었습니다.

```sh
node --version
```

을 실행하고,
`v22.14.0`가 출력되는지 확인합니다.
커맨드를 찾을 수 없다고 나오면, 터미널(콘솔 창, cmd 등)을 재시작하고 다시 `node --version`을 실행해 봅니다.

3. pnpm을 설치합니다.

pnpm은 패키지 매니저라는 도구이며, 손쉽게 프로젝트에서 사용할 라이브러리 (범용적인 코드 뭉치)를 다운받을 수 있도록 도와줘요.

3-1. volta가 설치되어 있는 경우

```sh
volta install pnpm
```

을 실행합니다.

3-2. volta가 없는 경우

```sh
npm install pnpm -g
```

을 실행합니다.

4. pnpm으로 이 프로젝트가 사용하는 라이브러리를 다운받아요.

```sh
pnpm install
```

어떤 라이브러리가 설치되는지는, `package.json`를 확인해 주세요.

## 개발 시작하기


```sh
pnpm dev
```

이것으로 Vite의 개발 모드가 실행되어요.
터미널(콘솔창, cmd 등)에 `localhost`로 시작되는 주소가 표시되니, 사용하시는 브라우저 (Chrome, Firefox, Safari 등)으로 접속해 주세요.

[윈도우 터미널](https://namu.wiki/w/Windows%20Terminal) 을 사용하신다면, ctrl을 누르면서 `localhost` 주소를 누르면 평소에 링크를 여는 브라우저로 바로 열려요.

## 알아둘 것

CSS는 HTML에서 `style` 태그로 읽어도 되지만, JS파일에서 `import`해도 페이지에 적용이 되어요.
[https://ko.vite.dev/guide/features.html#disabling-css-injection-into-the-page]

## 확인할 것

개발 모드 실행중에 변경해 보아 주세요.

- index.html에 새로운 아무 내용이 포함된 div를 추가하고, 브라우저에서 그 div가 가진 내용이 추가되었는지 확인해요.
- index.html의 head에, `<script src="src/main.js"></script>`를 추가하여 스크립트를 읽어들여요.

읽어 주셔서 감사합니다. 좋은 하루 보내세요!