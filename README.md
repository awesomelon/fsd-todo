# Feature-Sliced Design (FSD) Todo App 예제

## 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [Feature-Sliced Design (FSD) 아키텍처](#feature-sliced-design-fsd-아키텍처)
3. [프로젝트 구조](#프로젝트-구조)
4. [각 슬라이스 설명](#각-슬라이스-설명)
5. [기술 스택](#기술-스택)
6. [설치 및 실행](#설치-및-실행)
7. [기여 방법](#기여-방법)

## 프로젝트 개요

이 프로젝트는 Feature-Sliced Design (FSD) 아키텍처를 실제 애플리케이션에 적용하는 방법을 보여주는 예제 Todo 앱입니다. FSD의 핵심 원칙과 구조를 따라 개발되어, 확장성 있고 유지보수가 용이한 프론트엔드 애플리케이션을 구축하는 방법을 제시합니다.

## Feature-Sliced Design (FSD) 아키텍처

FSD는 프론트엔드 프로젝트를 구조화하는 아키텍처 방법론으로, 다음과 같은 주요 원칙을 따릅니다:

1. **관심사의 분리**: 기능별로 코드를 구성하여 관심사를 명확히 분리합니다.
2. **레이어 기반 구조**: 애플리케이션을 여러 레이어로 나누어 구성합니다.
3. **단방향 의존성**: 상위 레이어는 하위 레이어에 의존할 수 있지만, 그 반대는 불가능합니다.
4. **Public API**: 각 슬라이스는 명확한 Public API를 제공합니다.

## 프로젝트 구조

```
src/
├── app/
│   ├── providers/
│   └── index.tsx
├── pages/
│   └── MainPage/
├── widgets/
│   └── TodoWidget/
├── features/
│   ├── addTodo/
│   ├── toggleTodo/
│   └── deleteTodo/
├── entities/
│   └── todo/
└── shared/
    ├── api/
    ├── lib/
    └── ui/
```

## 각 슬라이스 설명

### app
전역 프로바이더, 라우팅 설정 등 애플리케이션의 전체적인 설정을 담당합니다.

### pages
각 페이지를 대표하는 컴포넌트들이 위치합니다. 이 프로젝트에서는 `MainPage`가 유일한 페이지입니다.

### widgets
여러 기능(feature)을 조합하여 만든 큰 단위의 UI 블록입니다. `TodoWidget`은 할 일 목록과 관련된 모든 기능을 포함합니다.

### features
핵심 비즈니스 로직을 담당하는 기능 단위입니다. 각 기능은 독립적으로 동작하며, 자체적인 UI 컴포넌트를 가질 수 있습니다.
- `addTodo`: 새로운 할 일을 추가하는 기능
- `toggleTodo`: 할 일의 완료 상태를 토글하는 기능
- `deleteTodo`: 할 일을 삭제하는 기능

### entities
비즈니스 엔티티를 정의합니다. 이 프로젝트에서는 `todo` 엔티티가 정의되어 있습니다.

### shared
여러 슬라이스에서 공통으로 사용되는 유틸리티, UI 컴포넌트, API 클라이언트 등이 위치합니다.

## 기술 스택

- **Frontend**: React, TypeScript
- **상태 관리**: Zustand
- **스타일링**: Emotion
- **빌드 도구**: Vite

## 설치 및 실행

1. 저장소 클론:
   ```
   git clone https://github.com/your-username/fsd-todo-app.git
   cd fsd-todo-app
   ```

2. 의존성 설치:
   ```
   npm install
   ```

3. 개발 서버 실행:
   ```
   npm run dev
   ```

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`).
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`).
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`).
5. Pull Request를 생성합니다.

FSD 아키텍처의 원칙을 준수하면서 새로운 기능을 추가하거나 기존 코드를 개선하는 것을 환영합니다. 특히 각 슬라이스의 역할과 책임을 명확히 유지하는 것에 주의를 기울여주세요.