import Message from "./message";

export default ({ isValidBrowser }) => (isValidBrowser ? null : <Message text={"not support on your browser sorry"} />);
