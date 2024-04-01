---
id: smartcontract
title: 스마트 컨트랙트
---

스마트 컨트랙트는 자체 스토리지가 있는 [계정의 상태](./state.md)에 저장된 **실행 가능한 코드** 조각이며, 계정 이름으로 **트랜잭션을 수행합니다**.

이는 Javascript 또는 Rust로 작성된 다음 컴파일되어 계정에 배포되므로 모든 사람이 공용 메서드를 통해 상호 작용할 수 있습니다.

---

## 스마트 컨트랙트가 중요한 이유
스마트 컨트랙트를 통해 **완전히 탈중앙화된 애플리케이션**을 만들 수 있습니다.

실제로 스마트 컨트랙트를 통해 다음과 같은 수많은 [멋진 앱](https://awesomenear.com)을 만들 수 있었습니다.
- 사용자가 제안을 만들고 투표하는 분산형 자율 조직(DAO).
- 사용자가 직접 디지털 예술 작품을 만들고 상업화하는 아트 마켓플레이스.
- 사용자가 다양한 통화를 거래할 수 있는 탈중앙화 거래소.

---

## NEAR에서 컨트랙트 개발하기
개발자는 [Javascript](../../../sdk/js/js-sdk.md) 또는 [Rust](../../../sdk/rust/rs-sdk.md)를 사용하여 NEAR에서 스마트 컨트랙트를 작성할 수 있습니다.

선택한 언어와 상관없이 NEAR SDK는 컨트랙트를 WebAssembly로 컴파일하여 NEAR 플랫폼에서 배포하고 실행할 수 있도록 도와줍니다.

:::tip [**빠른 시작 가이드**](../../../2.develop/quickstart.md)를 통해 NEAR에서 컨트랙트를 구축하는 것이 얼마나 간단한지 확인하세요. 몇 초 만에 첫 번째 dApp을 가동할 수 있습니다. :::

---

## NEAR 컨트랙트의 장점

### 1. 간단한 빌딩
우리 고유의  [Javascript SDK](../../../sdk/js/js-sdk.md)와 [방대한 자료](../../../2.develop/welcome.md) 덕분입니다.

### 2. 간단한 유지보수
컨트랙트의 코드가 [스토리지](state.md)와 분리되어 있기 때문에 [잠기지 않은](./access-keys.md#locked-accounts) 계정의 컨트랙트를 **업데이트**할 수 있습니다.

### 3. 무료로 호출 가능한 일부 메서드
읽기 작업만 수행하는 공용 메서드는 **무료로 호출**할 수 있습니다 .
