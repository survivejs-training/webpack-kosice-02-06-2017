import demoText from './demo.txt';

export default () => {
  const element = document.createElement('div');

  element.innerHTML = demoText;

  element.onclick = () => {
    import('./lazy').then((lazy) => {
      element.textContent = lazy.default;
    }).catch((err) => {
      console.error(err);
    });
  };

  return element;
};
