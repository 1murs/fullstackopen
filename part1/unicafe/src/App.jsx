import { useState } from "react";

const Feedback = () => <h1>give feedback</h1>;
const StatisticLine = ({ text, result }) => (
  <tr>
    <td>{text} </td>
    <td>{result} </td>
  </tr>
);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Statistic = ({ good, neutral, bad }) => {
  const totalPoint = good + neutral + bad;

  if (totalPoint === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  const TotalAverageFeedback = () => {
    return (good - bad) / totalPoint;
  };
  const PositiveFeedback = () => {
    return (100 / totalPoint) * good;
  };

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" result={good} />
          <StatisticLine text="neutral" result={neutral} />
          <StatisticLine text="bad" result={bad} />
          <StatisticLine text="all" result={totalPoint} />
          <StatisticLine text="average" result={TotalAverageFeedback()} />
          <StatisticLine text="positive" result={PositiveFeedback() + " %"} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const setToNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const setToBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <Feedback />
      <Button onClick={setToGood} text="good" />
      <Button onClick={setToNeutral} text="neutral" />
      <Button onClick={setToBad} text="bad" />
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
