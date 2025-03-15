
document.addEventListener("DOMContentLoaded",()=>{
  const div = document.createElement("div");

  // 예제로 id를 추가했어요.
  div.id = "elem-added-by-script"

  div.textContent = "Hallo from script!"

  document.body.appendChild(div)
});
