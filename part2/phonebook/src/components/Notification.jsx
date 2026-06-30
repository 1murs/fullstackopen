const Notification = ({ message }) => {
  if (message == null) {
    return null;
  }

  return <div className="infoAdd">{message}</div>;
};

export default Notification;
