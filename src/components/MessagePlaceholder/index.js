import './index.css';

const MessagePlaceholder = ({ type }) => {
  let msg = '';
  switch (type) {
    case 'no-data':
      msg = 'Ooops, there are no movies / tv shows that matched your query.';
      break;
    case 'error':
      msg = 'Ooops, something went wrong please try again!!!!';
      break;
    default:
      msg = 'Oops, Unknown error occurred';
      break;
  }
  return <div className="error">{msg}</div>;
};

export default MessagePlaceholder;
