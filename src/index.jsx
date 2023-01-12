import ReactDOM from 'react-dom/client';

import App from '../src/components/app/App';

import './index.scss';

// fetch('https://api.github.com/users/tee')
//   .then((res) => res.json())
//   .then((user) => console.log(user));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
