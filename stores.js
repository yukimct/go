/*
  스토어 주소를 **여기 한 곳에만** 적습니다.

  왜 따로 빼나 — 앱에는 `https://go.koinoroom.com/get` 하나만 박혀 있습니다.
  스토어 주소가 바뀌거나(iOS 앱 id가 심사 뒤에야 나옵니다) 생겨도 **앱을 다시
  올릴 필요가 없어야** 하기 때문입니다. 이 파일만 고치면 이미 나간 공유 링크까지
  전부 새 주소를 씁니다.

  ⚠️ **iOS는 심사를 통과해야 앱 id(숫자)가 나옵니다.** 그전까지는 빈 문자열로
  두세요 — 페이지가 "곧 나와요"로 바꿔 보여 줍니다. 없는 주소를 적어 두면
  App Store가 "찾을 수 없는 페이지"를 띄우고, 그건 앱이 없는 것보다 나쁩니다.
*/
window.DOGPUZZLE_STORES = {
  android: "https://play.google.com/store/apps/details?id=com.yeonguk.DogPuzzle",
  // 예: "https://apps.apple.com/kr/app/dogpuzzle/id1234567890"
  ios: "",
};
