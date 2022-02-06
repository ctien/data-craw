// const str = "65 6288 4457</sp";

// const NUMBERPATTERN = /\d+/g;

// console.log(str.match(NUMBERPATTERN).join(""));
const text = `="VGHMXd" href="https://maps.google.com/maps?um=1&amp;ie=UTF-8&amp;fb=1&amp;gl=vn&amp;sa=X&amp;geocode=Kd00LaQLFNoxMWQLZ3-ucbyt&amp;daddr=2+Chencharu+Link,+Aqua+Nautic+Specialist,+Singapore+768148&amp;ved=2ahUKEwiG0NXanej1AhU8TGwGHdkJBAgQlDt6BAgAEAM"><div class="LpaDrb l7d08" style="width:24px;height:24px"><img class="h1hFNe" alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="max-width:24px;max-height:24px" id="dimg_3" data-deferred="1"></div><div class="BNeawe ji5jpf uEec3 AP7Wnd">Ch&#7881; &#273;&#432;&#7901;ng</div></a><a class="VGHMXd" href="/url?q=http://www.aqnautic.com/&amp;sa=U&amp;ved=2ahUKEwiG0NXanej1AhU8TGwGHdkJBAgQgU96BAgAEAQ&amp;usg=AOvVaw3hp7MzMbYrDgersk14f_Cp"><div class="LpaDrb l7d08" style="width:24px;height:24px"><img class="h1hFNe" alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="max-width:24px;max-height:24px" id="dimg_5" data-deferred="1"></div><div class="BNeawe ji5jpf uEec3 AP7Wnd">Trang web</div></a></div></div><div class="vbShOe kCrYT"><div class="AVsepf"><div class="BNeawe s3v9rd AP7Wnd"><span><span class="BNeawe s3v9rd AP7Wnd">&#272;&#7883;a ch&#7881;</span></span>: <span><span class="BNeawe tAd8D AP7Wnd">2 Chencharu Link, Singapore 768148</span></span></div></div><div class="AVsepf"><div class="BNeawe s3v9rd AP7Wnd"><span><span `;

const WEBSITE_TEXT = `Trang web`;

const position = text.indexOf(WEBSITE_TEXT);

const websiteDraft = text.slice(position - 1000, position);
const website = websiteDraft
  .slice(websiteDraft.indexOf("http"))
  .split("&amp;")[0];

console.log(website);
