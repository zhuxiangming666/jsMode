import React, { memo } from 'react';
const getSingle = function (fn) {
  let result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  };
};

const createSingleIframe = getSingle(function () {
  var iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  return iframe;
});

function SingleMode() {
  const handleClick = function () {
    let loginLayer = createSingleIframe();
    loginLayer.src =
      'http://localhost:32000/zh_CN/NewProjectConfig/2100/kkk888';
  };
  return (
    <div>
      <button onClick={handleClick}>单例创建</button>
    </div>
  );
}

export default memo(SingleMode);
