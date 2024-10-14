<!-- @format -->

# 졸업 논문
## 클라우드 전자칠판_saas
졸업 논문으로 클라우드의 전자 칠판의 개발과 배포를 통해 클라우드 공동 판서의 인프라에 대해서 연구 하기 위한 프로젝트 입니다.
아키텍쳐 구조는 google Docs, JamBoard를 벤치마킹 하였습니다.
공동 문서 작업은 pdf를 옮겨 가면서 통신하면 pdf를 교환하는 과정에서 여러 매우 비효율적이기 때문에 pdf를 직접 교환하는 방법을 사용하지 않았습니다.
공유 판서의 권한이 있는 사람들끼리만 특정 페이지를 제공한후에 통신을 하는 구조를 가지게 할것입니다.
특정 url은 해시값을 생성하고 서버에서 검증하는 형식으로 각 유저의 권한을 확인하는 형식으로 접근이 가능하게 합니다.
###  10.11
지우개를 구현 하였습니다.

<img src="https://private-user-images.githubusercontent.com/83738337/375760222-677d66db-a89e-4b03-86c2-79efbaf31dcf.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjg5MDYxNTksIm5iZiI6MTcyODkwNTg1OSwicGF0aCI6Ii84MzczODMzNy8zNzU3NjAyMjItNjc3ZDY2ZGItYTg5ZS00YjAzLTg2YzItNzllZmJhZjMxZGNmLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAxNFQxMTM3MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MTM4ZDUzODhkYzJjYmFkODg1Yjg3NzdhZTBjY2I2ZjAwOWYyZDcwNzlhZjM5NTZhZGUwZDE2MTllNzM4MmU1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.rzjEmBRBSdwKhdMr0iYOmoRK6TdyihMX9nil610oG_Y" width="50%" height="50%"/>/>

### 10.14
파일 트리 구조를 레퍼런스에서 가져와서 업데이트를 하였다. ps. React의 FSD 구조를 적용 할까 고민중

<img src="https://private-user-images.githubusercontent.com/83738337/376220231-6f60326f-3b21-4b41-9c41-aa2ddbdf47a2.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjg5MDYzMDIsIm5iZiI6MTcyODkwNjAwMiwicGF0aCI6Ii84MzczODMzNy8zNzYyMjAyMzEtNmY2MDMyNmYtM2IyMS00YjQxLTljNDEtYWEyZGRiZGY0N2EyLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAxNFQxMTQwMDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MGI5NjQ3M2ExODBlOGU4MzcwZmEyZjFiMWNiOWQ1YTc4NDBkNjc3NTk0Yzg0ZjlkMWY0NzhjM2JiMzkxMWFmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.yklcUX9-e4RoEP9Fx4vLMFLXJJD6lUAYYyqDKBN1tyU" width="50%" height="50%"/>
